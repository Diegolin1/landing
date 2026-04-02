"use client";

import { motion } from "framer-motion";
import { FileX, Check, ArrowRight } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Tu Tiempo Libre</h2>
        <h3 className="text-3xl md:text-5xl font-heading font-extrabold text-textPrimary mb-6">
          Deja de revisar caja por todo el día. <br className="hidden md:block"/> Empieza a expandir el negocio.
        </h3>
        <p className="text-lg text-textSecondary font-medium max-w-2xl mx-auto">
          ¿Tus números nunca cuadran y vendes productos por redes sociales que resulta ya no existían en almacén?
          Pon tu empresa en piloto automático.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center border border-borderLight rounded-3xl overflow-hidden shadow-card">
        
        {/* Left Side: The Problem (Excel/Chaos) */}
        <div className="bg-surface-muted h-full p-10 lg:p-16 border-r border-borderLight/50 flex flex-col justify-center">
          <div className="bg-error-light w-12 h-12 rounded-xl flex items-center justify-center mb-8">
            <FileX className="h-6 w-6 text-error" />
          </div>
          <h4 className="text-2xl font-bold text-textPrimary mb-4">El Caos del Papel y Múltiples Sistemas</h4>
          <ul className="space-y-4 mb-8">
            {["Las libretas no te dicen qué producto falta", "Cobros dobles y cancelaciones perdiendo el artículo", "Escribir la factura del cliente letra por letra", "Tner que sumar y revisar ganancias diariamente"].map((item, i) => (
              <li key={i} className="flex items-start text-textSecondary font-medium">
                <span className="flex shrink-0 h-5 w-5 rounded-full bg-error-light items-center justify-center mr-3 mt-0.5">
                  <div className="h-1.5 w-1.5 bg-error rounded-full" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          
          <div className="mt-auto bg-white p-4 rounded-xl border border-error/20 opacity-70 scale-95 blur-[1px]">
            <div className="h-2 w-full bg-borderLight mb-2 rounded" />
            <div className="h-2 w-3/4 bg-borderLight mb-2 rounded" />
            <div className="h-2 w-1/2 bg-error/30 rounded" />
          </div>
        </div>

        {/* Right Side: Gestory (Order/Automation) */}
        <div className="bg-gradient-to-br from-primary-light/50 to-white h-full p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
          <div className="absolute right-10 bottom-10">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 border border-accent/20 rounded-full border-dashed"
            />
          </div>

          <div className="relative z-10">
            <div className="bg-success-light w-12 h-12 rounded-xl flex items-center justify-center mb-8">
              <Check className="h-6 w-6 text-success" />
            </div>
            <h4 className="text-2xl font-bold text-textPrimary mb-4">Todo Controlado y Cuadrado en Tiempo Real</h4>
            <ul className="space-y-4 mb-8">
              {["Visualiza y sabe todo lo que pasa en todas tus tiendas al mismo tiempo", "Alertas y notificaciones rápidas de poco stock de producto de manera predictiva", "Tus clientes se facturan sus ventas por sí solos.", "Mira las ganancias automáticamente"].map((item, i) => (
                <li key={i} className="flex items-start text-textPrimary font-medium">
                  <span className="flex shrink-0 h-5 w-5 rounded-full bg-success text-white items-center justify-center mr-3 mt-0.5 border border-success-light shadow-sm">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="mt-auto bg-white p-5 rounded-xl border border-accent/30 shadow-glow transform -rotate-1 relative group hover:rotate-0 transition-transform">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-success uppercase">Sincronizado</span>
                <span className="text-xs font-bold text-textMuted uppercase flex items-center">
                  <div className="h-1.5 w-1.5 bg-success rounded-full mr-1 animate-pulse" /> Live
                </span>
              </div>
              <div className="h-3 w-full bg-success/20 mb-2 rounded flex overflow-hidden">
                <div className="h-full w-full bg-success rounded transition-all" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}