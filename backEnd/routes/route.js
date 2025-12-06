const express = require('express')
const contatoController = require('../controllers/adminController') // Importando as funções para dentro da variavel adminController
const router = express.Router() // Importando as funcionalidades de rotas da biblioteca Express 


router.get('/', contatoController.listarContato);
router.post('/contato', contatoController.cadastrarContato);
router.put('/alterar/:id', contatoController.alterarContato);
router.delete('/deletar/:id', contatoController.deletarContato);

// Outras rotas...
// router.get('/admin/contato', adminController.listarContato);

module.exports = router