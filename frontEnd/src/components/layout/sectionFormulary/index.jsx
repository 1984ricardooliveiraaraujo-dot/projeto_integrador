import { useState } from "react";
import axios from "axios"; // Importa a biblioteca para fazer a requisição HTTP
import "./style.css";
import contato from "../../../../src/assets/images/contato.svg";

// URL do seu endpoint de cadastro (Backend)
const API_URL = "http://localhost:8081/contato";

export const SectionFormulary = () => {
  // 1. ESTADO: Variável que guarda os dados que o usuário digita
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    whatsapp: "",
    torre: "",
    apto: "",
    observacao: "",
  });

  // 2. COLETA DE DADOS: Função que salva o que é digitado
  const handleChange = (e) => {
    // Pega o nome do campo (e.g., 'email') e o valor digitado (e.g., 'teste@a.com')
    setFormData({
      ...formData, // Mantém os campos que já foram preenchidos
      [e.target.name]: e.target.value, // Atualiza o campo atual
    });
  };

  // 3. ENVIO: Função que manda os dados para o backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede que a página recarregue

    // Mapeia os nomes dos campos do seu formulário (frontend)
    // para os nomes que o seu banco de dados (backend) espera.
    const dataToSend = {
      nome: formData.nomeCompleto,
      email: formData.email,
      whatsapp: formData.whatsapp,
      torre: formData.torre,
      apto: formData.apto,
      observacao: formData.observacao,
    };

    try {
      // **A MÁGICA DO AXIOS:** Envia os dados como JSON para o seu backend.
      const response = await axios.post(API_URL, dataToSend);

      // Se deu certo (Status 200/201), mostra um alerta e limpa o formulário.
      alert(
        "Mensagem enviada com sucesso! Código de status: " + response.status
      );

      // Limpa o formulário (volta ao estado inicial)
      setFormData({
        nomeCompleto: "",
        email: "",
        whatsapp: "",
        torre: "",
        apto: "",
        observacao: "",
      });
    } catch (error) {
      // Se der erro (Status 4xx ou 5xx), mostra um alerta simples.
      alert("ERRO! Não foi possível enviar a mensagem. Verifique o console.");
      console.error("Erro de envio:", error);
    }
  };

  // 4. ESTRUTURA HTML (JSX) - Vinculando os campos
  return (
    <div className="contato-page-container">
      <div className="title-with-separators">
        <div className="line-separator-1"></div>
        <h2>Contato</h2>
        <div className="line-separator-2"></div>
      </div>
      <div>
        <p>Preencha os campos abaixo, será um prazer responder você.</p>
      </div>

      <div className="contato-content-box">
        {/* Lado Esquerdo: Imagem */}
        <div className="imagem-mockup-area">
          <img src={contato} alt="" />
        </div>

        {/* Certifique-se de que todos os inputs têm 'value' e 'onChange' */}
        <form className="formulario-contato" onSubmit={handleSubmit}>
          <label htmlFor="nomeCompleto">Nome completo:</label>
          <input
            type="text"
            id="nomeCompleto"
            name="nomeCompleto"
            required
            value={formData.nomeCompleto} // 👈 Valor atual do estado
            onChange={handleChange} // 👈 Chama a função ao digitar
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          {/* ... Outros Campos (WhatsApp, Torre, Apto) seguem o mesmo padrão ... */}

          <div className="campo-agrupado">
            <div className="campo-pequeno">
              <label htmlFor="whatsapp">Whatsapp:</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
              />
            </div>
            <div className="campo-pequeno">
              <label htmlFor="torre">Torre:</label>
              <input
                type="text"
                id="torre"
                name="torre"
                value={formData.torre}
                onChange={handleChange}
              />
            </div>
            <div className="campo-pequeno">
              <label htmlFor="apto">Apto:</label>
              <input
                type="text"
                id="apto"
                name="apto"
                value={formData.apto}
                onChange={handleChange}
              />
            </div>
          </div>

          <label htmlFor="observacao">Observação:</label>
          <textarea
            id="observacao"
            name="observacao"
            rows="6"
            value={formData.observacao}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="botao-enviar">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
