"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Clock3, DollarSign, TrendingUp } from "lucide-react";
import { useI18n } from "../../i18n";

interface ROICalculatorProps {
  onOpenDemo?: (e?: React.MouseEvent) => void;
}

type Channel = "retail" | "hybrid" | "b2b";

const CHANNEL_FACTORS: Record<
  Channel,
  { manualMinutes: number; avgTicket: number; leakage: number }
> = {
  retail: { manualMinutes: 5.5, avgTicket: 780, leakage: 0.008 },
  hybrid: { manualMinutes: 7.2, avgTicket: 980, leakage: 0.012 },
  b2b: { manualMinutes: 8.6, avgTicket: 1450, leakage: 0.018 },
};

const AUTOMATED_MINUTES_PER_ORDER = 2.2;
const INVOICE_SAVING_PER_ORDER = 14;
const PRO_PLAN_COST = 2490;

export default function ROICalculator({ onOpenDemo }: ROICalculatorProps) {
  const { locale } = useI18n();
  const [teamSize, setTeamSize] = useState(8);
  const [ordersPerMonth, setOrdersPerMonth] = useState(900);
  const [channel, setChannel] = useState<Channel>("hybrid");

  const isEs = locale === "es";

  const copy = isEs
    ? {
        eyebrow: "Calculadora ROI",
        title: "¿Cuanto recuperas al automatizar con Gestory?",
        subtitle:
          "Ajusta tus numeros y estima ahorro operativo, recuperacion de ventas y retorno del plan Pro.",
        teamLabel: "Tamano de equipo",
        teamHint: "personas en operacion comercial y administrativa",
        ordersLabel: "Pedidos por mes",
        ordersHint: "promedio mensual entre tienda, online y mayoristas",
        channelLabel: "Canal principal",
        channels: {
          retail: "Tienda fisica",
          hybrid: "Retail + E-commerce",
          b2b: "Distribucion B2B",
        },
        hoursSaved: "Horas ahorradas por mes",
        monthlySaved: "Ahorro mensual estimado",
        annualNet: "Ganancia neta anual",
        roi: "Recuperas el plan Pro en",
        month: "mes",
        months: "meses",
        breakdown: "Desglose mensual",
        item1: "Ahorro operativo por captura y conciliacion",
        item2: "Ventas recuperadas por menor error de stock",
        item3: "Tiempo de facturacion CFDI automatizada",
        cta: "Quiero una demo con mis numeros",
        note: "Estimacion orientativa con parametros promedio en PyME mexicana. Se valida con tus datos reales en demo.",
      }
    : {
        eyebrow: "ROI Calculator",
        title: "How much do you recover by automating with Gestory?",
        subtitle:
          "Adjust your numbers and estimate operational savings, recovered revenue and payback for the Pro plan.",
        teamLabel: "Team size",
        teamHint: "people involved in commercial and admin operations",
        ordersLabel: "Orders per month",
        ordersHint: "monthly average across store, online and wholesale",
        channelLabel: "Primary channel",
        channels: {
          retail: "Physical store",
          hybrid: "Retail + E-commerce",
          b2b: "B2B distribution",
        },
        hoursSaved: "Hours saved per month",
        monthlySaved: "Estimated monthly savings",
        annualNet: "Estimated annual net gain",
        roi: "Pro plan payback",
        month: "month",
        months: "months",
        breakdown: "Monthly breakdown",
        item1: "Operational savings from capture and reconciliation",
        item2: "Revenue recovered from lower stock mismatch",
        item3: "CFDI invoicing time savings",
        cta: "Book a demo with my numbers",
        note: "Directional estimate using common SMB assumptions in Mexico. We validate with your real data during the demo.",
      };

  const metrics = useMemo(() => {
    const factors = CHANNEL_FACTORS[channel];
    const hourlyCost = 120 + teamSize * 1.8;

    const minutesSavedPerOrder = Math.max(
      0,
      factors.manualMinutes - AUTOMATED_MINUTES_PER_ORDER
    );
    const hoursSavedPerMonth = (minutesSavedPerOrder * ordersPerMonth) / 60;

    const operationalSavings = hoursSavedPerMonth * hourlyCost;
    const leakageRecovered = ordersPerMonth * factors.avgTicket * factors.leakage;
    const invoiceSavings = ordersPerMonth * INVOICE_SAVING_PER_ORDER;

    const totalMonthlySavings =
      operationalSavings + leakageRecovered + invoiceSavings;
    const annualNetGain = totalMonthlySavings * 12 - PRO_PLAN_COST * 12;
    const roiMonths = PRO_PLAN_COST / Math.max(totalMonthlySavings, 1);

    return {
      hoursSavedPerMonth,
      operationalSavings,
      leakageRecovered,
      invoiceSavings,
      totalMonthlySavings,
      annualNetGain,
      roiMonths,
    };
  }, [channel, ordersPerMonth, teamSize]);

  const roiLabel =
    metrics.roiMonths <= 1
      ? `< 1 ${copy.month}`
      : `${metrics.roiMonths.toFixed(1)} ${
          metrics.roiMonths < 2 ? copy.month : copy.months
        }`;

  return (
    <section className="section-padding bg-surface-muted" id="roi">
      <div className="section-container">
        <div className="max-w-6xl mx-auto rounded-3xl border border-borderLight bg-white p-6 md:p-10 shadow-card">
          <div className="text-center max-w-3xl mx-auto mb-9">
            <p className="eyebrow mb-3">{copy.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textPrimary mb-4">
              {copy.title}
            </h2>
            <p className="text-lg text-textSecondary font-medium">{copy.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-7">
            <div className="lg:col-span-3 rounded-2xl border border-borderLight bg-surface p-5">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-textPrimary">{copy.teamLabel}</label>
                    <span className="text-sm font-bold text-primary">{teamSize}</span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={80}
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full accent-accent"
                  />
                  <p className="text-xs text-textMuted mt-1">{copy.teamHint}</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-textPrimary">{copy.ordersLabel}</label>
                    <span className="text-sm font-bold text-primary">{ordersPerMonth.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={150}
                    max={6000}
                    step={50}
                    value={ordersPerMonth}
                    onChange={(e) => setOrdersPerMonth(Number(e.target.value))}
                    className="w-full accent-accent"
                  />
                  <p className="text-xs text-textMuted mt-1">{copy.ordersHint}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-textPrimary mb-2">{copy.channelLabel}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {(["retail", "hybrid", "b2b"] as const).map((item) => (
                      <button
                        key={item}
                        onClick={() => setChannel(item)}
                        className={`rounded-xl px-3 py-2.5 text-sm font-semibold border transition-colors ${
                          channel === item
                            ? "bg-primary text-white border-primary"
                            : "bg-white border-borderLight text-textSecondary hover:border-primary-light"
                        }`}
                      >
                        {copy.channels[item]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/10 to-accent/5 p-5">
              <div className="space-y-4">
                <div className="rounded-xl bg-white/80 border border-primary/20 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock3 className="h-4 w-4 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-textMuted">
                      {copy.hoursSaved}
                    </p>
                  </div>
                  <p className="text-2xl font-extrabold text-textPrimary">
                    {metrics.hoursSavedPerMonth.toFixed(1)} h
                  </p>
                </div>

                <div className="rounded-xl bg-white/80 border border-primary/20 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-textMuted">
                      {copy.monthlySaved}
                    </p>
                  </div>
                  <p className="text-2xl font-extrabold text-textPrimary">
                    ${Math.round(metrics.totalMonthlySavings).toLocaleString("es-MX")}
                  </p>
                </div>

                <div className="rounded-xl bg-primary text-white p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="h-4 w-4" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">
                      {copy.roi}
                    </p>
                  </div>
                  <p className="text-2xl font-extrabold">{roiLabel}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-borderLight bg-surface p-5 mb-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="h-4 w-4 text-accent" />
              <p className="text-sm font-bold text-textPrimary">{copy.breakdown}</p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-textSecondary">{copy.item1}</span>
                <span className="font-semibold text-textPrimary">
                  ${Math.round(metrics.operationalSavings).toLocaleString("es-MX")}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-textSecondary">{copy.item2}</span>
                <span className="font-semibold text-textPrimary">
                  ${Math.round(metrics.leakageRecovered).toLocaleString("es-MX")}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-textSecondary">{copy.item3}</span>
                <span className="font-semibold text-textPrimary">
                  ${Math.round(metrics.invoiceSavings).toLocaleString("es-MX")}
                </span>
              </div>
              <div className="h-px bg-borderLight my-2" />
              <div className="flex items-center justify-between gap-4">
                <span className="text-textPrimary font-bold">{copy.annualNet}</span>
                <span className="text-success font-extrabold text-lg">
                  ${Math.round(metrics.annualNetGain).toLocaleString("es-MX")}
                </span>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <button onClick={onOpenDemo} className="btn-primary text-sm px-7 py-3.5">
              {copy.cta}
            </button>
            <p className="text-xs text-textMuted mt-3 max-w-3xl mx-auto">{copy.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
