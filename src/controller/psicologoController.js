const { Psicologos } = require('../model');
const bcrypt = require('bcryptjs');

const psicologoController = {
    listarTodos: async (request, response) => {
        try {
            //Salvar todos encontrados na variavel
            const psicologos = await Psicologos.findAll();
            //retorna em formato de JSON a variavel com todos os psicólogos
            response.status(200).json(psicologos);
        } catch (error) {
            response.status(500).json('Houve um erro com o servidor, acione o suporte!');
        }
    },
    listarUm: async (request, response) => {
        //Pegar o id informado na URL
        const { id } = request.params;
        try {
            //Pesquisando pelo ID
            const psicologoID = await Psicologos.findByPk(id);
            if (!psicologoID) {
                response.status(404).json('ID não encontrado');
            }
            response.status(200).json(psicologoID);
        } catch (error) {
            response.status(500).json('Houve um erro com o servidor, acione o suporte!');
        }

    },
    criarPsicologo: async (request, response) => {
        const { nome, email, senha, apresentacao } = request.body;
        try {
            const senhaSegura = bcrypt.hashSync(senha, 10);
            const novoPsicologo = await Psicologos.create({
                nome,
                email,
                senha: senhaSegura,
                apresentacao
            });
            response.status(201).json(novoPsicologo);
        } catch (error) {
            response.status(500).json('Houve um erro com o servidor, acione o suporte!')
        }
    },
    atualizarPsicologo: async (request, response) => {
        const { id } = request.params;
        const { nome, email, senha, apresentacao } = request.body;
        try {
            const senhaSegura = bcrypt.hashSync(senha, 10);
            const psicologoAtualizado = await Psicologos.update({
                nome,
                email,
                senha: senhaSegura,
                apresentacao
            }, {
                where: {
                    psicologo_id: id
                }
            });
            response.status(200).json(psicologoAtualizado)
        } catch (error) {
            response.status(500).json('Houve um erro com o servidor, acione o suporte!');
        }
    },
    deletarPsicologo: async (request, response) => {
        const { id } = request.params;
        try {
            const psicologoDeletado = await Psicologos.destroy({
                where: {
                    psicologo_id: id
                }
            });
            if (!psicologoDeletado) {
                response.status(404).json('ID não encontrado');
            }
            response.status(204).json(`O psicólogo de ID:${id} foi deletado com sucesso`)
        } catch (error) {
            response.status(500).json('Houve um erro com o servidor, acione o suporte!');
        }
    }
};

module.exports = psicologoController;