import { RootState } from '../../core/store/types/RootState.ts';

export class GroupsSelector {
  static getState = (state: RootState) => state.groups;
}
