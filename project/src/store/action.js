export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  LOAD_OFFERS: 'data/loadOffers',
  FILL_OFFERS_LIST: 'main/fillOffersList',
  CHANGE_SORT: 'main/changeSort',
  CHANGE_ACTIVE_CARD: 'placeCard/changeActiveCard',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
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
};
