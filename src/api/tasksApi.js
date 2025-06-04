import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const getTasks = async () => {
  const response = await axios.get(`${BASE_URL}/tasks`);
  return response.data;
};


export const createTaskService = async (taskData) => {
  const response = await axios.post(`${BASE_URL}/tasks`, taskData);
  return response.data;
};


export const editTaskService = async (id, taskData) => {
  const response = await axios.put(`${BASE_URL}/tasks/${id}`, taskData);
  return response.data;
};


export const getTaskById = async (id) => {
  const response = await axios.get(`${BASE_URL}/tasks/${id}`);
  return response.data;
};
