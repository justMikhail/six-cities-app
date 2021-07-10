import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import offersMocks from './mocks/offers';
import reviewsMocks from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App
      offers = { offersMocks }
      reviews = { reviewsMocks }
    />,
  </React.StrictMode>,
  document.getElementById('root'),
);
