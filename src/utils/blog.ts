import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

export interface BlogPost extends BlogPostMeta {
  slug: string;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "public", "blog");

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((file: string) => file.endsWith(".md"));

  const posts = files.map((file: string) => {
    const slug = file.replace(".md", "");
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      content,
      ...(data as BlogPostMeta),
    } as BlogPost;
  });

  return posts.sort(
    (a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    content,
    ...(data as BlogPostMeta),
  } as BlogPost;
}

export function getBlogCategories(): string[] {
  const posts = getBlogPosts();
  const categories = new Set(posts.map((post: BlogPost) => post.category));
  return Array.from(categories).sort();
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter((post: BlogPost) => post.category === category);
}
