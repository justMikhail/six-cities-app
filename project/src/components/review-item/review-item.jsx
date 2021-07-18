import React from 'react';
import {getRatingPercent} from '../../utils/utils';
//imported props
import reviewProp from '../propTypes/review.prop';

function ReviewItem({review}) {
  const {
    comment,
    date,
    rating,
    user,
  } = review;

  const reviewRating = getRatingPercent(rating);

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
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date.slice(0, 10)}>{date.slice(0, 10)}</time>
      </div>
    </li>
  );
}

ReviewItem.propTypes = {
  review: reviewProp,
};

export default ReviewItem;
