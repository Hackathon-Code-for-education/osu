import { createAsyncThunk } from '@reduxjs/toolkit';
// import { localStorageNames } from '../../main/constants/localStorageNames.ts';

export class AuthService {
  static signIn = createAsyncThunk('auth/signIn', async (_request: never, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI;
    // const { dispatch, getState, rejectWithValue, fulfillWithValue } = thunkAPI;

    try {
      // const response = await authorizationAPI.signIn(request);
      //
      // if (!response.data) {
      //   throw new Error('Failed to retrieve data');
      // }
      //
      // localStorage.setItem(localStorageNames.ACCESS_TOKEN, response.data.accessToken);
      //
      // dispatch(getUserProfileService());

      return fulfillWithValue({});
    } catch (e) {
      // dispatch(toasterErrorWithResponse({ response: e as IErrorResponse, message: 'Sign in' }));

      return rejectWithValue({});
    }
  });
}

export const authServicePending = [AuthService.signIn.pending];
export const authServiceCompleted = [AuthService.signIn.fulfilled, AuthService.signIn.rejected];
