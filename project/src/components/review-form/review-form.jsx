import React, {useState} from 'react';
//imported custom components
import ReviewRatingStars from '../review-rating-stars/review-rating-stars';

function ReviewForm() {
  const [userReview, setUserReview] = useState({rating: '', text: ''});

  const onFormSubmit = () => {};
  const onTextChange = ({target}) => {
    setUserReview({...userReview, text: target.value});
  };
  const onRatingChange = ({target}) => {
    setUserReview({...userReview, rating: target.value});
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={(evt) => onRatingChange(evt)}>
        <ReviewRatingStars />
      </div>
      <textarea className="reviews__textarea form__textarea"
                id="review"
                name="review"
                placeholder="Tell how was your stay, what you like and what can be improved"
                minLength={50}
                onChange={(evt) => onTextChange(evt)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
