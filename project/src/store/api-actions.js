import {ActionCreator} from './action';
import {APIRoute} from '../const';
import {adaptOfferToClient} from './adapter';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map((adaptOfferToClient)))))
);
