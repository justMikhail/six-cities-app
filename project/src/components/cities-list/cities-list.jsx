import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CITIES} from '../../const';

import {changeCity, filterOffersByCity} from '../../store/action';
import {getActiveCity} from '../../store/offers/selectors';

function CitiesList() {
  const dispatch = useDispatch();
  const currentCity = useSelector(getActiveCity);

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => city.name).map((cityName) => (
        <li className="locations__item" key={cityName}>
          <a
            className={`locations__item-link tabs__item ${cityName === currentCity
              ? 'tabs__item--active'
              : ''}
            `}
            href={`#${cityName}`}
            onClick={() => {
              dispatch(changeCity(cityName));
              dispatch(filterOffersByCity(cityName));
            }}
          >
            <span>{cityName}</span>
          </a>
        </li>),
      )}
    </ul>
  );
}

export default CitiesList;
