import Link from 'next/link';

const BlogList = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map(post => (
        <article key={post.id} className="blog-preview">
          <h2>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          <time className="blog-date">{post.date}</time>
          <p className="blog-excerpt">{post.excerpt}</p>
          <Link href={`/blog/${post.slug}`} className="read-more">
            Read more →
          </Link>
        </article>
      ))}
    </div>
  );
};

export default BlogList;