import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Tooltip, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTask } from '../store/tasksThunk';
import { useDispatch } from 'react-redux';
import { ConfirmDialog } from '../../../components/common/ConfirmDialog';




const TaskCard = ({ task }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [openDialog, setOpenDialog] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);




    return (
        <Card
            variant="outlined"
            sx={{
                border: '2px solidrgb(112, 115, 117)',
                borderRadius: 2,
                my: 2,
                transition: '0.2s',
                '&:hover': {
                    boxShadow: 3,
                    borderColor: '#115293',
                },
            }}
        >
            <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {task.title}
                </Typography>
                <Typography gutterBottom>{task.description}</Typography>
                <Box mt={1}>
                    <Typography variant="caption" color="text.secondary">
                        Estado: {task.status}
                    </Typography>
                </Box>
                <Tooltip title="Editar tarea">
                    <IconButton onClick={() => navigate(`/tasks/${task.id}/edit`)}>
                        <EditIcon />
                    </IconButton>
                </Tooltip>
                <IconButton
                    color="error"
                    onClick={() => {
                        setTaskToDelete(task.id);
                        setOpenDialog(true);
                    }}
                >
                    <DeleteIcon />
                </IconButton>
            </CardContent>
            <ConfirmDialog
                open={openDialog}
                onClose={() => {
                    setOpenDialog(false);
                    setTaskToDelete(null);
                }}
                onConfirm={() => {
                    dispatch(deleteTask(taskToDelete));
                    setOpenDialog(false);
                    setTaskToDelete(null);
                }}
                title="Eliminar tarea"
                description="¿Estás seguro de que deseas eliminar esta tarea? Esta acción no se puede deshacer."
            />
        </Card>
    );
};

export default TaskCard;
