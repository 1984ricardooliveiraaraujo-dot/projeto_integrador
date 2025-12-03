import whats from "../../../../src/assets/images/whats.svg";
import imgmain from "../../../../src/assets/images/main.svg";
import "./style.css";

export const Main = () => {
  return (
    <main>
      <div className="content-main">
        {" "}
        {/*Conteudo da Main */}
        <h1>
          <span className="highlighted-word">Apaixonado por pães.</span> Amor a
          cada mordida!
        </h1>
        <p>
          Uma obra de arte que transcende a panificação, unindo a sofisticação e
          tradição. Cada detalhe reflete paixão e a mais alta qualidade, sabores
          que marcam sua identidade. Uma mensagem de excelência em sabor e
          visualidade.
        </p>
        <nav className="btn-main-actions">
          <a
            href="https://api.whatsapp.com/send?phone=11952409296&text=Olá! Gostaria de fazer um pedido."
            target="_blank"
            className="whatsapp-button"
            rel="noopener noreferrer" // Boa prática para target="_blank", gera mais segurança para o usuario
          >
            <img src={whats} alt="WhatsApp Icon" className="whatsapp-icon" />
          </a>
        </nav>
      </div>

      <img src={imgmain} alt="Chefe sovando uma massa de pão" />
    </main>
  );
};
