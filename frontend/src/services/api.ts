import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  register: (email: string, password: string, name: string) =>
    api.post('/auth/register', { email, password, name }),
};

export const portfolio = {
  get: (userId: string, startDate?: string, endDate?: string) =>
    api.get(`/portfolio/${userId}`, { params: { startDate, endDate } }),
  update: (userId: string, data: any) =>
    api.put(`/portfolio/${userId}`, data),
};

export const strategies = {
  getAll: (filters?: { startDate?: string; endDate?: string; sortBy?: string }) =>
    api.get('/strategy', { params: filters }),
  getById: (id: string) =>
    api.get(`/strategy/${id}`),
};

export const marketUpdates = {
  getAll: () => api.get('/market-updates'),
  getRecent: (limit: number = 10) => api.get(`/market-updates/recent?limit=${limit}`),
};