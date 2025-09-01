// src/app/components/blog-list.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { stripMarkdown } from '../../utils/stripMarkdown';

// Helper function to get blog posts (runs at build time)
export async function getBlogPosts() {
  const blogDir = path.join(process.cwd(), 'src/content/blog');

  try {
    const files = fs.readdirSync(blogDir);
    const posts = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(blogDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        const excerpt = data.excerpt || content.slice(0, 150) + '...';

        return {
          slug: file.replace('.md', ''),
          title: data.title || 'Untitled',
          date: data.date || null,
          excerpt: stripMarkdown(excerpt),
          ...data
        };
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first

    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// Blog listing component
const BlogList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="blog">
        <h1><a name="blog">Recent Writing</a></h1>
        <p>No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="blog">
      <h1><a name="blog">Recent Writing</a></h1>
      {posts.map((post, index) => (
        <div key={post.slug} className="blog-post">
          <strong>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </strong>
          {post.date && (
            <div className="blog-date">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          )}
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;