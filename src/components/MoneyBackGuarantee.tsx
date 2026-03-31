"use client";

import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, Zap, ArrowRight } from "lucide-react";

export default function MoneyBackGuarantee() {
  const guaranteePoints = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "30 Días Sin Riesgo",
      description: "Prueba Lumina completamente. Si no funciona, reembolso 100% sin preguntas.",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Cancelación Instantánea",
      description: "Cancela en cualquier momento. No somos un contrato de 24 meses.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Setup Gratuito",
      description: "Equipo experto configura tu catálogo, usuarios e integraciones sin costo.",
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
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-surface to-background border-y border-borderDark">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Main Guarantee Box */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-12 mb-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-primary/30 p-4 rounded-full">
              <ShieldCheck className="w-12 h-12 text-primary" />
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Garantía de Reembolso: 30 Días
          </h2>

          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
            Si después de 30 días Lumina no te ayuda a crecer, devolvemos cada centavo. 
            <span className="text-primary font-semibold"> Sin preguntas. Sin cargos ocultos.</span>
          </p>

          <div className="inline-block bg-white/10 border border-white/20 rounded-lg px-6 py-3 mb-8">
            <p className="text-white/90 text-sm font-medium">
              ¿Por qué estamos tan seguros? Porque el 94% de nuestros clientes ven resultados en 2 semanas.
            </p>
          </div>

          <a
            href="#demo"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-background font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
          >
            Prueba Gratis 30 Días
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Guarantee Details */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {guaranteePoints.map((point, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-background border border-borderDark rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="text-primary mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                {point.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {point.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-8 p-8 bg-surface/50 border border-borderDark rounded-xl"
        >
          <div>
            <h4 className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
              ✓ Esto Significa:
            </h4>
            <ul className="space-y-3">
              {[
                "Acceso completo a todas las features",
                "Soportetech 24/7 en español",
                "Migraciones de datos sin costo",
                "Capacitación para tu team",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2 text-white/80 text-sm">
                  <span className="text-primary font-bold flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
              ✓ Lo que NO hacemos:
            </h4>
            <ul className="space-y-3">
              {[
                "No cobramos setup o implementación",
                "No hay contratos de largo plazo",
                "No hay cargos ocultos o sorpresas",
                "No limitamos features por plan",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2 text-white/80 text-sm">
                  <span className="text-primary font-bold flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-white/70 mb-6 text-sm">
            <span className="font-semibold text-primary">94%</span> de clientes continuarían incluso sin esta garantía.
            <br />
            Prueba y verás por qué.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
