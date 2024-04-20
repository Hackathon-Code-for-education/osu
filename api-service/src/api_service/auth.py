from fastapi.security import OAuth2AuthorizationCodeBearer
from keycloak.keycloak_openid import KeycloakOpenID
from .config import connection_settings
from fastapi import Security, HTTPException, status, Depends
from pydantic import Json
from .schemas import User
import requests
# This is used for fastapi docs authentification
oauth2_scheme = OAuth2AuthorizationCodeBearer(
    authorizationUrl=connection_settings.authorization_url,  # https://sso.example.com/auth/
    tokenUrl=connection_settings.token_url,  # https://sso.example.com/auth/realms/example-realm/protocol/openid-connect/token
)

# This actually does the auth checks
# client_secret_key is not mandatory if the client is public on keycloak
keycloak_openid = KeycloakOpenID(
    server_url=connection_settings.server_url,  # https://sso.example.com/auth/
    client_id=connection_settings.client_id,  # backend-client-id
    realm_name=connection_settings.realm,  # example-realm
    client_secret_key=connection_settings.client_secret,  # your backend client secret
    verify=True
)


async def get_idp_public_key():
    public_key = requests.get("http://keycloak:8080/auth/realms/master", '').json()['public_key']
    # public_key = f'-----BEGIN PUBLIC KEY-----\n{public_key}\n-----END PUBLIC KEY-----'.encode()
    return (
        "-----BEGIN PUBLIC KEY-----\n"
        f"{public_key}"
        "\n-----END PUBLIC KEY-----"
    )


# Get the payload/token from keycloak
async def get_payload(token: str = Security(oauth2_scheme)) -> dict:
    try:
        return keycloak_openid.decode_token(
            token,
            key=await get_idp_public_key(),
            options={
                "verify_signature": True,
                "verify_aud": False,
                "exp": True
            }
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(e),  # "Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )


# Get user infos from the payload
async def get_user_info(payload: dict = Depends(get_payload)) -> User:
    try:
        return User(
            id=payload.get("sub"),
            username=payload.get("preferred_username"),
            email=payload.get("email"),
            first_name=payload.get("given_name"),
            last_name=payload.get("family_name"),
            realm_roles=payload.get("realm_access", {}).get("roles", []),
            client_roles=payload.get("realm_access", {}).get("roles", [])
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e),  # "Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )