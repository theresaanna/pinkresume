import { NextResponse } from 'next/server';
import { sql } from '/lib/db';

export async function POST(request, { params }) {
  try {
    const { userName } = await request.json();
    const itemId = parseInt(params.id);

    // Get current item state
    const { rows } = await sql`SELECT * FROM items WHERE id = ${itemId}`;
    const item = rows[0];

    if (!item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    // If unclaimed, claim it. If claimed by this user, unclaim it.
    if (!item.claimed_by) {
      await sql`UPDATE items SET claimed_by = ${userName} WHERE id = ${itemId}`;
    } else if (item.claimed_by === userName) {
      await sql`UPDATE items SET claimed_by = NULL WHERE id = ${itemId}`;
    } else {
      return NextResponse.json({ error: 'Item claimed by another user' }, { status: 403 });
    }

    const { rows: updatedRows } = await sql`SELECT * FROM items WHERE id = ${itemId}`;
    return NextResponse.json(updatedRows[0]);
  } catch (error) {
    console.error('Error updating item:', error);
    return NextResponse.json({ error: 'Failed to update item' }, { status: 500 });
  }
}