import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {fetchOffersList, checkAuth} from './store/api-actions';
import {createAPI} from './services/api';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';

import App from './components/app/app';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(fetchOffersList());
store.dispatch(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
