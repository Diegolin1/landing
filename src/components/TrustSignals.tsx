"use client";

import { motion } from "framer-motion";
import { BookOpenIcon, BarChart3Icon, UsersIcon, AwardIcon } from "lucide-react";
import { getBlogPosts } from "@/utils/blog";

export default function TrustSignals() {
  const posts = getBlogPosts();
  const totalWords = posts.reduce((acc, post) => {
    return acc + (post.content.split(/\s+/).length || 0);
  }, 0);

  const stats = [
    {
      icon: BookOpenIcon,
      label: "Artículos Publicados",
      value: posts.length.toString(),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3Icon,
      label: "Palabras de Valor",
      value: `${(totalWords / 1000).toFixed(0)}K+`,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: UsersIcon,
      label: "Fabricantes Usando",
      value: "2.5K+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: AwardIcon,
      label: "Certificaciones",
      value: "5",
      color: "from-orange-500 to-amber-500",
    },
  ];

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
    <section className="py-12 px-6 lg:px-12 bg-background border-t border-borderDark">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-surface border border-borderDark rounded-lg p-6 text-center hover:border-primary/30 transition-all"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
