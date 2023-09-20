import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface AuthState {
  accessToken: string | null;
}

const initialState: AuthState = {
  accessToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },

    logout: (state) => {
      state.accessToken = null;
    },
  },
});

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectToken = (state: RootState) => state.auth.accessToken;
