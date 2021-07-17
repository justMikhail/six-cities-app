import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
//imported props
import offersProp from '../propTypes/offer.prop';

const ICON_SIZE = 30;
const ICON_URL = 'img/pin.svg';

function Map({offers}) {
  const mapContainerRef = useRef(null);

  const city = [52.38333, 4.9];
  const icon = leaflet.icon({
    iconUrl: ICON_URL,
    iconSize: [ICON_SIZE, ICON_SIZE],
    iconAnchor: [ICON_SIZE / 2, ICON_SIZE],
  });
  const zoom = 12;

  useEffect(() => {
    const map = leaflet.map(mapContainerRef.current, {
      center: city,
      zoom: zoom,
      zoomControl: false,
      marker: true,
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      })
      .addTo(map);

    offers.forEach((offer) => {
      const offerCords = [offer.location.latitude, offer.location.longitude];
      leaflet
        .marker(offerCords, {icon})
        .addTo(map);
    });

    return () => map.remove();
  }, [offers]);

  return (
    <div id="map" style={{height: '100%'}} ref={mapContainerRef} />
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
};

export default Map;
