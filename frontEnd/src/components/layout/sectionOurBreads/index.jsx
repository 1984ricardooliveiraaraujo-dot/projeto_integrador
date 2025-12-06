import imgpresunto from "../../../assets/images/presunto.svg";
import imgcalabresa from "../../../assets/images/calabresa.svg";
import imgfrango from "../../../assets/images/frango.svg";
import { BreadCard } from "../../cards/breadCard";
import "./style.css";

export const SectionOurBreads = () => {
  return (
    <section className="sectionOurBreads">
      <div className="title-with-separators">
        <div className="line-separator-1"></div>
        <h2>Nossos Pães</h2>
        <div className="line-separator-2"></div>
      </div>

      <div className="container-cards-differences">
        <BreadCard
          linkImg={imgpresunto}
          altImg="Imagem de um pão cortado com recheio de presunto"
          descricao="Pão recheado com presunto picada e requeijão cremoso Assado na Hora!!!"
        />
        <BreadCard
          linkImg={imgcalabresa}
          altImg="Imagem de um pão cortado com recheio de calabresa"
          descricao="Pão recheado com calabresa picada e queijo mussarela Assado na Hora!!!"
        />
        <BreadCard
          linkImg={imgfrango}
          altImg="Imagem de um pão cortado com recheio de frango"
          descricao="Pão recheado com frango desfiado e requeijão cremoso Assado na Hora!!"
        />
      </div>

      <nav className="container-btn">
        <a href="/menu" className="btn-primary">
          Ver Cardápio
        </a>
      </nav>
    </section>
  );
};
