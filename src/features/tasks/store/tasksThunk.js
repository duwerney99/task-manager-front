import { createAsyncThunk } from "@reduxjs/toolkit";
import { setTasks } from "./tasksSlice";
import { createTaskService, getTasks } from "../../../api/tasksApi";


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
)


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
)