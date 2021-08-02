import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { ErrorMessageText, REQUEST_TIMEOUT } from '../../const';
import { isRequestFailed } from '../../store/user-data/selectors';
import { requestFailed } from '../../store/action'

function ErrorMessage() {

  const isRequestFail = useSelector(isRequestFailed);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRequestFail) {
      const timer = setTimeout(() => {
        dispatch(requestFailed(false))
      }, REQUEST_TIMEOUT);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isRequestFail]);

  return (
    <div>
      {isRequestFail && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '60px',
            backgroundColor: '#4481c3',
            textAlign: 'center',
            verticalAlign: 'center',
            color: 'white',
            zIndex: 1000,
          }}>
          <p>Oops! Something went wrong. Please, try again later!</p>
        </div>
      )}
    </div>
  )
}

ErrorMessage.defaultProps = {
  massage: ErrorMessageText.DEFAULT,
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
