import { createAsyncThunk } from "@reduxjs/toolkit";
import { setTasks } from "./tasksSlice";
import { getTasks } from "../../../api/tasksApi";


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