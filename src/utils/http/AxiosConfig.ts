import { AxiosRequestConfig } from 'axios';

export const AxiosRequestConfiguration: AxiosRequestConfig = {
    // baseURL: 'http://localhost:3000',
    baseURL: 'https://',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
};
