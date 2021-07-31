import React from 'react';
import { AppRoute } from '../../../const';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './not-found-page.module.css';
import img from'./img/not-found-page-img.jpg';

import Header from '../../header/header';

function NotFoundPage() {

  const location = useLocation();
  const locationPath = location.pathname;

  return (
    <div>
      <Header />
      <section className="container">
        <div className={styles.not_found_wrapper}>
          <h1 className="visually-hidden">404 Page Not Found</h1>
          <img className={styles.img} src={img} alt="Not Found"/>
          <p className={styles.text}>
            No match for <u>{locationPath}</u>
          </p>
          <Link to={AppRoute.MAIN}>
            <button className="reviews__submit form__submit button">
              Вернуться на главную
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;

