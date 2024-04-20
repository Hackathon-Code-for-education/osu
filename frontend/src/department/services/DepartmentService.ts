import { createAsyncThunk } from '@reduxjs/toolkit';
import { localStorageNames } from '../../main/constants/localStorageNames.ts';

export class DepartmentService {
  static fn = createAsyncThunk('department/fn', async (_request: never, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI;

    console.log('kwjqhdvfwhvd');

    try {
      fetch('/api/secure', {
        method: 'GET',
        headers: {
          // @ts-ignore
          Authorization: `${JSON.parse(localStorage.getItem(localStorageNames.TOKEN)).accessToken}`,
          Accept: 'application/json',
          'Content-type': 'application/x-www-form-urlencoded',
        },
      }).then(response => {
        if (response.ok) {
          return response;
        }
        throw response;
      });

      return fulfillWithValue({});
    } catch (e) {
      return rejectWithValue({});
    }
  });
}

export const departmentServicePending = [DepartmentService.fn.pending];
export const departmentServiceCompleted = [DepartmentService.fn.fulfilled, DepartmentService.fn.rejected];
