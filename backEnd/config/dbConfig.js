const sequelize = require('sequelize')
 
const conexao = new sequelize('defaultdb', 'avnadmin', 'AVNS_-VzwafzR0bXBzDs6oy6', {
    host: 'projetosenac-ricardo-9fb4.c.aivencloud.com',
    port:'17469',
    dialect: 'mysql',
    dialectOptions:{ //basicamente é o sertificado de segurança
        ssl:{
            require:true,
            rejectUnauthorized: false
        }
    },
    logging:false
})
 
async function testarConexao() {
    try{
 
        await conexao.authenticate()
        console.log("Banco conectado com sucesso")
 
    } catch(err){
        console.log("ERRO AO CONECTAR COM O BANCO DE DADOS")
    }
}
 
testarConexao()
 
module.exports = conexao