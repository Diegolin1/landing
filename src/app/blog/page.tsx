"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, SearchIcon } from "lucide-react";
import BlogPostCard from "@/components/BlogPostCard";
import { getBlogPosts } from "@/utils/blog";

export default function BlogPage() {
  const posts = getBlogPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category))).sort();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Header */}
      <header className="bg-surface border-b border-borderDark sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeftIcon size={20} />
            Volver al inicio
          </Link>
          <h1 className="text-2xl font-bold text-white">Blog Lumina</h1>
          <div className="w-32" />
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Aprende a Vender Más
          </h2>
          <p className="text-xl text-white/70 max-w-2xl">
            Artículos educativos para vendedores B2B. Estrategias, tips, y guías prácticas para crecer tu negocio.
          </p>
        </section>

        {/* Search Bar */}
        <section className="mb-12">
          <div className="relative max-w-2xl">
            <SearchIcon className="absolute left-4 top-4 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 rounded-xl bg-surface border border-borderDark text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                !selectedCategory
                  ? "bg-primary text-white"
                  : "bg-surface border border-borderDark text-white/70 hover:border-primary/30"
              }`}
            >
              Todos ({posts.length})
            </button>
            {categories.map((category) => {
              const count = posts.filter((p) => p.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-surface border border-borderDark text-white/70 hover:border-primary/30"
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </section>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.slug} {...post} />
            ))}
          </section>
        ) : (
          <section className="text-center py-12">
            <p className="text-white/60 text-lg">No hay artículos que coincidan con tu búsqueda.</p>
          </section>
        )}
      </main>
    </div>
  );
}
