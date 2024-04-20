import { Reducer } from 'redux';
import { IAuthState } from '../../../auth/interfaces/IAuthState.ts';
import { IUserState } from '../../../users/interfaces/IUserState.ts';
import { IFacultyState } from '../../../faculty/interfaces/IFacultyState.ts';
import { IDepartmentState } from '../../../department/interfaces/IDepartmentState.ts';
import { IGroupsState } from '../../../groups/interfaces/IGroupsState.ts';

export interface IRootState {
  auth: Reducer<IAuthState>;
  user: Reducer<IUserState>;
  faculty: Reducer<IFacultyState>;
  department: Reducer<IDepartmentState>;
  groups: Reducer<IGroupsState>;
}
