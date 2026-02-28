"use client"
import { useState, useEffect } from 'react';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  const [authorName, setAuthorName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [replyingTo, setReplyingTo] = useState(null); // comment id or null

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

  // Build threaded structure
  const topLevelComments = comments.filter(c => c.parent_id === null);
  const repliesByParent = {};
  comments.forEach(c => {
    if (c.parent_id !== null) {
      if (!repliesByParent[c.parent_id]) {
        repliesByParent[c.parent_id] = [];
      }
      repliesByParent[c.parent_id].push(c);
    }
  });

  async function handleSubmit(e, parentId = null) {
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
          parentId,
        }),
      });

      if (res.ok) {
        setAuthorName('');
        setEmail('');
        setBody('');
        setStatus('success');
        if (parentId) {
          setReplyingTo(null);
        }
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Failed to submit comment:', err);
      setStatus('error');
    }
  }

  function renderCommentForm(parentId = null) {
    const isReply = parentId !== null;
    const formClass = isReply ? 'comment-form comment-reply-form' : 'comment-form';

    return (
      <form onSubmit={(e) => handleSubmit(e, parentId)} className={formClass}>
        {/* Honeypot field - hidden from real users */}
        <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
          <label htmlFor={isReply ? `website-${parentId}` : 'website'}>Website</label>
          <input type="text" id={isReply ? `website-${parentId}` : 'website'} name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="comment-field">
          <label htmlFor={isReply ? `authorName-${parentId}` : 'authorName'}>Name</label>
          <input
            type="text"
            id={isReply ? `authorName-${parentId}` : 'authorName'}
            value={authorName}
            onChange={e => setAuthorName(e.target.value)}
            required
            maxLength={100}
          />
        </div>

        <div className="comment-field">
          <label htmlFor={isReply ? `email-${parentId}` : 'email'}>Email</label>
          <input
            type="email"
            id={isReply ? `email-${parentId}` : 'email'}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <span className="blog-date">Your email will not be displayed publicly.</span>
        </div>

        <div className="comment-field">
          <label htmlFor={isReply ? `body-${parentId}` : 'body'}>{isReply ? 'Reply' : 'Comment'}</label>
          <textarea
            id={isReply ? `body-${parentId}` : 'body'}
            value={body}
            onChange={e => setBody(e.target.value)}
            required
            maxLength={5000}
            rows={isReply ? 3 : 4}
          />
        </div>

        <div className="comment-submit-row">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="comment-submit"
          >
            {status === 'submitting' ? 'Posting...' : isReply ? 'Post Reply' : 'Post Comment'}
          </button>

          {status === 'success' && (
            <p className="comment-message comment-success">
              Check your email to verify your {isReply ? 'reply' : 'comment'}.
            </p>
          )}
          {status === 'error' && (
            <p className="comment-message comment-error">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </form>
    );
  }

  return (
    <div className="comments-section">
      <h2>Comments</h2>

      {topLevelComments.length === 0 && (
        <p className="blog-date">No comments yet. Be the first!</p>
      )}

      {topLevelComments.map(comment => (
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
          <button
            className="comment-reply-btn"
            onClick={() => {
              setReplyingTo(replyingTo === comment.id ? null : comment.id);
              setStatus('idle');
            }}
          >
            {replyingTo === comment.id ? 'Cancel' : 'Reply'}
          </button>

          {replyingTo === comment.id && renderCommentForm(comment.id)}

          {(repliesByParent[comment.id] || []).map(reply => (
            <div key={reply.id} className="comment comment-reply">
              <strong>{reply.author_name}</strong>
              <div className="blog-date">
                {new Date(reply.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <p style={{ whiteSpace: 'pre-wrap' }}>{reply.body}</p>
            </div>
          ))}
        </div>
      ))}

      {renderCommentForm()}
    </div>
  );
};

export default Comments;
