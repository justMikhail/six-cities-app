import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';

import offersMocks from './mocks/offers';
import reviewsMocks from './mocks/reviews';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>\
    <Provider store={store}>
      <App
        offers = { offersMocks }
        reviews = { reviewsMocks }
      />,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
