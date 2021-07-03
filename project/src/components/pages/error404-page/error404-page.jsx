import React from 'react';
import {AppRoute} from '../../../const';
import {Link} from 'react-router-dom';

function Error404Page() {
  return (
    <section style={{ margin: '0 auto' }}>
      <h1>404 Page Not Found</h1>
      <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
    </section>
  );
}

export default Error404Page;

