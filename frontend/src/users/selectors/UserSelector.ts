import { RootState } from '../../core/store/types/RootState.ts';

export class UserSelector {
  static getState = (state: RootState) => state.user;
}
