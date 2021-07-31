import React from 'react';
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../const';

import AuthUser from '../auth-user/auth-user';
import NoAuthUser from '../no-auth-user/no-auth-user';
import Logo from '../logo/logo';

import {getAuthorizationStatus} from '../../store/user-data/selectors';

function Header() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isAuthenticated = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            {isAuthenticated
              ? <AuthUser />
              : <NoAuthUser />}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
