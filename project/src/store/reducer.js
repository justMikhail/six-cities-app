import {ActionType} from './action';
import offers from '../mocks/offers';
import reviews from '../mocks/reviews';
import {CITIES} from '../const';

const initialState = {
  city: CITIES[0],
  offers: offers.filter((offer) => offer.city.name === CITIES[0]),
  allOffers: offers,
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.FILL_OFFERS_LIST:
      return {
        ...state,
        offers: offers.filter((offer) => offer.city.name === action.payload),
      };
    default:
      return state;
  }
};

export {reducer};
