import { useState, useEffect } from "react";
import "./style.css";
import logo from "../../../../src/assets/images/Logo.svg";
import axios from "axios";
import whats from "../../../../src/assets/images/whatsapp.svg";

export const Header = () => {
  // 1. Estado para armazenar os dados de temperatura
  // iniciar com NULL, pois a API retorna um OBJETO (não um Array).
  const [temperatura, setTemperatura] = useState(null);

  const cidade = "Barueri";
  const key = "d6923e7a2a6f4109b7c3d3c1bbf86eab";

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${key}&lang=pt_br`
      )
      .then((response) => {
        console.log(response.data);
        setTemperatura(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // 1. CHECAGEM: Se 'temperatura' for nulo OU não tiver a propriedade 'main',
  // significa que os dados ainda estão carregando ou falharam.
  if (!temperatura || !temperatura.main) {
    // 2. RETORNO ANTECIPADO (Early Return): Mostra o cabeçalho com a mensagem de carregamento.
    return (
      <header className="container-header">
        <div className="header-top-bar">
          <span className="header-title-top">SEJA BEM VINDO!</span>
        </div>
        <div className="main-header">
          <div className="header-left">
            <img src={logo} alt="Logo" className="header-image" />

            {/* O bloco de clima mostra apenas a mensagem de carregamento */}
            <div className="header-climate-info">
              <div className="temperature-header">
                <p>Carregando dados de clima...</p>
              </div>
            </div>
          </div>

          {/* Mantendo Navegação e WhatsApp no retorno de carregamento */}
          <nav className="nav-header">{/* ... Navegação ... */}</nav>
          <nav className="header-right-actions">{/* ... WhatsApp ... */}</nav>
        </div>
        <div className="separator-header"></div>
      </header>
    );
  }

  return (
    <header className="container-header">
      {/* todo o header */}
      <div className="header-top-bar">
        <span className="header-title-top">SEJA BEM VINDO!</span>
      </div>

      <div className="main-header">
        <div className="header-left">
          {/* 1. LOGO */}
          <img src={logo} alt="" className="header-image" />

          {/* 2. CLIMA E TEMPERATURA: AGORA COM DADOS GARANTIDOS */}
          <div className="header-climate-info">
            <div className="temperature-header">
              {/* Note que as verificações 'temperatura && temperatura.main ?' não são mais necessárias aqui */}
              <p className="local-temperature">Hoje em: {temperatura.name}</p>

              <div className="temperature-values">
                <p>{Math.round(temperatura.main.temp_max)}°Máx</p>
                <p>{Math.round(temperatura.main.temp_min)}°Mín</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. NAVEGAÇÃO */}
        <nav className="nav-header">
          <ul className="navigation-list">
            <li>
              <a href="">Sobre Nós</a>
            </li>
            <li>
              <a href="">Cardápio</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </nav>

        {/* 4. AÇÕES DIREITAS (WhatsApp) */}
        <nav className="header-right-actions">
          <a
            href="https://api.whatsapp.com/send?phone=SEU_NUMERO_AQUI&text=Olá! Gostaria de fazer um pedido."
            target="_blank"
            className="whatsapp-button"
            rel="noopener noreferrer" // Boa prática para target="_blank", gera mais segurança para o usuario
          >
            <img src={whats} alt="WhatsApp Icon" className="whatsapp-icon" />{" "}
          </a>
        </nav>
      </div>
      <div className="separator-header"></div>
    </header>
  );
};
