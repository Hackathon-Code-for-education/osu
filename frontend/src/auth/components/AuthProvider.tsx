import { PropsWithChildren, useEffect } from 'react';
import { localStorageNames } from '../../main/constants/localStorageNames.ts';
import { AuthActionEnum } from '../enums/AuthActionEnum.ts';
import { useOAuth } from '../hooks/useOAuth.ts';
import { IOAuthProps } from '../interfaces/IOAuthProps.ts';
import { OPENID_CALLBACK_URL } from '../../api/constants/urls.ts';
import { ITokens } from '../interfaces/ITokens.ts';
import { useAppSelector } from '../../core/store/hooks/useAppSelector.ts';
import { AuthSelector } from '../selectors/AuthSelector.ts';
import { useAppDispatch } from '../../core/store/hooks/useAppDispatch.ts';
import { authSlice } from '../slices/authSlice.ts';

interface IAuthProviderProps extends IOAuthProps, PropsWithChildren {}

export const AuthProvider = ({
  children,
  authorizeUrl,
  tokenUrl,
  clientId,
  redirectUri,
  scope,
}: IAuthProviderProps) => {
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector(AuthSelector.getIsAuthenticated);
  const setIsAuthenticated = (value: boolean) => dispatch(authSlice.setIsAuthenticated(value));

  const expires =
    window.localStorage.getItem(localStorageNames.TOKEN) !== null
      ? (JSON.parse(window.localStorage.getItem(localStorageNames.TOKEN) as string) as ITokens).expires
      : new Date().getTime();
  const isAuthRedirect = window.location.pathname === OPENID_CALLBACK_URL;
  const hasExpired = expires > new Date().getTime();

  const authAction = isAuthRedirect
    ? AuthActionEnum.TOKEN
    : isAuthenticated
      ? hasExpired
        ? AuthActionEnum.NONE
        : AuthActionEnum.REFRESH_TOKEN
      : AuthActionEnum.LOGIN;

  const { getAccessToken } = useOAuth({
    authorizeUrl,
    tokenUrl,
    clientId,
    redirectUri,
    scope,
    setIsAuthenticated,
  });

  useEffect(() => {
    if (authAction === AuthActionEnum.LOGIN) {
      // login();
      return;
    }
    if (authAction === AuthActionEnum.TOKEN) {
      getAccessToken();
      return;
    }
    if (authAction === AuthActionEnum.REFRESH_TOKEN) {
      return;
    }
    if (authAction === AuthActionEnum.NONE) {
      return;
    }
  }, []);

  return <>{children}</>;
  // return <>{isAuthenticated ? children : <>loading...</>}</>;
};
