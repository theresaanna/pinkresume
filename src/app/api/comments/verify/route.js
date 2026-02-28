import { NextResponse } from 'next/server';
import { sql, initDb } from '../../../../../lib/db';

export async function GET(request) {
  try {
    await initDb();

    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json({ error: 'Missing token' }, { status: 400 });
    }

    const { rows } = await sql`
      UPDATE comments
      SET verified = TRUE
      WHERE verify_token = ${token} AND verified = FALSE
      RETURNING post_slug
    `;

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Invalid or already verified token' }, { status: 404 });
    }

    const slug = rows[0].post_slug;
    const siteUrl = process.env.SITE_URL || 'https://theresasumma.com';

    return NextResponse.redirect(`${siteUrl}/blog/${slug}?verified=1`);
  } catch (error) {
    console.error('Error verifying comment:', error);
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
  }
}
