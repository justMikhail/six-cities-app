import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {login} from '../../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {getAuthorizationStatus} from '../../../store/user-data/selectors';

import Header from '../../header/header';

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector(getAuthorizationStatus);
  const emailRef = useRef(null);
  const [password, setPassword] = useState('');

  if (auth === AuthorizationStatus.AUTH) {
    history.push(AppRoute.MAIN);
  }

  const handleChange = (evt) => {
    setPassword(evt.target.value.trim());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      login: emailRef.current.value,
      password: password,
    }));

    history.push(AppRoute.MAIN);
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={handleSubmit}
              className="login__form form"
              action="#"
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="Email"
                  required={true}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" href="#" to={AppRoute.MAIN}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
