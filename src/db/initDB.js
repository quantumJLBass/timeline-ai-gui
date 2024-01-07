const db = require('./betterSqliteDB');

function initializeDatabase() {
  // Execute table creation scripts if they haven't been created yet
  db.prepare(`
    CREATE TABLE IF NOT EXISTS timeline_entries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      date TEXT NOT NULL,
      description TEXT,
      is_deleted INTEGER NOT NULL DEFAULT 0
    )`
  ).run();

  // Include creation of other necessary tables here

  console.log('Database has been initialized successfully.');
}

initializeDatabase();
