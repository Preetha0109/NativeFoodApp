import axios from 'axios';

export const REACT_URL = axios.create({
  baseURL: 'http://192.168.21.175:2000',
});
