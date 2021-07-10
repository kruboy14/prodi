import axios from 'axios';
import  config  from './config';
import { AxiosRequestConfig } from './types';

const makeRequest = ({
  url = '/',
  method = 'GET',
  headers = {},
  params = {},
  data = {},
}: AxiosRequestConfig) => {

  if(headers && headers.authorization) {
    // headers.authorization = config.token
  }

  return axios({ url, method, headers, params, data });
};
export default makeRequest;
