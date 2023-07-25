import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('fulltimeforce_token');
  config.headers!.Authorization = token ? `Bearer ${token}` : '';

  return config;
});

export default api;
