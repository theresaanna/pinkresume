// Simple blog posts data structure
export const posts = [
  {
    id: 1,
    title: "My First Blog Post",
    slug: "my-first-blog-post",
    date: "2025-01-15",
    excerpt: "This is my first blog post where I share some thoughts about engineering and life.",
    content: `
# My First Blog Post

This is where the full content of my blog post would go. I can write about:

- Engineering experiences
- Technical insights
- Career reflections
- Personal projects

## Code Examples

\`\`\`javascript
const greeting = "Hello, blog readers!";
console.log(greeting);
\`\`\`

And much more...
    `
  },
  {
    id: 2,
    title: "Thoughts on Modern Web Development",
    slug: "thoughts-on-modern-web-development",
    date: "2025-01-20",
    excerpt: "Exploring the current state of web development and where we're heading.",
    content: `
# Thoughts on Modern Web Development

The web development landscape has evolved dramatically over the past few years...

## Key Trends

1. Component-based architecture
2. Static site generation
3. Edge computing
4. AI-assisted development

More content would go here...
    `
  }
];

export const getPostBySlug = (slug) => {
  return posts.find(post => post.slug === slug);
};

export const getAllPosts = () => {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};