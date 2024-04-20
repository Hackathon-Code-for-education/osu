import { createSlice } from '@reduxjs/toolkit';
import { initialFacultyState } from '../constants/initialFacultyState.ts';

const slice = createSlice({
  name: 'faculty',
  initialState: initialFacultyState,
  reducers: {
    clearState: () => {
      return initialFacultyState;
    },
  },
});

export const facultyReducer = slice.reducer;
export const facultySlice = slice.actions;
