import {ActionType} from './action';
//import reviews from '../mocks/reviews';
import {CITIES, SortType, AuthorizationStatus} from '../const';

const initialState = {
  city: CITIES[0],
  offers: [],
  allOffers: [],
  nearbyOffers: [],
  offer: {},
  reviews: [],
  sortType: SortType.POPULAR,
  activePlaceCard: null,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userData: {},
  isDataLoaded: false,
  isOfferDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_CITY:
      return {
        ...state,
        sortType: SortType.POPULAR,
        city: state.allOffers.find((offer) => offer.city.name === action.payload).city,
      };

    case ActionType.CHANGE_SORT:
      return {
        ...state,
        sortType: action.payload,
      };

    case ActionType.CHANGE_ACTIVE_CARD:
      return {
        ...state,
        activePlaceCard: action.payload,
      };

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        allOffers: action.payload,
        city: action.payload.find((offer) => offer.city.name === CITIES[0].name).city,
        isDataLoaded: true,
      };

    case ActionType.FILTER_OFFERS:
      return {
        ...state,
        offers: state.allOffers.filter((offer) => offer.city.name === state.city.name)
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };

    case ActionType.GET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload,
      };

    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        isOfferDataLoaded: true,
      };

    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };

    case ActionType.SET_IS_OFFER_DATA_LOADED:
      return {
        ...state,
        isOfferDataLoaded: action.payload,
      };

    default:
      return state;
  }
};

export {reducer};
