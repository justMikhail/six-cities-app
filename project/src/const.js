export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
};

export const APIRoute = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  OFFERS: '/hotels',
  NEARBY_OFFERS: '/nearby',
  REVIEWS: '/comments',
  FAVORITE: '/favorite',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const placeCardPageType = {
  MAIN: {
    type: 'main',
    classListElement: 'cities__place-card place-card',
    classListElementWrapper: 'cities__image-wrapper',
    cardImageWidth: 260,
    cardImageHeight: 200,
  },
  OFFER: {
    type: 'offer',
    classListElement: 'near-places__card place-card',
    classListElementWrapper: 'near-places__image-wrapper',
    cardImageWidth: 260,
    cardImageHeight: 200,
  },
  FAVORITE: {
    type: 'favorite',
    classListElement: 'favorites__card',
    classListElementWrapper: 'favorites__image-wrapper',
    classInfo: 'favorites__card-info',
    cardImageWidth: 150,
    cardImageHeight: 110,
  },
};

export const CITIES = [
  {name: 'Paris'},
  {name: 'Cologne'},
  {name: 'Brussels'},
  {name: 'Amsterdam'},
  {name: 'Hamburg'},
  {name: 'Dusseldorf'},
];

export const defaultCity = CITIES[0].name;

export const bookmarkBtnType = {
  card: {
    class: 'place-card__bookmark-button button',
    width: 18,
    height: 19,
  },
  offer: {
    class: 'property__bookmark-button button',
    width: 31,
    height: 33,
  },
};

export const Color = {
  FAVORITE_CHECKED: '#4481c3',
  FAVORITE_NOT_CHECKED: '#979797',
};

export const LIMIT_OF_SHOW_IMAGE = 6;
export const LIMIT_OF_SHOW_REVIEWS = 10;
export const LIMIT_REVIEW_LENGTH = {
  min: 50,
  max: 300,
};

export const Ratings = {
  ONE: {
    id: 1,
    title: 'terribly',
  },
  TWO: {
    id: 2,
    title: 'badly',
  },
  THREE: {
    id: 3,
    title: 'not bad',
  },
  FOUR: {
    id: 4,
    title: 'good',
  },
  FIVE: {
    id: 5,
    title: 'perfect',
  },
};

export const SortType = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

