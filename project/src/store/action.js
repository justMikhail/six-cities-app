import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  // userData
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  GET_USER_DATA: 'user/getUserData',
  REQUEST_FAILED: 'user/requestFailed',
  SET_IS_OFFLINE: 'user/setIsOffline',
  // data
  LOAD_OFFERS: 'data/loadOffers',
  FILTER_OFFERS: 'data/filterOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_NEARBY_OFFERS: 'data/loadNearbyOffers',
  LOAD_REVIEWS: 'data/loadReviews',
  SET_IS_REVIEW_SENDING: 'data/setIsReviewSending',
  SET_IS_REVIEW_SUCCESS: 'user/setIsReviewSuccess',
  LOAD_FAVORITES: 'data/loadFavorites',
  UPDATE_FAVORITES: 'data/updateFavorites',
  SET_IS_OFFER_DATA_LOADED: 'data/setIsOfferDataLoaded',
  SET_IS_DATA_LOAD_ERROR: 'data/setIsDataLoadError',
  // offers
  CHANGE_CITY: 'offers/changeCity',
  CHANGE_SORT: 'offers/changeSort',
  CHANGE_ACTIVE_CARD: 'offers/changeActiveCard',
};

// userData
export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const logout = createAction(ActionType.LOGOUT);

export const getUserData = createAction(ActionType.GET_USER_DATA, (userData) => ({
  payload: userData,
}));

export const requestFailed = createAction(ActionType.REQUEST_FAILED, (isRequestFailed) => ({
  payload: isRequestFailed,
}));

export const setIsOffline = createAction(ActionType.SET_IS_OFFLINE, (isOffline) => ({
  payload: isOffline,
}));

// data
export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const filterOffersByCity = createAction(ActionType.FILTER_OFFERS, (city) => ({
  payload: city,
}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({
  payload: offer,
}));

export const loadNearbyOffers = createAction(ActionType.LOAD_NEARBY_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const setIsReviewSending = createAction(ActionType.SET_IS_REVIEW_SENDING, (value) => ({
  payload: value,
}));

export const setIsReviewSuccess = createAction(ActionType.SET_IS_REVIEW_SUCCESS, (value) => ({
  payload: value,
}));


export const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (favorites) => ({
  payload: favorites,
}));

export const updateFavorites = createAction(ActionType.UPDATE_FAVORITES, (favorites) => ({
  payload: favorites,
}));

export const setIsOfferDataLoaded = createAction(ActionType.SET_IS_OFFER_DATA_LOADED, (value) => ({
  payload: value,
}));

export const setIsDataLoadError = createAction(ActionType.SET_IS_DATA_LOAD_ERROR, (value) => ({
  payload: value,
}));

// offers
export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const changeSort = createAction(ActionType.CHANGE_SORT, (sort) => ({
  payload: sort,
}));

export const changeActiveCard = createAction(ActionType.CHANGE_ACTIVE_CARD, (card) => ({
  payload: card,
}));


