import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import {
  requireAuthorization,
  logout,
  getUserData,
  requestFailed,
} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userData: {},
  isRequestFailed: false,
};

const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(requestFailed, (state, action) => {
      state.isRequestFailed = action.payload;
    });
});

export {userData};
