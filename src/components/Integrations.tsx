"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckIcon } from "lucide-react";

export default function Integrations() {
  const integrations = [
    { name: "Facturapi", category: "Facturación CFDI", icon: "📄" },
    { name: "Stripe", category: "Pagos", icon: "💳" },
    { name: "WhatsApp Business", category: "Mensajería", icon: "💬" },
    { name: "Google Sheets", category: "Sincronización", icon: "📊" },
    { name: "Slack", category: "Notificaciones", icon: "🔔" },
    { name: "Zapier", category: "Automatización", icon: "⚡" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 px-6 lg:px-12 bg-surface/30 border-t border-b border-borderDark">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
            🔌 Conectado con lo que usas hoy
          </p>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Integrations list
          </h3>
          <p className="text-white/70">
            Lumina se conecta con 1000+ apps vía Zapier. Aquí están las más populares:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrations.map((integration, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-background border border-borderDark/50 rounded-lg p-4 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{integration.icon}</span>
                <div className="flex-1">
                  <p className="font-semibold text-white">{integration.name}</p>
                  <p className="text-xs text-white/60">{integration.category}</p>
                </div>
                <CheckIcon className="w-5 h-5 text-green-400" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-8 text-center"
        >
          <p className="text-white/70 mb-4">
            ¿Necesitas conectar algo específico?
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-2 text-primary hover:text-primary/80 font-semibold transition-colors border-b border-primary hover:border-primary/60"
          >
            Contáctanos →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
