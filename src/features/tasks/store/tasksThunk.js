import { createAsyncThunk } from "@reduxjs/toolkit";
import { setTasks } from "./tasksSlice";
import { createTaskService, deleteTaskService, editTaskService, getTaskById, getTasks } from "../../../api/tasksApi";


export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (_, thunkAPI) => {
        try {
            const data = await getTasks();
            thunkAPI.dispatch(setTasks(data));
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Error fetching tasks');
        }
    }
);


export const createTask = createAsyncThunk(
    'task/create',
    async (taskData, thunkAPI) => {
        try {
            const data = await createTaskService(taskData);
            thunkAPI.dispatch(fetchTasks());
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Error creating task');
        }
    }
);

export const updateTask = createAsyncThunk(
    'task/edit',
    async ({ id, ...data }, thunkAPI) => {
        try {
            await editTaskService(id, data);
            thunkAPI.dispatch(fetchTasks());
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Error updating task');
        }
    }
);


export const fetchTaskById = createAsyncThunk(
  'tasks/fetchById',
  async (id, thunkAPI) => {
    try {
      const data = await getTaskById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Error fetching task');
    }
  }
);


export const deleteTask = createAsyncThunk(
  'tasks/delete',
  async (id, thunkAPI) => {
    try {
      await deleteTaskService(id);
      thunkAPI.dispatch(fetchTasks());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Error deleting task');
    }
  }
);