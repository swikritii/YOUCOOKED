import apiClient from './axios';

export const recipesApi = {
  getAll: (params) =>
    apiClient.get('/recipes', { params }),
  
  getById: (id) =>
    apiClient.get(`/recipes/${id}`),
  
  create: (recipe) =>
    apiClient.post('/recipes', recipe),
  
  update: (id, recipe) =>
    apiClient.put(`/recipes/${id}`, recipe),
  
  delete: (id) =>
    apiClient.delete(`/recipes/${id}`),
  
  rate: (id, rating) =>
    apiClient.post(`/recipes/${id}/rate`, { rating })
};
