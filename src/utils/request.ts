import axios, {AxiosResponse} from 'axios';
import Apis from '../api/Apis';

const instance = axios.create({
  baseURL: 'http://192.168.3.6:7001',
  timeout: 10 * 1000,
});

instance.interceptors.response.use(
  response => response,
  error => {
    const {response} = error;
    if (response) {
      const {status} = response;
      if (status >= 500) {
      } else if (status === 400) {
      } else if (status === 401) {
      } else {
      }
    } else {
    }
    return Promise.reject(error);
  },
);

export const request = (
  name: string,
  params: any,
): Promise<AxiosResponse<any, any>> => {
  const api = (Apis as any)[name];
  const {url, method} = api;
  if (method === 'get') {
    return get(url, params);
  } else {
    return post(url, params);
  }
};

export const get = (
  url: string,
  params: any,
): Promise<AxiosResponse<any, any>> => {
  return instance.get(url, {
    params: params,
  });
};

export const post = (
  url: string,
  params: any,
): Promise<AxiosResponse<any, any>> => {
  return instance.post(url, params);
};
