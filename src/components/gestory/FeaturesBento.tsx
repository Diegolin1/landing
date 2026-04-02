"use client";

import { motion } from "framer-motion";
import { PackageSearch, ShoppingBag, Globe, Calculator, RefreshCw, BarChart4 } from "lucide-react";

const features = [
  {
    title: "Control Exacto de Inventario",
    description: "Revisa el stock de todas tus sucursales al instante. El sistema te avisa antes de que te quedes sin productos para que siempre vendas.",
    icon: <PackageSearch className="h-6 w-6 text-primary" />,
    className: "col-span-1 md:col-span-2 bg-gradient-to-br from-surface to-primary-light/20",
    image: <div className="h-full w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 blur-sm mix-blend-overlay"></div>
  },
  {
    title: "Vende en Internet y a Mayoristas",
    description: "Sube tus productos a internet en un clic. Tus clientes grandes (B2B) verán precios especiales solos para ellos y tu inventario jamás se cruzará con la tienda física.",
    icon: <Globe className="h-6 w-6 text-accent" />,
    className: "col-span-1 md:col-span-1 bg-surface",
  },
  {
    title: "Caja Registradora Offline",
    description: "¿Se cayó el internet de tu local o no hay luz? No importa. Sigue pasando productos; el sistema guardará las ventas y se actualizará solito al volver la conexión.",
    icon: <ShoppingBag className="h-6 w-6 text-success" />,
    className: "col-span-1 md:col-span-1 bg-surface",
  },
  {
    title: "Cuentas Claras Automáticas",
    description: "Conecta tu banco y terminales (Clip, Mercado Pago o transferencias). Cuando el cliente paga, la orden marca sola que fue 'Cobrada'. Opcional: El cliente escanea un código del ticket y hace sola su factura (Facturapi).",
    icon: <Calculator className="h-6 w-6 text-warning" />,
    className: "col-span-1 md:col-span-2 bg-surface",
  },
];

export default function FeaturesBento() {
  return (
    <section className="py-24 bg-surface-muted" id="soluciones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">La Plataforma Completa</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-textPrimary mb-6">
            Preparado para cuando <br className="hidden md:block"/> un cuaderno de apuntes ya no es suficiente.
          </h3>
          <p className="text-lg text-textSecondary font-medium">
            Gestory conecta todas las piezas de tu empresa por detrás de escenas. Cada vez que vendes un artículo, todo tu dinero e inventarios se actualizan sin que toques una tecla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className={`relative overflow-hidden rounded-2xl border border-borderLight shadow-sm hover:shadow-card-hover transition-shadow p-8 ${feature.className}`}
            >
              {feature.image && (
                <div className="absolute inset-0 pointer-events-none">
                  {feature.image}
                </div>
              )}
              <div className="flex flex-col h-full z-10 relative">
                <div className="h-12 w-12 rounded-xl bg-white border border-borderLight shadow-sm flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-textPrimary mb-3">{feature.title}</h4>
                <p className="text-textSecondary leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}