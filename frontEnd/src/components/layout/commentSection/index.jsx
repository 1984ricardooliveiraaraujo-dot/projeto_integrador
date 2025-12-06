import { CardComments } from "../../cards/cardComments";
import "./style.css";
import avalia1 from "../../../../src/assets/images/avalia1.svg";
import avalia2 from "../../../../src/assets/images/avalia2.svg";
import avalia3 from "../../../../src/assets/images/avalia3.svg";

export const CommentSection = () => {
  return (
    <section className="section-comment">
      <div className="title-with-separators">
        <div className="line-separator-1"></div>
        <h2>Comentários</h2>
        <div className="line-separator-2"></div>
      </div>
      <div className="container-comment">
        <div className="card-comment">
          <div className="cliente-comment">
            <CardComments
              linkImg={avalia1}
              altImg="Imagem de um pão cortado com recheio de presunto"
              descricao="Sabor maravilhoso e atendimento impecável! Pedirei novamente com certeza!!!"
              nome="Marta Silva"
            />
            <CardComments
              linkImg={avalia2}
              altImg="Imagem de um pão cortado com recheio de calabresa"
              descricao="Uma experiência gastronômica impecável, do sabor ao tratamento. Comprarei sempre!!!"
              nome="Kleber Reis"
            />
            <CardComments
              linkImg={avalia3}
              altImg="Imagem de um pão cortado com recheio de frango"
              descricao="O paladar foi presenteado o atendimento superou as expectativas! Pedido garantido!!!"
              nome="Erika Maia"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
