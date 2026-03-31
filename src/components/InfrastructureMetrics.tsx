"use client";

import { motion } from "framer-motion";
import { Activity, Zap, Lock, Clock } from "lucide-react";

export default function InfrastructureMetrics() {
  const metrics = [
    {
      icon: <Activity className="w-6 h-6" />,
      label: "Uptime SLA",
      value: "99.9%",
      subtitle: "Garantizado",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: "Latencia Promedio",
      value: "<150ms",
      subtitle: "Respuestas instantáneas",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      label: "Score de Seguridad",
      value: "A+",
      subtitle: "Encriptación SSL/TLS",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Disponibilidad",
      value: "24/7/365",
      subtitle: "Soporte en español",
      color: "from-orange-500 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 px-6 lg:px-12 bg-surface/30 border-t border-borderDark">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
            🛡️ Infraestructura Enterprise
          </p>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Tecnología que Confían los Grandes
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Lumina corre en infraestructura cloud con certificaciones internacionales.
            Tus datos siempre disponibles, siempre seguros.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-background border border-borderDark rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 text-center group"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${metric.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                {metric.icon}
              </div>

              <p className="text-white/70 text-xs uppercase tracking-wider mb-2">
                {metric.label}
              </p>

              <p className="text-3xl lg:text-4xl font-bold text-white mb-1">
                {metric.value}
              </p>

              <p className="text-white/60 text-sm">{metric.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 text-center"
        >
          <h4 className="text-lg font-bold text-white mb-6">
            Certificaciones y Cumplimiento
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { badge: "CFDI", desc: "SAT Certificado" },
              { badge: "ISO 27001", desc: "Seguridad Información" },
              { badge: "GDPR", desc: "Regulación EU" },
              { badge: "SOC 2 Type II", desc: "Control & Auditoría" },
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
              >
                <p className="text-primary font-bold mb-1">{cert.badge}</p>
                <p className="text-xs text-white/60">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Infrastructure Details */}
        <motion.div
          variants={itemVariants}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-background border border-borderDark rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-4">Redundancia</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                Servidores en múltiples regiones (México, USA, EU)
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                Backup automático cada 6 horas
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                Failover instantáneo en caso de fallo
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                CDN global para velocidad máxima
              </li>
            </ul>
          </div>

          <div className="bg-background border border-borderDark rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-4">Seguridad</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                Encriptación end-to-end para datos sensibles
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                Autenticación de 2 factores (2FA)
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                Monitoreo 24/7 de intentos de acceso
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                Auditorías de seguridad trimestrales
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Uptime Status */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center p-6 bg-primary/5 border border-primary/20 rounded-lg"
        >
          <p className="text-white/80 mb-3">
            Revisa el estado en tiempo real de nuestros servidores
          </p>
          <a
            href="https://status.lumina.com"
            className="inline-block text-primary hover:text-primary/80 font-semibold transition-colors border-b border-primary hover:border-primary/60"
          >
            Ver Status Page →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
