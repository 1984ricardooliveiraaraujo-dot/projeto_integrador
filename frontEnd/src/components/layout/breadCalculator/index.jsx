import React, { useState, useMemo } from "react";
import "./style.css";

// ----------------------------------------------------
// Lógica de Cálculo Otimizada (Implementação da lógica Greedy)
// ----------------------------------------------------

/**
 * Calcula a quantidade otimizada de pães (G: 5, M: 3, P: 2) para um número de pessoas.
 * Prioriza o uso do maior pão disponível para minimizar o total de unidades.
 * @param {number} pessoas - O número total de pessoas a serem atendidas.
 * @returns {{G: number, M: number, P: number}} - A recomendação de pães.
 */
function calcularPao(pessoas) {
  const C_GIGANTE = 5; // Pão Gigante atende até 5 pessoas
  const C_MEDIO = 3; // Pão Médio atende até 3 pessoas
  const C_PADRAO = 2; // Pão Padrão atende até 2 pessoas

  const resultado = {
    G: 0, // Gigante
    M: 0, // Médio
    P: 0, // Padrão
  };

  let restantes = Math.max(0, pessoas); // Começa com o total de pessoas

  if (restantes <= 0) {
    return resultado;
  }

  // --- 1. Pães Gigantes (Capacidade 5) ---
  // Usa divisão inteira para calcular o máximo de Gigantes
  resultado.G = Math.floor(restantes / C_GIGANTE);
  restantes = restantes % C_GIGANTE; // Atualiza o resto

  // --- 2. Pães Médios (Capacidade 3) ---
  // Se sobrar, calcula o máximo de Médios
  if (restantes > 0) {
    resultado.M = Math.floor(restantes / C_MEDIO);
    restantes = restantes % C_MEDIO; // Atualiza o resto
  }

  // --- 3. Pães Padrão (Capacidade 2) ---
  // Qualquer pessoa restante (1 ou 2) é coberta pelo Padrão,
  // usando Math.ceil para garantir que mesmo 1 pessoa use 1 pão P.
  if (restantes > 0) {
    resultado.P = Math.ceil(restantes / C_PADRAO);
  }

  return resultado;
}

// ----------------------------------------------------
// Componente React (Não precisa de alterações)
// ----------------------------------------------------

export const BreadCalculator = () => {
  // Estado para armazenar o número de pessoas
  const [pessoas, setPessoas] = useState(0);

  // Calcula a recomendação sempre que 'pessoas' mudar
  // useMemo garante que o cálculo só roda quando 'pessoas' muda
  const recomendacao = useMemo(() => calcularPao(pessoas), [pessoas]);

  // Função para incrementar/decrementar o número de pessoas
  const handlePessoasChange = (incremento) => {
    setPessoas((prev) => {
      const novoValor = prev + incremento;
      // Garante que o valor nunca seja menor que zero
      return Math.max(0, novoValor);
    });
  };

  // Componente auxiliar para renderizar a coluna de resultados
  const ColunaResultado = ({ quantidade }) => (
    <p className="quantidade-item">{quantidade} un.</p>
  );

  return (
    <div className="calculadora-container">
      <div className="title-with-separators">
        <div className="line-separator-1"></div>
        <h2>Calculadora</h2>
        <div className="line-separator-2"></div>
      </div>
      <h2>Pães para o seu evento.</h2>

      <div className="card-grid">
        {/* COLUNA 1: Escolha o Número de Pessoas */}
        <div className="card-box">
          <h3 className="card-title">1 - Escolha o Número de Pessoas</h3>
          <div className="contador">
            <button
              onClick={() => handlePessoasChange(-1)}
              className="contador-btn"
            >
              -
            </button>
            <span className="contador-valor">{pessoas}</span>
            <button
              onClick={() => handlePessoasChange(1)}
              className="contador-btn"
            >
              +
            </button>
          </div>
        </div>

        {/* COLUNA 2: Tamanho Estimado do Pão (Fixo) */}
        <div className="card-box">
          <h3 className="card-title">2 - Tamanho Estimado do Pão</h3>
          {/* Aqui seria ideal mostrar a capacidade de cada pão para o usuário! */}
          <p className="tamanho-item">G - Gigante (até 5)</p>
          <p className="tamanho-item">M - Médio (até 3)</p>
          <p className="tamanho-item">P - Padrão (até 2)</p>
        </div>

        {/* COLUNA 3: Quantidade Estimada de Pães (Resultado) */}
        <div className="card-box">
          <h3 className="card-title">3 - Quantidade Estimada de Pães</h3>
          {/* Exibe o resultado da quantidade de unidades (un.) */}
          <ColunaResultado quantidade={recomendacao.G} />
          <ColunaResultado quantidade={recomendacao.M} />
          <ColunaResultado quantidade={recomendacao.P} />
        </div>
      </div>

      <nav className="container-btn">
        <a href="/menu" className="btn-primary">
          Ver Cardápio
        </a>
      </nav>

      {/* <button className="ver-cardapio-btn">Ver Cardápio</button> */}
    </div>
  );
};
