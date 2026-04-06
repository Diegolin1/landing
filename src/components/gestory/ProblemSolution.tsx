"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileX, Check } from "lucide-react";
import { useI18n } from "../../i18n";

export default function ProblemSolution() {
  const { t, locale } = useI18n();
  const [comparison, setComparison] = useState(58);
  const isEs = locale === "es";

  const sliderCopy = isEs
    ? {
        before: "Antes",
        after: "Despues",
        hint: "Arrastra para comparar una operacion fragmentada vs una operacion centralizada en Gestory.",
        painLabel: "Operacion fragmentada",
        solveLabel: "Operacion centralizada",
      }
    : {
        before: "Before",
        after: "After",
        hint: "Drag to compare a fragmented workflow vs a centralized workflow in Gestory.",
        painLabel: "Fragmented operation",
        solveLabel: "Centralized operation",
      };

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

        <div className="max-w-6xl mx-auto rounded-3xl border border-borderLight overflow-hidden shadow-card bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45 }}
              className="bg-surface-muted h-full p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-borderLight/50 flex flex-col justify-center"
            >
              <div className="bg-error-light w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <FileX className="h-6 w-6 text-error" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-textPrimary mb-5">{t.problem.problemTitle}</h3>
              <ul className="space-y-4 mb-6">
                {t.problem.problemItems.map((item, i) => (
                  <li key={i} className="flex items-start text-textSecondary font-medium text-sm lg:text-base">
                    <span className="flex shrink-0 h-5 w-5 rounded-full bg-error-light items-center justify-center mr-3 mt-0.5">
                      <div className="h-1.5 w-1.5 bg-error rounded-full" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto inline-flex items-center rounded-full bg-white border border-error/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-error">
                {sliderCopy.painLabel}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="bg-gradient-to-br from-primary-light/40 to-white h-full p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

              <div className="relative z-10">
                <div className="bg-success-light w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Check className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-textPrimary mb-5">{t.problem.solutionTitle}</h3>
                <ul className="space-y-4 mb-6">
                  {t.problem.solutionItems.map((item, i) => (
                    <li key={i} className="flex items-start text-textPrimary font-medium text-sm lg:text-base">
                      <span className="flex shrink-0 h-5 w-5 rounded-full bg-success text-white items-center justify-center mr-3 mt-0.5 shadow-sm">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto inline-flex items-center rounded-full bg-white border border-success/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-success">
                  {sliderCopy.solveLabel}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-borderLight bg-surface p-5 sm:p-6 lg:p-8">
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-error">
                {sliderCopy.before}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-success">
                {sliderCopy.after}
              </span>
            </div>

            <div className="relative h-64 sm:h-64 rounded-2xl border border-borderLight overflow-hidden shadow-inner bg-white">
              {/* LAYER 1 (Bottom): The "After" state (Solution) */}
              {/* This is what is revealed as the slider moves right to left (increasing the Solution area) */}
              <div className="absolute inset-0 bg-gradient-to-br from-success-light/90 via-white to-primary-light/40 p-6 sm:p-7 flex flex-col justify-center">
                <div className="relative z-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success text-white shadow-sm ring-4 ring-success/10">
                      <Check className="h-3 w-3" />
                    </span>
                    <p className="text-[11px] font-extrabold uppercase tracking-widest text-success">
                      {t.problem.solutionTitle}
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-[14px] text-textPrimary font-semibold">
                    {t.problem.solutionItems.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-2.5 drop-shadow-sm">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-success/60 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* LAYER 2 (Top Overlay): The "Before" state (Problem) */}
              {/* As comparison% increases, this layer covers the Solution from the left */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden border-r-[3px] border-white/90 z-10 shadow-2xl transition-all duration-75 ease-out"
                style={{ width: `${comparison}%` }}
              >
                <div className="h-full min-w-full bg-gradient-to-br from-error-light/95 via-white to-error-light/70 p-6 sm:p-7 flex flex-col justify-center backdrop-blur-[1px]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-error-light items-center justify-center ring-4 ring-error/5">
                      <div className="h-2 w-2 bg-error rounded-full animate-pulse" />
                    </span>
                    <p className="text-[11px] font-extrabold uppercase tracking-widest text-error">
                      {t.problem.problemTitle}
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-[14px] text-textSecondary font-medium">
                    {t.problem.problemItems.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-2.5 opacity-80">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-error shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* SLIDER HANDLE INDICATOR */}
              <div 
                className="absolute top-0 bottom-0 pointer-events-none z-20 group"
                style={{ left: `calc(${comparison}% - 1.5px)` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-white border-2 border-primary shadow-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <div className="flex gap-0.5">
                    <div className="h-3 w-0.5 bg-primary/40 rounded-full" />
                    <div className="h-3 w-0.5 bg-primary/80 rounded-full" />
                    <div className="h-3 w-0.5 bg-primary/40 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 px-2">
              <input
                type="range"
                min={0}
                max={100}
                value={comparison}
                onChange={(event) => setComparison(Number(event.target.value))}
                className="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary-dark transition-all shadow-inner"
                aria-label={isEs ? "Comparador antes y despues" : "Before and after comparison"}
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-[10px] text-textMuted font-medium italic opacity-70">
                  {sliderCopy.hint}
                </p>
                <div className="flex items-center gap-1.5 p-1 bg-surface-muted rounded-md px-2">
                  <div className={`h-1.5 w-1.5 rounded-full ${comparison > 50 ? 'bg-error animate-pulse' : 'bg-success'}`} />
                  <span className="text-[9px] font-bold uppercase tracking-tighter text-textMuted">
                    {comparison > 50 ? 'Status: Crisis' : 'Status: Gestory'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}