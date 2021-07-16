import React from 'react';

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function CitiesList() {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li className="locations__item" key={city}>
          <a
            className={`locations__item-link tabs__item ${city ==='Amsterdam' ? 'tabs__item--active' : ''}`}
            href="#"
          >
            <span>{city}</span>
          </a>
        </li>),
      )}
    </ul>
  );
}

export default CitiesList;
