"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";
import { useI18n } from "../../i18n";

interface PricingProps {
  onOpenDemo?: (e: React.MouseEvent) => void;
}

export default function Pricing({ onOpenDemo }: PricingProps) {
  const { t } = useI18n();
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
      price: t.pricing.plan3Cta === "Agendar Demo" ? "A la medida" : "Custom",
      period: "",
      description: t.pricing.plan3Desc,
      features: t.pricing.plan3Features,
      cta: t.pricing.plan3Cta,
      popular: false,
    },
  ];

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