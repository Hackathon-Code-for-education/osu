import { createSlice, isAnyOf, type PayloadAction } from '@reduxjs/toolkit';

import { IAuthState } from '../interfaces/IAuthState';
import { initialAuthState } from '../constants/initialAuthState.ts';
import { IUser } from '../../users/interfaces/IUser.ts';
import { AuthService } from '../services/AuthService.ts';

const slice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    clearState: () => {
      return initialAuthState;
    },
    setUser: (state: IAuthState, action: PayloadAction<IUser | undefined>) => {
      state.user = action.payload;
    },
    setIsAuthenticated: (state: IAuthState, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(AuthService.signIn.fulfilled), state => {
        state.isAuthenticated = true;
      })
      .addMatcher(isAnyOf(AuthService.signIn.rejected), state => {
        state.isAuthenticated = false;
      });
  },
});

export const authReducer = slice.reducer;
export const authSlice = slice.actions;
