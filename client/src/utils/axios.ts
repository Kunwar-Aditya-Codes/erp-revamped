import axios from 'axios';

export const publicAxios = axios.create({
  baseURL: 'http://localhost:4000/api/erp/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const privateAxios = axios.create({
  baseURL: 'http://localhost:4000/api/erp/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
