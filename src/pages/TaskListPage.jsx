import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CircularProgress, Container, Typography, IconButton, Tooltip, Fab } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../features/tasks/store/tasksThunk';
import TaskCard from '../features/tasks/components/TaskCard';
import { BackButton } from '../components/common/BackButton';
import AddIcon from '@mui/icons-material/Add';


const TaskListPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { items: tasks, loading } = useSelector((state) => state.tasks);


    
    useEffect(() => {
        dispatch(fetchTasks());
    }, []);


    return (
        <>
            <Box>
                <BackButton display="flex" alignItems="center" mb={2} />
                <Container>
                    <Box>
                        <Typography variant="h4" gutterBottom>
                            Lista de Tareas
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                        <Tooltip title="Crear nueva tarea">
                            <Fab color="primary" onClick={() => navigate('/tasks/create')}>
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                    </Box>
                    {loading ? (
                        <Box textAlign="center"><CircularProgress /></Box>
                    ) : (

                        tasks.map((task) => (
                            <TaskCard key={task.id} task={task} />
                        ))
                    )}
                </Container>
            </Box>
        </>
    );
};

export default TaskListPage;
