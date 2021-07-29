import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {getAllOffers} from '../data/selectors';

export const getActiveCity = (state) => state[NameSpace.OFFERS].activeCity;
export const getActiveSortType = (state) => state[NameSpace.OFFERS].activeSortType;
export const getActivePlaceCard = (state) => state[NameSpace.OFFERS].activePlaceCard;

export const getActiveCityData = createSelector(
    getActiveCity,
    getAllOffers,
  (getActiveCity, allOffers) => allOffers.find((offer) => offer.city.name === getActiveCity).city,
);

// todo применить библиотеку "Reselect"
