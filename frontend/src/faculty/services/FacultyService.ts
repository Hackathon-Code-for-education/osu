import { createAsyncThunk } from '@reduxjs/toolkit';

export class FacultyService {
  static fn = createAsyncThunk('user/fn', async (_request: never, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI;

    try {
      return fulfillWithValue({});
    } catch (e) {
      return rejectWithValue({});
    }
  });
}

export const facultyServicePending = [FacultyService.fn.pending];
export const facultyServiceCompleted = [FacultyService.fn.fulfilled, FacultyService.fn.rejected];
