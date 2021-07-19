import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
//imported custom components
import MainPage from '../pages/main-page/main-page';
import OfferPage from '../pages/offer-page/offer-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
//imported props
import offerProp from '../propTypes/offer.prop';
import reviewProp from '../propTypes/review.prop';

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
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default App;
