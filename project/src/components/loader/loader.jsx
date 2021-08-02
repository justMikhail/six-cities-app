import React, {useEffect} from "react";
import './loader.css';
import ErrorMessage from "../error-message/error-message";
import {REQUEST_TIMEOUT} from "../../const";
import {useDispatch} from "react-redux";
import {requestFailed} from "../../store/action";

function Loader() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(requestFailed(true));
    }, REQUEST_TIMEOUT);

    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <div className="loading-wrapper">
      <ErrorMessage/>
      <div className="loader">
        <div className="loader-inner one"></div>
        <div className="loader-inner two"></div>
        <div className="loader-inner three"></div>
      </div>
      <ErrorMessage />
    </div>
  );
}

export default Loader;
