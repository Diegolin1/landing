"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, BarChart3, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-32">
      <div className="absolute inset-0 bg-hero-glow z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-borderDark text-sm text-primary mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Plataforma B2B para Fabricantes en México
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-textMuted"
        >
          Crece como los grandes,<br className="hidden md:block"/> 
          <span className="text-primary">sin dejar de ser PYME.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-textMuted mb-10 leading-relaxed"
        >
          Infraestructura digital hecha en México para México. Factura en CFDI lo que usualmente pedías por WhatsApp. Crece de 10 a 50 clientes mayoristas sin triplicar tu trabajo.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="relative w-full sm:w-auto px-8 py-4 rounded-lg bg-primary hover:bg-primary-hover text-background font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]">
            <span className="absolute inset-0 rounded-lg bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
            Comenzar Prueba Gratis <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-lg bg-surface border border-borderDark hover:bg-surfaceHover hover:border-primary text-white font-medium text-lg transition-all">
            Agendar Demostración
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-textMuted text-sm font-medium"
        >
          <div className="flex items-center gap-2"><ShoppingCart className="w-4 h-4 text-primary"/> Pedidos a WhatsApp</div>
          <div className="flex items-center gap-2"><BarChart3 className="w-4 h-4 text-primary"/> CRM de Vendedores</div>
          <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary"/> CFDI 4.0 Integrado</div>
        </motion.div>
      </div>
    </section>
  );
}