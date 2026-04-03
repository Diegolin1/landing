"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, Presentation, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useI18n } from "../../i18n";

interface HeroProps {
  onOpenDemo?: (e: React.MouseEvent) => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 lg:pt-44 lg:pb-32" id="inicio">
      {/* Background decorations */}
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3" />
      
      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-accent/20 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-semibold text-textSecondary">{t.hero.badge}</span>
            </motion.div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-textPrimary leading-[1.1] tracking-tight">
              {t.hero.headline}{" "}
              <span className="text-gradient-blue">{t.hero.headlineAccent}</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-textSecondary max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button 
                onClick={onOpenDemo}
                className="btn-primary text-base px-8 py-4 rounded-xl group"
              >
                {t.hero.cta1}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                href="#soluciones"
                className="btn-outline text-base px-8 py-4 rounded-xl"
              >
                {t.hero.cta2}
              </Link>
            </div>

            {/* Trust checks */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-textMuted pt-2">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-success" /> {t.hero.check1}</div>
              <div className="hidden sm:block h-4 w-px bg-borderLight" />
              <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-success" /> {t.hero.check2}</div>
              <div className="hidden sm:block h-4 w-px bg-borderLight" />
              <div className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-success" /> {t.hero.check3}</div>
            </div>
          </motion.div>

          {/* Right Column: Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-2xl"
          >
            {/* Main Mockup Container */}
            <div className="relative rounded-2xl bg-white border border-borderLight shadow-float overflow-hidden p-2.5">
              {/* Browser chrome */}
              <div className="bg-surface-muted rounded-xl flex items-center p-2.5 border border-borderLight/60 mb-2.5 gap-2">
                <div className="w-3 h-3 rounded-full bg-error/70" />
                <div className="w-3 h-3 rounded-full bg-warning/70" />
                <div className="w-3 h-3 rounded-full bg-success/70" />
                <div className="ml-4 h-5 flex-1 max-w-[200px] bg-white border border-borderLight rounded-md mx-auto flex items-center justify-center">
                  <span className="text-[10px] text-textMuted font-medium">app.gestory.com</span>
                </div>
              </div>
              
              {/* Dashboard Grid */}
              <div className="bg-background rounded-xl p-3 sm:p-4 grid grid-cols-12 gap-3 sm:gap-4 min-h-[320px] sm:min-h-[400px]">
                
                {/* Cash Flow Card */}
                <div className="col-span-8 bg-white border border-borderLight rounded-xl p-4 sm:p-5 shadow-sm flex flex-col justify-between relative overflow-hidden">
                  <div className="flex justify-between items-start z-10">
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-textMuted uppercase tracking-wider">{t.hero.cashflow}</p>
                      <p className="text-2xl sm:text-3xl font-bold text-textPrimary mt-1">$4,145,600</p>
                      <p className="text-xs sm:text-sm text-success flex items-center mt-2 font-medium"><TrendingUp className="h-3.5 w-3.5 mr-1"/>+14.5% {t.hero.thisMonth}</p>
                    </div>
                    <div className="p-2.5 bg-primary-light rounded-lg">
                      <Presentation className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  {/* Chart decoration */}
                  <div className="mt-4 flex items-end gap-1 h-12">
                    {[40,55,35,65,50,75,60,80,70,90,85,95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                        className="flex-1 bg-gradient-to-t from-accent/30 to-accent/10 rounded-sm"
                      />
                    ))}
                  </div>
                </div>

                {/* Stock Alert Card */}
                <div className="col-span-4 bg-primary text-white rounded-xl p-3 sm:p-4 shadow-sm flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                  <div className="z-10">
                    <p className="text-[10px] sm:text-xs font-medium text-blue-200 uppercase tracking-wider">{t.hero.stockAlerts}</p>
                    <p className="text-3xl sm:text-4xl font-bold mt-1">12</p>
                    <p className="text-[10px] sm:text-xs mt-1 text-blue-100">{t.hero.minSkus}</p>
                  </div>
                  <div className="mt-3 bg-white/20 px-3 py-2 rounded-lg text-xs font-medium text-center backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors z-10">
                    {t.hero.restock}
                  </div>
                </div>

                {/* Orders Table */}
                <div className="col-span-12 bg-white border border-borderLight rounded-xl p-3 sm:p-5 shadow-sm flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs sm:text-sm font-semibold text-textPrimary uppercase tracking-wider">{t.hero.lastOrders}</p>
                    <span className="text-xs font-medium text-accent cursor-pointer hover:underline">{t.hero.viewAll}</span>
                  </div>
                  <div className="space-y-3 flex-1 overflow-hidden">
                    {[
                      { id: "#PED-4029", client: "Tienda Matriz", amount: "$14,500.00", status: t.hero.paid, color: "bg-success-light text-success" },
                      { id: "#PED-4030", client: "E-Commerce", amount: "$3,250.00", status: t.hero.processing, color: "bg-warning-light text-warning" },
                      { id: "#PED-4031", client: "Mercado Libre", amount: "$1,890.00", status: t.hero.shipped, color: "bg-primary-light text-primary" },
                      { id: "#PED-4032", client: "B2B Mayorista", amount: "$89,500.00", status: t.hero.invoiced, color: "bg-success-light text-success" },
                    ].map((order, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="flex justify-between items-center text-xs sm:text-sm border-b border-borderLight/40 pb-2.5 last:border-0 last:pb-0"
                      >
                        <div className="flex flex-col">
                          <span className="font-semibold text-textPrimary">{order.id}</span>
                          <span className="text-[10px] sm:text-xs text-textSecondary">{order.client}</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="font-bold text-textPrimary">{order.amount}</span>
                          <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md mt-0.5 ${order.color}`}>{order.status}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-white p-3 sm:p-4 rounded-xl shadow-float border border-borderLight flex items-center gap-3 z-20"
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-success-light rounded-full flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-success" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold text-textMuted uppercase tracking-widest">{t.hero.stockExact}</p>
                <p className="text-xs sm:text-sm font-bold text-textPrimary">{t.hero.multiWarehouse}</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}