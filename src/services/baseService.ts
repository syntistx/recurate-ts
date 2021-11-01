/* eslint-disable no-param-reassign */
import axios from 'axios';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN, RECURATE_AUTH_TOKEN } from '../CONSTANTS';

const defaultHeader = (config:any) => {
  config.headers.common[RECURATE_AUTH_TOKEN] = process.env.REACT_APP_RECURATE_API_KEY;
  config.headers.common[ACCESS_TOKEN] = Cookies.get('access-token');
};

const baseService = () => {
  const defaultOptions = {
    baseURL: `${process.env.REACT_APP_RECURATE_API_URL}/api/v1`,
  };
  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use((config) => {
    defaultHeader(config);
    return config;
  },
  (error) => {
    Promise.reject(error);
  });

  return instance;
};

export default baseService();
