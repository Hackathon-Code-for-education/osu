import { createSlice } from '@reduxjs/toolkit';
import { initialGroupsState } from '../constants/initialGroupsState.ts';

const slice = createSlice({
  name: 'groups',
  initialState: initialGroupsState,
  reducers: {
    clearState: () => {
      return initialGroupsState;
    },
  },
});

export const groupsReducer = slice.reducer;
export const groupsSlice = slice.actions;
