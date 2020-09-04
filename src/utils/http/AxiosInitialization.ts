import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const initializeAxios = (config: AxiosRequestConfig): AxiosInstance => {
    const instance = Axios.create(config);
    /*
      Add default headers, interceptors etc..
  */
    return instance;
};

export default initializeAxios;
