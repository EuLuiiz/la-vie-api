const Sequelize = require('sequelize');

//Configs
const DB_NAME = "la_vie_db";
const DB_USER = "root";
const DB_PASS = "1993";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
};

//Salvar a conexão
let db = {};

//Tentar conexão
try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error('Problema para se conectar ao Banco de Dados...');
}

//Verificar funcionamento
async function conectDB() {
    try {
        await db.authenticate();
        console.log('Banco de dados: OK');
    } catch (error) {
        console.error('Banco de dados: Houve um erro ao se conectar...');
    }
}

Object.assign(db, { conectDB });

module.exports = db;