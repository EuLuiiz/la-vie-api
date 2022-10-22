const { Atendimentos, Psicologos, Pacientes } = require('../model');

const atendimentoController = {
    listarTodos: async (request, response) => {
        try {
            const listaAtendimentos = await Atendimentos.findAll({
                include: [
                    {
                        model:Psicologos,
                        attributes: ['nome','email']
                    },
                    {
                        model:Pacientes,
                        attributes:['nome','email','idade']
                    }
                ]
            })
            response.status(200).json(listaAtendimentos);
        } catch (error) {
            response.status(500).json('Parece que o banco de dados encontrou um erro!');
        }

    },
    listarUm: async (request, response) => {
        const { id } = request.params;
        try {
            const atendimentoID = await Atendimentos.findByPk(id);
            if (!atendimentoID) {
                response.status(404).json('ID não encontrado');
            }
            response.status(200).json(atendimentoID);
        } catch (error) {
            response.status(500).json('Parece que o banco de dados encontrou um erro!');
        }
    },
    criarAtendimento: async (request, response) => {
        const { paciente_id, data_atendimento, observacao } = request.body;
        const psicologoUsuario = request.auth;
        try {
            const novoAtendimento = await Atendimentos.create({
                id_do_paciente: paciente_id,
                id_do_psicologo: psicologoUsuario.id,
                data_atendimento,
                observacao
            });
            response.status(201).json(novoAtendimento);
        } catch (error) {
            response.status(500)
        }
    }
};

module.exports = atendimentoController