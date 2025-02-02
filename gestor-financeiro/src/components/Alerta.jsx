import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import logo from '../public/assets/log.png'; 

const AlertModal = ({ open, message, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={{ backgroundColor: '#db9a0fc3', color: '#d31313', display: 'flex', alignItems: 'center' }} id="alert-dialog-title">
        <img 
          src={logo} 
          alt="Logo" 
          style={{ width: 40, height: 40, marginRight: 8 }} 
        />
        <Typography variant="h6" component="span">Alerta!</Typography>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: '#ffffff' }} id="alert-dialog-description">
        <Typography variant="body1">{message}</Typography>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: '#ffffff' }}>
        <Button onClick={handleClose} color="inherit" variant="outlined" autoFocus>
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertModal;
