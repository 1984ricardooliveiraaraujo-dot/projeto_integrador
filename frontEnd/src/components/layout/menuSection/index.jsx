import whats from "../../../../src/assets/images/whats.svg";
import imgmenu1 from "../../../../src/assets/images/imgmenu1.svg";
import imgmenu2 from "../../../../src/assets/images/imgmenu2.svg";
import imgmenu3 from "../../../../src/assets/images/imgmenu3.svg";
import imgmenu4 from "../../../../src/assets/images/imgmenu4.svg";
import "./style.css";

export const MenuSection = () => {
  const salgados = [
    { nome: "Pizza", padrao: 30, medio: 38, gigante: 48 },
    { nome: "Presunto com queijo", padrao: 33, medio: 42, gigante: 53 },
    { nome: "Presunto com catupiry", padrao: 34, medio: 43, gigante: 54 },
    { nome: "Calabresa com queijo", padrao: 33, medio: 42, gigante: 53 },
    { nome: "Calabresa com catupiry", padrao: 34, medio: 43, gigante: 54 },
    { nome: "Frango com queijo", padrao: 35, medio: 45, gigante: 55 },
    { nome: "Frango com catupiry", padrao: 35, medio: 45, gigante: 55 },
    { nome: "Mussarela com catupiry", padrao: 40, medio: 50, gigante: 62 },
  ];

  const doces = [
    { nome: "Goiabada", preco: 26 },
    { nome: "Romeu e Julieta", preco: 30 },
    { nome: "Chocolate ao Leite", preco: 35 },
    { nome: "Chocolate com Avelã", preco: 35 },
  ];

  const formatPrice = (price) => ` R$ ${price}`;

  const SalgadoItem = ({ nome, padrao, medio, gigante }) => (
    <div className="menu-item-salgado">
      <div className="item-name">{nome}</div>
      <div className="item-price-padrao">{formatPrice(padrao)}</div>
      <div className="item-price-medio">{formatPrice(medio)}</div>
      <div className="item-price-gigante">{formatPrice(gigante)}</div>
    </div>
  );

  const DoceItem = ({ nome, preco }) => (
    <div className="menu-item-doce">
      <div className="item-name">{nome}</div>
      <div className="item-price-doce">{formatPrice(preco)}</div>
    </div>
  );

  return (
    <>
      <section className="body-menu">
        <div className="menu-container">
          <h1 className="menu-title">Pão Trançado</h1>
          <h2 className="menu-subtitle">Baguetes Recheadas Assadas na Hora</h2>

          <img
            src={imgmenu1}
            alt="Pão Trançado - Imagem de Exemplo"
            className="menu-image-bread-1" // <--- Adicione uma classe para estilizar
          />
          <img
            src={imgmenu2}
            alt="Pão Trançado - Imagem de Exemplo"
            className="menu-image-bread-2" // <--- Adicione uma classe para estilizar
          />
          <img
            src={imgmenu3}
            alt="Pão Trançado - Imagem de Exemplo"
            className="menu-image-bread-3" // <--- Adicione uma classe para estilizar
          />
          <img
            src={imgmenu4}
            alt="Pão Trançado - Imagem de Exemplo"
            className="menu-image-bread-4" // <--- Adicione uma classe para estilizar
          />

          <div className="menu-section">
            <h2 className="section-title-salgados">Salgados</h2>

            <div className="price-header-salgados">
              <div className="header-spacer"></div>
              <div className="header-padrao">Padrão</div>
              <div className="header-medio">Médio</div>
              <div className="header-gigante">Gigante</div>
            </div>

            {salgados.map((salgado, index) => (
              <SalgadoItem key={index} {...salgado} />
            ))}
          </div>

          <div className="menu-section">
            <h2 className="section-title-doces">Doces</h2>

            {doces.map((doce, index) => (
              <DoceItem key={index} {...doce} />
            ))}
          </div>
        </div>

        <div className="teste">
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
      </section>
    </>
  );
};
