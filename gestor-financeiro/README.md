# Calculadora de Custos

Este projeto é uma aplicação web construída com React que permite calcular os custos e lucros de um curso, com base em diversos investimentos e parâmetros informados pelo usuário. A aplicação utiliza Material-UI para os componentes visuais, Chart.js (via react-chartjs-2) para exibir gráficos, e conta com uma interface responsiva e funcionalidades para impressão.

## Tecnologias Utilizadas

- **React** – Biblioteca JavaScript para construção de interfaces de usuário.
- **Material-UI (@mui/material)** – Biblioteca de componentes UI para React.
- **@emotion/react** e **@emotion/styled** – Bibliotecas para estilização utilizadas pelo Material-UI.
- **Chart.js** e **react-chartjs-2** – Para criação de gráficos interativos.
- **JavaScript (ES6+)** – Linguagem de programação.
- **CSS / CSS-in-JS** – Estilização via Material-UI (sx prop e CSS global).

## Funcionalidades

- **Formulário Interativo:** Permite que o usuário informe valores como preço do curso, taxa de adiantamento, custos de transporte, materiais, alimentação, aluguel, tráfego pago e quantidade de participantes.
- **Validação e Modal de Alerta:** Exibe um modal de alerta caso algum campo obrigatório esteja vazio ou com valor inválido.
- **Cálculo de Resultados:** Calcula investimentos, gastos por participante, lucro, valor da taxa e demais informações relevantes.
- **Exibição de Gráficos:** Mostra um gráfico em formato de pizza (Pie Chart) com a distribuição dos gastos.
- **Impressão Personalizada:** Ao imprimir, o formulário é ocultado e somente os resultados são exibidos.

## Como Instalar e Executar

### Pré-requisitos

Certifique-se de ter o Node.js (v14 ou superior) e o npm (ou yarn) instalados.

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio

   Usando npm:
   npm start

/src
   ── components/
  │     ├── Alerta.jsx      
  │     ├── Formfinanc.jsx   
  │     ├── Results.jsx      
  │     └── Grafico.jsx
   ── public/
  │     └── assets/
               └── log.png 
               └── planFund.png   
  ├── theme/
  │     ├── theme.js     
  │      
  ├── App.jsx     
  ├── index.css               
  ├── main.jsx             
── index.html       