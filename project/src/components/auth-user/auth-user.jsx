import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {logout} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';
import {AppRoute} from '../../const';

function AuthUser({ onClick, email, avatarUrl, getUserData }) {

  const handleClick = () => {
    onClick(logout);
    getUserData({});
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

const mapStateToProps = ({ userData: { email, avatarUrl } }) => ({
  email,
  avatarUrl,
});

const mapDispatchToProps = {
  onClick: logout,
  getUserData: ActionCreator.getUserData,
};

AuthUser.propTypes = {
  onClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
};

export {AuthUser};
export default connect(mapStateToProps, mapDispatchToProps)(AuthUser);
