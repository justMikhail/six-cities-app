import {APIRoute, AuthorizationStatus, ErrorMessageText} from "../const";

import {
  adaptOfferToClient,
  adaptUserToClient,
  adaptReviewToClient
} from './adapter';

import {
  loadOffers,
  loadOffer,
  loadNearbyOffers,
  loadReviews,
  setIsReviewSending,
  requireAuthorization,
  getUserData,
  loadFavorites,
  updateFavorites,
  setIsDataLoadError,
  requestFailed,
  logout as closeSession
} from './action';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data.map(adaptOfferToClient))))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadOffer(adaptOfferToClient(data))))
    .catch(() => dispatch(setIsDataLoadError(true)))
);

export const fetchNearbyOffersList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY_OFFERS}`)
    .then(({data}) => dispatch(loadNearbyOffers(data.map(adaptOfferToClient))))
);

export const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data.map(adaptReviewToClient))))
);

export const postReview = (id, comment, rating) => (dispatch, _getState, api) => {
  dispatch(setIsReviewSending(true));
  api.post(`${APIRoute.REVIEWS}/${id}`, {comment, rating})
    .then(({data}) => {
      dispatch(setIsReviewSending(false));
      dispatch(loadReviews(data.map(adaptReviewToClient)));
    }).catch(() => {
    dispatch(requestFailed(true)) // <<<<------------ СМОТРЕТЬ СЮДА
    })
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', data.email);
      localStorage.setItem('avatarUrl', data['avatar_url']);
      dispatch(getUserData(adaptUserToClient(data)));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
      dispatch(requestFailed(true)) // <<<<------------ СМОТРЕТЬ СЮДА
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('avatarUrl');
    })
    .then(() => dispatch(closeSession()))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(loadFavorites(data.map(adaptOfferToClient)));
    })
    .catch(() => {
      dispatch(requestFailed(true)) // <<<<------------ СМОТРЕТЬ СЮДА
    })
);

export const postFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => dispatch(updateFavorites(adaptOfferToClient(data))))
    .catch(() => {
    dispatch(requestFailed(true)) // <<<<------------ СМОТРЕТЬ СЮДА
  })
);
