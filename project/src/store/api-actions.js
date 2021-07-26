import {ActionCreator} from './action';
import {APIRoute, AuthorizationStatus} from '../const';
import {adaptOfferToClient, adaptUserToClient, adaptReviewToClient} from './adapter';

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.getUserData(adaptUserToClient(data)));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map(adaptOfferToClient))))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(adaptOfferToClient(data))))
    .catch(() => dispatch(ActionCreator.setIsDataLoadError(true)))
);

export const fetchNearbyOffersList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id + APIRoute.NEARBY_OFFERS}`)
    .then(({data}) => dispatch(ActionCreator.loadNearbyOffers(data.map(adaptOfferToClient))))
);

export const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data.map(adaptReviewToClient))))
);
