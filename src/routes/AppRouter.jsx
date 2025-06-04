import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TaskListPage from '../pages/TaskListPage';
import { MainLayout } from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';



const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <MainLayout /> }>
                    <Route index element={ <HomePage />} />
                    <Route path="/tasks" element={<TaskListPage />}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;