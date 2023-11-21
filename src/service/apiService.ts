import axios from 'axios';
import { LoginFormData, RegistrationFormData } from '../types/user.types';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


const setAuthHeader = (token:string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = async (credentials: RegistrationFormData) => {
  const { data } = await axios.post('/users/signup', credentials);
  setAuthHeader(data.token);
  return data;
};

export const logIn = async (credentials: LoginFormData) => {
  const { data } = await axios.post('/users/login', credentials);
  setAuthHeader(data.token);
  return data;
};

export const logOut = async () => {
 await axios.post('/users/logout')
  clearAuthHeader();
  
};

export const refreshUser = async (token: string) => {
  setAuthHeader(token);
  const { data } = await axios.get("users/current");
  return data;
};