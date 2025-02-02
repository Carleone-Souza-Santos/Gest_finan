import React, { useState } from 'react';    
import { Container, Grid } from "@mui/material";
import FormFinance from "./components/Formfinanc";
import Result from "./components/Results";

const App = () => {
  const [preco, setPreco] = useState("");
  const [taxa, setTaxa] = useState("");
  const [transporte, setTransporte] = useState("");
  const [materiais, setMateriais] = useState("");
  const [alimento, setAlimento] = useState("");
  const [aluguel, setAluguel] = useState("");
  const [trafegoPago, setTrafegoPago] = useState("");
  const [quantidadeParticipantes, setQuantidadeParticipantes] = useState("");
  const [resultados, setResultados] = useState(null);

  const calcularTotal = () => {
    const numParticipantes = parseInt(quantidadeParticipantes) || 1;
    const custoMateriais = (parseFloat(materiais) || 0) * numParticipantes;
    const custoAlimentacao = (parseFloat(alimento) || 0) * numParticipantes;
  
    const totalGastos =
      (parseFloat(transporte) || 0) +
      custoMateriais +
      custoAlimentacao +
      (parseFloat(aluguel) || 0) +
      (parseFloat(trafegoPago) || 0);
  
    const taxaRetirada = parseFloat(taxa) || 0;
    const gastoPorParticipante = totalGastos / numParticipantes;
  
    let valorEntrada = (parseFloat(preco) || 0) * numParticipantes;
  
    const valorTaxa = (valorEntrada * taxaRetirada) / 100;
    const valorAdiantado = (valorEntrada * taxaRetirada) / 100;
    const lucro = valorEntrada - totalGastos;
    const restPaga = valorEntrada - valorAdiantado;
  
    setResultados({
      somaGastos: totalGastos.toFixed(2),
      taxaRetirada: taxaRetirada.toFixed(2),
      gastoPorParticipante: gastoPorParticipante.toFixed(2),
      lucro: lucro.toFixed(2),
      valorEntrada: valorEntrada.toFixed(2),
      valorTaxa: valorTaxa.toFixed(2),
      valorAdiantado: valorAdiantado.toFixed(2),
      restPaga: restPaga.toFixed(2),
    });
  };

  return (
    <Container sx={{ paddingTop: "20px" }}>
      <Grid container spacing={3}>
        {/* Lado esquerdo: Formulário */}
        <Grid item xs={12} md={6} className="no-print">
          <FormFinance
            preco={preco} setPreco={setPreco}
            taxa={taxa} setTaxa={setTaxa}
            transporte={transporte} setTransporte={setTransporte}
            materiais={materiais} setMateriais={setMateriais}
            alimento={alimento} setAlimento={setAlimento}
            aluguel={aluguel} setAluguel={setAluguel}
            trafegoPago={trafegoPago} setTrafegoPago={setTrafegoPago}
            quantidadeParticipantes={quantidadeParticipantes} setQuantidadeParticipantes={setQuantidadeParticipantes}
            calcularTotal={calcularTotal}
          />
        </Grid>
        {/* Lado direito: Resultados */}
        <Grid item xs={12} md={6}>
          {resultados && (
            <Result
              resultados={resultados}
              transporte={transporte}
              materiais={materiais}
              alimento={alimento}
              aluguel={aluguel}
              trafegoPago={trafegoPago}
              quantidadeParticipantes={quantidadeParticipantes}
              preco={preco}
            />
          )}
        </Grid>
      </Grid>
      
      {/* CSS global para impressão */}
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </Container>
  );
};

export default App;
