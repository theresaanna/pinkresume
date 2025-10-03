import { NextResponse } from 'next/server';
import db from '/lib/db';

export async function GET() {
  try {
    const items = db.prepare('SELECT * FROM items ORDER BY id').all();
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 });
  }
}