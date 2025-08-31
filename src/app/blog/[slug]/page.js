import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogPost({ params }) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <div className="max-w-3xl mx-auto p-8 prose dark:prose-invert">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">{new Date(data.date).toDateString()}</p>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}