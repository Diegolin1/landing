"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { scrollToDemoBooking } from "../utils/scroll";

const plans = [
  {
    tier: "Entrada",
    name: "Fabricante",
    monthlyPrice: 1199,
    annualPrice: 959,
    outcome: "Digitaliza tu catálogo y recibe pedidos 24/7.",
    features: [
      "Catálogo Gate B2B privado",
      "Hasta 100 productos",
      "1 vendedor master",
      "Soporte en español",
    ],
    cta: "Empezar gratis",
    popular: false,
  },
  {
    tier: "Recomendado",
    name: "Industrial",
    monthlyPrice: 2499,
    annualPrice: 1999,
    outcome: "Recupera +20 hrs/mes en facturación manual.",
    features: [
      "Productos ilimitados",
      "CFDI 4.0 nativo",
      "CRM hasta 5 agentes",
      "Pedidos PWA offline",
      "Analytics en vivo",
    ],
    cta: "Empezar gratis",
    popular: true,
  },
  {
    tier: "Enterprise",
    name: "Fábrica Plus",
    monthlyPrice: 4999,
    annualPrice: 3999,
    outcome: "Integración con tu ERP y cuenta asignada.",
    features: [
      "ERP integrado",
      "Agentes ilimitados",
      "Account Manager dedicado",
      "API access",
      "SLA premium 99.9%",
    ],
    cta: "Hablar con ventas",
    popular: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="precios" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <span className="eyebrow block mb-3">Sin letra pequeña</span>
          <h2 className="text-3xl md:text-4xl text-textPrimary mb-4" style={{ fontWeight: 500 }}>
            Precios transparentes
          </h2>
          <p className="text-textSecondary max-w-md mx-auto mb-7 text-base">
            Recupera el costo de Lumina en el primer mes que dejes de perder un pedido.
          </p>

          {/* ── Toggle mensual / anual ───────────────────────────── */}
          <div className="inline-flex items-center bg-surface-muted border border-borderLight rounded-full p-1 gap-0.5">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                !isAnnual
                  ? "bg-surface text-textPrimary shadow-card"
                  : "text-textSecondary hover:text-textPrimary"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-2 ${
                isAnnual
                  ? "bg-surface text-textPrimary shadow-card"
                  : "text-textSecondary hover:text-textPrimary"
              }`}
            >
              Anual
              <span className="text-[10px] font-semibold text-success bg-success-light px-1.5 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* ── Cards de planes ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? "bg-surface border-2 border-primary shadow-card-featured"
                  : "bg-surface border border-borderLight shadow-card hover:shadow-card-hover"
              }`}
            >
              {/* Badge "Más popular" */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge-popular">Más popular</span>
                </div>
              )}

              {/* Tier label */}
              <div className="text-xs font-semibold text-textMuted uppercase tracking-widest mb-1">
                {plan.tier}
              </div>

              {/* Plan name */}
              <div
                className={`text-xl mb-4 ${
                  plan.popular ? "text-primary" : "text-textPrimary"
                }`}
                style={{ fontWeight: 500 }}
              >
                {plan.name}
              </div>

              {/* Precio */}
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl text-textPrimary" style={{ fontWeight: 500 }}>
                  ${(isAnnual ? plan.annualPrice : plan.monthlyPrice).toLocaleString("es-MX")}
                </span>
                <span className="text-sm text-textMuted">MXN/mes</span>
              </div>
              {isAnnual && (
                <div className="text-xs text-success font-medium mb-4">
                  Ahorras ${((plan.monthlyPrice - plan.annualPrice) * 12).toLocaleString("es-MX")} MXN al año
                </div>
              )}

              {/* Resultado esperado — sin emoji */}
              <div className="bg-surface-muted border border-borderLight rounded-xl px-4 py-3 mb-6">
                <div className="text-[10px] font-semibold text-textMuted uppercase tracking-wider mb-1">
                  Resultado esperado
                </div>
                <p className="text-sm text-textSecondary leading-snug">{plan.outcome}</p>
              </div>

              {/* CTA */}
              <button
                onClick={() => scrollToDemoBooking()}
                className={`w-full py-3 rounded-xl text-sm font-medium mb-6 transition-all duration-200 ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary-hover shadow-glow"
                    : "bg-transparent border border-borderMedium text-textPrimary hover:border-primary hover:text-primary"
                }`}
              >
                {plan.cta}
              </button>

              {/* Feature list */}
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-textSecondary">
                    <div className="w-4 h-4 rounded-full bg-success-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={10} color="#16a34a" strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Nota de garantía ─────────────────────────────────────── */}
        <p className="text-center text-sm text-textMuted mt-8">
          Todos los planes incluyen setup gratuito · Sin tarjeta de crédito para empezar ·{" "}
          <span className="text-textSecondary font-medium">Garantía de 30 días</span>
        </p>
      </div>
    </section>
  );
}