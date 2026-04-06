import type { Metadata } from "next";
import BlogClientWrapper from "@/components/BlogClientWrapper";
import { getBlogPosts } from "@/utils/blog";

export const metadata: Metadata = {
  title: "Blog Gestory | ERP, POS offline y CFDI 4.0",
  description:
    "Guias practicas para empresas en Mexico sobre ERP, inventario multi-almacen, POS offline y facturacion CFDI 4.0.",
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category))).sort();

  return (
    <div className="min-h-screen bg-background text-white">
      <BlogClientWrapper posts={posts} categories={categories} />
    </div>
  );
}
