"use client";

import { motion } from "framer-motion";
import { TrendingUpIcon, UsersIcon, ClockIcon } from "lucide-react";

interface CaseStudy {
  company: string;
  industry: string;
  metric: string;
  before: string;
  after: string;
  increase: string;
  timeframe: string;
  color: string;
}

const caseStudies: CaseStudy[] = [
  {
    company: "Fábrica XYZ",
    industry: "Calzado",
    metric: "Ingresos mensuales",
    before: "$25,000",
    after: "$82,000",
    increase: "+228%",
    timeframe: "6 meses",
    color: "from-blue-500 to-cyan-500",
  },
  {
    company: "Textiles ABC",
    industry: "Textil",
    metric: "Órdenes procesadas",
    before: "50/mes",
    after: "180/mes",
    increase: "+260%",
    timeframe: "4 meses",
    color: "from-purple-500 to-pink-500",
  },
  {
    company: "Distribuidora DEF",
    industry: "Mayoreo",
    metric: "Clientes activos",
    before: "35",
    after: "94",
    increase: "+169%",
    timeframe: "8 meses",
    color: "from-green-500 to-emerald-500",
  },
];

export default function SuccessStories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold mb-4">
            🏆 Resultados Reales
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ve Cómo Fabricantes Mexicanos Crecen 3x
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Historias de vendedores, fabricantes y distribuidores que triplicaron ingresos en menos de 12 meses
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-surface border border-borderDark rounded-2xl p-8 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10 group"
            >
              {/* Header */}
              <div className="mb-6">
                <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${study.color} text-white text-xs font-bold mb-3`}>
                  {study.industry}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{study.company}</h3>
                <p className="text-sm text-white/60">{study.metric}</p>
              </div>

              {/* Comparison */}
              <div className="grid grid-cols-2 gap-4 mb-6 py-6 border-y border-borderDark">
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide mb-2">Antes</p>
                  <p className="text-2xl font-bold text-red-400">{study.before}</p>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide mb-2">Ahora</p>
                  <p className="text-2xl font-bold text-emerald-400">{study.after}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <TrendingUpIcon size={20} className="text-primary" />
                  <div>
                    <p className="text-sm font-bold text-white">{study.increase}</p>
                    <p className="text-xs text-white/60">de crecimiento</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ClockIcon size={20} className="text-primary" />
                  <div>
                    <p className="text-sm font-bold text-white">{study.timeframe}</p>
                    <p className="text-xs text-white/60">para lograr esto</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full mt-6 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary font-semibold rounded-lg transition-colors text-sm">
                Ver Detalles
              </button>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Highlight */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl">⭐</span>
            ))}
          </div>
          <p className="text-lg md:text-xl text-white mb-6 max-w-3xl mx-auto italic font-medium">
            "Aumentamos nuestras ventas de $25K a $82K en 6 meses. Ya no estamos compitiendo por precio, ahora somos los que eligen nuestros clientes por eficiencia"
          </p>
          <div>
            <p className="font-bold text-white">Roberto García</p>
            <p className="text-sm text-white/60">Dueño, Fábrica XYZ • Calzado</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
