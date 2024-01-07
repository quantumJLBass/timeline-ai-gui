const { Sequelize } = require('sequelize');

// Initializing the SQLite database with Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'data/timeline.sqlite',
  logging: false
});

sequelize.authenticate()
  .then(() => {
      console.log('Connection to the database has been established successfully.');
      return sequelize.sync();
  })
  .catch((error) => {
      console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
