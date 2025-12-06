const { DataTypes} = require('sequelize')

const conexao = require('../config/dbConfig')

const Contatos = conexao.define ('contatos', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    whatsapp:{
        type: DataTypes.STRING
    },
    torre:{
        type: DataTypes.STRING
    },
    apto:{
        type: DataTypes.STRING
    },
    observacao:{
        type: DataTypes.STRING
    }

})


Contatos.sync ()

module.exports = Contatos