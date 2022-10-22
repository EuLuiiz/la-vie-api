const { Psicologos } = require('../model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/secret');

const loginAuth = {
    login: async (request, response) => {
        const { email, senha } = request.body;
        const psicologo = await Psicologos.findOne({
            where: {
                email
            }
        })

        if (!psicologo) {
            return response.status(401).json('E-mail ou senha inválido, verifique e tente novamente');
        }

        if (!bcrypt.compareSync(senha, psicologo.senha)) {
            return response.status(401).json('E-mail ou senha inválido, verifique e tente novamente');
        }

        const token = jwt.sign({
            id: psicologo.psicologo_id,
            nome: psicologo.nome,
            email: psicologo.email
        }, secret.key);

        return response.status(200).json(token);
    }
}

module.exports = loginAuth;