import React from 'react';
import {useSelector} from 'react-redux';
import {AppRoute} from '../../../const';
import {Link} from 'react-router-dom';

import Header from '../../header/header';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import FavoritesList from '../../favorites-list/favorites-list';

import {getFavorites} from '../../../store/data/selectors';

function FavoritesPage() {
  const favoriteOffers = useSelector(getFavorites);

  if (favoriteOffers.length === 0) {
    return <FavoritesEmpty />;
  }

  const favoritesUniqueCities = new Set();
  favoriteOffers.forEach((offer) => favoritesUniqueCities.add(offer.city.name));

  return (
    <div className="page page--favorites-empty">
      <Header />
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <FavoritesList favoriteOffers={favoriteOffers} favoritesUniqueCities={favoritesUniqueCities} />
          </section>
        </div>
      </main>
      <footer className="footer">
        <Link className="footer__logo-link" to={ AppRoute.MAIN }>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
