import { RootState } from '../../core/store/types/RootState.ts';

export class DepartmentSelector {
  static getState = (state: RootState) => state.department;
}
