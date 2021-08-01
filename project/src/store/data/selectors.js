import {NameSpace} from '../root-reducer';

export const getAllOffers = (state) => state[NameSpace.DATA].allOffers;
export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getOffer = (state) => state[NameSpace.DATA].offer;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getIsReviewSending = (state) => state[NameSpace.DATA].isReviewSending;
export const getFavorites = (state) => state[NameSpace.DATA].allOffers.filter((offer) => offer.isFavorite);
export const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
export const getIsOfferDataLoaded = (state) => state[NameSpace.DATA].isOfferDataLoaded;
export const getIsDataLoadError = (state) => state[NameSpace.DATA].isDataLoadError;
