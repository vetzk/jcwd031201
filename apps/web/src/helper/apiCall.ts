import axios from 'axios';

const apiCall = axios.create({
  baseURL: 'http://localhost:8000',
});

if (typeof window !== 'undefined') {
  apiCall.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
}

export default apiCall;
