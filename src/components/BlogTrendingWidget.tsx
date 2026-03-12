"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUpIcon } from "lucide-react";
import { getBlogPosts } from "@/utils/blog";

export default function BlogTrendingWidget() {
  const posts = getBlogPosts().slice(0, 5);

  return (
    <aside className="bg-surface/50 border border-borderDark rounded-xl p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <TrendingUpIcon size={20} className="text-primary" />
        Trending en Blog
      </h3>

      <ul className="space-y-3">
        {posts.map((post, idx) => (
          <motion.li
            key={post.slug}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="flex items-start gap-3 group hover:bg-background/30 p-2 rounded-lg transition-colors"
            >
              <span className="text-primary font-bold text-sm flex-shrink-0">{idx + 1}</span>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-white/50 mt-1">{post.readTime}</p>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>

      <Link
        href="/blog"
        className="inline-block mt-4 text-primary hover:text-primary/80 text-sm font-semibold transition-colors"
      >
        Ver todos →
      </Link>
    </aside>
  );
}
