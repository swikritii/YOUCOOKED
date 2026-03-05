import apiClient from './axios';

export const authApi = {
  register: (name, email, password) =>
    apiClient.post('/auth/register', { name, email, password }),
  
  login: (email, password) =>
    apiClient.post('/auth/login', { email, password }),
  
  me: () =>
    apiClient.get('/auth/me')
};
