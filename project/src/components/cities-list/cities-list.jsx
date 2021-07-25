import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';

import {CITIES} from '../../const';

function CitiesList({ city, changeCity, filterOffers }) {

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => city.name).map((cityName) => (
        <li className="locations__item" key={cityName}>
          <a
            className={`locations__item-link tabs__item ${cityName === city ? 'tabs__item--active' : ''}`}
            href={`#${cityName}`}
            onClick={() => {
              changeCity(cityName);
              filterOffers();
            }}
          >
            <span>{cityName}</span>
          </a>
        </li>),
      )}
    </ul>
  );
}

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  filterOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city.name,
});

const mapDispatchToProps = {
  changeCity: ActionCreator.changeCity,
  filterOffers: ActionCreator.filterOffers,
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
