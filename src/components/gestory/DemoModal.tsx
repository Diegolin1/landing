"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Mail, Building, Phone, Users, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useI18n } from "../../i18n";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", teamSize: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          teamSize: form.teamSize,
          source: "DEMO_MODAL",
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const resetAndClose = () => {
    setForm({ name: "", email: "", phone: "", company: "", teamSize: "" });
    setStatus("idle");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="absolute inset-0 bg-textPrimary/50 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-cta-gradient p-6 text-white relative">
            <button 
              onClick={resetAndClose}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-xl font-bold font-heading mb-2">{t.demo.title}</h3>
            <p className="text-blue-100/80 text-sm font-medium pr-8">
              {t.demo.subtitle}
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle2 className="h-14 w-14 text-success mx-auto mb-4" />
                <h4 className="text-xl font-bold text-textPrimary mb-2">{t.demo.successTitle}</h4>
                <p className="text-textSecondary text-sm mb-6">{t.demo.successMsg}</p>
                <button
                  onClick={resetAndClose}
                  className="btn-outline text-sm"
                >
                  Cerrar
                </button>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-textSecondary mb-1.5">{t.demo.nameLabel}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-4 w-4 text-textMuted" />
                    </div>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="block w-full pl-10 pr-3 py-2.5 border border-borderLight rounded-xl text-sm text-textPrimary focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                      placeholder={t.demo.namePlaceholder}
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-textSecondary mb-1.5">{t.demo.emailLabel}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-textMuted" />
                    </div>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="block w-full pl-10 pr-3 py-2.5 border border-borderLight rounded-xl text-sm text-textPrimary focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                      placeholder={t.demo.emailPlaceholder}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-textSecondary mb-1.5">{t.demo.phoneLabel}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-4 w-4 text-textMuted" />
                    </div>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      className="block w-full pl-10 pr-3 py-2.5 border border-borderLight rounded-xl text-sm text-textPrimary focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                      placeholder={t.demo.phonePlaceholder}
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-textSecondary mb-1.5">{t.demo.companyLabel}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-4 w-4 text-textMuted" />
                    </div>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="block w-full pl-10 pr-3 py-2.5 border border-borderLight rounded-xl text-sm text-textPrimary focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                      placeholder={t.demo.companyPlaceholder}
                    />
                  </div>
                </div>

                {/* Team Size */}
                <div>
                  <label className="block text-sm font-semibold text-textSecondary mb-1.5">{t.demo.teamSizeLabel}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-4 w-4 text-textMuted" />
                    </div>
                    <select
                      value={form.teamSize}
                      onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                      className="block w-full pl-10 pr-3 py-2.5 border border-borderLight rounded-xl text-sm text-textPrimary focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all appearance-none bg-white"
                    >
                      <option value="">—</option>
                      {t.demo.teamSizeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Error message */}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-error bg-error-light p-3 rounded-xl">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {t.demo.errorMsg}
                  </div>
                )}

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex justify-center items-center py-3 px-4 rounded-xl shadow-glow text-sm font-bold text-white bg-accent hover:bg-accent-hover transition-all disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t.demo.sending}</>
                    ) : (
                      <><Calendar className="mr-2 h-5 w-5" /> {t.demo.submit}</>
                    )}
                  </button>
                </div>
                <p className="text-xs text-center text-textMuted mt-3">
                  {t.demo.privacy}
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}