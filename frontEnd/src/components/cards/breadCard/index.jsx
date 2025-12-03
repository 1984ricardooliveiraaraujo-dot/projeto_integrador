import "./style.css";

// DifferencesCard
export const BreadCard = ({ linkImg, altImg, titulo, descricao }) => {
  //Criação de props = ({linkImg, titulo, descricao}), para serem utilizadas como variaveis.
  return (
    <div className="card-bread">
      <img src={linkImg} alt={altImg} />

      <h3>{titulo}</h3>

      <p>{descricao}</p>
    </div>
  );
};
