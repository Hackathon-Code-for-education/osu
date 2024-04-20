import { createAsyncThunk } from '@reduxjs/toolkit';

export class UserService {
  static fn = createAsyncThunk('user/fn', async (_request: never, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI;

    try {
      return fulfillWithValue({});
    } catch (e) {
      return rejectWithValue({});
    }
  });
}

export const userServicePending = [UserService.fn.pending];
export const userServiceCompleted = [UserService.fn.fulfilled, UserService.fn.rejected];
