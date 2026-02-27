import { NextResponse } from "next/server";

const GITHUB_REPO = "theresaanna/pinkresume";
const GITHUB_BRANCH = "main";
const BLOG_DIR = "src/content/blog";

// Handle POST /api/save-post
export async function POST(req) {
  try {
    const { title, content } = await req.json();

    if (!title || !content) {
      return NextResponse.json({ error: "Missing title or content" }, { status: 400 });
    }

    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      console.error("GITHUB_TOKEN environment variable is not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Slugify title → my-first-post
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const filePath = `${BLOG_DIR}/${slug}.md`;

    const frontmatter = `---\ntitle: "${title}"\ndate: "${new Date().toISOString()}"\n---\n\n`;
    const fileContent = frontmatter + content;

    // Base64 encode the content for the GitHub API
    const encodedContent = Buffer.from(fileContent, "utf8").toString("base64");

    // Check if the file already exists (to get its SHA for updates)
    let sha;
    const existingRes = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}?ref=${GITHUB_BRANCH}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (existingRes.ok) {
      const existingData = await existingRes.json();
      sha = existingData.sha;
    }

    // Create or update the file via GitHub Contents API
    const createRes = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `Add blog post: ${title}`,
          content: encodedContent,
          branch: GITHUB_BRANCH,
          ...(sha ? { sha } : {}),
        }),
      }
    );

    if (!createRes.ok) {
      const errorData = await createRes.json();
      console.error("GitHub API error:", errorData);
      return NextResponse.json(
        { error: "Failed to save post to GitHub" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, slug });
  } catch (err) {
    console.error("Error saving post:", err);
    return NextResponse.json({ error: "Failed to save post" }, { status: 500 });
  }
}
