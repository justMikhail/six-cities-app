import React, {useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import offerProp from '../propTypes/offer.prop';
import useMap from '../../hooks/use-map';
import {IconSize, IconUrl} from '../../const';

import {getActivePlaceCard} from '../../store/offers/selectors';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const defaultIcon = leaflet.icon({
  iconUrl: IconUrl.DEFAULT,
  iconSize: [IconSize.WIDTH, IconSize.HEIGHT],
  iconAnchor: [IconSize.WIDTH / 2, IconSize.HEIGHT],
});

const activeIcon = leaflet.icon({
  iconUrl: IconUrl.ACTIVE,
  iconSize: [IconSize.WIDTH, IconSize.HEIGHT],
  iconAnchor: [IconSize.WIDTH / 2, IconSize.HEIGHT],
});

function Map({offers, city}) {

  const mapContainerRef = useRef(null);
  const map = useMap(mapContainerRef, city);
  const activePlaceCard = useSelector(getActivePlaceCard);

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      markers.addTo(map);

      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === activePlaceCard) ? activeIcon : defaultIcon,
          })
          .addTo(markers);
      });

      map.flyTo(
        [
          city.location.latitude,
          city.location.longitude,
        ],
        city.location.zoom,
      );
    }

    return () => {
      markers.clearLayers();
    };
  }, [map, offers, activePlaceCard, city.location.latitude, city.location.longitude, city.location.zoom]);

  return (
    <div id="map" style={{height: '100%'}} ref={mapContainerRef} />
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city : PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Map;
