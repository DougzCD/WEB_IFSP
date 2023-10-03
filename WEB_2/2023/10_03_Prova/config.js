// config.js

const Sequelize = require('sequelize');

const sequelize = new Sequelize('nome_do_banco_de_dados', 'nome_de_usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
