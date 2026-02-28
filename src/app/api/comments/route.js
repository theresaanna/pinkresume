import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import crypto from 'crypto';
import { sql, initDb } from '../../../../lib/db';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function GET(request) {
  try {
    await initDb();

    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json({ error: 'Missing slug parameter' }, { status: 400 });
    }

    const { rows } = await sql`
      SELECT id, author_name, body, created_at
      FROM comments
      WHERE post_slug = ${slug} AND verified = TRUE
      ORDER BY created_at ASC
    `;

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await initDb();

    const { slug, authorName, email, body, website } = await request.json();

    // Honeypot check
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!slug || !authorName || !email || !body) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (authorName.length > 100) {
      return NextResponse.json({ error: 'Name too long' }, { status: 400 });
    }
    if (body.length > 5000) {
      return NextResponse.json({ error: 'Comment too long' }, { status: 400 });
    }

    const verifyToken = crypto.randomUUID();
    const siteUrl = process.env.SITE_URL || 'https://theresasumma.com';

    await sql`
      INSERT INTO comments (post_slug, author_name, author_email, body, verify_token)
      VALUES (${slug}, ${authorName}, ${email}, ${body}, ${verifyToken})
    `;

    const verifyUrl = `${siteUrl}/api/comments/verify?token=${verifyToken}`;

    await getResend().emails.send({
      from: 'Theresa Summa Blog <noreply@theresasumma.com>',
      to: email,
      subject: 'Verify your comment',
      html: `
        <p>Hi ${authorName},</p>
        <p>Thanks for leaving a comment! Please click the link below to verify it:</p>
        <p><a href="${verifyUrl}">Verify my comment</a></p>
        <p>If you didn't leave this comment, you can ignore this email.</p>
      `,
    });

    return NextResponse.json({ message: 'Check your email to verify your comment.' }, { status: 201 });
  } catch (error) {
    console.error('Error saving comment:', error);
    return NextResponse.json({ error: 'Failed to save comment' }, { status: 500 });
  }
}
