import { createAsyncThunk } from '@reduxjs/toolkit';

export class GroupsService {
  static fn = createAsyncThunk('user/fn', async (_request: never, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI;

    try {
      return fulfillWithValue({});
    } catch (e) {
      return rejectWithValue({});
    }
  });
}

export const groupsServicePending = [GroupsService.fn.pending];
export const groupsServiceCompleted = [GroupsService.fn.fulfilled, GroupsService.fn.rejected];
