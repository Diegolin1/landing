"use client";

import { motion } from "framer-motion";
import { FileX, Check } from "lucide-react";
import { useI18n } from "../../i18n";

export default function ProblemSolution() {
  const { t } = useI18n();

  return (
    <section className="section-padding bg-background relative overflow-hidden" id="como-funciona">
      <div className="section-container">
        <div className="section-header mb-16">
          <p className="eyebrow mb-3">{t.problem.eyebrow}</p>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-textPrimary mb-6 leading-tight">
            {t.problem.headline}<br className="hidden md:block" />
            {t.problem.headlineBr}
          </h2>
          <p className="text-lg text-textSecondary font-medium max-w-2xl mx-auto">
            {t.problem.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 border border-borderLight rounded-3xl overflow-hidden shadow-card">
          
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-surface-muted h-full p-8 lg:p-14 border-b lg:border-b-0 lg:border-r border-borderLight/50 flex flex-col justify-center"
          >
            <div className="bg-error-light w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <FileX className="h-6 w-6 text-error" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-textPrimary mb-5">{t.problem.problemTitle}</h3>
            <ul className="space-y-4 mb-8">
              {t.problem.problemItems.map((item, i) => (
                <li key={i} className="flex items-start text-textSecondary font-medium text-sm lg:text-base">
                  <span className="flex shrink-0 h-5 w-5 rounded-full bg-error-light items-center justify-center mr-3 mt-0.5">
                    <div className="h-1.5 w-1.5 bg-error rounded-full" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            
            {/* Blurred "old system" visual */}
            <div className="mt-auto bg-white p-4 rounded-xl border border-error/15 opacity-60 blur-[1px]">
              <div className="h-2.5 w-full bg-borderLight mb-2 rounded" />
              <div className="h-2.5 w-3/4 bg-borderLight mb-2 rounded" />
              <div className="h-2.5 w-1/2 bg-error/25 rounded" />
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-primary-light/40 to-white h-full p-8 lg:p-14 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
            <div className="absolute right-8 bottom-8">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-40 h-40 border border-accent/15 rounded-full border-dashed"
              />
            </div>

            <div className="relative z-10">
              <div className="bg-success-light w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Check className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-textPrimary mb-5">{t.problem.solutionTitle}</h3>
              <ul className="space-y-4 mb-8">
                {t.problem.solutionItems.map((item, i) => (
                  <li key={i} className="flex items-start text-textPrimary font-medium text-sm lg:text-base">
                    <span className="flex shrink-0 h-5 w-5 rounded-full bg-success text-white items-center justify-center mr-3 mt-0.5 shadow-sm">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* "Synced" live card */}
              <div className="mt-auto bg-white p-5 rounded-xl border border-accent/20 shadow-glow transform -rotate-1 group hover:rotate-0 transition-transform">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-success uppercase">{t.problem.synced}</span>
                  <span className="text-xs font-bold text-textMuted uppercase flex items-center">
                    <span className="h-1.5 w-1.5 bg-success rounded-full mr-1 animate-pulse" />{t.problem.live}
                  </span>
                </div>
                <div className="h-3 w-full bg-success/20 rounded overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-success rounded"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}