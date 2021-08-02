import axios from 'axios';
import {BACKEND_URL ,REQUEST_TIMEOUT} from "../const";

const HttpCode = {
  UNAUTHORIZED: 401,
};

const getAuthToken = () => localStorage.getItem('token') ?? '';

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': getAuthToken(),
    },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);
  api.interceptors.request.use((config) => {
    config.headers['x-token'] = getAuthToken();
    return config;
  }, onFail);

  return api;
};
