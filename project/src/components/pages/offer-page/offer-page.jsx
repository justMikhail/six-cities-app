import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {AuthorizationStatus, placeCardPageType, bookmarkBtnType, LIMIT_OF_SHOW_REVIEWS} from '../../../const';
import {getRatingPercent, ucFirst} from '../../../utils/utils';

import {
  fetchOffer,
  fetchNearbyOffersList,
  fetchReviewsList
} from '../../../store/api-actions';

import {
  changeActiveCard,
  setIsOfferDataLoaded,
  setIsDataLoadError
} from '../../../store/action';

import {
  getOffer,
  getReviews,
  getNearbyOffers,
  getIsOfferDataLoaded,
  getIsDataLoadError
} from '../../../store/data/selectors';

import {getActiveCityData} from '../../../store/offers/selectors';
import {getAuthorizationStatus} from '../../../store/user-data/selectors';

import Header from '../../header/header';
import PlaceCardList from '../../place-card-list/place-card-list';
import ReviewForm from '../../review-form/review-form';
import ReviewList from '../../review-list/review-list';
import Map from '../../map/map';
import Loader from '../../loader/loader';
import NotFoundPage from '../not-found-page/not-found-page';
import BookmarkBtn from '../../bookmark-btn/bookmark-btn';

import {LIMIT_OF_SHOW_IMAGE} from '../../../const';

function OfferPage() {

  const dispatch = useDispatch();

  const offer = useSelector(getOffer);
  const reviews = useSelector(getReviews);
  const cityData = useSelector(getActiveCityData);
  const nearbyOffers = useSelector(getNearbyOffers);
  const isOfferDataLoaded = useSelector(getIsOfferDataLoaded);
  const isDataLoadError = useSelector(getIsDataLoadError);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const reviewsAfterSort =
    reviews &&
    reviews
      .slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, LIMIT_OF_SHOW_REVIEWS);

  const location = useLocation();
  const offerId = location.pathname.replace('/offer/', '');

  const {
    images,
    title,
    isPremium,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    id,
  } = offer || {};

  const placeRating = getRatingPercent(rating ? rating : 0);

  useEffect(() => {
    dispatch(fetchOffer(offerId));
    dispatch(fetchNearbyOffersList(offerId));
    dispatch(fetchReviewsList(offerId));
    dispatch(changeActiveCard(parseInt(offerId, 10)));

    return () => {
      dispatch(setIsOfferDataLoaded(false));
      dispatch(setIsDataLoadError(false));
    };
  }, [offerId, AuthorizationStatus, dispatch]);

  if (isDataLoadError) {
    return (
      <NotFoundPage />
    );
  }

  if (!isOfferDataLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, LIMIT_OF_SHOW_IMAGE).map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt={type}/>
                </div>),
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>

                <BookmarkBtn
                  id={id}
                  isFavorite={isFavorite}
                  buttonType={bookmarkBtnType.offer}
                />

              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: placeRating}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {ucFirst(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((property) =>
                    <li className="property__inside-item" key={property}>{property}</li>,
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={reviewsAfterSort} />
                {authorizationStatus === AuthorizationStatus.AUTH && (
                  <ReviewForm id={offerId}/>
                )}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={nearbyOffers.concat(offer)}
              city={cityData}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceCardList offers={nearbyOffers} pageType={placeCardPageType.OFFER}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
