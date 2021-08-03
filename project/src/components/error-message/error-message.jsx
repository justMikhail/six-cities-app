import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ErrorMessageText, REQUEST_TIMEOUT} from '../../const';
import {isRequestFailed, getIsOffline} from '../../store/user-data/selectors';
import {requestFailed, setIsOffline} from '../../store/action';
import './error-message.css';

function ErrorMessage() {

  const isRequestFail = useSelector(isRequestFailed);
  const isOffline = useSelector(getIsOffline);
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

  useEffect(() => {
    if (isOffline) {
      const timer = setTimeout(() => {
        dispatch(setIsOffline(false));
      }, REQUEST_TIMEOUT);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isOffline]);

  return (
    <div>
      {isOffline && (
        <div className="error-message error-message--offline">
          <p className="error-message__text">{ErrorMessageText.OFFLINE}</p>
        </div>
      )}
      {isRequestFail && (
        <div className="error-message error-message--default">
          <p className="error-message__text">{ErrorMessageText.DEFAULT}</p>
        </div>
      )}
    </div>
  );
}

export default ErrorMessage;
