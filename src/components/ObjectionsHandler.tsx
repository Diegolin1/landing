"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ObjectionsHandler() {
  const [openIndex, setOpenIndex] = useState(0);

  const objections = [
    {
      question: "¿Quanto tiempo toma implementar Lumina?",
      answer:
        "Máximo 48 horas. Nuestro equipo configura tu catálogo, usuarios e integraciones. Algunos clientes comienzan a vender en el mismo día del onboarding.",
    },
    {
      question: "¿Qué pasa si Lumina no encaja con mi operación?",
      answer:
        "Por eso existe la garantía de 30 días sin riesgo. Prueba con acceso completo — si no funciona, devolvemos el 100%. Sin preguntas. Pero el 94% de nuestros clientes ven resultados en la primera semana.",
    },
    {
      question: "¿Mis datos sont seguros? ¿Qué pasa con mi información?",
      answer:
        "Encriptación SSL/TLS, CFDI SAT validado, GDPR compliant, y 99.9% uptime SLA. Tus datos están en servidores mexicanos con backup redundantes. Ni siquiera nuestro equipo puede acceder sin permiso explícito.",
    },
    {
      question: "¿Puedo conectar Lumina con mis sistemas actuales? (ERP, contabilidad, etc)",
      answer:
        "Sí. Lumina se conecta vía Zapier con 1000+ apps. Si lo que necesitas no está, nuestro API es 100% documentado. Y si prefieres, nuestro equipo tech puede hacer la integración personalizada.",
    },
    {
      question: "¿Y si mi modelo de negocio es diferente? ¿Puede customizarse?",
      answer:
        "Claro. Lumina maneja desde modelos simples (venta directa) hasta complejos (multi-tienda, comisiones, dropshipping, franquicias). Escríbenos a Diegorodvaz73@gmail.com y vemos si casamos.",
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
    <section className="py-16 px-6 lg:px-12 bg-background border-t border-borderDark">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
            🤔 Objeciones Comunes
          </p>
          <h3 className="text-2xl lg:text-3xl font-bold text-white">
            Respuestas Directas a tus Dudas
          </h3>
        </motion.div>

        <div className="space-y-3">
          {objections.map((objection, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-surface border border-borderDark rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface/80 transition-colors text-left"
              >
                <h4 className="font-semibold text-white text-sm md:text-base">
                  {objection.question}
                </h4>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 border-t border-borderDark bg-surface/50"
                >
                  <p className="text-white/80 text-sm leading-relaxed">
                    {objection.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-lg text-center"
        >
          <p className="text-white/80 mb-4">
            ¿Tienes una pregunta que no está aquí?
          </p>
          <a
            href="mailto:hola@luminab2b.com"
            className="inline-block text-primary hover:text-primary/80 font-semibold transition-colors border-b border-primary hover:border-primary/60"
          >
            Contáctanos sin compromiso →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
