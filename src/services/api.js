import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000', // Change this to your backend URL
});

export const submitFeedback = (feedback) => {
  return api.post('/feedback', feedback);
};

export const getFeedback = () => {
  return api.get('/feedback');
};
