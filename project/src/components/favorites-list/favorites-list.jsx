import React from 'react';
import PropTypes from 'prop-types';
//imported components
import FavoritesListItem from '../favorites-list-item/favorites-list-item';
//imported props
import offersProp from '../app/offers.prop';

function FavoritesList({favoriteOffers, favoritesUniqueCities}) {
  const favoriteCities = Array.from(favoritesUniqueCities);

  return (
    <ul className="favorites__list">
      {favoriteCities.map((city) => (
        <FavoritesListItem
          key={city}
          favoriteOffers={favoriteOffers.filter((offer) => offer.city.name === city)}
          favoriteCity={city}
        />
      ))}
    </ul>
  );
}

FavoritesList.propTypes = {
  favoriteOffers: PropTypes.oneOfType([
    PropTypes.arrayOf(offersProp),
    offersProp,
  ]).isRequired,
  favoritesUniqueCities: PropTypes.instanceOf(Set).isRequired,
};

export default FavoritesList;

