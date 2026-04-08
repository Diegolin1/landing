"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useI18n } from "../../i18n";

export default function FinalCTA() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    
    setStatus("sending");
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({ ...form, source: "FINAL_CTA" }),
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      clearTimeout(timeoutId);
      setStatus("error");
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-cta-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 hero-grid-bg opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
      
      <div className="relative z-10 section-container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6 leading-tight">
              {t.finalCta.headline}
            </h2>
            <p className="text-lg text-blue-100/80 font-medium mb-10 max-w-xl mx-auto">
              {t.finalCta.subtitle}
            </p>
          </motion.div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 max-w-md mx-auto"
            >
              <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{t.finalCta.successTitle}</h3>
              <p className="text-blue-100/80">{t.finalCta.successMsg}</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-12 gap-3 max-w-5xl mx-auto items-stretch"
            >
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t.finalCta.namePlaceholder}
                required
                className="sm:col-span-3 px-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-blue-200/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder={t.finalCta.emailPlaceholder}
                required
                className="sm:col-span-3 px-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-blue-200/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder={t.finalCta.phonePlaceholder}
                required
                className="sm:col-span-3 px-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-blue-200/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="sm:col-span-3 px-8 py-3.5 bg-white text-primary font-bold text-sm rounded-xl hover:bg-blue-50 transition-all disabled:opacity-60 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
              >
                {status === "sending" ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> {t.finalCta.sending}</>
                ) : (
                  <>{t.finalCta.cta} <ArrowRight className="h-4 w-4" /></>
                )}
              </button>
            </motion.form>
          )}

          {status === "error" && (
            <p className="text-error-light text-sm mt-4">{t.demo.errorMsg}</p>
          )}

          <p className="text-xs text-blue-200/50 mt-6">{t.finalCta.badge}</p>
        </div>
      </div>
    </section>
  );
}
