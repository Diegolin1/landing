"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useI18n } from "../../i18n";

export default function Integrations() {
  const { locale } = useI18n();

  const integrations = [
    { name: "Facturapi", icon: "📄" },
    { name: "Mercado Pago", icon: "💰" },
    { name: "Mercado Libre", icon: "🛒" },
    { name: "Clip", icon: "💳" },
    { name: "Stripe", icon: "🔐" },
    { name: "OXXO", icon: "🏪" },
  ];

  const content =
    locale === "es"
      ? {
          eyebrow: "Integraciones Clave",
          headline: "Conecta Gestory con tu operación actual",
          subtitle:
            "Integra facturación, cobros y canales de venta sin reescribir procesos desde cero.",
          bullets: [
            "Facturación CFDI 4.0 conectada con PAC",
            "Cobros online y conciliación de pedidos",
            "Publicación de catálogo para venta digital",
          ],
        }
      : {
          eyebrow: "Core Integrations",
          headline: "Connect Gestory with your current stack",
          subtitle:
            "Unify invoicing, payments and sales channels without rebuilding your operation.",
          bullets: [
            "CFDI 4.0 invoicing connected to certified PAC",
            "Online payments and order reconciliation",
            "Catalog publishing for digital sales channels",
          ],
        };

  return (
    <section className="section-padding bg-surface-muted" id="integraciones">
      <div className="section-container">
        <div className="max-w-5xl mx-auto rounded-3xl border border-borderLight bg-white p-8 md:p-10 shadow-card">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="eyebrow mb-3">{content.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textPrimary mb-4">
              {content.headline}
            </h2>
            <p className="text-lg text-textSecondary font-medium">{content.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {integrations.map((integration, idx) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="rounded-xl border border-borderLight bg-surface px-4 py-4 text-sm font-semibold text-textPrimary text-center flex flex-col items-center justify-center gap-3 hover:border-accent hover:bg-white transition-all duration-300"
              >
                <span className="text-2xl">{integration.icon}</span>
                <span>{integration.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {content.bullets.map((bullet) => (
              <div
                key={bullet}
                className="rounded-xl bg-primary-light/40 border border-primary-light px-4 py-3 text-sm font-medium text-textPrimary flex items-center gap-2"
              >
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
