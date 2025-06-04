import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Container, TextField, Typography, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createTask } from '../features/tasks/store/tasksThunk';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/common/BackButton';

const TaskCreatePage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await dispatch(createTask(data));
        navigate('/tasks');
    };

    return (
        <>
            <BackButton />
            <Container maxWidth="sm">
                <Typography variant="h4" gutterBottom>
                    Crear Nueva Tarea
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 2 }}>
                    <TextField
                        fullWidth
                        label="Título"
                        {...register('title', { required: 'Título requerido' })}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Descripción"
                        {...register('description', { required: 'Descripción requerida' })}
                        error={!!errors.description}
                        helperText={errors.description?.message}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        select
                        label="Estado"
                        defaultValue="pendiente"
                        {...register('status')}
                        margin="normal"
                    >
                        <MenuItem value="pendiente">Pendiente</MenuItem>
                        <MenuItem value="completada">Completada</MenuItem>
                    </TextField>

                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
                        Crear Tarea
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default TaskCreatePage;
