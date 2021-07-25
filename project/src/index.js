import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {fetchOffersList} from './store/api-actions';
import {createAPI} from './services/api';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
