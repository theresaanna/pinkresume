import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.join(process.cwd(), 'items.db'));

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    claimed_by TEXT
  )
`);

// Seed initial data if empty
const count = db.prepare('SELECT COUNT(*) as count FROM items').get();
if (count.count === 0) {
  const insert = db.prepare('INSERT INTO items (text, claimed_by) VALUES (?, ?)');
  const items = [
    '$17 Anker phone charging cord (good quality not kill phone)',
    '$29 magnetic suction phone mount for anywhere',
    '$8 laminate sheets for passenger sign',
    '$39 train to SF to pick up car',
    '$30 cars to/from the bus in Sac and SF respectively',
    '$9 charging cord for passengers',
    '$15 big bag of lollipops',
    '$14 reusable air freshener that\'s not cloying'
  ];
  items.forEach(text => insert.run(text, null));
}

export default db;
