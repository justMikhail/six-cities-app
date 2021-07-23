import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AppRoute} from '../../../const';
import {Link} from 'react-router-dom';

import Header from '../../header/header';
import FavoritesList from '../../favorites-list/favorites-list';

import offerProp from '../../propTypes/offer.prop';

function FavoritesPage({ offers }) {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite === true);
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

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

const mapStateToProps = (dispatch) => ({
  offers: dispatch.allOffers,
});

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
