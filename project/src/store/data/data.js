import {createReducer} from '@reduxjs/toolkit';
import {defaultCity} from '../../const';
import {
  loadOffers,
  filterOffersByCity,
  loadOffer,
  loadNearbyOffers,
  loadReviews,
  setIsOfferDataLoaded,
  setIsDataLoadError,
  loadFavorites,
  updateFavorites,
} from '../action';

const initialState = {
  allOffers: [],
  offers: [],
  offer: {},
  nearbyOffers: [],
  reviews: [],
  favoritesOffers: [],
  isDataLoaded: false,
  isOfferDataLoaded: false,
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
      state.allOffers.find((item) => item.id === action.payload.id).isFavorite = action.payload.isFavorite;

      const index = state.favoritesOffers.findIndex((item) => item.id === action.payload.id);
      state.favoritesOffers.splice(index, 1);

      if (Object.keys(state.offer).length !== 0) {
        state.offer.isFavorite = action.payload.isFavorite;
      }

      if (state.offers.some((item) => item.id === action.payload.id)) {
        state.offers.find((item) => item.id === action.payload.id).isFavorite = action.payload.isFavorite;
      }

      if (state.nearbyOffers.some((item) => item.id === action.payload.id)) {
        state.nearbyOffers.find((item) => item.id === action.payload.id).isFavorite = action.payload.isFavorite;
      }
    });
});

export {data};
