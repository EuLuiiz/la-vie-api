const express = require('express');
const { conectDB } = require('./database');
const routes = require('./routes');
const erros = require('./middleware/erros')

const server = express();
conectDB();

server.use(express.json());
server.use(routes);
server.use(erros);


server.listen(8000, ()=>{console.log('Servidor: OK [port:8000]')});