"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function NewBlogPostPage() {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("# Start writing here...");

  const handleSave = async () => {
    const res = await fetch("/api/save-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content: markdown }),
    });

    const data = await res.json();
    if (data.success) {
      alert(`✅ Saved as ${data.slug}.md`);
    } else {
      alert("❌ Error: " + data.error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">✍️ New Blog Post</h1>

      <input
        type="text"
        placeholder="Enter post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
      />

      <MDEditor value={markdown} onChange={setMarkdown} height={400} />

      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Save Post
      </button>
    </div>
  );
}