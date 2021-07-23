import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';

import {CITIES} from '../../const';

function CitiesList({ city, changeCity, fillOffersList }) {

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((citiesItem) => (
        <li className="locations__item" key={citiesItem}>
          <a
            className={`locations__item-link tabs__item ${citiesItem === city ? 'tabs__item--active' : ''}`}
            href={`#${citiesItem}`}
            onClick={() => {
              changeCity(citiesItem);
              fillOffersList(citiesItem);
            }}
          >
            <span>{citiesItem}</span>
          </a>
        </li>),
      )}
    </ul>
  );
}

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  fillOffersList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = {
  changeCity: ActionCreator.changeCity,
  fillOffersList: ActionCreator.fillOffersList,
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
