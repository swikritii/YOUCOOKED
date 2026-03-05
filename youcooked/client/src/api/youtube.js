import apiClient from './axios';

export const youtubeApi = {
  getMetadata: (url) =>
    apiClient.get('/youtube', { params: { url } })
};
