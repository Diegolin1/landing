"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves through the top of the window
      if (e.clientY <= 0 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-brand-900 w-full max-w-lg rounded-3xl shadow-glass border border-white/10 overflow-hidden z-10"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 z-10"
            >
              <X size={24} />
            </button>

            <div className="bg-gradient-to-br from-brand-600 to-brand-500 p-8 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Zap size={32} className="text-amber-400 fill-amber-400" />
              </div>
              <h3 className="text-3xl font-display font-black mb-2">¡Espera un segundo!</h3>
              <p className="text-brand-100 text-lg">
                No te vayas sin ver cómo se vería tu catálogo.
              </p>
            </div>

            <div className="p-8">
              {!isSuccess ? (
                <>
                  <p className="text-stone-300 text-center mb-6 text-sm">
                    Déjanos tu correo y te enviaremos un <strong className="text-brand-400">demo interactivo personalizado</strong> donde podrás:
                  </p>
                  <ul className="space-y-3 mb-8 text-sm text-stone-300">
                    <li className="flex gap-2 items-center"><span className="text-gold-400">✓</span> Ver cómo funciona el Gate B2B</li>
                    <li className="flex gap-2 items-center"><span className="text-gold-400">✓</span> Simular una orden de compra en segundos</li>
                    <li className="flex gap-2 items-center"><span className="text-gold-400">✓</span> Probar la facturación CFDI 4.0 a 1 click</li>
                  </ul>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      placeholder="tu@empresa.com"
                      value={email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-brand-950 text-white focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-stone-500"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-glow"
                    >
                      {isSubmitting ? (
                        "Enviando demo..."
                      ) : (
                        <>
                          Quiero mi Demo por Correo
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-brand-500/20 text-brand-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">¡Demo enviado!</h4>
                  <p className="text-stone-400 text-sm">
                    Revisa tu bandeja de entrada en los próximos 5 minutos.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
