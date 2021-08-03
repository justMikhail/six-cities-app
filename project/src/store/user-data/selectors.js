import {NameSpace} from '../root-reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserData = (state) => state[NameSpace.USER].userData;
export const isRequestFailed = (state) => state[NameSpace.USER].isRequestFailed;
export const getIsOffline = (state) => state[NameSpace.USER].isOffline;
