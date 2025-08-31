import { getAllPosts } from '../../data/posts';
import BlogList from '../components/BlogList';

export const metadata = {
  title: 'Theresa Summa',
  description: 'Software Development Writing',
};

export default function BlogPage() {
  const posts = getAllPosts();

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
          <h1>Writings</h1>
          <BlogList posts={posts} />
        </div>
      </div>
    </main>
  );
}