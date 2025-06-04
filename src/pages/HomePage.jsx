import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center">
      <Typography variant="h3" gutterBottom>Bienvenido al Task Manager</Typography>
      <Button variant="contained" onClick={() => navigate('/tasks')}>
        Ver tareas
      </Button>
    </Box>
  );
};

export default HomePage;
