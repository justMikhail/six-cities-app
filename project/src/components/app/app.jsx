import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
//imported components
import MainPage from '../pages/main-page/main-page';
import OfferPage from '../pages/offer-page/offer-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import Error404Page from '../pages/error404-page/error404-page';
//props
import offersProp from './offers.prop';
import reviewsProp from './reviews.prop';
function App(props) {
  const { offers, reviews } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage offers = {offers} />
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <OfferPage offers = {offers} reviews = {reviews} />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage offers = {offers} />
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
  offers: PropTypes.arrayOf(offersProp).isRequired,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};

export default App;
