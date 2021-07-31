import {createReducer} from '@reduxjs/toolkit';
import {SortType, defaultCity} from '../../const';
import {
  changeCity,
  changeSort,
  changeActiveCard
} from '../action';

const initialState = {
  activeCity: defaultCity,
  activeSortType: SortType.POPULAR,
  activePlaceCard: null,
};

const offers = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeSortType = SortType.POPULAR;
      state.activeCity = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.activeSortType = action.payload;
    })
    .addCase(changeActiveCard, (state, action) => {
      state.activePlaceCard = action.payload;
    });
});

export {offers};
