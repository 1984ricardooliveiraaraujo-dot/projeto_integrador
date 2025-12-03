import "./style.css";
import imgdr from "../../../../src/assets/images/esquerda.svg";
import imged from "../../../../src/assets/images/direita.svg";

export const PresentationSection = () => {
  return (
    <section className="presentationSection">
      <div className="separatorPresentation"></div>

      <div className="content-container">
        <div className="left-column">
          <h2 className="main-title-h2">
            Pães frescos assados na hora que você pede!
          </h2>
          <div className="image-stack-left">
            <img src={imged} alt="Pão fresco" />
          </div>
        </div>

        <div className="right-column">
          <div className="image-placeholder image-bottom-left">
            <img src={imgdr} alt="Detalhe do Pão com gergelim e azeitona" />
          </div>
          <h3>
            A magia de um pão delicioso começa, indiscutivelmente, nas mãos. É
            no manuseio artesanal da massa, com paciência e técnica, insufla
            vida e personalidade a cada fornada. O toque humano garante uma
            textura única, que a produção em escala não consegue replicar.
          </h3>
        </div>
      </div>
    </section>
  );
};
