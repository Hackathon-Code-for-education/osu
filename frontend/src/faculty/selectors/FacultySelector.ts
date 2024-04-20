import { RootState } from '../../core/store/types/RootState.ts';

export class FacultySelector {
  static getState = (state: RootState) => state.faculty;
}
