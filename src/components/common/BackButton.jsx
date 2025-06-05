import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Tooltip title="Volver">
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>
    </Tooltip>
  );
};

