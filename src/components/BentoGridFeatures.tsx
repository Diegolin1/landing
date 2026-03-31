"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, Smartphone, Users, FileText } from "lucide-react";
import { cn } from "@/utils/cn";

export const FeaturesBento = () => {
  return (
    <section id="features" className="bg-brand-navy-base py-24 lg:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black text-brand-text-primary tracking-tighter italic">
            Infraestructura Crítica.
          </h2>
          <p className="text-lg text-brand-aqua-accent font-medium">
            No es solo software; es la columna vertebral de tu operación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {/* Card 1: Main Feature spanning 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-brand-navy-surface/50 backdrop-blur-sm rounded-3xl p-10 flex flex-col justify-end group transition-all border border-white/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-surface to-transparent z-0"></div>
            <div className="relative z-10">
              <Lock size={40} className="text-brand-orange-cta mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Soberanía de Precios</h3>
              <p className="text-stone-300 max-w-md">
                Protege tus márgenes. Controla quién ve tus precios de mayoreo con accesos restringidos por cliente y listas de precios segmentadas en tiempo real.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Secondary Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 lg:col-span-2 bg-brand-navy-surface/50 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-between group border border-white/10 relative"
          >
            <Smartphone size={32} className="text-brand-aqua-accent" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">PWA Optimizada</h3>
              <p className="text-stone-400 text-sm">
                Pedidos sin latencia, funcionando de manera asíncrona incluso cuando pierdes conexión.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Secondary Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 lg:col-span-1 bg-brand-navy-surface/50 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-between group border border-white/10 relative"
          >
            <Users size={32} className="text-indigo-400" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Comisionistas</h3>
              <p className="text-stone-400 text-sm">Monitorea rendimiento.</p>
            </div>
          </motion.div>

          {/* Card 4: Secondary Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-1 bg-brand-orange-cta/10 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-between group border border-brand-orange-cta/30 relative"
          >
            <FileText size={32} className="text-brand-orange-cta" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Facturación CFDI</h3>
              <p className="text-brand-orange-cta text-sm">Automatizado al 100%.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
