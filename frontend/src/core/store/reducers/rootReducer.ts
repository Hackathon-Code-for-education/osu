import { combineReducers } from 'redux';
import { IRootState } from '../interfaces/IRootState.ts';
import { authReducer } from '../../../auth/slices/authSlice.ts';
import { userReducer } from '../../../users/slices/userSlice.ts';

export const rootReducer = combineReducers<IRootState>({
  auth: authReducer,
  user: userReducer,
});
