import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {postReview} from '../../store/api-actions';

import ReviewRatingStars from '../review-rating-stars/review-rating-stars';

import {getIsReviewSending} from '../../store/data/selectors';

const REVIEW_LENGTH = {
  min: 50,
  max: 300,
};

function ReviewForm({id}) {

  const dispatch = useDispatch();
  const [userReview, setUserReview] = useState({rating: '', text: ''});
  const isReviewSending = useSelector(getIsReviewSending);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    dispatch(postReview(id, userReview.text, userReview.rating));
    setUserReview({rating: '', text: ''});
  };

  const handleTextChange = ({target}) => {
    setUserReview({...userReview, text: target.value});
  };

  const handleRatingChange = ({target}) => {
    setUserReview({...userReview, rating: target.value});
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={(evt) => handleRatingChange(evt)}>
        <ReviewRatingStars handleRatingChange={handleRatingChange} rateChecked={+userReview.rating}/>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={REVIEW_LENGTH.min}
        maxLength={REVIEW_LENGTH.max}
        onChange={handleTextChange}
        value={userReview.text}
        disabled={isReviewSending}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isReviewSending || !(userReview.text.length >= REVIEW_LENGTH.min && userReview.rating)}
        >Submit
        </button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ReviewForm;
