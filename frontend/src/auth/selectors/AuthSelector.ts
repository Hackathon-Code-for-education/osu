import { RootState } from '../../core/store/types/RootState.ts';

export class AuthSelector {
  static getUser = (state: RootState) => state.auth.user;
  static getIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
}
