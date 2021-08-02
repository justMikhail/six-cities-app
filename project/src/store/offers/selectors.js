import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {getAllOffers} from '../data/selectors';

export const getActiveCity = (state) => state[NameSpace.OFFERS].activeCity;
export const getActiveSortType = (state) => state[NameSpace.OFFERS].activeSortType;
export const getActivePlaceCard = (state) => state[NameSpace.OFFERS].activePlaceCard;

export const getActiveCityData = createSelector(
  getActiveCity,
  getAllOffers,
  (activeCity, allOffers) => allOffers.find((offer) => offer.city.name === activeCity).city,
);

