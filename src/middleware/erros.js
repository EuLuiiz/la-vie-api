const { UnauthorizedError } = require("express-jwt");
const { ValidationError } = require("express-validation")

module.exports = (error, request, response, next) => {
    //Tratamento de erro de validação
    if (error instanceof ValidationError) {
        response.status(400).json(error);
    }
    //Tratamento de erro quando não-autorizado
    if (error instanceof UnauthorizedError) {
        response.status(error.status).json(error);
    }
    //Tratamento de erro genérico
    response.status(500).json(error);
}