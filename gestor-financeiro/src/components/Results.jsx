import React from "react";
import { Paper, Typography, Divider, Box } from "@mui/material";
import Grafico from "./Grafico";
import logo from "../public/assets/log.png"; // Ajuste o caminho conforme sua estrutura

const Result = ({
  resultados = {},
  transporte = 0,
  materiais = 0,
  alimento = 0,
  aluguel = 0,
  trafegoPago = 0,
  quantidadeParticipantes = 0,
  preco = 0,
}) => {
  // Calcula o valor do lucro (garante que seja numérico)
  const lucroValue = parseFloat(resultados.lucro || 0);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#181717",
        padding: 2,
        borderRadius: 15,
        width: "100%",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          padding: "10px",
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#e5f0ed",
        }}
      >
        {/* Logo inserido no topo */}
        <Box sx={{ display: "flex", justifyContent: "start", mb: 1 }}>
          <img src={logo} alt="Logo" style={{ width: 30, height: 30 }} />
        </Box>
        <Typography
          variant="h6"
          align="center"
          color="primary"
          sx={{ marginBottom: 1, fontSize: "16px" }}
        >
          Resultados
        </Typography>
        <Divider sx={{ marginBottom: 1 }} />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Typography variant="body2" color="textSecondary">
            📌 <strong>Quantidade de Alunos:</strong>{" "}
            <span style={{ color: "#0c66a1", fontSize: "14px" }}>
              {quantidadeParticipantes || 0}
            </span>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            📌 <strong>Valor de Entrada:</strong>{" "}
            <span style={{ color: "#110deb", fontSize: "14px" }}>
              R$ {preco ? parseFloat(preco).toFixed(2) : "0.00"}
            </span>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            📌 <strong>Investimentos:</strong>{" "}
            <span style={{ color: "#d16813", fontSize: "14px" }}>
              R$ {parseFloat(resultados.somaGastos || 0).toFixed(2)}
            </span>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            📌 <strong>Gasto por Participante:</strong>{" "}
            <span style={{ color: "#e91506", fontSize: "14px" }}>
              R$ {parseFloat(resultados.gastoPorParticipante || 0).toFixed(2)}
            </span>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            📌 <strong>Valor Adiantado:</strong>{" "}
            <span style={{ color: "#200ec7", fontSize: "14px" }}>
              R$ {parseFloat(resultados.valorAdiantado || 0).toFixed(2)}
            </span>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            📌 <strong>Restante a Pagar:</strong>{" "}
            <span style={{ color: "#200ec7", fontSize: "14px" }}>
              R$ {parseFloat(resultados.restPaga || 0).toFixed(2)}
            </span>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            📌 <strong>Lucro:</strong>{" "}
            <span
              style={
                lucroValue <= 0
                  ? {
                      color: "#ff0000",
                      fontSize: "16px",
                      border: "1px dashed red",
                      padding: "2px",
                    }
                  : { color: "#41ac33", fontSize: "16px" }
              }
            >
              R$ {lucroValue.toFixed(2)}
            </span>
          </Typography>
        </Box>

        <Divider sx={{ marginY: 1 }} />

        <Typography
          variant="h6"
          align="center"
          color="primary"
          sx={{ marginBottom: 1, fontSize: "16px" }}
        >
          🛒 Detalhamento dos Gastos
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Typography variant="body2" color="textSecondary">
            🍞 <strong>Alimentação:</strong>{" "}
            <span style={{ color: "#8B4513", fontSize: "14px" }}>
              R$ {parseFloat(alimento).toFixed(2)}
            </span>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            🏠 <strong>Aluguel:</strong>{" "}
            <span style={{ color: "#5514aa", fontSize: "14px" }}>
              R$ {parseFloat(aluguel).toFixed(2)}
            </span>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            🚀 <strong>Valor do Tráfego Pago:</strong>{" "}
            <span style={{ color: "#2460cf", fontSize: "14px" }}>
              R$ {parseFloat(trafegoPago).toFixed(2)}
            </span>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            📦 <strong>Materiais Investidos:</strong>{" "}
            <span style={{ color: "#201464", fontSize: "14px" }}>
              R$ {parseFloat(materiais).toFixed(2)}
            </span>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            🚗 <strong>Transporte:</strong>{" "}
            <span style={{ color: "#054e2c", fontSize: "14px" }}>
              R$ {parseFloat(transporte).toFixed(2)}
            </span>
          </Typography>
        </Box>

        <Divider sx={{ marginY: 1 }} />

        <Box
          sx={{
            width: "100%",
            mt: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Grafico
            transporte={transporte}
            materiais={materiais}
            alimento={alimento}
            aluguel={aluguel}
            trafegoPago={trafegoPago}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default Result;
