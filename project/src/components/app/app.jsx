import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';

import MainPage from '../pages/main-page/main-page';
import OfferPage from '../pages/offer-page/offer-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import Error404Page from '../pages/error404-page/error404-page';

function App(props) {
  const { placesCount } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage placesCount = {placesCount} />
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <OfferPage />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <Route>
          <Error404Page />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
