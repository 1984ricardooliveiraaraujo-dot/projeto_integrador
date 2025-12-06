import "./style.css"; // Importa o CSS para stylização do footer
import logo from "../../../../src/assets/images/logo.svg"; // Importando o logo para utilizar no footer
import icontel from "../../../../public/icontel.svg";
import local from "../../../../public/local.svg";
import menu from "../../../../public/menu.svg";
import inst from "../../../../public/inst.svg";
import whats from "../../../../public/whats.svg";
import face from "../../../../public/face.svg";
export const Footer = () => {
  // Exportando o footer para ser utilizado nas pages
  return (
    <footer className="main-footer-container">
      {/* Todo o Footer*/}

      <div className="separatorFooter"></div>

      <div className="footer-content-column">
        {/*footer-content-column = As 3 colunas do footer*/}
        <div className="footer-column contato-column">
          {/* 1. COLUNA CONTATO */}
          <h4 className="column-title-4">
            CONTATO{" "}
            <span className="icon">
              <img src={icontel} alt="" />
            </span>
          </h4>
          <div className="contato-info">
            <p className="contato-item">(11) 95241-3557</p>
            <p className="contato-item">(11) 95240-9296</p>
            <p className="contato-item">
              <a href="mailto:contato@gmail.com" className="email-link">
                contato@gmail.com
              </a>
            </p>
          </div>

          {/* Imagem e Redes Sociais */}
          <div className="social-area">
            {/* Imagem do mascote: Substitua 'caminho/para/imagem.png' pela URL real */}
            <img
              src={logo} // Você deve substituir este placeholder
              alt="Apaixonado por Pães"
              className="mascote-image"
            />
            <div className="social-icons">
              <a href="#" aria-label="Instagram" className="social-link">
                <img src={inst} alt="" />
              </a>
              <a href="#" aria-label="WhatsApp" className="social-link">
                <img src={whats} alt="" />
              </a>
              <a href="#" aria-label="WhatsApp" className="social-link">
                <img src={face} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* 2. COLUNA MENU */}
        <div className="footer-column menu-column">
          <h4 className="column-title-4">
            MENU{" "}
            <span className="icon">
              <img src={menu} alt="" />
            </span>
          </h4>
          <nav className="footer-nav">
            <a href="/sobre" className="nav-item">
              Sobre Nós
            </a>
            <a href="/cardapio" className="nav-item">
              Cardápio
            </a>
            <a href="/contato" className="nav-item">
              Contato
            </a>
          </nav>
        </div>
        {/* 3. COLUNA LOCALIZAÇÃO */}
        <div className="footer-column localizacao-column">
          <h3 className="column-title">
            LOCALIZAÇÃO
            <span className="icon">
              {" "}
              <img src={local} alt="icone de localização na cor marrom" />
            </span>
          </h3>
          {/* Mapa: Na web real, isso seria um iframe ou um componente de mapa */}
          <div className="mapa-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.3692365699276!2d-46.9047543237896!3d-23.51921856004701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03b1e422d9cf%3A0x4c6b92d4abd5863d!2sCondom%C3%ADnio%20Viva%20Mais%20Barueri!5e0!3m2!1spt-BR!2sbr!4v1764856068083!5m2!1spt-BR!2sbr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* COPYRIGHT */}
      <div className="footer-copyright">
        <p>
          Copyright © 2026. Todos os Direitos reservados - Desenvolvido por:
          Ricardo Oliveira
        </p>
      </div>
    </footer>
  );
};
