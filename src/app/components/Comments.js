"use client"
import { useState, useEffect } from 'react';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  const [authorName, setAuthorName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch(`/api/comments?slug=${encodeURIComponent(slug)}`);
        if (res.ok) {
          const data = await res.json();
          setComments(data);
        }
      } catch (err) {
        console.error('Failed to load comments:', err);
      }
    }
    fetchComments();
  }, [slug]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');

    try {
      const honeypot = e.target.elements['website'].value;

      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug,
          authorName: authorName.trim(),
          email: email.trim(),
          body: body.trim(),
          website: honeypot,
        }),
      });

      if (res.ok) {
        setAuthorName('');
        setEmail('');
        setBody('');
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Failed to submit comment:', err);
      setStatus('error');
    }
  }

  return (
    <div className="comments-section">
      <h2>Comments</h2>

      {comments.length === 0 && (
        <p className="blog-date">No comments yet. Be the first!</p>
      )}

      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <strong>{comment.author_name}</strong>
          <div className="blog-date">
            {new Date(comment.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <p style={{ whiteSpace: 'pre-wrap' }}>{comment.body}</p>
        </div>
      ))}

      <form onSubmit={handleSubmit} className="comment-form">
        {/* Honeypot field - hidden from real users */}
        <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="comment-field">
          <label htmlFor="authorName">Name</label>
          <input
            type="text"
            id="authorName"
            value={authorName}
            onChange={e => setAuthorName(e.target.value)}
            required
            maxLength={100}
          />
        </div>

        <div className="comment-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <span className="blog-date">Your email will not be displayed publicly.</span>
        </div>

        <div className="comment-field">
          <label htmlFor="body">Comment</label>
          <textarea
            id="body"
            value={body}
            onChange={e => setBody(e.target.value)}
            required
            maxLength={5000}
            rows={4}
          />
        </div>

        <div className="comment-submit-row">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="comment-submit"
          >
            {status === 'submitting' ? 'Posting...' : 'Post Comment'}
          </button>

          {status === 'success' && (
            <p className="comment-message comment-success">
              Check your email to verify your comment.
            </p>
          )}
          {status === 'error' && (
            <p className="comment-message comment-error">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comments;
