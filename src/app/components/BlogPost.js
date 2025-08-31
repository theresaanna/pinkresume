import Link from 'next/link';
import SimpleMarkdown from './SimpleMarkdown';
import Comments from "./components/Comments";

const BlogPost = ({ post }) => {
  return (
    <article className="blog-post">
      <header className="blog-header">
        <h1>{post.title}</h1>
        <time className="blog-date">{post.date}</time>
      </header>

      <div className="blog-content">
        <SimpleMarkdown content={post.content} />
      </div>
        <div className="comments">
            <h2><a name="comments">Comments</a></h2>
            <Comments />
        </div>
      <footer className="blog-footer">
        <Link href="/blog" className="back-link">
          ← Back to blog
        </Link>
      </footer>
    </article>
  );
};

export default BlogPost;