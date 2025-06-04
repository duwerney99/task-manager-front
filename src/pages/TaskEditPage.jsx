import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button, Container, TextField, Typography, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchTaskById, updateTask } from '../features/tasks/store/tasksThunk';
import { BackButton } from '../components/common/BackButton';

export const TaskEditPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(null);

    const { register, handleSubmit, control, reset } = useForm();

    useEffect(() => {
        const loadTask = async () => {
            try {
                const resultAction = await dispatch(fetchTaskById(id));
                if (fetchTaskById.fulfilled.match(resultAction)) {
                    setTask(resultAction.payload);
                    reset({
                        title: resultAction.payload.title,
                        description: resultAction.payload.description,
                        status: resultAction.payload.status,
                    });
                } else {
                    throw new Error('No se pudo cargar la tarea');
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        loadTask();
    }, [id, dispatch, reset]);

    const onSubmit = async ({ status }) => {
        await dispatch(updateTask({ id, status }));
        navigate('/tasks');
    };

    if (loading) return <Typography>Cargando tarea...</Typography>;

    if (!task) {
        return <Typography>Tarea no encontrada</Typography>;
    }

    return (
        <Container maxWidth="sm">
            <Box display="flex" alignItems="center" mb={2}>
                <BackButton />
                <Typography variant="h5" ml={2}>Editar Tarea</Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextField
                    fullWidth
                    label="Título"
                    {...register('title')}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Descripción"
                    {...register('description')}
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="status-label">Estado</InputLabel>
                    <Controller
                        name="status"
                        control={control}
                        defaultValue="pendiente"
                        render={({ field }) => (
                            <Select
                                {...field}
                                labelId="status-label"
                                label="Estado"
                            >
                                <MenuItem value="pendiente">Pendiente</MenuItem>
                                <MenuItem value="completada">Completada</MenuItem>
                            </Select>
                        )}
                    />
                </FormControl>
                <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
                    Guardar Cambios
                </Button>
            </Box>
        </Container>
    );
};
