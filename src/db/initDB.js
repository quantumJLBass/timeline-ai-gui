const db = require('./betterSqliteDB');

function initializeDatabase() {
  try {
    await db.authenticate();
    console.log('Connection to database has been established successfully.');

    // Sync all models
    await db.sync({ force: true }); // Using 'force: true' should be avoided in production environments; it recreates tables every time.
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log('Database has been initialized successfully.');
}

initializeDatabase();
