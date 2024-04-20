import { StatusCodeEnum } from '../../../libs/StatusCodeEnum.ts';
import { ERROR_MESSAGE } from '../../../libs/errorMessage.ts';
import { ROUTE_AUTH } from '../../core/routes/constants/routePath.ts';

interface IHandleResponseError {
  timestamp?: string;
  status: number;
  statusText?: string;
  error?: string;
  message?: string;
  path?: string;
}

export const handleResponseError = (error: IHandleResponseError | string) => {
  const responseError = typeof error === 'object' ? error : undefined;
  const { pathname } = window.location;

  if (!responseError) {
    return { text: error };
  }
  const { status } = responseError;

  if (status === StatusCodeEnum.CLIENT_ERROR_UNAUTHORIZED) {
    if (pathname !== ROUTE_AUTH) {
      // sessionStorage.setItem(RETURN_URL, pathname + search);
    }
    // store.dispatch(authClearUser());
  } else if (
    status >= StatusCodeEnum.CLIENT_ERROR_BAD_REQUEST &&
    status <= StatusCodeEnum.CLIENT_ERROR_UNAVAILABLE_FOR_LEGAL_REASONS
  ) {
    return {
      ...responseError,
      text: ERROR_MESSAGE.CLIENT_ERROR,
    };
  } else if (status === StatusCodeEnum.SERVER_ERROR_INTERNAL) {
    return {
      ...responseError,
      text: ERROR_MESSAGE.INTERNAL_SERVER_ERROR,
    };
  } else if (status === StatusCodeEnum.SERVER_ERROR_GATEWAY_TIMEOUT) {
    return {
      ...responseError,
      text: ERROR_MESSAGE.GATEWAY_TIMEOUT,
    };
  } else if (
    status > StatusCodeEnum.SERVER_ERROR_INTERNAL &&
    status <= StatusCodeEnum.SERVER_ERROR_NETWORK_AUTH_REQUIRED
  ) {
    return {
      ...responseError,
      text: ERROR_MESSAGE.SERVER_ERROR,
    };
  }

  return {
    ...responseError,
    text: `Ошибка ${status}`,
  };
};
