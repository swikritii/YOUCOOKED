import apiClient from './axios';

export const nutritionApi = {
  analyze: (ingredients) =>
    apiClient.get('/nutrition', { params: { ingredients: ingredients.join(',') } })
};
