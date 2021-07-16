import React from 'react';

const RATINGS = [
  { TITLE: 'perfect', ID: 5 },
  { TITLE: 'good', ID: 4 },
  { TITLE: 'not bad', ID: 3 },
  { TITLE: 'badly', ID: 2 },
  { TITLE: 'terribly', ID: 1  },
];

function ReviewRatingStars() {
  return (
    <>
      {RATINGS.map((rating) => (
        <React.Fragment key={rating.ID}>
          <input className="form__rating-input visually-hidden" name="rating" value={rating.ID} id={`${rating.ID}-stars`} type="radio"/>
          <label htmlFor={`${rating.ID}-stars`} className="reviews__rating-label form__rating-label" title={rating.TITLE}>
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
