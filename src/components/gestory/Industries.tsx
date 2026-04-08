"use client";

import { motion } from "framer-motion";
import { Boxes, Store, ShoppingBag, UsersRound } from "lucide-react";
import { useI18n } from "../../i18n";

export default function Industries() {
  const { locale } = useI18n();

  const content =
    locale === "es"
      ? {
          eyebrow: "Industrias Donde Más Valor Genera",
          headline: "Diseñado para operaciones con inventario y venta multi-canal",
          subtitle:
            "Gestory está optimizado para empresas que ya venden y necesitan escalar sin perder control de stock, pedidos y facturación.",
          cards: [
            {
              icon: <Boxes className="h-5 w-5 text-primary" />,
              title: "Distribuidores Mayoristas",
              description:
                "Controla listas de precios por cliente, pedidos B2B y cobranza sin hojas de cálculo.",
              outcome: "Más pedidos con menos errores de captura",
            },
            {
              icon: <Store className="h-5 w-5 text-accent" />,
              title: "Retail Multi-Sucursal",
              description:
                "Sincroniza inventario entre tiendas y centraliza métricas por sucursal en tiempo real.",
              outcome: "Menos quiebres de stock y reposición más rápida",
            },
            {
              icon: <ShoppingBag className="h-5 w-5 text-success" />,
              title: "E-commerce + Punto de Venta",
              description:
                "Vende en tienda física y online sin desajustes de inventario ni doble trabajo operativo.",
              outcome: "Operación omnicanal unificada en una sola plataforma",
            },
            {
              icon: <UsersRound className="h-5 w-5 text-warning" />,
              title: "Empresas con Fuerza de Ventas",
              description:
                "Da a tus vendedores acceso a catálogo, precios y pedidos desde móvil con trazabilidad completa.",
              outcome: "Ciclo de venta más corto y mejor seguimiento comercial",
            },
          ],
        }
      : {
          eyebrow: "Industries With Highest Impact",
          headline: "Built for inventory-heavy and multi-channel operations",
          subtitle:
            "Gestory is optimized for companies already selling at scale that need tighter control over stock, orders and invoicing.",
          cards: [
            {
              icon: <Boxes className="h-5 w-5 text-primary" />,
              title: "Wholesale Distributors",
              description:
                "Manage customer-specific price lists, B2B orders and collection workflows in one place.",
              outcome: "More orders with fewer capture errors",
            },
            {
              icon: <Store className="h-5 w-5 text-accent" />,
              title: "Multi-Branch Retail",
              description:
                "Sync stock across branches and centralize KPI visibility per store in real time.",
              outcome: "Fewer stockouts and faster replenishment",
            },
            {
              icon: <ShoppingBag className="h-5 w-5 text-success" />,
              title: "E-commerce + POS",
              description:
                "Sell online and in-store without inventory mismatches or duplicated operations.",
              outcome: "Unified omnichannel operation in one platform",
            },
            {
              icon: <UsersRound className="h-5 w-5 text-warning" />,
              title: "Field Sales Teams",
              description:
                "Give reps mobile access to catalogs, pricing and order capture with full traceability.",
              outcome: "Shorter sales cycle and stronger follow-up",
            },
          ],
        };

  return (
    <section className="section-padding bg-white" id="industrias">
      <div className="section-container">
        <div className="section-header">
          <p className="eyebrow mb-3">{content.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textPrimary mb-6">
            {content.headline}
          </h2>
          <p className="text-lg text-textSecondary font-medium">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {content.cards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl border border-borderLight bg-surface p-6 shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-surface-muted border border-borderLight flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-textPrimary mb-2">{card.title}</h3>
              <p className="text-sm text-textSecondary leading-relaxed mb-4">{card.description}</p>
              <div className="inline-flex text-[11px] font-bold uppercase tracking-wider text-success bg-success-light px-3 py-1 rounded-full">
                {card.outcome}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
