import React from 'react';
import PropTypes from 'prop-types';
import FavoritesListItem from '../favorites-item/favorites-item';
import offerProp from '../propTypes/offer.prop';

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
    PropTypes.arrayOf(offerProp),
    offerProp,
  ]).isRequired,
  favoritesUniqueCities: PropTypes.instanceOf(Set).isRequired,
};

export default FavoritesList;

