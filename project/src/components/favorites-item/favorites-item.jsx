import React from 'react';
import PropTypes from 'prop-types';
//imported custom components
import PlaceCard from '../place-card/place-card';
//imported props
import offerProp from '../propTypes/offer.prop';

import {placeCardPageType} from '../../const';

function FavoritesItem({ favoriteOffers, favoriteCity }) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{ favoriteCity }</span>
          </a>
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
