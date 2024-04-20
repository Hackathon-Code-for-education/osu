import { Reducer } from 'redux';
import { IAuthState } from '../../../auth/interfaces/IAuthState.ts';
import { IUserState } from '../../../users/interfaces/IUserState.ts';

export interface IRootState {
  auth: Reducer<IAuthState>;
  user: Reducer<IUserState>;
}
