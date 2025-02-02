import React from "react";
import { Pie } from "react-chartjs-2";
import { Box } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Grafico = ({ transporte, materiais, Alimento, aluguel, trafegoPago }) => {
  const data = {
    labels: ["Transp", "Mat", "Alimentação", "Aluguel", "Tráfego Pago"],
    datasets: [
      {
        data: [
          parseFloat(transporte),
          parseFloat(materiais),
          parseFloat(Alimento),
          parseFloat(aluguel),
          parseFloat(trafegoPago),
        ],
        backgroundColor: ["#0bdb7a", "#201464", "#8b4513", "#5514aa", "#2460cf"],
      },
    ],
  };

  return (
    <Box display="flex" justifyContent="center">
      <Pie
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true, 
              position: "top", 
              labels: {
                display: false, 
                boxWidth: 10, 
              },
            },
          },
        }}
        height={200}
        width={200}
      />
    </Box>
  );
};

export default Grafico;