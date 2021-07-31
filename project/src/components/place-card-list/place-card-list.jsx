import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import offerProp from '../propTypes/offer.prop';

function PlaceCardList({ offers, pageType }) {

  const [activePlaceCard, setActivePlaceCard] = useState(null);

  return (
    <>
      {offers.map((offer) =>
        (
          <PlaceCard
            key={offer.id}
            offer={offer}
            pageType={pageType}
            activePlaceCard={activePlaceCard}
            setActivePlaceCard={setActivePlaceCard}
          />),
      )}
    </>
  );
}

PlaceCardList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  pageType: PropTypes.object.isRequired,
};

export default PlaceCardList;


