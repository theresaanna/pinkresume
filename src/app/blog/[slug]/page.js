import { getPostBySlug, getAllPosts } from '../../../data/posts';
import BlogPost from '../../components/BlogPost';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} - Theresa Summa`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <div className="main">
        <div className="star-container">
          <div className="star-menu">
            <nav className="star-nav">
             <li><a href="/#letter">Letter</a></li>
             <li><a href="/#resume">Resume</a></li>
             <li><a href="/blog">Blog</a></li>
             <li><a href="/#contact">Contact</a></li>
             <li><a href="/#about">About</a></li>
            </nav>
         </div>
        </div>
        <div className="body">
          <BlogPost post={post} />
        </div>
      </div>
    </main>
  );
}