"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Shield, X } from "lucide-react";
import { useI18n } from "../../i18n";

interface PricingProps {
  onOpenDemo?: (e: React.MouseEvent) => void;
}

export default function Pricing({ onOpenDemo }: PricingProps) {
  const { t, locale } = useI18n();
  const [isAnnual, setIsAnnual] = useState(false);

  const monthlyPrices = [990, 2490];
  const annualPrices = monthlyPrices.map((p) => Math.round(p * 0.8));

  const plans = [
    {
      name: t.pricing.plan1Name,
      price: isAnnual ? `$${annualPrices[0].toLocaleString()}` : `$${monthlyPrices[0].toLocaleString()}`,
      period: t.pricing.perMonth,
      description: t.pricing.plan1Desc,
      features: t.pricing.plan1Features,
      cta: t.pricing.plan1Cta,
      popular: false,
    },
    {
      name: t.pricing.plan2Name,
      price: isAnnual ? `$${annualPrices[1].toLocaleString()}` : `$${monthlyPrices[1].toLocaleString()}`,
      period: t.pricing.perMonth,
      description: t.pricing.plan2Desc,
      features: t.pricing.plan2Features,
      cta: t.pricing.plan2Cta,
      popular: true,
    },
    {
      name: t.pricing.plan3Name,
      price: locale === "es" ? "A la medida" : "Custom",
      period: "",
      description: t.pricing.plan3Desc,
      features: t.pricing.plan3Features,
      cta: t.pricing.plan3Cta,
      popular: false,
    },
  ];

  const comparison =
    locale === "es"
      ? {
          title: "Comparativa rapida vs alternativas comunes",
          subtitle: "Visualiza por que el plan Pro tiene mejor retorno para operaciones multi-canal.",
          note: "Comparacion de referencia basada en configuraciones comunes del mercado mexicano. Puede variar segun paquetes, modulos y volumen.",
          columns: {
            feature: "Capacidad",
            gestory: "Gestory",
            legacy: "Aspel / Contpaqi",
            cloud: "Bind ERP",
          },
          rows: [
            {
              feature: "POS offline con sincronizacion",
              gestory: true,
              legacy: "Parcial",
              cloud: "Parcial",
            },
            {
              feature: "Auto-facturacion CFDI 4.0 con QR",
              gestory: true,
              legacy: false,
              cloud: "Add-on",
            },
            {
              feature: "Portal B2B con listas por cliente",
              gestory: true,
              legacy: false,
              cloud: "Limitado",
            },
            {
              feature: "Inventario multi-almacen en tiempo real",
              gestory: true,
              legacy: "Con modulo",
              cloud: true,
            },
            {
              feature: "Onboarding guiado + soporte WhatsApp",
              gestory: true,
              legacy: "Variable",
              cloud: "Variable",
            },
            {
              feature: "Costo mensual referencia",
              gestory: "Desde $2,490",
              legacy: "Variable + modulos",
              cloud: "Desde $2,999",
            },
          ],
        }
      : {
          title: "Quick comparison vs common alternatives",
          subtitle: "See why Pro usually offers stronger payback for multi-channel operations.",
          note: "Directional market reference based on common Mexico-based setups. Actual values vary by package, add-ons and volume.",
          columns: {
            feature: "Capability",
            gestory: "Gestory",
            legacy: "Aspel / Contpaqi",
            cloud: "Bind ERP",
          },
          rows: [
            {
              feature: "Offline POS with sync",
              gestory: true,
              legacy: "Partial",
              cloud: "Partial",
            },
            {
              feature: "CFDI 4.0 self-invoicing via QR",
              gestory: true,
              legacy: false,
              cloud: "Add-on",
            },
            {
              feature: "B2B portal with customer pricing",
              gestory: true,
              legacy: false,
              cloud: "Limited",
            },
            {
              feature: "Real-time multi-warehouse inventory",
              gestory: true,
              legacy: "With module",
              cloud: true,
            },
            {
              feature: "Guided onboarding + WhatsApp support",
              gestory: true,
              legacy: "Variable",
              cloud: "Variable",
            },
            {
              feature: "Reference monthly cost",
              gestory: "From $2,490",
              legacy: "Variable + add-ons",
              cloud: "From $2,999",
            },
          ],
        };

  const renderCell = (value: boolean | string, isGestory = false) => {
    if (typeof value === "boolean") {
      return value ? (
        <span className="inline-flex items-center justify-center rounded-full bg-success-light p-1">
          <Check className="h-4 w-4 text-success" />
        </span>
      ) : (
        <span className="inline-flex items-center justify-center rounded-full bg-surface-muted p-1">
          <X className="h-4 w-4 text-textMuted" />
        </span>
      );
    }

    return (
      <span className={`text-xs sm:text-sm font-semibold ${isGestory ? "text-accent" : "text-textSecondary"}`}>
        {value}
      </span>
    );
  };

  return (
    <section className="section-padding bg-background" id="precios">
      <div className="section-container">
        <div className="section-header">
          <p className="eyebrow mb-3">{t.pricing.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textPrimary mb-6">
            {t.pricing.headline}
          </h2>
          <p className="text-lg text-textSecondary font-medium mb-8">
            {t.pricing.subtitle}
          </p>

          {/* Toggle Monthly / Annual */}
          <div className="inline-flex items-center gap-3 bg-surface-muted rounded-full p-1.5 border border-borderLight">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !isAnnual
                  ? "bg-white text-textPrimary shadow-sm"
                  : "text-textMuted hover:text-textSecondary"
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                isAnnual
                  ? "bg-white text-textPrimary shadow-sm"
                  : "text-textMuted hover:text-textSecondary"
              }`}
            >
              {t.pricing.annual}
              <span className="text-[10px] font-bold bg-success text-white px-2 py-0.5 rounded-full">
                {t.pricing.saveTag}
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative bg-white rounded-2xl p-7 lg:p-8 border flex flex-col h-full transition-all duration-300 ${
                plan.popular
                  ? "border-accent shadow-glow-lg ring-1 ring-accent/20"
                  : "border-borderLight shadow-card hover:shadow-card-hover"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="badge-popular shadow-md">
                    {t.pricing.recommended}
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-textPrimary mb-1">{plan.name}</h3>
                <p className="text-textSecondary text-sm min-h-[40px]">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-textPrimary">{plan.price}</span>
                  {plan.period && <span className="ml-2 text-textMuted font-medium text-sm">{plan.period}</span>}
                </div>
              </div>
              
              <ul className="space-y-3.5 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-success shrink-0 mr-3" />
                    <span className="text-textPrimary font-medium text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={onOpenDemo}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 ${
                  plan.popular 
                    ? "bg-accent hover:bg-accent-hover text-white shadow-glow"
                    : "bg-surface-muted hover:bg-primary-light text-textPrimary border border-borderLight"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-12 max-w-6xl mx-auto"
        >
          <div className="rounded-2xl border border-borderLight bg-white overflow-hidden shadow-card">
            <div className="px-6 py-5 border-b border-borderLight bg-surface-muted">
              <h3 className="text-lg font-bold text-textPrimary">{comparison.title}</h3>
              <p className="text-sm text-textSecondary mt-1">{comparison.subtitle}</p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="bg-white">
                  <tr className="border-b border-borderLight">
                    <th className="px-4 sm:px-6 py-4 text-xs font-bold uppercase tracking-wider text-textMuted">
                      {comparison.columns.feature}
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-xs font-bold uppercase tracking-wider text-accent">
                      {comparison.columns.gestory}
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-xs font-bold uppercase tracking-wider text-textMuted">
                      {comparison.columns.legacy}
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-xs font-bold uppercase tracking-wider text-textMuted">
                      {comparison.columns.cloud}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row) => (
                    <tr key={row.feature} className="border-b border-borderLight/70 last:border-b-0">
                      <td className="px-4 sm:px-6 py-4 text-sm font-semibold text-textPrimary">
                        {row.feature}
                      </td>
                      <td className="px-4 sm:px-6 py-4">{renderCell(row.gestory, true)}</td>
                      <td className="px-4 sm:px-6 py-4">{renderCell(row.legacy)}</td>
                      <td className="px-4 sm:px-6 py-4">{renderCell(row.cloud)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-textMuted mt-3 px-1">{comparison.note}</p>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-2 text-sm text-textMuted">
            <Shield className="h-4 w-4 text-success" />
            {t.pricing.guarantee}
          </div>
        </motion.div>
      </div>
    </section>
  );
}