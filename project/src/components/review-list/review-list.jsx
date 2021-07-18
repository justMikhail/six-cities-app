import React from 'react';
import PropTypes from 'prop-types';
//imported custom components
import ReviewItem from '../review-item/review-item';
//imported props
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
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default ReviewList;
