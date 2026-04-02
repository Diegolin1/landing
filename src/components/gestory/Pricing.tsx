"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingProps {
  onOpenDemo?: (e: React.MouseEvent) => void;
}

export default function Pricing({ onOpenDemo }: PricingProps) {
  const plans = [
    {
      name: "Crecimiento",
      price: "$990",
      period: "MXN / mes",
      description: "Ideal para una sucursal o tienda en línea que empieza a despegar.",
      features: [
        "1 Sucursal Física",
        "Conexión a tienda en línea",
        "Inventario Inteligente básico",
        "Punto de venta",
        "Soporte por correo"
      ],
      cta: "Comenzar gratis",
      popular: false
    },
    {
      name: "Multi-Sucursal",
      price: "$2,490",
      period: "MXN / mes",
      description: "Para empresas establecidas con varias tiendas y canales de venta.",
      features: [
        "Hasta 5 sucursales",
        "Sincronización en tiempo real",
        "Auto-facturación para clientes",
        "Alertas de caducidad y stock bajo",
        "Cuentas claras automáticas",
        "Soporte prioritario WhatsApp"
      ],
      cta: "Plan más popular",
      popular: true
    },
    {
      name: "Corporativo",
      price: "A la medida",
      period: "",
      description: "Franquicias y empresas con necesidades mayoristas y B2B avanzadas.",
      features: [
        "Sucursales ilimitadas",
        "Portal de venta para mayoristas",
        "Migración de tu sistema actual incluido",
        "Asesor de cuenta dedicado",
        "Integraciones a medida"
      ],
      cta: "Agendar Demo",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-background" id="precios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">PLANES TRANSPARENTES</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-textPrimary mb-6">
            Paga solo por lo que necesitas para operar hoy.
          </h3>
          <p className="text-lg text-textSecondary font-medium">
            Sin costos ocultos ni sorpresas a final de mes. Cancela cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.2 }}
              className={`relative bg-surface rounded-3xl p-8 border ${
                plan.popular 
                  ? "border-accent shadow-xl shadow-accent/10" 
                  : "border-borderLight shadow-sm"
              } flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-accent text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                    Más Recomendado
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-textPrimary mb-2">{plan.name}</h4>
                <p className="text-textSecondary text-sm min-h-[40px]">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-textPrimary">{plan.price}</span>
                  {plan.period && <span className="ml-2 text-textSecondary font-medium">{plan.period}</span>}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-success shrink-0 mr-3" />
                    <span className="text-textPrimary font-medium text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={onOpenDemo}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all ${
                  plan.popular 
                    ? "bg-accent hover:bg-accent-hover text-white shadow-md shadow-accent/20" 
                    : "bg-primary-light hover:bg-blue-200 text-primary"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}