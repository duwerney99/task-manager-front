import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TaskListPage from '../pages/TaskListPage';



const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/tasks" element={<TaskListPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;