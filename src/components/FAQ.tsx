"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Puedo probar Lumina antes de pagar?",
    answer: "Sí. Tienes 14 días gratis sin necesidad de tarjeta de crédito. Acceso completo a todas las funciones del plan Professional. Si no te funciona, sin cargos.",
  },
  {
    question: "¿Puedo cambiar de plan después?",
    answer: "Claro. Puedes cambiar a un plan superior o inferior en cualquier momento. El dinero se ajusta automáticamente.",
  },
  {
    question: "¿Qué pasa si tengo más de 500 productos?",
    answer: "El plan Professional soporta hasta 500 productos. Si tienes más, te recomendamos Enterprise que es ilimitado. O puedes organizarlos por categorías.",
  },
  {
    question: "¿Incluye soporte?",
    answer: "Sí. Todos los planes incluyen soporte por email en español de lunes a viernes. Enterprise además incluye soporte prioritario 24/7 y un representante dedicado.",
  },
  {
    question: "¿Cómo facturan ustedes?",
    answer: "Nosotros emitimos factura CFDI 4.0 por cada mes. El XML se descarga directamente desde tu dashboard. Cumplimos 100% con el SAT.",
  },
  {
    question: "¿Qué pasa con mis datos si cancelo?",
    answer: "Tienes 30 días después de cancelar para descargar todos tus datos. No borramos nada de inmediato. Puedes pedir un backup completo en CSV o JSON.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-textMuted text-lg">
            Respondemos las dudas más comunes. Si tienes otra pregunta, <a href="#" className="text-primary hover:underline">contáctanos directamente</a>.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className={`w-full text-left px-6 py-4 rounded-lg border transition-all ${
                  activeIndex === idx
                    ? "bg-surface border-primary/50 shadow-[0_0_15px_rgba(245,158,11,0.1)]"
                    : "bg-surface/50 border-borderDark hover:border-primary/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-base">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className={`w-5 h-5 ${activeIndex === idx ? "text-primary" : "text-textMuted"}`} />
                  </motion.div>
                </div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: activeIndex === idx ? 1 : 0,
                  height: activeIndex === idx ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-textMuted text-sm bg-primary/5 border border-primary/20 border-t-0 rounded-b-lg">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-textMuted mb-6 text-lg">
            ¿Tienes una pregunta que no respondemos aquí?
          </p>
          <a
            href="mailto:soporte@lumina.mx"
            className="inline-block px-8 py-4 rounded-lg bg-surface border border-borderDark hover:border-primary hover:bg-surface text-white font-medium text-lg transition-all"
          >
            Contacta a nuestro equipo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
