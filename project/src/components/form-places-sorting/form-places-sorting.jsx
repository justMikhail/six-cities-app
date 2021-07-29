import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {SortType} from '../../const';
import {changeSort} from "../../store/action";

const sorts = Object.values(SortType);

function FormPlacesSorting({sortType}) {

  const dispatch = useDispatch();
  const [sortShown, setSortShown] = useState(false);
  const toggleSort = () => setSortShown(!sortShown);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={toggleSort}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`${sortShown ? 'places__options--opened' : ''} places__options places__options--custom`}>
        {sorts.map((sort) => (
          <li
            key={sort}
            className={`${sortType === sort ? 'places__option--active' : ''} places__option`}
            tabIndex="0"
            onClick={() => dispatch(changeSort(sort))}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
}

FormPlacesSorting.propTypes = {
  sortType: PropTypes.string.isRequired,
};

export default FormPlacesSorting;
