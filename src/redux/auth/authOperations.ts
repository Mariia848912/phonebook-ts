import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
// import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = (token:string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

interface UserLogIn {
    password: string;
    email: string;
}
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
          'error'
        // toast.error(
        //   `Enter the data and check it. If it doesn't work, try again later.`
        // )
      );
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials: UserLogIn, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
          "error"
        // toast.error(
        //   `Enter the data and check it. If it doesn't work, try again later.`
        // )
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
      return thunkAPI.rejectWithValue(
        "error"
    //   toast.error(`Whoops, something went wrong. Try later`)
    );
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state:RootState = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
          "error"
        // toast.error(`Whoops, something went wrong. Try later`)
      );
    }
  }
);
