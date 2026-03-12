import Link from "next/link";
import BlogClientWrapper from "@/components/BlogClientWrapper";
import NewsletterSignup from "@/components/NewsletterSignup";
import { getBlogPosts } from "@/utils/blog";

export default function BlogPage() {
  const posts = getBlogPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category))).sort();

  return (
    <div className="min-h-screen bg-background text-white">
      <BlogClientWrapper posts={posts} categories={categories} />
    </div>
  );
}
