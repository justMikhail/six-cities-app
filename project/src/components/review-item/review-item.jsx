import React from 'react';
import {getRatingPercent} from '../../utils/utils';
import reviewProp from '../propTypes/review.prop';

function ReviewItem({ review }) {

  const {
    user,
    rating,
    comment,
    date,
  } = review;

  const reviewRating = getRatingPercent(rating);
  const CustomReviewDate = new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'long'});

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: reviewRating}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{CustomReviewDate}</time>
      </div>
    </li>
  );
}

ReviewItem.propTypes = {
  review: reviewProp,
};

export default ReviewItem;
