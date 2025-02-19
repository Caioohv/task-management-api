const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

const username = dotenv.get('DB_USER');
const pass = dotenv.get('DB_PASS');
const dbName = dotenv.get('DB_NAME');
const host = dotenv.get('DB_HOST');


const sequelize = new Sequelize(dbName || 'local', username || 'local', pass || 'local', {
  host: host || 'localhost',
  dialect: 'mysql', // Altere para o banco de dados usado (postgres, sqlite, mssql)
  logging: false, // Desabilita logs
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
