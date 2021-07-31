import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../propTypes/offer.prop';
import {Link} from 'react-router-dom';
import {AppRoute, placeCardPageType} from '../../const';

import PlaceCard from '../place-card/place-card';

function FavoritesItem({ favoriteOffers, favoriteCity }) {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoute.MAIN}
          >
            <span>{favoriteCity}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {
          favoriteOffers.map((offer) => (
            <PlaceCard
              key={offer.id}
              offer={offer}
              pageType={placeCardPageType.FAVORITE}
            />
          ))
        }
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  favoriteOffers: PropTypes.oneOfType([
    PropTypes.arrayOf(offerProp),
    offerProp,
  ]).isRequired,
  favoriteCity: PropTypes.string.isRequired,
};

export default FavoritesItem;
