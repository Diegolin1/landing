"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, Presentation, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  onOpenDemo?: (e: React.MouseEvent) => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-48 lg:pb-32" id="inicio">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 bg-hero-gradient blur-xl opacity-60"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50/50 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-light border border-blue-200 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Creado para dueños que quieren crecer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-textPrimary leading-tight tracking-tight">
              Todo tu negocio en un <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">solo lugar</span>
            </h1>
            
            <p className="text-lg text-textSecondary max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Controla tu inventario exacto, aprueba facturas automáticamente y olvídate de los errores de Excel. Gestory conecta tu tienda física con tus ventas 온라인, y funciona en días, no meses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={onOpenDemo}
                className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-lg shadow-glow text-white bg-accent hover:bg-accent-hover transition-all group"
              >
                Agendar Demo Gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                href="#soluciones"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-borderLight text-base font-semibold rounded-lg text-textPrimary bg-white hover:bg-surface-muted transition-colors"
              >
                Ver cómo funciona
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-textMuted pt-6">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-success" /> Sin pagar por adelantado</div>
              <div className="hidden sm:block h-4 w-px bg-borderLight"></div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-success" /> Soporte en español</div>
              <div className="hidden sm:block h-4 w-px bg-borderLight"></div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-success" /> Seguro y Confidencial</div>
            </div>
          </motion.div>

          {/* Right Column: Dashboard Visual / Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-2xl"
          >
            {/* Main Mockup Container */}
            <div className="relative rounded-2xl bg-surface border border-borderLight shadow-2xl overflow-hidden p-2.5">
              <div className="bg-surface-muted rounded-xl flex items-center p-2 border border-borderLight mb-2.5 space-x-2">
                <div className="w-3 h-3 rounded-full bg-error/80"></div>
                <div className="w-3 h-3 rounded-full bg-warning/80"></div>
                <div className="w-3 h-3 rounded-full bg-success/80"></div>
                <div className="ml-4 h-4 w-48 bg-white border border-borderLight rounded-md mx-auto opacity-70"></div>
              </div>
              
              {/* Pseudo-Dashboard Interface (Bento Grid Style) */}
              <div className="bg-background rounded-xl p-4 grid grid-cols-12 gap-4 h-[420px]">
                
                {/* Metric Card 1 */}
                <div className="col-span-8 bg-surface border border-borderLight rounded-xl p-5 shadow-sm flex flex-col justify-between relative overflow-hidden">
                  <div className="flex justify-between items-start z-10">
                    <div>
                      <p className="text-xs font-semibold text-textMuted uppercase tracking-wider">Flujo de Caja Total</p>
                      <p className="text-3xl font-bold text-textPrimary mt-1">$4,145,600</p>
                      <p className="text-sm text-success flex items-center mt-2 font-medium"><TrendingUp className="h-4 w-4 mr-1"/> +14.5% este mes</p>
                    </div>
                    <div className="p-3 bg-primary-light rounded-lg">
                      <Presentation className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  {/* Decorative chart area */}
                  <div className="absolute -bottom-4 -left-4 w-[110%] h-24 bg-gradient-to-t from-primary-light/40 to-transparent rounded-full blur-2xl"></div>
                </div>

                {/* Status Card 2 */}
                <div className="col-span-4 bg-primary text-white rounded-xl p-4 shadow-sm flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                  <div className="z-10">
                    <p className="text-xs font-medium text-blue-200 uppercase tracking-wider">Alertas de Stock</p>
                    <p className="text-4xl font-bold mt-1">12</p>
                    <p className="text-xs mt-1 text-blue-100">SKUs mínimos</p>
                  </div>
                  <div className="mt-4 bg-white/20 px-3 py-2 rounded-lg text-xs font-medium text-center backdrop-blur-md cursor-pointer hover:bg-white/30 transition-colors z-10">
                    Reabastecer
                  </div>
                </div>

                {/* Orders List 3 */}
                <div className="col-span-12 bg-surface border border-borderLight rounded-xl p-5 shadow-sm h-full flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-sm font-semibold text-textPrimary uppercase tracking-wider">Últimos Pedidos Sincronizados</p>
                    <span className="text-xs font-medium text-accent cursor-pointer hover:underline">Ver todos</span>
                  </div>
                  <div className="space-y-4 flex-1 overflow-hidden">
                    {[
                      { id: "#PED-4029", client: "Tienda Matriz", amount: "$14,500.00", status: "Pagado", color: "bg-success-light text-success" },
                      { id: "#PED-4030", client: "E-Commerce", amount: "$3,250.00", status: "Procesando", color: "bg-warning-light text-warning" },
                      { id: "#PED-4031", client: "Mercado Libre", amount: "$1,890.00", status: "Enviado", color: "bg-primary-light text-primary" },
                      { id: "#PED-4032", client: "B2B Mayorista", amount: "$89,500.00", status: "Facturado", color: "bg-success-light text-success" }
                    ].map((order, i) => (
                      <div key={i} className="flex justify-between items-center text-sm border-b border-borderLight/40 pb-3 last:border-0 last:pb-0">
                        <div className="flex flex-col">
                          <span className="font-semibold text-textPrimary">{order.id}</span>
                          <span className="text-xs text-textSecondary font-medium">{order.client}</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="font-bold text-textPrimary">{order.amount}</span>
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md mt-1 ${order.color}`}>{order.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Trust Elements */}
            <motion.div 
               animate={{ y: [0, -12, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-8 -left-8 bg-surface p-4 rounded-xl shadow-xl border border-borderLight flex items-center gap-4 z-20"
            >
              <div className="h-12 w-12 bg-success-light rounded-full flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-xs font-semibold text-textSecondary uppercase tracking-widest">Stock Exacto</p>
                <p className="text-sm font-bold text-textPrimary">Multi-Almacén Activo</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}