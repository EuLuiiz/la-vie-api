//Juntando os Model
const Psicologos = require('./Psicologos');
const Pacientes = require('./Pacientes');
const Atendimentos = require('./Atendimentos');

//Relações
Atendimentos.belongsTo(Psicologos, {
    foreignKey: 'id_do_psicologo'
})
Psicologos.hasMany(Atendimentos, {
    foreignKey: 'id_do_psicologo'
})

Atendimentos.belongsTo(Pacientes, {
    foreignKey: 'id_do_paciente'
})
Pacientes.hasMany(Atendimentos, {
    foreignKey: 'id_do_paciente'
})

module.exports = {
    Psicologos,
    Pacientes,
    Atendimentos
}