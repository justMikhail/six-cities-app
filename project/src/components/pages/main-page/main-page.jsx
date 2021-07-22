import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { PlaceCardPageType } from '../../../const';
import {sortOffers} from "../../../utils/sort-offers";

import Header from '../../header/header';
import MainEmpty from '../../main-empty/main-emty';
import PlaceCardList from '../../place-card-list/place-card-list';
import CitiesList from '../../cities-list/cities-list';
import FormPlacesSorting from '../../form-places-sorting/form-places-sorting';

import Map from '../../map/map';

import offerProp from '../../propTypes/offer.prop';

function MainPage({ offers, city, sortType }) {

  return (
    <div className={`${offers.length > 0 ? 'page page--gray' : 'page__main--index-empty page__main--index'} page--main`}>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        { offers.length > 0 ? (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} {offers.length > 1 ? 'places' : 'place'} to stay in {city}</b>
                <FormPlacesSorting sortType={sortType}/>
                <div className="cities__places-list places__list tabs__content">
                  <PlaceCardList
                    offers={sortOffers(sortType, offers)}
                    pageType={PlaceCardPageType.MAIN}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    offers={offers}
                    city={offers[0].city}
                  />
                </section>
              </div>
            </div>
          </div>
        ) : <MainEmpty city={city}/>}
      </main>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
  sortType: state.sortType,
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
