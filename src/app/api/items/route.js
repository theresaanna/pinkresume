import { NextResponse } from 'next/server';
import { sql, initDb } from '/lib/db';

export async function GET() {
  try {
    await initDb(); // Ensure table exists
    const { rows } = await sql`SELECT * FROM items ORDER BY id`;
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 });
  }
}