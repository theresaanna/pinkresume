"use client"
import { useEffect, useState } from "react";

export default function LinkedInPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/linkedin")
      .then(res => res.json())
      .then(data => {
        if (data.elements) setPosts(data.elements);
      });
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} style={{border: "1px solid #ccc", margin: "1rem", padding: "1rem"}}>
          <p>{post.specificContent["com.linkedin.ugc.ShareContent"].shareCommentary.text}</p>
        </div>
      ))}
    </div>
  );
}