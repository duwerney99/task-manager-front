import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const getTasks = async () => {
  const response = await axios.get(`${BASE_URL}/tasks`);
  return response.data;
};
