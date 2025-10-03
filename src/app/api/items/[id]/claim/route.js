import { NextResponse } from 'next/server';
import db from '/lib/db';

export async function POST(request, { params }) {
  try {
    const { userName } = await request.json();
    const itemId = parseInt(params.id);

    // Get current item state
    const item = db.prepare('SELECT * FROM items WHERE id = ?').get(itemId);

    if (!item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    // If unclaimed, claim it. If claimed by this user, unclaim it.
    if (!item.claimed_by) {
      db.prepare('UPDATE items SET claimed_by = ? WHERE id = ?').run(userName, itemId);
    } else if (item.claimed_by === userName) {
      db.prepare('UPDATE items SET claimed_by = NULL WHERE id = ?').run(itemId);
    } else {
      return NextResponse.json({ error: 'Item claimed by another user' }, { status: 403 });
    }

    const updatedItem = db.prepare('SELECT * FROM items WHERE id = ?').get(itemId);
    return NextResponse.json(updatedItem);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update item' }, { status: 500 });
  }
}