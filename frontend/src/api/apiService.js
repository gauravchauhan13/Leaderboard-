// src/api/apiService.js
import axios from 'axios';

// Make sure to use the correct port your backend is running on
const API_URL = 'http://localhost:5000/api';

export const getUsers = () => {
  return axios.get(`${API_URL}/users`);
};

export const addUser = (name) => {
  return axios.post(`${API_URL}/users`, { name });
};

export const claimPoints = (userId) => {
  return axios.post(`${API_URL}/claim`, { userId });
};