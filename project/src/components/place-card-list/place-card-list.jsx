import React, {useState} from 'react';
import PropTypes from 'prop-types';
//imported custom components
import PlaceCard from '../place-card/place-card';
//imported props
import offerProp from '../propTypes/offer.prop';

function PlaceCardList({ offers, pageType }) {

  const [activePlaceCard, setActivePlaceCard] = useState(null);

  return (
    <>
      {offers.map((offer) =>
        <PlaceCard key={offer.id} offer={offer} pageType={pageType} setActivePlaceCard={setActivePlaceCard} activePlaceCard={activePlaceCard} />)}
    </>
  );
}

PlaceCardList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  pageType: PropTypes.object.isRequired,
};

export default PlaceCardList;


