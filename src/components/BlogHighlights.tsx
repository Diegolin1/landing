"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import BlogPostCard from "./BlogPostCard";
import { getBlogPosts } from "@/utils/blog";

export default function BlogHighlights() {
  const posts = getBlogPosts().slice(0, 3);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-surface/30 border-t border-b border-borderDark">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold mb-4">
            📚 Blog Educativo
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Aprende Estrategias B2B
          </h2>
          <p className="text-white/70 text-lg">
            Artículos prácticos sobre ventas, precios, automatización y más. Escrito para vendedores reales.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <BlogPostCard {...post} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all group"
          >
            Ver Todos los Artículos
            <ArrowRightIcon
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
