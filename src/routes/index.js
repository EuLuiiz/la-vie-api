const express = require('express');
const routes = express.Router();
const psicologoController = require('../controller/psicologoController');
const pacienteController = require('../controller/pacienteController');
const loginController = require('../controller/loginController');
const atendimentoController = require('../controller/atendimentoController');
const verificarToken = require('../middleware/verificarToken');
const loginValidation = require('../validations/login')
const atendimentosCriaValidation = require('../validations/atendimento')
const pacienteValidation = require('../validations/pacientes');
const psicologoValidation = require('../validations/psicologo');


//Psicólogos
routes.get('/psicologos', psicologoController.listarTodos);
routes.get('/psicologos/:id', psicologoController.listarUm);
routes.post('/psicologos', psicologoValidation, psicologoController.criarPsicologo);
routes.put('/psicologos/:id', psicologoValidation, psicologoController.atualizarPsicologo);
routes.delete('/psicologos/:id', psicologoController.deletarPsicologo);

//Pacientes
routes.get('/pacientes', pacienteController.listarTodos);
routes.get('/pacientes/:id', pacienteController.listarUm);
routes.post('/pacientes', pacienteValidation, pacienteController.criarPaciente);
routes.put('/pacientes/:id', pacienteValidation, pacienteController.atualizarPaciente);
routes.delete('/pacientes/:id', pacienteController.deletarPaciente);

//Login
routes.post('/login', loginValidation, loginController.login);

//Atendimentos
routes.get('/atendimentos', atendimentoController.listarTodos);
routes.get('/atendimentos/:id', atendimentoController.listarUm);
routes.post('/atendimentos', verificarToken, atendimentosCriaValidation, atendimentoController.criarAtendimento);

module.exports = routes;