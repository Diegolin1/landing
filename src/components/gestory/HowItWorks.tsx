"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UserPlus, Settings, Rocket } from "lucide-react";
import { useI18n } from "../../i18n";

export default function HowItWorks() {
  const { t, locale } = useI18n();
  const [activeStep, setActiveStep] = useState(0);
  const isEs = locale === "es";

  const steps = useMemo(
    () => [
      {
        icon: <UserPlus className="h-6 w-6 text-accent" />,
        title: t.howItWorks.step1Title,
        desc: t.howItWorks.step1Desc,
        number: "01",
        eta: isEs ? "2 min" : "2 min",
        bullets: isEs
          ? [
              "Alta de empresa y usuario administrador.",
              "Definicion inicial de sucursales y moneda.",
              "Sin tarjeta ni bloqueo contractual.",
            ]
          : [
              "Create company and admin user in minutes.",
              "Set initial branches and currency.",
              "No credit card and no lock-in contract.",
            ],
      },
      {
        icon: <Settings className="h-6 w-6 text-accent" />,
        title: t.howItWorks.step2Title,
        desc: t.howItWorks.step2Desc,
        number: "02",
        eta: isEs ? "30 min" : "30 min",
        bullets: isEs
          ? [
              "Importacion de catalogo, precios y clientes.",
              "Configuracion de CFDI, inventario y permisos.",
              "Acompanamiento en onboarding guiado.",
            ]
          : [
              "Import catalog, pricing and customers.",
              "Configure CFDI, inventory and permissions.",
              "Guided onboarding with your operations team.",
            ],
      },
      {
        icon: <Rocket className="h-6 w-6 text-accent" />,
        title: t.howItWorks.step3Title,
        desc: t.howItWorks.step3Desc,
        number: "03",
        eta: isEs ? "Dia 1" : "Day 1",
        bullets: isEs
          ? [
              "Opera POS, pedidos B2B y facturacion desde una sola vista.",
              "Monitorea alertas de stock y KPIs en tiempo real.",
              "Escala con soporte activo por WhatsApp y correo.",
            ]
          : [
              "Run POS, B2B orders and invoicing from one view.",
              "Track stock alerts and KPIs in real time.",
              "Scale with active support via WhatsApp and email.",
            ],
      },
    ],
    [isEs, t]
  );

  const progress = (activeStep / (steps.length - 1)) * 100;
  const current = steps[activeStep] ?? steps[0];

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="section-header">
          <p className="eyebrow mb-3">{t.howItWorks.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textPrimary mb-6">
            {t.howItWorks.headline}
          </h2>
          <p className="text-lg text-textSecondary font-medium">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative mb-8">
            <div className="hidden md:block absolute left-16 right-16 top-9">
              <div className="h-1 bg-borderLight rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.35 }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {steps.map((step, idx) => {
                const isActive = idx === activeStep;

                return (
                  <motion.button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.35, delay: idx * 0.12 }}
                    aria-current={isActive ? "step" : undefined}
                    className={`relative rounded-2xl border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-accent/5 border-accent/30 shadow-card"
                        : "bg-surface border-borderLight hover:border-accent/20"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`h-14 w-14 shrink-0 rounded-2xl border flex items-center justify-center ${
                          isActive
                            ? "bg-white border-accent/20"
                            : "bg-white border-borderLight"
                        }`}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <div className="inline-flex rounded-lg bg-white border border-borderLight px-2 py-1 text-[11px] font-bold text-textMuted mb-2">
                          {step.number}
                        </div>
                        <h3 className="text-base font-bold text-textPrimary mb-1">{step.title}</h3>
                        <p className="text-sm text-textSecondary leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.number}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-borderLight bg-surface p-6 lg:p-7"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-textMuted mb-2">
                    {isEs ? "Paso activo" : "Active step"}
                  </p>
                  <h3 className="text-xl font-bold text-textPrimary mb-2">{current.title}</h3>
                  <p className="text-sm text-textSecondary">{current.desc}</p>
                </div>
                <span className="inline-flex h-fit rounded-full border border-success/20 bg-success-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-success">
                  {isEs ? "Tiempo estimado" : "Estimated time"}: {current.eta}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {current.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-xl border border-borderLight bg-white px-4 py-3 text-sm font-medium text-textPrimary"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
