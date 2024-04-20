import { createSlice } from '@reduxjs/toolkit';
import { initialUserState } from '../constants/initialUserState.ts';

const slice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    clearState: () => {
      return initialUserState;
    },
  },
});

export const userReducer = slice.reducer;
export const userSlice = slice.actions;
