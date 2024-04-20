import { createSlice } from '@reduxjs/toolkit';
import { initialDepartmentState } from '../constants/initialDepartmentState.ts';

const slice = createSlice({
  name: 'department',
  initialState: initialDepartmentState,
  reducers: {
    clearState: () => {
      return initialDepartmentState;
    },
  },
});

export const departmentReducer = slice.reducer;
export const departmentSlice = slice.actions;
