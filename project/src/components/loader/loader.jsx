import React from 'react';
import './loader.css';

function Loader() {
  return (
    <div className="loading-wrapper">
      <div className="loader">
        <div className="loader-inner one"></div>
        <div className="loader-inner two"></div>
        <div className="loader-inner three"></div>
      </div>
    </div>
  );
}

export default Loader;
