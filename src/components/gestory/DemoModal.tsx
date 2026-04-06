"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Mail,
  Building2,
  Phone,
  Users,
  Loader2,
  CheckCircle2,
  AlertCircle,
  User,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useI18n } from "../../i18n";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 1 | 2;

const TOTAL_STEPS = 2;
const FOCUSABLE_SELECTOR =
  'a[href], area[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const { t, locale } = useI18n();
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", teamSize: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusedElementRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  const resetAndClose = useCallback(() => {
    setForm({ name: "", email: "", phone: "", company: "", teamSize: "" });
    setStatus("idle");
    setStep(1);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusedElementRef.current = document.activeElement as HTMLElement;
    const dialog = dialogRef.current;

    const focusables = dialog?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    const firstFocusable = focusables?.[0] ?? closeButtonRef.current;
    firstFocusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        resetAndClose();
        return;
      }

      if (event.key !== "Tab" || !dialog) {
        return;
      }

      const candidates = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true"
      );

      if (candidates.length === 0) {
        event.preventDefault();
        return;
      }

      const first = candidates[0];
      const last = candidates[candidates.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusedElementRef.current?.focus();
    };
  }, [isOpen, resetAndClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStatus("idle");
      setStep(2);
      return;
    }

    setStatus("sending");
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          teamSize: form.teamSize,
          source: "DEMO_MODAL",
        }),
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      clearTimeout(timeoutId);
      setStatus("error");
    }
  };

  const goBack = () => {
    setStatus("idle");
    setStep(1);
  };

  const progress = (step / TOTAL_STEPS) * 100;

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
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-cta-gradient p-6 text-white relative">
            <button 
              ref={closeButtonRef}
              onClick={resetAndClose}
              aria-label={locale === "es" ? "Cerrar formulario de demo" : "Close demo form"}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 id={titleId} className="text-xl font-bold font-heading mb-2">{t.demo.title}</h3>
            <p className="text-blue-100/80 text-sm font-medium pr-8">
              {t.demo.subtitle}
            </p>
            {status !== "success" && (
              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-blue-100/80 mb-2">
                  <span>{step === 1 ? t.demo.step1 : t.demo.step2}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-white"
                  />
                </div>
              </div>
            )}
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
                  {locale === "es" ? "Cerrar" : "Close"}
                </button>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <AnimatePresence mode="wait" initial={false}>
                  {step === 1 ? (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      className="space-y-4"
                    >
                      <h4 className="text-sm font-semibold text-textPrimary">{t.demo.step1Title}</h4>

                      <div>
                        <label className="block text-sm font-semibold text-textSecondary mb-1.5">{t.demo.nameLabel}</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-4 w-4 text-textMuted" />
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
                    </motion.div>
                  ) : (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      className="space-y-4"
                    >
                      <h4 className="text-sm font-semibold text-textPrimary">{t.demo.step2Title}</h4>
                      <p className="text-xs text-textMuted">{t.demo.optionalHint}</p>

                      <div>
                        <label className="block text-sm font-semibold text-textSecondary mb-1.5">{t.demo.companyLabel}</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Building2 className="h-4 w-4 text-textMuted" />
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
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Error message */}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-error bg-error-light p-3 rounded-xl">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {t.demo.errorMsg}
                  </div>
                )}

                {/* Submit */}
                <div className={`pt-2 ${step === 2 ? "grid grid-cols-2 gap-3" : ""}`}>
                  {step === 2 && (
                    <button
                      type="button"
                      onClick={goBack}
                      className="w-full flex justify-center items-center py-3 px-4 rounded-xl border border-borderLight text-textPrimary text-sm font-semibold hover:bg-surface-muted transition-all"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      {t.demo.back}
                    </button>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex justify-center items-center py-3 px-4 rounded-xl shadow-glow text-sm font-bold text-white bg-accent hover:bg-accent-hover transition-all disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t.demo.sending}</>
                    ) : step === 1 ? (
                      <>{t.demo.continue} <ArrowRight className="ml-2 h-4 w-4" /></>
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