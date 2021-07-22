import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import offerProp from '../propTypes/offer.prop';

const ICON_SIZE = 30;
const ICON_URL_DEFAULT = 'img/pin.svg';
const ICON_URL_ACTIVE = 'img/pin-active.svg';

function Map({ offers, city, selectedPin }) {

  const mapContainerRef = useRef(null);
  const map = useMap(mapContainerRef, city);

  const defaultIcon = leaflet.icon({
    iconUrl: ICON_URL_DEFAULT,
    iconSize: [ICON_SIZE, ICON_SIZE],
    iconAnchor: [ICON_SIZE / 2, ICON_SIZE],
  });

  const activeIcon = leaflet.icon({
    iconUrl: ICON_URL_ACTIVE,
    iconSize: [ICON_SIZE, ICON_SIZE],
    iconAnchor: [ICON_SIZE / 2, ICON_SIZE],
  });

  if (!selectedPin) {
    selectedPin = 1; // For render without selectedPin(prop)
  };

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      markers.addTo(map);
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon: (offer.id === selectedPin.id) ? activeIcon : defaultIcon,
            },
          )
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
  }, [map, offers, selectedPin]);

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
  selectedPin: offerProp,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {Map};
export default connect(mapStateToProps)(Map);
