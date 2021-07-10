export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
};

export const PlaceCardPageType = {
  MAIN: {
    TYPE: 'main',
    CLASS_LIST_ELEMENT: 'cities__place-card place-card',
    CLASS_LIST_ELEMENT_WRAPPER: 'cities__image-wrapper',
    CARD_IMAGE_WIDTH: 260,
    CARD_IMAGE_HEIGHT: 200,
  },
  OFFER: {
    TYPE: 'offer',
    CLASS_LIST_ELEMENT: 'near-places__card place-card',
    CLASS_LIST_ELEMENT_WRAPPER: 'near-places__image-wrapper',
    CARD_IMAGE_WIDTH: 260,
    CARD_IMAGE_HEIGHT: 200,
  },
  FAVORITE: {
    TYPE: 'favorite',
    CLASS_LIST_ELEMENT: 'favorites__card',
    CLASS_LIST_ELEMENT_WRAPPER: 'favorites__image-wrapper',
    CLASS_INFO: 'favorites__card-info',
    CARD_IMAGE_WIDTH: 150,
    CARD_IMAGE_HEIGHT: 110,
  },
};

export const Colors = {
  FAVORITE_CHECKED: '#4481c3',
  FAVORITE_NOT_CHECKED: '#979797',
};

