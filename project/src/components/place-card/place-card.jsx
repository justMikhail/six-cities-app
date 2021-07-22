import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {AppRoute, Color, PlaceCardPageType} from "../../const";
import {Link, generatePath} from 'react-router-dom';
import {getRatingPercent} from '../../utils/utils';
import offerProp from '../propTypes/offer.prop';

function PlaceCard({offer, pageType, setActivePlaceCard, activePlaceCard, changeActiveCard}) {
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

  const placeRating = getRatingPercent(rating);

  return (
    <article className={`${pageType.CLASS_LIST_ELEMENT} place-card`}
             onMouseEnter={pageType.type === PlaceCardPageType.MAIN.TYPE ? () => {
               setActivePlaceCard(id);
               changeActiveCard(id);
             } : null}
             onMouseLeave={pageType.type === PlaceCardPageType.MAIN.TYPE ? () => {
               activePlaceCard = null;
               changeActiveCard(null);
             } : null}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${pageType.CLASS_LIST_ELEMENT_WRAPPER} place-card__image-wrapper`}>
        <Link to={{pathname: generatePath(AppRoute.OFFER, { id }), state: id }}>
          <img className="place-card__image" src={previewImage} width={pageType.CARD_IMAGE_WIDTH} height={pageType.CARD_IMAGE_HEIGHT} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19"
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
          <Link to={{pathname: generatePath(AppRoute.OFFER, { id }), state: id }}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: offerProp,
  pageType: PropTypes.object.isRequired,
  setActivePlaceCard: PropTypes.func,
  activePlaceCard: PropTypes.number,
  changeActiveCard: PropTypes.func,
};

const mapDispatchToProps = {
  changeActiveCard: ActionCreator.changeActiveCard,
};

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);
