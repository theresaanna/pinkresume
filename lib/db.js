import { sql } from '@vercel/postgres';

// Initialize database table
export async function initDb() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS items (
        id SERIAL PRIMARY KEY,
        text TEXT NOT NULL,
        claimed_by TEXT
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        post_slug TEXT NOT NULL,
        author_name TEXT NOT NULL,
        author_email TEXT NOT NULL,
        body TEXT NOT NULL,
        verified BOOLEAN DEFAULT FALSE,
        verify_token TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    await sql`
      ALTER TABLE comments
      ADD COLUMN IF NOT EXISTS parent_id INTEGER REFERENCES comments(id)
    `;

    // Check if we need to seed data
    const { rows } = await sql`SELECT COUNT(*) as count FROM items`;

    if (rows[0].count === '0') {
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

      for (const text of items) {
        await sql`INSERT INTO items (text, claimed_by) VALUES (${text}, NULL)`;
      }
    }
  } catch (error) {
    console.error('Database initialization error:', error);
  }
}

export { sql };