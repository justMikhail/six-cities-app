import React, {useState} from 'react';
import {connect} from 'react-redux';
import {SortType} from "../../const";
import {ActionCreator} from "../../store/action";

const sorts = Object.values(SortType);

function FormPlacesSorting({sortType, changeSort}) {
  const [sortIsOpen, setSortIsOpen] = useState(true);

  const toggleSort = () => {
    if (sortIsOpen) {
      setSortIsOpen(false)
    } else {
      setSortIsOpen(true)
    }
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={toggleSort}>
                  {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"/>
                    </svg>
                  </span>
      <ul className={`${sortIsOpen ? 'places__options--opened' : ''} places__options places__options--custom`}>
        {sorts.map((sort) =>
          <li
            key={sort}
            className={`${sortType === sort ? 'places__option--active' : ''} places__option`}
            tabIndex="0"
            onClick={() => changeSort(sort)}
          >
            {sort}
          </li>
        )}
      </ul>
    </form>
  );
}

const mapDispatchToProps = {
  changeSort: ActionCreator.changeSort,
};

export {FormPlacesSorting};
export default connect(null, mapDispatchToProps)(FormPlacesSorting);
