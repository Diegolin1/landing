"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useI18n } from "../../i18n";

export default function FAQ() {
  const { t, locale } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const objectionItems =
    locale === "es"
      ? [
          {
            q: "¿Mi contador actual puede seguir operando con Gestory?",
            a: "Si. Gestory no reemplaza a tu contador, le da mejor informacion y trazabilidad. Puede descargar reportes, validar CFDI y trabajar con procesos actuales sin friccion.",
          },
          {
            q: "Si cancelo, ¿pierdo mis datos?",
            a: "No. Tus datos son tuyos. Puedes solicitar exportacion de catalogo, clientes, ventas y facturacion para resguardo o migracion, segun politicas vigentes del servicio.",
          },
          {
            q: "¿Que soporte incluye cada plan?",
            a: "Incluye onboarding guiado y soporte en espanol. En planes superiores agregamos atencion prioritaria y acompanamiento para optimizacion operativa.",
          },
          {
            q: "¿Cuanto tarda mi equipo en adoptarlo?",
            a: "La mayoria de equipos empieza a operar en dias. Al centralizar inventario, pedidos y facturacion, la curva de aprendizaje baja de forma notable frente a usar sistemas separados.",
          },
        ]
      : [
          {
            q: "Can my current accountant keep working with Gestory?",
            a: "Yes. Gestory gives your accountant cleaner data and full traceability. They can export reports, validate CFDI flows and keep current accounting processes.",
          },
          {
            q: "If I cancel, do I lose my data?",
            a: "No. Your data remains yours. You can request exports for catalogs, customers, sales and invoicing records according to active service policies.",
          },
          {
            q: "What support is included per plan?",
            a: "Every plan includes guided onboarding and Spanish support. Higher tiers add priority support and operational optimization guidance.",
          },
          {
            q: "How long until my team adopts it?",
            a: "Most teams are operating in days. By centralizing inventory, orders and invoicing, the learning curve is significantly lower than running separate tools.",
          },
        ];

  const faqItems = [...t.faq.items, ...objectionItems];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section-padding bg-surface-muted" id="faq">
      <div className="section-container">
        <div className="section-header">
          <p className="eyebrow mb-3">{t.faq.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textPrimary mb-6">
            {t.faq.headline}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, idx) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white rounded-xl border border-borderLight overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 text-left group"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
                id={`faq-trigger-${idx}`}
              >
                <span className="text-sm font-semibold text-textPrimary pr-4 group-hover:text-accent transition-colors">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-textMuted shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180 text-accent" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                    role="region"
                    aria-labelledby={`faq-trigger-${idx}`}
                    id={`faq-panel-${idx}`}
                  >
                    <div className="px-5 pb-5 text-sm text-textSecondary leading-relaxed border-t border-borderLight/50 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
