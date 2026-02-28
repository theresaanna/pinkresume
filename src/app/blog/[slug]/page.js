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
      <section className="section-light">
        <div className="section-content">
          <h1>404 – Post Not Found</h1>
          <p><Link href="/blog">← Back to blog</Link></p>
        </div>
      </section>
    );
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <section className="section-light">
      <div className="section-content prose">
        <h1>{data.title}</h1>
        <p className="text-sm">{new Date(data.date).toDateString()}</p>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        <Comments slug={slug} />
        <p className="mt-8"><Link href="/blog">← Back to blog</Link></p>
      </div>
    </section>
  );
}
