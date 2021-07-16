import React from 'react';
import PropTypes from 'prop-types';
//imported custom components
import ReviewItem from '../review-item/review-item';
//imported props
import reviewsProp from '../propTypes/review.prop';

function ReviewList({reviews}) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
        <ReviewItem key={review.id} review={review} />,
      )}
    </ul>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};

export default ReviewList;
