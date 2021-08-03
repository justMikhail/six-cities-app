import {createReducer} from '@reduxjs/toolkit';
import {defaultCity} from '../../const';
import {
  loadOffers,
  filterOffersByCity,
  loadOffer,
  loadNearbyOffers,
  loadReviews,
  setIsReviewSending,
  setIsReviewSuccess,
  setIsOfferDataLoaded,
  setIsDataLoadError,
  loadFavorites,
  updateFavorites
} from '../action';

const initialState = {
  allOffers: [],
  offers: [],

  offer: null,
  reviews: [],
  nearbyOffers: [],

  isDataLoaded: false,
  isOfferDataLoaded: false,
  isReviewSending: false,
  isReviewSuccess: false,
  isDataLoadError: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.allOffers = action.payload;
      state.offers = action.payload.filter((offer) => offer.city.name === defaultCity);
      state.isDataLoaded = true;
    })
    .addCase(filterOffersByCity, (state, action) => {
      state.offers = state.allOffers.filter((offer) => offer.city.name === action.payload);
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
      state.isOfferDataLoaded = true;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setIsReviewSending, (state, action) => {
      state.isReviewSending = action.payload;
    })
    .addCase(setIsReviewSuccess, (state, action) => {
      state.isReviewSuccess = action.payload;
    })
    .addCase(setIsOfferDataLoaded, (state, action) => {
      state.isOfferDataLoaded = action.payload;
    })
    .addCase(setIsDataLoadError, (state, action) => {
      state.isDataLoadError = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favoritesOffers = action.payload;
    })
    .addCase(updateFavorites, (state, action) => {
      const offerLists = ['allOffers', 'offers', 'nearbyOffers'];
      const applyUpdate = (offerListName, offerUpdate) => {
        const idx = state[offerListName].findIndex((offer) => offer.id === offerUpdate.id);
        state[offerListName] = [
          ...state[offerListName].slice(0, idx),
          offerUpdate,
          ...state[offerListName].slice(idx + 1),
        ];
      };

      offerLists.forEach((offerListName) => applyUpdate(offerListName, action.payload));

      if (state.offer) {
        state.offer.isFavorite = action.payload.isFavorite;
      }
    });
});

export {data};
