const Sequelize = require('sequelize');

const connection = new Sequelize('guiapergunta2', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;

