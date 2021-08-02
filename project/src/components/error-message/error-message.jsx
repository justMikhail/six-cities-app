import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import PropTypes from 'prop-types';
import { ErrorMessageText, REQUEST_TIMEOUT } from '../../const';
import { isRequestFailed } from '../../store/user-data/selectors';
import { requestFailed } from '../../store/action';
import './error-message.css';

function ErrorMessage() {

  const isRequestFail = useSelector(isRequestFailed);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRequestFail) {
      const timer = setTimeout(() => {
        dispatch(requestFailed(false));
      }, REQUEST_TIMEOUT);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isRequestFail]);

  return (
    <div>
      {isRequestFail && (
        <div className="error-message">
          <p className="error-message__text">Something went wrong. Please, try again later!</p>
        </div>
      )}
    </div>
  );
}

//ErrorMessage.defaultProps = {
//  massage: ErrorMessageText.DEFAULT,
//};
//
//ErrorMessage.propTypes = {
//  ErrorMessageText: PropTypes.shape({
//    DEFAULT: PropTypes.string.isRequired,
//    OFFLINE: PropTypes.string.isRequired,
//  })
//}

export default ErrorMessage;
