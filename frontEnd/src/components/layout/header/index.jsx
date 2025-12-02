import { useState, useEffect } from "react";
import "./style.css"; // Importa o CSS
import logo from "../../../../src/assets/images/Logo.svg";
import axios from "axios";
import whats from "../../../../src/assets/images/whatsapp.svg";

export const Header = () => {
  // 1. Estado para armazenar os dados de temperatura
  const [temperatura, setTemperatura] = useState([]);

  const cidade = "Barueri";
  const key = "d6923e7a2a6f4109b7c3d3c1bbf86eab";

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${key}&lang=pt_br`
      )
      //   `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${cidade}&appid=${key}`
      // )

      .then((response) => {
        // .then trata o sucesso, jogando para dentro da variavel data
        console.log(response.data);

        setTemperatura(response.data); //Se a solicitação for bem-sucedida, os dados recebidos (data) são usados para atualizar o estado users (a lista de personagens).
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <header className="container-header">
      <div className="header-top-bar">
        <span className="header-title-top">SEJA BEM VINDO!</span>
      </div>
      <div className="main-header">
        {/* NOVO AGRUPAMENTO: Este contêiner irá alinhar o Logo, Clima e Navegação horizontalmente */}
        <div className="header-left">
          {/* 1. LOGO: Fica sozinho para ser alinhado separadamente pelo cabecalho-left */}
          <img src={logo} alt="" className="header-image" />
          {/* 2. CLIMA E TEMPERATURA: Agora contém APENAS o texto do clima */}
          <div className="header-climate-info">
            <div className="temperature-header">
              {/* {temperatura && temperatura.main ? ( */}
              <p className="local-temperature">Hoje em: {temperatura.name}</p>

              {temperatura && temperatura.main ? (
                <div className="temperature-values">
                  {/* Acessando diretamente as propriedades do objeto temperatura */}
                  <p>{Math.round(temperatura.main.temp_max)}°Máx</p>

                  <p>{Math.round(temperatura.main.temp_min)}°Mín</p>
                </div>
              ) : (
                // Opcional: Mostre uma mensagem de carregamento ou null enquanto os dados não chegam
                <p>Carregando dados de clima...</p>
              )}
            </div>
          </div>
        </div>
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
        <nav className="header-right-actions">
          <a
            href="https://api.whatsapp.com/send?phone=SEU_NUMERO_AQUI&text=Olá! Gostaria de fazer um pedido."
            target="_blank"
            className="whatsapp-button"
          >
            <img src={whats} alt="WhatsApp Icon" className="whatsapp-icon" />{" "}
          </a>{" "}
        </nav>{" "}
      </div>
      <div className="separator-header"></div>
    </header>
  );
};
