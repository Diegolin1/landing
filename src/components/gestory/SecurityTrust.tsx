"use client";

import { motion } from "framer-motion";
import { Lock, DatabaseBackup, ActivitySquare, Server } from "lucide-react";
import { useI18n } from "../../i18n";

export default function SecurityTrust() {
  const { t, locale } = useI18n();
  const isEs = locale === "es";

  const points = [
    {
      icon: <Lock className="h-5 w-5 text-primary" />,
      title: t.security.bankLevel,
      desc: t.security.bankLevelDesc,
    },
    {
      icon: <DatabaseBackup className="h-5 w-5 text-success" />,
      title: t.security.backups,
      desc: t.security.backupsDesc,
    },
    {
      icon: <ActivitySquare className="h-5 w-5 text-accent" />,
      title: t.security.uptime,
      desc: t.security.uptimeDesc,
    },
    {
      icon: <Server className="h-5 w-5 text-warning" />,
      title: isEs ? "Aislamiento multi-tenant" : "Multi-tenant isolation",
      desc: isEs
        ? "Cada empresa opera en un tenant aislado con controles de acceso por rol y separacion logica de datos."
        : "Each company runs in an isolated tenant with role-based access controls and logical data separation.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-surface-dark border-y border-borderDark text-textInverse overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-3">{t.security.eyebrow}</p>
          <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-white mb-4">
            {t.security.headline}
          </h2>
          <p className="text-base text-blue-100/60 font-medium">
            {t.security.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 border border-white/5">
                {point.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{point.title}</h3>
              <p className="text-sm text-blue-100/50 leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5"
        >
          <p className="text-xs uppercase tracking-wider font-bold text-blue-200 mb-2">
            {isEs ? "Arquitectura de confianza" : "Trusted architecture"}
          </p>
          <p className="text-sm text-blue-100/70">
            {isEs
              ? "Gestory corre sobre infraestructura cloud con monitoreo continuo, respaldos diarios y politicas de acceso por tenant para proteger operaciones sensibles."
              : "Gestory runs on cloud infrastructure with continuous monitoring, daily backups and tenant-level access policies to protect sensitive operations."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}