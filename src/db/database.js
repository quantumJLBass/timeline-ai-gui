const { Sequelize } = require('sequelize');

// Initializing the SQLite database with Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'data/timeline.sqlite', // The path where the local sqlite file will be saved
  logging: false // Disable logging; default: console.log
});

module.exports = sequelize;
