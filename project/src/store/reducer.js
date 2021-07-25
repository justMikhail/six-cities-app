import {ActionType} from './action';
import reviews from '../mocks/reviews';
import {CITIES,SortType} from '../const';

const initialState = {
  city: CITIES[0],
  offers: [],
  allOffers: [],
  reviews,
  sortType: SortType.POPULAR,
  activePlaceCard: null,
  isDataLoaded: false,
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
    default:
      return state;
  }
};

export {reducer};
