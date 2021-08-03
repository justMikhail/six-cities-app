import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer';
import {checkAuth, fetchOffersList, fetchFavorites} from './store/api-actions';
import {createAPI} from './services/api';
import {requireAuthorization, setIsOffline} from './store/action';
import {AuthorizationStatus, OFFLINE_DOCUMENT_TITLE} from './const';

import App from './components/app/app';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());
store.dispatch(fetchFavorites());

window.addEventListener('online', () => {
  document.title = document.title.replace(OFFLINE_DOCUMENT_TITLE, '');
});

window.addEventListener('offline', () => {
  document.title += OFFLINE_DOCUMENT_TITLE;
  store.dispatch(setIsOffline(true));
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
