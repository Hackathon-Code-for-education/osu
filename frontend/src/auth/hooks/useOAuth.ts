import { useCallback, useMemo } from 'react';
import { getOAuthConfigForCode, getOAuthConfigForToken } from '../common/getOAuthConfig.ts';
import { IOAuthProps } from '../interfaces/IOAuthProps.ts';
import { ROUTE_MAIN_MENU } from '../../core/routes/constants/routePath.ts';
import { localStorageNames } from '../../main/constants/localStorageNames.ts';
import { ITokenResponse } from '../interfaces/ITokenResponse.ts';
import { ITokens } from '../interfaces/ITokens.ts';
import { generateCodeChallenge, generateCodeVerifier } from '../common/crypt.ts';

interface IUseOAuthProps extends IOAuthProps {
  setIsAuthenticated: (value: boolean) => void;
}

interface IUseOAuthResult {
  login: () => Promise<void>;
  logout: () => void;
  getAccessToken: () => void;
  getRefreshToken: () => Promise<string>;
}

export const useOAuth = ({
  authorizeUrl,
  tokenUrl,
  clientId,
  redirectUri,
  scope,
  setIsAuthenticated,
}: IUseOAuthProps): IUseOAuthResult => {
  const getQuery = () => new URLSearchParams(window.location.search);

  const login = useCallback(async () => {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    const config = getOAuthConfigForCode({ clientId, redirectUri, codeChallenge });

    window.localStorage.setItem(localStorageNames.CODE_VERIFIER, codeVerifier);

    const args = new URLSearchParams(config);

    window.location.assign(authorizeUrl + '?' + args);
  }, [authorizeUrl, clientId, redirectUri, scope]);

  const logout = useCallback(() => {
    window.localStorage.removeItem(localStorageNames.TOKEN);
    setIsAuthenticated(false);
    window.location.assign(ROUTE_MAIN_MENU);
  }, []);

  // TODO: вынести числа, expires непонятен
  const buildTokens = useCallback(
    (data: ITokenResponse): ITokens => ({
      accessToken: data.token_type + ' ' + data.access_token,
      expires: new Date().getTime() + (data.expires_in - 5) * 1000,
      refreshToken: data.refresh_token,
    }),
    [],
  );

  const getAccessToken = () => {
    const authCode = getQuery().get('code');

    if (!authCode) {
      console.log('Что-то пошло не так');
      return;
    }

    const body = new URLSearchParams(getOAuthConfigForToken({ clientId, redirectUri, code: authCode }));

    // TODO: вынести fetch в service скорее всего
    fetch(tokenUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: body,
    })
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw response;
      })
      .then(async response => {
        const data = await response.json();

        console.log('data', data);

        const tokens = buildTokens(data);

        window.localStorage.setItem(localStorageNames.TOKEN, JSON.stringify(tokens));

        setIsAuthenticated(true);
        window.localStorage.removeItem(localStorageNames.CODE_VERIFIER);

        window.location.replace(ROUTE_MAIN_MENU);
      })
      .catch(async error => {
        if (!(error instanceof Response)) {
          console.log(error.message);
          return;
        }

        const headers = error.headers.get('content-type');
        if (headers && headers.includes('application/json')) {
          const data = await error.json();
          console.log(data.hint || data.error_description || data.error || data.message);
          return;
        }

        console.log(error.statusText);
      });
  };

  const refreshPromises: Record<string, Promise<string>> = useMemo(() => ({}), []);

  const getRefreshToken = useCallback(() => {
    const storageTokens = window.localStorage.getItem('auth.tokens') as string;
    const tokens = JSON.parse(storageTokens) as ITokens;

    if (Object.prototype.hasOwnProperty.call(refreshPromises, tokens.refreshToken)) {
      return refreshPromises[tokens.refreshToken];
    }

    refreshPromises[tokens.refreshToken] = fetch(tokenUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        grant_type: 'refresh_token',
        redirect_uri: redirectUri,
        access_type: 'offline',
        refresh_token: tokens.refreshToken,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response;
      })
      .then(async response => {
        const data = await response.json();
        const tokens = buildTokens(data);
        window.localStorage.setItem(localStorageNames.TOKEN, JSON.stringify(tokens));
        setIsAuthenticated(true);
        return tokens.accessToken;
      })
      .catch(error => {
        window.localStorage.removeItem(localStorageNames.TOKEN);
        setIsAuthenticated(false);
        throw error;
      });

    return refreshPromises[tokens.refreshToken];
  }, [buildTokens, clientId, redirectUri, refreshPromises, tokenUrl]);

  return { login, logout, getAccessToken, getRefreshToken };
};
