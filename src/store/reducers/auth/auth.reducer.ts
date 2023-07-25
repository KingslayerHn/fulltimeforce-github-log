import { createSlice } from '@reduxjs/toolkit';
import { AuthReducerInterface } from './auth-reducer.interface';

const initialState: AuthReducerInterface = {
  isLoading: false,
};

export const authReducer = createSlice({
  initialState,
  name: 'auth',
  reducers: {},
  extraReducers(builder) {},
});

export default authReducer.reducer;
