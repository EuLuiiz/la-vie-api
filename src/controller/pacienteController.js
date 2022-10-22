const { Pacientes } = require('../model');

const pacienteController = {
    listarTodos: async (request, response) => {
        try {
            const listaPacientes = await Pacientes.findAll();
            response.status(200).json(listaPacientes);
        } catch (error) {
            response.status(500).json('Houve um erro no servidor');
        }
    },
    listarUm: async (request, response) => {
        const { id } = request.params;
        try {
            const pacienteID = await Pacientes.findByPk(id);
            if (!pacienteID) {
                response.status(404).json('ID não encontrado');
            }
            response.status(200).json(pacienteID);
        } catch (error) {
            response.status(500).json('Houve um erro no servidor');
        }
    },
    criarPaciente: async (request, response) => {
        const { nome, email, idade } = request.body;
        try {
            const pacienteCriado = await Pacientes.create({
                nome,
                email,
                idade
            });
            response.status(201).json(pacienteCriado);
        } catch (error) {
            response.status(500).json('Houve um erro no servidor');
        }
    },
    atualizarPaciente: async (request, response) => {
        const { id } = request.params;
        const { nome, email, idade } = request.body;
        try {
            const pacienteAtualizado = await Pacientes.update({
                nome,
                email,
                idade
            }, {
                where: {
                    paciente_id: id
                }
            });
            response.status(200).json(pacienteAtualizado);
        } catch (error) {
            response.status(500).json('Houve um erro no servidor');
        }
    },
    deletarPaciente: async (request, response) => {
        const { id } = request.params;
        try {
            const pacienteDeletado = await Pacientes.destroy({
                where: {
                    paciente_id: id
                }
            });
            response.status(204).json('Paciente deletado com sucesso')
        } catch (error) {
            response.status(500).json('Houve um erro no servidor');
        }
    }
};

module.exports = pacienteController;