import React from 'react';
import PropTypes from 'prop-types';
import {Ratings} from '../../const';

function ReviewRatingStars({ handleRatingChange, ratingChecked, disabled }) {

  return (
    <div className="reviews__rating-form form__rating" onChange={handleRatingChange}>
      {Object.values(Ratings).map((rating) => (
        <React.Fragment key={rating.id}>
          <input
            className="form__rating-input visually-hidden"
            type="radio"
            name="rating"
            value={rating.id}
            id={`${rating.id}-stars`}
            checked={ratingChecked === rating.id}
            readOnly
            disabled={disabled}
          />
          <label
            className="reviews__rating-label form__rating-label"
            htmlFor={`${rating.id}-stars`}
            title={rating.name}
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}

ReviewRatingStars.propTypes = {
  handleRatingChange: PropTypes.func.isRequired,
  ratingChecked: PropTypes.number.isRequired,
};

export default ReviewRatingStars;
