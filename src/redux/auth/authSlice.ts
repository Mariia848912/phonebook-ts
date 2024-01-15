import { logIn, logOut,  refreshUser,  signUp } from './authOperations';
import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
    user: { name: string | null, email: string | null };
    token: string | null;
    isLoggedIn: boolean;
    isRefreshing: boolean;
}
const initialState: AuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
}

const authSlice = createSlice({
  name: 'auth',
    initialState,
  reducers: {}, 
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

// // authSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { PersistPartial } from 'redux-persist/es/persistReducer';  // Зміни тут
// import { logIn, logOut, refreshUser, signUp } from './authOperations';
// // import { PersistState } from 'redux-persist/es/types';

// export interface AuthState extends PersistPartial {
//   user: { name: string | null; email: string | null };
//   token: string | null;
//   isLoggedIn: boolean;
//   isRefreshing: boolean;
// }

// const initialState: AuthState  = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
//   // _persist: { version: -1, rehydrated: false }, 
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(signUp.fulfilled, (state, action: PayloadAction<{ user: AuthState['user']; token: AuthState['token'] }>) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logIn.fulfilled, (state, action: PayloadAction<{ user: AuthState['user']; token: AuthState['token'] }>) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logOut.fulfilled, (state) => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser.pending, (state) => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action: PayloadAction<AuthState['user']>) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, (state) => {
//         state.isRefreshing = false;
//       });
//   },
// });

// export const authReducer = authSlice.reducer;

