"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, BarChart3, ShieldCheck, Lock, FileText, TrendingUp } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { scrollToDemoBooking } from "../utils/scroll";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-32">
      <div className="absolute inset-0 bg-hero-glow z-0" />
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-borderDark text-sm text-primary mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Plataforma B2B para Fabricantes en México
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-textMuted"
        >
          Adiós al caos.<br className="hidden md:block"/>
          <span className="text-primary">Bienvenido a ventas B2B ordenadas.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-textMuted mb-8 leading-relaxed"
        >
          <strong>Recupera 12 horas semanales</strong> en facturas manuales y pedidos en WhatsApp. Unifica tu catálogo digital, automatiza CFDI 4.0, y <strong className="text-white">aumenta pedidos recurrentes en 35% el primer trimestre.</strong>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToDemoBooking()}
            className="relative w-full sm:w-auto px-8 py-4 rounded-lg bg-primary hover:bg-primary-hover text-background font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]"
          >
            <span className="absolute inset-0 rounded-lg bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
            👉 QUIERO MI SHOWROOM EN 24 HORAS
          </button>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-sm text-white/60 mt-4"
        >
          ✅ Setup gratis en 24 horas  •  ✓ Sin tarjeta de crédito  •  ✓ Soporte en español
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="bg-surface/50 border border-borderDark rounded-lg p-4 text-center hover:border-primary/30 hover:bg-primary/10 transition-all cursor-pointer">
            <Lock className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="font-semibold text-white">Catálogo Privado 24/7</p>
            <p className="text-xs text-white/60 mt-1">Tus clientes ven precios únicos</p>
          </div>
          <div className="bg-surface/50 border border-borderDark rounded-lg p-4 text-center hover:border-primary/30 hover:bg-primary/10 transition-all cursor-pointer">
            <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="font-semibold text-white">Factura en 1 Click</p>
            <p className="text-xs text-white/60 mt-1">CFDI 4.0 automático</p>
          </div>
          <div className="bg-surface/50 border border-borderDark rounded-lg p-4 text-center hover:border-primary/30 hover:bg-primary/10 transition-all cursor-pointer">
            <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="font-semibold text-white">CRM de Vendedores</p>
            <p className="text-xs text-white/60 mt-1">Ve quién vende qué en vivo</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}