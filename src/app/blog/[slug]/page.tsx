import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, CalendarIcon, UserIcon, ClockIcon } from "lucide-react";
import { getBlogPost, getBlogPosts } from "@/utils/blog";
import Markdown from "markdown-to-jsx";
import { BlogPostSchema } from "@/components/Schema";
import NewsletterSignup from "@/components/NewsletterSignup";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const dateObj = new Date(post.date);
  const formattedDate = isNaN(dateObj.getTime())
    ? post.date
    : dateObj.toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

  // Get related posts (same category)
  const allPosts = getBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-white">
      <BlogPostSchema
        title={post.title}
        description={post.description}
        author={post.author}
        date={post.date}
        readTime={post.readTime}
        slug={slug}
        content={post.content}
      />
      
      {/* Header */}
      <header className="bg-surface border-b border-borderDark sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/blog" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeftIcon size={20} />
            Volver al blog
          </Link>
          <h1 className="text-xl font-bold text-white">Blog Gestory</h1>
          <div className="w-32" />
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-3xl">
        {/* Article Header */}
        <article>
          {/* Category & Meta */}
          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium mb-4">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-white/70 mb-6">{post.description}</p>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-white/60 border-b border-borderDark pb-6">
              <div className="flex items-center gap-2">
                <CalendarIcon size={18} />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <UserIcon size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none mb-12">
            <Markdown
              options={{
                overrides: {
                  h1: {
                    props: { className: "text-3xl font-bold mt-8 mb-4 text-white" },
                  },
                  h2: {
                    props: { className: "text-2xl font-bold mt-8 mb-4 text-white" },
                  },
                  h3: {
                    props: { className: "text-xl font-bold mt-6 mb-3 text-white" },
                  },
                  p: {
                    props: { className: "text-white/80 mb-4 leading-relaxed" },
                  },
                  ul: {
                    props: { className: "list-disc list-inside text-white/80 mb-4 space-y-2" },
                  },
                  ol: {
                    props: { className: "list-decimal list-inside text-white/80 mb-4 space-y-2" },
                  },
                  li: {
                    props: { className: "text-white/80" },
                  },
                  table: {
                    props: { className: "w-full border-collapse my-6" },
                  },
                  thead: {
                    props: { className: "bg-surface/50 border-b border-borderDark" },
                  },
                  th: {
                    props: { className: "px-4 py-2 text-left text-white font-semibold" },
                  },
                  td: {
                    props: { className: "px-4 py-2 text-white/80 border-b border-borderDark" },
                  },
                  a: {
                    props: { className: "text-primary hover:text-primary/80 underline transition-colors" },
                  },
                  code: {
                    props: { className: "bg-surface px-2 py-1 rounded text-primary text-sm font-mono" },
                  },
                  pre: {
                    props: { className: "bg-surface/50 p-4 rounded-lg overflow-x-auto mb-4" },
                  },
                  blockquote: {
                    props: { className: "border-l-4 border-primary pl-4 italic text-white/70 my-6" },
                  },
                },
              }}
            >
              {post.content}
            </Markdown>
          </div>

          {/* CTA Section */}
          <div className="bg-surface border border-borderDark rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">¿Listo para operar con mas control?</h3>
            <p className="text-white/70 mb-6">
              Implementa estas practicas con Gestory y conecta ventas, inventario y facturacion en una sola plataforma.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
            >
              Agendar demo de Gestory
            </Link>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-borderDark pt-12">
            <h2 className="text-2xl font-bold text-white mb-8">Artículos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-surface border border-borderDark rounded-lg p-6 hover:border-primary/30 transition-all">
                    <div className="text-sm text-primary mb-2">{relatedPost.category}</div>
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-white/60 line-clamp-2">{relatedPost.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter Section */}
        <section className="mt-20 border-t border-borderDark pt-12">
          <NewsletterSignup />
        </section>
      </main>
    </div>
  );
}
