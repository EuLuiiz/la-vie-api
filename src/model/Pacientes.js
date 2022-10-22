const db = require('../database');
const { DataTypes } = require('sequelize');

const Pacientes = db.define('pacientes', {
    paciente_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    idade: {
        type: DataTypes.DATE
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    nameTable: 'pacientes'
})

module.exports=Pacientes