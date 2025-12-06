const ContatoModels = require("../models/contatoModel") // 
class contatoController {


static async listarContato(req, res) {
        const contato = await ContatoModels.findAll()
        res.json(contato) // mostra para o usuario todas as musicas cadastradas
    }

static async cadastrarContato(req, res) {
    try {
        const { nome, email, whatsapp, torre, apto, observacao } = req.body;

        // 1. Validação (DEVE vir primeiro)
        if (!nome || !email || !whatsapp) { 
            return res.status(400).json({
                message: 'Nome, E-mail e Whatsapp são obrigatórios para enviar a mensagem.'
            });
        }
        
        // 2. Criação do Registro no Banco de Dados (SÓ DEPOIS da validação)
        const novoCadastro = await ContatoModels.create({ 
            nome, email, whatsapp, torre, apto, observacao 
        })

        // 3. Resposta de Sucesso
        res.status(200).json({ 
            message: 'Mensagem enviada com sucesso! Em breve entraremos em contato.',
            dados: novoCadastro 
        });

    } catch (err) {
        console.error('Erro ao processar o formulário:', err);
        res.status(500).json({ 
            message: 'Não foi possível enviar a mensagem. Tente novamente mais tarde.' 
        });
    }
}

static async alterarContato(req, res) {
    try {
        const id = req.params.id;
        const novoCadastro = req.body;

        const contatoSelecionado = await ContatoModels.findByPk(id);

        if (!contatoSelecionado) {
            // Retorna 404 se o ID não for encontrado
            return res.status(404).json({ message: `Contato com id ${id} não encontrado.` });
        }

        const contatoAlterado = await contatoSelecionado.update(novoCadastro);

        res.status(200).json({ message: "Contato alterado com sucesso", dados: contatoAlterado });

    } catch (err) {
        // Imprimir o erro no console do servidor é crucial para saber a causa
        console.error('ERRO NA ALTERAÇÃO:', err.message); 
        res.status(500).json({ message: "Não foi possível alterar o contato. Verifique o console do servidor." });
    }
}
static async deletarContato(req, res){
        try{

            const id = req.params.id

            const contatoSelecionada = await ContatoModels.findByPk(id)

            await contatoSelecionada.destroy()

            res.json({message: "Música deletada com sucesso"})

        } catch(err){
            res.json({message: "Não foi possível deletar a música"})
        }
    }
}

module.exports = contatoController;