import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../service/apiService";
import { RootState } from "../store";
import { toast } from "react-toastify";
import { LoginFormData, RegistrationFormData } from "../../types/user.types";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (credentials: RegistrationFormData, thunkAPI) => {
    try {
      const response = await api.signUp(credentials);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error(
          `Enter the data and check it. If it doesn't work, try again later.`
        )
      );
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials: LoginFormData, thunkAPI) => {
    try {
      const response = await api.logIn(credentials);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error(
          `Enter the data and check it. If it doesn't work, try again later.`
        )
      );
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await api.logOut();
  } catch (error) {
    return thunkAPI.rejectWithValue(
      toast.error(`Whoops, something went wrong. Try later`)
    );
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      const response = await api.refreshUser(persistedToken);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error(`Whoops, something went wrong. Try later`)
      );
    }
  }
);
