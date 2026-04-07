"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircleIcon, MailIcon, ArrowLeftIcon } from "lucide-react";

export default function EmailCapturePage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate email capture
    setTimeout(() => {
      setIsSuccess(true);
      setEmail("");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background text-white flex items-center justify-center py-12 px-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-12">
          <ArrowLeftIcon size={20} />
          Volver al inicio
        </Link>

        {!isSuccess ? (
          <div className="space-y-8">
            {/* Headline */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                5 Errores Que Cuestan $500/Día en Ventas B2B
              </h1>
              <p className="text-xl text-white/80 mb-6">
                Descarga la guía práctica (gratis) para identificar y arreglar los 5 errores más caros que cometen los vendedores en México.
              </p>
            </div>

            {/* Value Props */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Lo que incluye:</h3>
              <ul className="space-y-3">
                {[
                  "Identificación de los 5 errores costosos (con números reales)",
                  "Calculadora: cuánto DINERO pierdes por cada error",
                  "Plan de 30 días para arreglarlo",
                  "Templates de procesos mejorados",
                  "Bonus: Checklist de auditoría de ventas",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircleIcon size={24} className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 bg-surface border border-borderDark rounded-2xl p-8">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Tu Email
                </label>
                <div className="relative">
                  <MailIcon className="absolute left-4 top-3.5 text-white/40" size={20} />
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-background border border-borderDark text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors disabled:opacity-50"
              >
                {isLoading ? "Procesando..." : "Descargar Guía Gratis"}
              </button>

              <p className="text-xs text-white/50 text-center">
                No spam. Nunca compartimos tu email. Puedes cancelar en cualquier momento.
              </p>
            </form>

            {/* Social Proof */}
            <div className="bg-surface/50 border border-borderDark rounded-lg p-6 text-center">
              <p className="text-white/80">
                <span className="font-bold text-primary">2,500+ fabricantes y distribuidores</span> han descargado esta guía
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-surface border border-borderDark rounded-2xl p-12 text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                <CheckCircleIcon size={40} className="text-green-400" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">¡Casi listo!</h2>
              <p className="text-white/80 mb-6">
                Revisa tu email (y carpeta de spam) en los próximos 2 minutos. La guía está en camino.
              </p>
            </div>



            <p className="text-xs text-white/50">
              Si no ves el email en 5 minutos, {" "}
              <a href="mailto:contacto@gestory.tech" className="text-primary hover:underline">
                contáctanos
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
