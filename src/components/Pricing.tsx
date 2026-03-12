"use client";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    desc: "Para emprendedores que inician su digitalización.",
    features: ["1 Usuario", "Hasta 50 Productos", "Catálogo B2B Privado", "Recepción de Leads"],
    cta: "Comenzar Gratis",
    popular: false,
  },
  {
    name: "Professional",
    price: "$1,499",
    desc: "Para pymes que necesitan control total de ventas.",
    features: ["5 Usuarios", "Hasta 500 Productos", "CRM de Vendedores", "Listas de Precios", "Facturación CFDI 4.0"],
    cta: "Prueba 14 Días Gratis",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$3,999",
    desc: "Para grandes fabricantes con operación masiva.",
    features: ["Usuarios Ilimitados", "Productos Ilimitados", "Acceso a API", "Soporte Prioritario", "Onboarding Dedicado"],
    cta: "Contactar Ventas",
    popular: false,
  }
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 px-6 max-w-7xl mx-auto relative cursor-default">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Inversión que se paga sola</h2>
        <p className="text-textMuted max-w-xl mx-auto text-lg">Recupera el costo de Lumina salvando un solo pedido al mes que antes perdías por mala organización.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, i) => (
          <div key={i} className={`relative p-8 rounded-2xl border ${plan.popular ? 'border-primary bg-surface/80 shadow-[0_0_30px_rgba(245,158,11,0.1)] scale-105 z-10' : 'border-borderDark bg-surface'}`}>
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-background text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Recomendado
              </div>
            )}
            <h3 className="text-xl font-medium text-textMuted mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-textMuted">MXN / mes</span>
            </div>
            <p className="text-sm text-textMuted mb-8 h-10">{plan.desc}</p>
            
            <button className={`w-full py-3 rounded-lg font-medium mb-8 transition-colors ${plan.popular ? 'bg-primary text-background hover:bg-primary-hover' : 'bg-transparent border border-borderDark hover:border-textMuted'}`}>
              {plan.cta}
            </button>

            <ul className="space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}