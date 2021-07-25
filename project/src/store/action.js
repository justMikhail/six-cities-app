export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  FILL_OFFERS_LIST: 'main/fillOffersList',
  CHANGE_SORT: 'main/changeSort',
  CHANGE_ACTIVE_CARD: 'placeCard/changeActiveCard',
  LOAD_OFFERS: 'data/loadOffers',
  FILTER_OFFERS: 'data/filterOffers'
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  fillOffersList: (city) => ({
    type: ActionType.FILL_OFFERS_LIST,
    payload: city,
  }),
  changeSort: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: sort,
  }),
  changeActiveCard: (card) => ({
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload: card,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  filterOffers: (offers) => ({
    type: ActionType.FILTER_OFFERS,
    payload: offers
  })
};
