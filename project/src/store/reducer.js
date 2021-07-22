import {ActionType} from './action';
import offers from '../mocks/offers';
import reviews from '../mocks/reviews';
import {CITIES,SortType} from '../const';

const initialState = {
  city: CITIES[0],
  offers: offers.filter((offer) => offer.city.name === CITIES[0]),
  allOffers: offers,
  reviews,
  sortType: SortType.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        sortType: SortType.POPULAR,
        city: action.payload,
      };
    case ActionType.FILL_OFFERS_LIST:
      return {
        ...state,
        offers: offers.filter((offer) => offer.city.name === action.payload),
      };
    case ActionType.CHANGE_SORT:
      return {
        ...state,
        sortType: action.payload,
      }
    default:
      return state;
  }
};

export {reducer};
