import { IUser } from '../../users/interfaces/IUser';

export interface IAuthState {
  user?: IUser;
  isAuthenticated: boolean;
}
