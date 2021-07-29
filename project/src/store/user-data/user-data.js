import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import {
  requireAuthorization,
  logout,
  getUserData,
} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userData: {},
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
    });
});

export {userData};
