import { combineReducers } from 'redux';
import { IRootState } from '../interfaces/IRootState.ts';
import { authReducer } from '../../../auth/slices/authSlice.ts';
import { userReducer } from '../../../users/slices/userSlice.ts';
import { facultyReducer } from '../../../faculty/slices/facultySlice.ts';
import { departmentReducer } from '../../../department/slices/departmentSlice.ts';
import { groupsReducer } from '../../../groups/slices/groupsSlice.ts';

export const rootReducer = combineReducers<IRootState>({
  auth: authReducer,
  user: userReducer,
  faculty: facultyReducer,
  department: departmentReducer,
  groups: groupsReducer,
});
