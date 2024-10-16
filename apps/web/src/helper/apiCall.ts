import axios from 'axios';

const apiCall = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
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
