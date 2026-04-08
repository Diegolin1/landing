"use client";

import { useState } from "react";
import { MailIcon, CheckCircleIcon } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // POST to serverless function or email service
      // For now, just show success
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      setError("Error al suscribirse. Intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-surface border border-borderDark rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white mb-2">Newsletter Gestory</h3>
      <p className="text-white/70 mb-6">
        Recibe guias de ERP, CFDI y operaciones multi-canal directo a tu inbox. Una vez a la semana.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <MailIcon className="absolute left-4 top-3.5 text-white/40" size={18} />
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-background border border-borderDark text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
              disabled={isLoading || isSuccess}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || isSuccess}
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {isLoading ? "..." : isSuccess ? "✓" : "Suscribir"}
          </button>
        </div>

        {isSuccess && (
          <div className="flex items-center gap-2 text-green-400 text-sm">
            <CheckCircleIcon size={16} />
            <span>¡Bienvenido! Revisa tu email para confirmar.</span>
          </div>
        )}

        {error && <p className="text-red-400 text-sm">{error}</p>}
      </form>

      <p className="text-xs text-white/50 mt-4">
        No spam. Cancelar en cualquier momento.
      </p>
    </section>
  );
}
