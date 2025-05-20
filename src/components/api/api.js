// api.js
import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://api.coderigi.co', // Replace with your API's base URL
});

// Add token to headers if it exists
api.interceptors.request.use((config) => {
  const token = Cookies.get('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export default api;
