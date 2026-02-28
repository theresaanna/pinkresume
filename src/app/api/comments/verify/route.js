import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { sql, initDb } from '../../../../../lib/db';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

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
      RETURNING post_slug, author_name, body, parent_id
    `;

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Invalid or already verified token' }, { status: 404 });
    }

    const { post_slug, author_name, body, parent_id } = rows[0];
    const siteUrl = process.env.SITE_URL || 'https://theresasumma.com';
    const postUrl = `${siteUrl}/blog/${post_slug}`;
    const commentType = parent_id ? 'reply' : 'comment';

    // Notify site owner of new verified comment/reply
    try {
      await getResend().emails.send({
        from: 'Theresa Summa Blog <noreply@theresasumma.com>',
        to: 'theresasumma@gmail.com',
        subject: `New ${commentType} on: ${post_slug}`,
        html: `
          <p><strong>${author_name}</strong> left a ${commentType} on <a href="${postUrl}">${post_slug}</a>:</p>
          <blockquote>${body}</blockquote>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
    }

    return NextResponse.redirect(`${postUrl}?verified=1`);
  } catch (error) {
    console.error('Error verifying comment:', error);
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
  }
}
