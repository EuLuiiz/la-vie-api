const db = require('../database');
const { DataTypes } = require('sequelize');

const Atendimentos = db.define('atendimentos', {
    atendimento_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_do_paciente: {
        type: DataTypes.INTEGER
    },
    id_do_psicologo: {
        type: DataTypes.INTEGER
    },
    data_atendimento: {
        type: DataTypes.DATE
    },
    observacao: {
        type: DataTypes.TEXT
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'atendimentos'
});

module.exports = Atendimentos;