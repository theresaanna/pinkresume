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
    <section className="section-light">
      <div className="section-content">
        <h1>Writing by Theresa Summa</h1>
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
    </section>
  );
}
