import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogIndex() {
  const postsDir = path.join(process.cwd(), "src/content/blog");
  let posts = [];

  if (fs.existsSync(postsDir)) {
    const files = fs.readdirSync(postsDir);

    posts = files
      .filter((file) => file.endsWith(".md"))
      .map((filename) => {
        const filePath = path.join(postsDir, filename);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);

        const slug = filename.replace(/\.md$/, "");
        return { slug, ...data };
      });
  }

  return (
    <main>
      <div className="main">
        <div className="star-container">
          <div className="star-menu">
            <nav className="star-nav">
              <li><a href="/#blog">Writing</a></li>
              <li><a href="/#resume">Resume</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li><a href="/#about">About</a></li>
            </nav>
          </div>
        </div>
        <div className="body">
          <div className="max-w-3xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Writing by Theresa Summa</h1>
            {posts.length === 0 ? (
              <p>No posts yet. Check back soon!</p>
            ) : (
              <ul className="space-y-4">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                    <p className="text-sm">
                      {new Date(post.date).toDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
