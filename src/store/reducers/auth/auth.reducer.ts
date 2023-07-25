import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthReducerInterface } from './auth-reducer.interface';
import {
  createUser,
  loginUser,
} from '../../actions/thunk/auth/auth-thunk.actions';
import { GetUserResponseInterface } from '../../../interfaces/get-user-response.interface';

const initialState: AuthReducerInterface = {
  isLoading: false,
};

export const authReducer = createSlice({
  initialState,
  name: 'auth',
  reducers: {},
  extraReducers(builder) {
    //create user cases
    builder.addCase(
      createUser.fulfilled,
      (
        state,
        { payload: { user, token } }: PayloadAction<GetUserResponseInterface>
      ) => {
        state.isLoading = false;
        state.token = token;
        state.user = user;
      }
    );

    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createUser.rejected, (state) => {
      state.isLoading = false;
    });

    // login users cases

    builder.addCase(
      loginUser.fulfilled,
      (
        state,
        { payload: { user, token } }: PayloadAction<GetUserResponseInterface>
      ) => {
        state.isLoading = false;
        state.token = token;
        state.user = user;
      }
    );

    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default authReducer.reducer;
