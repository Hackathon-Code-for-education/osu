import { IAuthState } from '../interfaces/IAuthState.ts';
import { localStorageNames } from '../../main/constants/localStorageNames.ts';

export const initialAuthState: IAuthState = {
  isAuthenticated: window.localStorage.getItem(localStorageNames.TOKEN) !== null,
};
