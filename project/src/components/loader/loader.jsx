import React, {useEffect} from 'react';
import './loader.css';
import ErrorMessage from '../error-message/error-message';
import {REQUEST_TIMEOUT} from '../../const';
import {useDispatch} from 'react-redux';
import {requestFailed} from '../../store/action';

function Loader() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(requestFailed(true));
    }, REQUEST_TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="loading-wrapper">
      <div className="loader-center loader-container">
        <ErrorMessage />
        <div className="loader">
          <div className="loader__2"></div>
          <div className="loader__3"></div>
          <div className="loader__4"></div>
        </div>
        <span className="loader__text">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
