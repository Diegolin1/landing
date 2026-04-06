"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Building2, DollarSign, Wifi, Star } from "lucide-react";
import { useI18n } from "../../i18n";

function useCountUp(target: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  return { count, ref };
}

interface StatItem {
  icon: ReactNode;
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  isDecimal?: boolean;
}

function StatCard({ stat, idx }: { stat: StatItem; idx: number }) {
  const isDecimal = Boolean(stat.isDecimal);
  const counter = useCountUp(isDecimal ? Math.round(stat.value * 10) : stat.value, 2000);
  const displayValue = isDecimal
    ? (counter.count / 10).toFixed(1)
    : counter.count.toLocaleString();

  return (
    <motion.div
      ref={counter.ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-accent/5 text-accent mb-3">
        {stat.icon}
      </div>
      <p className="text-3xl md:text-4xl font-heading font-extrabold text-textPrimary">
        {stat.prefix}
        {displayValue}
        {stat.suffix}
      </p>
      <p className="text-sm text-textMuted font-medium mt-1">{stat.label}</p>
    </motion.div>
  );
}

export default function Stats() {
  const { t, locale } = useI18n();
  const isEs = locale === "es";

  const stats = [
    { icon: <Building2 className="h-5 w-5" />, value: 500, prefix: "+", suffix: "", label: t.stats.companies },
    { icon: <DollarSign className="h-5 w-5" />, value: 150, prefix: "+$", suffix: "M", label: t.stats.processed },
    { icon: <Wifi className="h-5 w-5" />, value: 99.9, prefix: "", suffix: "%", label: t.stats.uptime, isDecimal: true },
    { icon: <Star className="h-5 w-5" />, value: 4.9, prefix: "", suffix: "★", label: t.stats.satisfaction, isDecimal: true },
  ] satisfies StatItem[];

  const source = isEs
    ? {
        title: "Fuente de datos y validacion",
        description:
          "Metricas agregadas de tenants activos en Gestory (2025-2026), auditadas internamente sobre operaciones reales de venta.",
        badges: ["Datos agregados", "Actualizacion mensual", "Base multi-tenant"],
      }
    : {
        title: "Data source and validation",
        description:
          "Metrics aggregated from active Gestory tenants (2025-2026), internally audited from real sales operations.",
        badges: ["Aggregated data", "Monthly refresh", "Multi-tenant base"],
      };

  return (
    <section className="py-16 bg-white border-y border-borderLight">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} idx={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-8 rounded-2xl border border-borderLight bg-surface p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center gap-4 justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-wider font-bold text-textMuted mb-1">{source.title}</p>
            <p className="text-sm text-textSecondary">{source.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {source.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
