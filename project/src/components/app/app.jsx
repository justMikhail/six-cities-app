import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useSelector} from 'react-redux';

import {getIsDataLoaded} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user-data/selectors';

import PrivateRoute from '../private-route/private-route';
import MainPage from '../pages/main-page/main-page';
import OfferPage from '../pages/offer-page/offer-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import Loader from '../loader/loader';

function App() {

  const isDataLoaded = useSelector(getIsDataLoaded);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const isCheckedAuth = (auth) => auth === AuthorizationStatus.UNKNOWN;
  if (!isDataLoaded || isCheckedAuth(authorizationStatus)) {
    return (
      <Loader />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage />
        </Route>

        <Route exact path={AppRoute.OFFER}>
          <OfferPage />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesPage />}
        >
        </PrivateRoute>

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

export default App;

