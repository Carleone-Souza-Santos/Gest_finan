import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import AlertModal from "./Alerta";

const FormFinance = ({
  preco, setPreco,
  taxa, setTaxa,
  transporte, setTransporte,
  materiais, setMateriais,
  alimento, setAlimento, 
  aluguel, setAluguel,
  trafegoPago, setTrafegoPago,
  quantidadeParticipantes, setQuantidadeParticipantes,
  calcularTotal
}) => {
  // O formulário e o botão Calcular permanecerão visíveis
  const [mostrarImprimir, setMostrarImprimir] = useState(false);
  
  // Estado para exibição do modal
  const [openModal, setOpenModal] = useState(false);
  const modalMessage = "Preencha todos os campos corretamente!";

  const handleImprimir = () => {
    window.print();
    resetCampos();
  };
  
  const resetCampos = () => {
    // Resetamos os estados para valores vazios (ou 1, conforme sua necessidade)
    setPreco("");
    setTaxa("");
    setTransporte("");
    setMateriais("");
    setAlimento("");
    setAluguel("");
    setTrafegoPago("");
    setQuantidadeParticipantes("");
    setMostrarImprimir(false);
  };
  
  const handleCalcular = () => {
    const fields = [preco, taxa, transporte, materiais, alimento, aluguel, trafegoPago, quantidadeParticipantes];
    
    
    const algumCampoVazio = fields.some(field => field.toString().trim() === "");
    
    const algumCampoInvalido = fields.some(field => isNaN(Number(field)));
    
    if (algumCampoVazio || algumCampoInvalido) {
      setOpenModal(true);
      return;
    }
    
    calcularTotal();
    setMostrarImprimir(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={{ 
      padding: 4, 
      marginTop: 12, 
      backgroundColor: "#f7f7f7ea", 
      borderRadius: 4, 
      boxShadow: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '70vh',
    }}>
      <Typography 
        variant="h5" 
        align="center" 
        gutterBottom 
        sx={{ color: "#333", fontWeight: 600 }}
      >
        Calculadora de Custos
      </Typography>
      
      {/* Container do formulário com classe "no-print" para ocultar na impressão */}
      <Grid container spacing={3} className="no-print">
        <Grid item xs={12} sm={6}>
          <TextField
            label="Valor do Curso"
            variant="outlined"
            fullWidth
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Adiantamento (%)"
            variant="outlined"
            fullWidth
            value={taxa}
            onChange={(e) => setTaxa(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Transporte"
            variant="outlined"
            fullWidth
            value={transporte}
            onChange={(e) => setTransporte(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Materiais"
            variant="outlined"
            fullWidth
            value={materiais}
            onChange={(e) => setMateriais(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Alimentação"
            variant="outlined"
            fullWidth
            value={alimento}
            onChange={(e) => setAlimento(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Aluguel"
            variant="outlined"
            fullWidth
            value={aluguel}
            onChange={(e) => setAluguel(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Tráfego Pago"
            variant="outlined"
            fullWidth
            value={trafegoPago}
            onChange={(e) => setTrafegoPago(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Quantidade de Participantes"
            variant="outlined"
            fullWidth
            value={quantidadeParticipantes}
            onChange={(e) => setQuantidadeParticipantes(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleCalcular}
          >
            Calcular
          </Button>
        </Grid>
      </Grid>

      {mostrarImprimir && (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleImprimir}
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
          className="hidden-print"
        >
          Imprimir
        </Button>
      )}

      {/* Modal alerta */}
      <AlertModal
        open={openModal} 
        message={modalMessage} 
        handleClose={handleCloseModal} 
      />

      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          .hidden-print {
            display: none !important;
          }
        }
      `}</style>
    </Box>
  );
};

export default FormFinance;
