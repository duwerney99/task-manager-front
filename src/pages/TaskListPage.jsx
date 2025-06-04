import React, { useEffect } from 'react';
import { Box, Card, CircularProgress, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../features/tasks/store/tasksThunk';
import TaskCard from '../features/tasks/components/TaskCard';

const TaskListPage = () => {
    const dispatch = useDispatch();
    const { items: tasks, loading } = useSelector((state) => state.tasks);


    useEffect(() => {
        dispatch(fetchTasks());
    }, []);


    return (

        <Container>
            <Typography variant="h4" gutterBottom>
                Lista de Tareas
            </Typography>
                {loading ? (
                    <Box textAlign="center"><CircularProgress /></Box>
                ) : (
                    tasks.map((task) => (
                        <TaskCard key={task.id} task={task}/>
                    ))
                )}
        </Container>

    );
};

export default TaskListPage;
