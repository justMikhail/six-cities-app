import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import offerProp from '../propTypes/offer.prop';
import {AppRoute, Color, placeCardPageType} from '../../const';
import {Link, generatePath} from 'react-router-dom';
import {getRatingPercent} from '../../utils/utils';
import {changeActiveCard} from '../../store/action';

function PlaceCard({offer, pageType}) {

  const {
    id,
    previewImage,
    price,
    rating,
    title,
    type,
    isFavorite,
    isPremium,
  } = offer;

  const dispatch = useDispatch();
  const placeRating = getRatingPercent(rating);
  const isMainType = pageType.type === placeCardPageType.MAIN.type;

  return (
    <article
      className={`${pageType.classListElement} place-card`}
      onMouseEnter={isMainType ? () => dispatch(changeActiveCard(id)) : null}
      onMouseLeave={isMainType ? () => dispatch(changeActiveCard(null)) : null}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${pageType.classListElementWrapper} place-card__image-wrapper`}>
        <Link to={{pathname: generatePath(AppRoute.OFFER, { id })}}>
          <img className="place-card__image" src={previewImage} width={pageType.cardImageWidth} height={pageType.cardImageHeight} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg
              className="place-card__bookmark-icon" width="18" height="19"
              style={{stroke: isFavorite ? Color.FAVORITE_CHECKED : Color.FAVORITE_NOT_CHECKED,
                fill: isFavorite ? Color.FAVORITE_CHECKED : null}}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: placeRating}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{pathname: generatePath(AppRoute.OFFER, { id })}}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: offerProp,
  pageType: PropTypes.object.isRequired,
};

export default PlaceCard;
