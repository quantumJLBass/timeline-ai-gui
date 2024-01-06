const db = require('../betterSqliteDB');

const createTimelineEntriesTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS timeline_entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    date TEXT NOT NULL,
    description TEXT,
    is_deleted INTEGER NOT NULL DEFAULT 0
  )`
);
createTimelineEntriesTable.run();

// Export CRUD operations for TimelineEntry
module.exports = {
  create: (title, date, description) => {
    const insert = db.prepare(`INSERT INTO timeline_entries (title, date, description) VALUES (?, ?, ?)`);
    const result = insert.run(title, date, description);
    if (result.changes) {
      return { id: result.lastInsertRowid };
    }
    throw new Error('Failed to create timeline entry.');
  },
  findOne: (id) => {
    const select = db.prepare(`SELECT * FROM timeline_entries WHERE id = ? AND is_deleted = 0`);
    return select.get(id);
  },
  findAll: () => {
    const selectAll = db.prepare(`SELECT * FROM timeline_entries WHERE is_deleted = 0`);
    return selectAll.all();
  },
  update: (id, title, date, description) => {
    const update = db.prepare(`UPDATE timeline_entries SET title = ?, date = ?, description = ? WHERE id = ? AND is_deleted = 0`);
    const result = update.run(title, date, description, id);
    if (result.changes) {
      return true;
    }
    return false;
  },
  delete: (id) => {
    const markAsDeleted = db.prepare(`UPDATE timeline_entries SET is_deleted = 1 WHERE id = ?`);
    const result = markAsDeleted.run(id);
    if (result.changes) {
      return true;
    }
    return false;
  }
};
