import React from 'react';
import {Link} from 'react-router-dom';
import {logout} from "../../store/api-actions";
import {AppRoute} from '../../const';
import {useDispatch, useSelector} from 'react-redux';

import {getUserData} from '../../store/user-data/selectors';

function AuthUser() {

  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const avatarUrl = userData.avatarUrl || localStorage.getItem('avatarUrl');
  const email = userData.email || localStorage.getItem('email');

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img src={avatarUrl} alt="user" />
          </div>
          <span className="header__user-name user__name">{email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to={AppRoute.LOGIN}>
          <span className="header__signout" onClick={handleClick}>Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export default AuthUser;
