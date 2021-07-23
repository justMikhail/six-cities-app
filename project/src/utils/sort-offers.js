import {SortType} from '../const';

export const sortOffers = (sort, offers) => {
  switch (sort) {
    case SortType.PRICE_HIGH:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.PRICE_LOW:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};
