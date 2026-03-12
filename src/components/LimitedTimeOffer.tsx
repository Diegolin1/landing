"use client";

import { motion } from "framer-motion";
import { Zap, Gift, TrendingUp, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function LimitedTimeOffer() {
  const [slotsRemaining, setSlotsRemaining] = useState(23);

  // Simulate decreasing slots (in real implementation, this would come from a server)
  useEffect(() => {
    const interval = setInterval(() => {
      setSlotsRemaining((prev) => {
        if (prev <= 0) return 0;
        return prev - Math.floor(Math.random() * 3);
      });
    }, 45000); // Every 45 seconds, someone "claims" a slot

    return () => clearInterval(interval);
  }, []);

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
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 border-y border-primary/50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-white">
              🚀 Oferta Limitada de Lanzamiento
            </span>
          </div>
        </motion.div>

        {/* Main Offer */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Primeros <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">100 usuarios</span>
          </h2>
          <p className="text-xl text-white/80">
            Obten 3 meses gratis* cuando te suscribas hoy
          </p>
        </motion.div>

        {/* Slots Remaining */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <div className="bg-background border-2 border-primary rounded-lg px-6 py-3 inline-block">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <p className="text-white font-bold">
                Quedan {slotsRemaining} de 100 lugares
              </p>
            </div>
            {/* Progress bar */}
            <div className="w-48 h-2 bg-borderDark rounded-full mt-3 overflow-hidden">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: `${(slotsRemaining / 100) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-primary to-primary/60"
              />
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {[
            {
              icon: <Gift className="w-6 h-6" />,
              title: "3 Meses Gratis",
              description: "Acceso completo a todas las features ($1,497 de ahorro)",
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Setup Premium",
              description: "Nuestro equipo configura tu operación (valor $500)",
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Soporte VIP 24/7",
              description: "Respuesta en menos de 1 hora (usual: 4 horas)",
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Lifetime Discount",
              description: "50% descuento por siempre mientras seas cliente",
            },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-background border border-borderDark rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="text-primary mb-3">{benefit.icon}</div>
              <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
              <p className="text-white/70 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <a
            href="#demo"
            className="inline-block bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 text-background font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 text-center"
          >
            Reclamar Mi Lugar Ahora
          </a>
          <a
            href="#pricing"
            className="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-lg transition-all text-center"
          >
            Ver Planes Regulares
          </a>
        </motion.div>

        {/* Footer text */}
        <motion.div
          variants={itemVariants}
          className="text-center text-white/60 text-sm"
        >
          <p>
            *Después de 3 meses, solo $499/mes. Cancelación sin penalidades. Garantía de 30 días.
          </p>
          <p className="mt-2 text-primary font-semibold">
            ⏰ Esta oferta aplica solo mientras haya lugares disponibles
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
