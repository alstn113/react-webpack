import { PROPERTIES } from '@/constants/properties';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: PROPERTIES.BASE_URL,
  withCredentials: true, // use cookies
});

export default apiClient;
