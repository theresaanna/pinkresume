import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import Comments from "../../components/Comments";

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return (
      <main>
        <div className="main">
          <div className="star-container">
            <div className="star-menu">
              <nav className="star-nav">
                <li><a href="/#blog">Writing</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><a href="/#about">About</a></li>
              </nav>
            </div>
          </div>
          <div className="body">
            <div className="max-w-3xl mx-auto p-8">
              <h1>404 – Post Not Found</h1>
              <p><Link href="/blog">← Back to blog</Link></p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <main>
      <div className="main">
        <div className="star-container">
          <div className="star-menu">
            <nav className="star-nav">
              <li><a href="/#blog">Writing</a></li>
              <li><a href="/#projects">Projects</a></li>
              <li><a href="/#resume">Resume</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li><a href="/#about">About</a></li>
            </nav>
          </div>
        </div>
        <div className="body">
          <div className="max-w-3xl mx-auto p-8 prose dark:prose-invert">
            <h1>{data.title}</h1>
            <p className="text-sm">{new Date(data.date).toDateString()}</p>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
              <Comments />
              <p className="mt-8"><Link href="/blog">← Back to blog</Link></p>
          </div>
        </div>
      </div>
    </main>
  );
}
