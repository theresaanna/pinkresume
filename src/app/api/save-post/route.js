import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Handle POST /api/save-post
export async function POST(req) {
  try {
    const { title, content } = await req.json();

    if (!title || !content) {
      return NextResponse.json({ error: "Missing title or content" }, { status: 400 });
    }

    // Slugify title → my-first-post.md
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.md`);

    const frontmatter = `---\ntitle: "${title}"\ndate: "${new Date().toISOString()}"\n---\n\n`;
    const fileContent = frontmatter + content;

    fs.writeFileSync(filePath, fileContent, "utf8");

    return NextResponse.json({ success: true, slug });
  } catch (err) {
    console.error("Error saving post:", err);
    return NextResponse.json({ error: "Failed to save post" }, { status: 500 });
  }
}