"use client";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    feature: "Diseñado para B2B México",
    lumina: true,
    shopify: false,
    zapier: false,
  },
  {
    feature: "CFDI 4.0 Nativo (sin integraciones)",
    lumina: true,
    shopify: false,
    zapier: false,
  },
  {
    feature: "Precios en MXN (no conversión)",
    lumina: true,
    shopify: false,
    zapier: false,
  },
  {
    feature: "CRM para Vendedores B2B",
    lumina: true,
    shopify: false,
    zapier: false,
  },
  {
    feature: "Gate B2B (precios privados)",
    lumina: true,
    shopify: false,
    zapier: false,
  },
  {
    feature: "Soporte en Español (zona MX)",
    lumina: true,
    shopify: false,
    zapier: false,
  },
  {
    feature: "Costo < $500/mes",
    lumina: true,
    shopify: false,
    zapier: false,
  },
  {
    feature: "Carrito → WhatsApp integrado",
    lumina: true,
    shopify: true,
    zapier: false,
  },
  {
    feature: "Catálogo digital",
    lumina: true,
    shopify: true,
    zapier: false,
  },
  {
    feature: "Multi-tenant Companies",
    lumina: true,
    shopify: true,
    zapier: true,
  },
];

export default function WhyLumina() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por qué Lumina y no otra solución?
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            Comparamos de frente. Lumina no traduce soluciones gringas — <span className="text-primary font-semibold">las construimos desde cero para México.</span>
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-x-auto mb-16"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-borderDark">
                <th className="text-left py-4 px-6 font-semibold text-textMuted text-sm">Característica</th>
                <th className="text-center py-4 px-6 font-bold text-base">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg">⚡</span>
                    <span className="text-primary">Lumina</span>
                  </div>
                </th>
                <th className="text-center py-4 px-6 font-bold text-base text-textMuted">Shopify</th>
                <th className="text-center py-4 px-6 font-bold text-base text-textMuted">Zapier</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className={`border-b border-borderDark hover:bg-surface/30 transition-colors ${
                    row.lumina && (row.shopify === false || row.zapier === false) 
                      ? "bg-primary/5" 
                      : ""
                  }`}
                >
                  <td className="py-4 px-6 font-medium text-sm">{row.feature}</td>
                  <td className="text-center py-4 px-6">
                    {row.lumina ? (
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-6">
                    {row.shopify ? (
                      <Check className="w-5 h-5 text-gray-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-700 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-6">
                    {row.zapier ? (
                      <Check className="w-5 h-5 text-gray-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-700 mx-auto" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Hecho en México, para México",
              description: "Nativo en CFDI 4.0, pesos MXN, horarios zona MX. Soporte en español por mexicanos que entienden tu industria.",
              icon: "🇲🇽",
              highlight: "No es traducción",
            },
            {
              title: "90% Más Barato que Shopify",
              description: "Desde $499/mes vs $2,000+ en plataformas internacionales. Incluye Facturación, CRM y WhatsApp.",
              icon: "💰",
              highlight: "$1,500 de ahorro/mes",
            },
            {
              title: "4 Horas/Día Recuperadas",
              description: "Vendedores pasan de 2+ horas facturando a 1 minuto por pedido. Automatización completa de flujos.",
              icon: "⏰",
              highlight: "85% menos tiempo",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface border border-borderDark rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <div className="mb-3">
                <p className="text-xs font-bold text-primary uppercase tracking-wider">{item.highlight}</p>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-textMuted text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary/5 border border-primary/30 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Confían en Lumina</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { badge: "✓ CFDI 4.0", subtitle: "SAT Validado" },
              { badge: "✓ SSL", subtitle: "Encriptación Total" },
              { badge: "✓ GDPR", subtitle: "Datos Protegidos" },
              { badge: "✓ 99.9%", subtitle: "Uptime Garantizado" },
            ].map((item, idx) => (
              <div key={idx}>
                <p className="font-bold text-primary text-lg">{item.badge}</p>
                <p className="text-xs text-textMuted">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
