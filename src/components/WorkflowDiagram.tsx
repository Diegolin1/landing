"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  CheckCircle2,
  FileText,
  SendIcon,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function WorkflowDiagram() {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Cliente envía pedido",
      description: "Por WhatsApp o Facebook",
      color: "from-blue-500 to-cyan-500",
      number: "1",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Verifica existencia",
      description: "El sistema valida stock automáticamente",
      color: "from-purple-500 to-pink-500",
      number: "2",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Genera CFDI",
      description: "Factura 100% legal (sin intermediarios)",
      color: "from-green-500 to-emerald-500",
      number: "3",
    },
    {
      icon: <SendIcon className="w-8 h-8" />,
      title: "Envía confirmación",
      description: "Cliente recibe factura + link de pago",
      color: "from-orange-500 to-red-500",
      number: "4",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Actualiza reportes",
      description: "Dashboard muestra ventas en tiempo real",
      color: "from-pink-500 to-orange-500",
      number: "5",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 px-6 lg:px-12 bg-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
            ⚡ En 5 Minutos
          </p>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Así es el Flujo de un Vendedor con Lumina
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Desde que recibe el pedido hasta que se cierra la venta. Automático. Legal. Profesional.
          </p>
        </motion.div>

        {/* Mobile Layout - Vertical */}
        <div className="lg:hidden space-y-4 mb-12">
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <div className="flex gap-4">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.number}
                  </motion.div>
                  {idx < steps.length - 1 && (
                    <div className="w-1 h-8 bg-borderDark mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-4 pt-1">
                  <h4 className="text-lg font-bold text-white">{step.title}</h4>
                  <p className="text-white/70 text-sm">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout - Horizontal */}
        <motion.div variants={itemVariants} className="hidden lg:flex gap-2 mb-12 items-stretch">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="h-full bg-surface border border-borderDark rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex flex-col h-full">
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg mb-4`}
                    whileHover={{ scale: 1.15 }}
                  >
                    {step.number}
                  </motion.div>

                  <h4 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-white/70 text-sm flex-grow">
                    {step.description}
                  </p>

                  {/* Icon at bottom */}
                  <div className="mt-4 text-primary opacity-60">
                    {step.icon}
                  </div>
                </div>
              </motion.div>

              {/* Arrow between steps */}
              {idx < steps.length - 1 && (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: idx * 0.1 }}
                  className="flex items-center justify-center -mx-2 z-10"
                >
                  <ArrowRight className="w-6 h-6 text-primary/40" />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              icon: "⏱️",
              title: "5 minutos por pedido",
              description: "Lo que antes tardaba 2 horas",
            },
            {
              icon: "✅",
              title: "100% legal",
              description: "Factura CFDI certificada por SAT",
            },
            {
              icon: "📊",
              title: "Datos en tiempo real",
              description: "Dashboard actualizado al instante",
            },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="text-center p-6"
            >
              <p className="text-4xl mb-3">{benefit.icon}</p>
              <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
              <p className="text-white/70 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center bg-primary/10 border border-primary/20 rounded-xl p-8"
        >
          <p className="text-white/80 mb-4 max-w-2xl mx-auto">
            ¿Lista tu operación para trabajar así?
          </p>
          <a
            href="#demo"
            className="inline-block bg-primary hover:bg-primary/90 text-background font-bold px-8 py-3 rounded-lg transition-all transform hover:scale-105"
          >
            Agendar Demo Ahora
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
