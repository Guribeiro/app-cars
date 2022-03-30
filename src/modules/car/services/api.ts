import { API_URL, FAKE_API_URL } from '@env';
import axios from 'axios';

const baseURL = __DEV__ ? FAKE_API_URL : API_URL;

const api = axios.create({
  baseURL,
});

export default api;
