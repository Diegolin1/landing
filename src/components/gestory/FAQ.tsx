"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useI18n } from "../../i18n";

export default function FAQ() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
          {t.faq.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white rounded-xl border border-borderLight overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 text-left group"
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
