import React from 'react';

import { Rating } from '../../const';

function ReviewRatingStars() {
  return (
    <>
      {Rating.map((rating) => (
        <React.Fragment key={rating.id}>
          <input
            className="form__rating-input visually-hidden"
            type="radio"
            name="rating"
            value={rating.id}
            id={`${rating.id}-stars`}
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
    </>
  );
}

export default ReviewRatingStars;
