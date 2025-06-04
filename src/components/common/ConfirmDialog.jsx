import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

export const ConfirmDialog = ({ open, onClose, onConfirm, title, description }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title || '¿Confirmar acción?'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {description || '¿Estás seguro de que quieres continuar?'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button color="error" variant="contained" onClick={onConfirm}>Eliminar</Button>
      </DialogActions>
    </Dialog>
  );
};
