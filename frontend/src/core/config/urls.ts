export const DEFAULT_URL = 'http://localhost:8080';
const DEFAULT_CLIENT_ID = 'user';
export const OPENID_CALLBACK_URL = '/openid/callback';

export const KEYCLOAK_URL = '/auth/realms/master/protocol/openid-connect';
export const KEYCLOAK_AUTHORIZE_URL = `${KEYCLOAK_URL}/auth`;
export const KEYCLOAK_TOKEN_URL = `${KEYCLOAK_URL}/token`;

export const BASE_URL = process.env.BASE_URL || DEFAULT_URL;
export const REDIRECT_FULL_URL = process.env.REDIRECT_FULL_URL || DEFAULT_URL;
export const REDIRECT_URL = process.env.REDIRECT_URL || OPENID_CALLBACK_URL;
export const CLIENT_ID = process.env.CLIENT_ID || DEFAULT_CLIENT_ID;
