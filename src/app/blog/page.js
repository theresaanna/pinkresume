import { getBlogPosts } from "../components/blog-list";
import Link from "next/link";
import { stripMarkdown } from "../../utils/stripMarkdown";

const POSTS_PER_PAGE = 15;

export default async function BlogIndex({ searchParams }) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const posts = await getBlogPosts();

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <section className="section-light">
      <div className="section-content">
        <h1>Writing by Theresa Summa</h1>
        {paginatedPosts.length === 0 ? (
          <p>No posts yet. Check back soon!</p>
        ) : (
          <>
            {paginatedPosts.map((post) => (
              <div key={post.slug} className="blog-post">
                <strong>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </strong>
                {post.date && (
                  <div className="blog-date">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                )}
                <p>{post.excerpt}</p>
              </div>
            ))}
            {totalPages > 1 && (
              <nav className="pagination">
                {page > 1 && (
                  <Link href={`/blog?page=${page - 1}`}>&larr; Newer</Link>
                )}
                <span className="pagination-info">
                  Page {page} of {totalPages}
                </span>
                {page < totalPages && (
                  <Link href={`/blog?page=${page + 1}`}>Older &rarr;</Link>
                )}
              </nav>
            )}
          </>
        )}
      </div>
    </section>
  );
}
