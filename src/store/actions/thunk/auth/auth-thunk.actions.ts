import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { CreateUser } from '../../../../interfaces/create-user.interface';
import api from '../../../../api/axios';
import { LoginUserInterface } from '../../../../interfaces/login-user.interface';

export const createUser = createAsyncThunk(
  'auth/create',
  async (user: CreateUser, { rejectWithValue }) => {
    try {
      const res = await api.post('auth/create', {
        ...user,
      });
      return res.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user: LoginUserInterface, { rejectWithValue }) => {
    try {
      const res = await api.post('auth/login', {
        ...user,
      });
      return res.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  }
);

export const getUserByToken = createAsyncThunk(
  'auth/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('auth/');
      return res.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  }
);
