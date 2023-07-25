import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthReducerInterface } from './auth-reducer.interface';
import {
  createUser,
  getUserByToken,
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

        localStorage.setItem('fulltimeforce_token', token);
      }
    );

    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createUser.rejected, (state) => {
      state.isLoading = false;
      localStorage.removeItem('fulltimeforce_token');
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
        localStorage.setItem('fulltimeforce_token', token);
      }
    );

    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
      localStorage.removeItem('fulltimeforce_token');
    });

    // get user by token
    builder.addCase(
      getUserByToken.fulfilled,
      (
        state,
        { payload: { user, token } }: PayloadAction<GetUserResponseInterface>
      ) => {
        state.isLoading = false;
        state.token = token;
        state.user = user;
        localStorage.setItem('fulltimeforce_token', token);
      }
    );

    builder.addCase(getUserByToken.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getUserByToken.rejected, (state) => {
      state.isLoading = false;
      localStorage.removeItem('fulltimeforce_token');
    });
  },
});

export default authReducer.reducer;
