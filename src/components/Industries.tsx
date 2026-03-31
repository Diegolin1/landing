"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ArrowRight } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      name: "Fabricantes de Calzado",
      icon: "👞",
      description: "Catalogo visual, tallas, colores, pedidos mayoreo",
      metrics: "2,400 fabricantes en México",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Textiles y Confección",
      icon: "👕",
      description: "Pedidos por tela, hilo, bordado, entregas rápidas",
      metrics: "1,800 empresas de confección",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Distribuidoras Mayoristas",
      icon: "📦",
      description: "Control de inventario, rutas de reparto, CFDI multienviado",
      metrics: "3,200 distribuidoras activas",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Fabricantes de Plástico",
      icon: "🏭",
      description: "Especificaciones técnicas, moldes, entregas planificadas",
      metrics: "920 fábricas de plástico",
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "Herrajes y Accesorios",
      icon: "🔧",
      description: "Listado técnico, SKU masivos, pedidos complejos",
      metrics: "1,500 proveedores",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Alimentos y Bebidas",
      icon: "🥫",
      description: "Trazabilidad, vencimientos, regulación COFEPRIS",
      metrics: "2,100 empresas alimentarias",
      color: "from-amber-500 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-16 px-6 lg:px-12 bg-surface/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
            🏭 Sectores que Impulsamos
          </p>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Soluciones por Industria
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Lumina está diseñado para los sectores manufacturero y distribución mexicanos.
            Aquí están los más beneficiados:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group bg-background border border-borderDark rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{industry.icon}</span>
                <TrendingUp className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h4 className="text-lg font-semibold text-white mb-2">
                {industry.name}
              </h4>

              <p className="text-sm text-white/70 mb-4">{industry.description}</p>

              <div className="pt-4 border-t border-borderDark">
                <p className="text-xs text-primary font-semibold">
                  {industry.metrics}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-center bg-primary/10 border border-primary/20 rounded-xl p-8"
        >
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <p className="text-white/80 mb-4">
            ¿Tu industria no está en la lista? Contáctanos para ver si podemos customizar Lumina para ti.
          </p>
          <a
            href="mailto:ventas@lumina.com"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Contáctanos <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
