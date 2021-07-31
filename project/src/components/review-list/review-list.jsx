import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';
import reviewProp from '../propTypes/review.prop';

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
  reviews: PropTypes.arrayOf(reviewProp),
};

export default ReviewList;
