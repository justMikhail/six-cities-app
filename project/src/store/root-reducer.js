import {combineReducers} from '@reduxjs/toolkit';

import {offers} from './offers/offers';
import {userData} from './user-data/user-data';
import {data} from './data/data';

export const NameSpace = {
  OFFERS: 'OFFERS',
  DATA: 'DATA',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.OFFERS]: offers,
  [NameSpace.USER]: userData,
});
