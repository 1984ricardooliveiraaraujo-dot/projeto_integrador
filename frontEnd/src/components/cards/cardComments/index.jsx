import "./style.css";

export const CardComments = ({ linkImg, altImg, descricao, nome }) => {
  return (
    <div className="card-comment-item">
      <div className="card-avatar-container">
        <img src={linkImg} alt={altImg} className="card-avatar-img" />
      </div>

      <div className="card-content-box">
        <p className="card-description">{descricao}</p>
        <h4 className="card-name">{nome}</h4>
      </div>
    </div>
  );
};
