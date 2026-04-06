"use client";

import { motion } from "framer-motion";
import { ChartColumnBig, FileText, PackageSearch, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useI18n } from "../../i18n";

export default function Testimonials() {
  const { locale } = useI18n();

  const copy =
    locale === "es"
      ? {
          eyebrow: "Producto En Operación",
          headline: "Capturas reales de módulos activos en Gestory",
          subtitle:
            "Mientras generamos casos de éxito formales, mostramos evidencia directa de los flujos que ya corren en el sistema.",
          liveBadge: "Captura real",
          modules: [
            {
              title: "Reportes de ventas y clientes",
              detail: "KPIs diarios, categorías y top clientes para decisiones comerciales rápidas.",
              metric: "Visibilidad financiera y comercial en tiempo real",
              image: "/assets/modules/reports-topclients.jpg",
              icon: <ChartColumnBig className="h-4 w-4 text-accent" />,
            },
            {
              title: "Pedidos B2B con precios por cliente",
              detail: "Alta de pedidos manuales con lista de precios personalizada por comprador.",
              metric: "Menos fricción para equipos de ventas y promotores",
              image: "/assets/modules/orders-b2b.jpg",
              icon: <ShoppingCart className="h-4 w-4 text-success" />,
            },
            {
              title: "Facturación CFDI 4.0",
              detail: "Búsqueda, filtros y exportación de comprobantes desde el módulo fiscal.",
              metric: "Operación fiscal ordenada y trazable",
              image: "/assets/modules/invoicing-cfdi.jpg",
              icon: <FileText className="h-4 w-4 text-warning" />,
            },
            {
              title: "Logística y multi-almacén",
              detail: "Traslados de stock entre bodegas con autorización y seguimiento.",
              metric: "Control de inventario entre ubicaciones",
              image: "/assets/modules/warehouses-transfer.jpg",
              icon: <PackageSearch className="h-4 w-4 text-primary" />,
            },
          ],
        }
      : {
          eyebrow: "Product In Action",
          headline: "Real snapshots of active Gestory modules",
          subtitle:
            "While formal success stories are being collected, we show direct evidence of flows already running in production.",
          liveBadge: "Real capture",
          modules: [
            {
              title: "Sales and customer analytics",
              detail: "Daily KPIs, category performance and top clients for faster commercial decisions.",
              metric: "Real-time financial and sales visibility",
              image: "/assets/modules/reports-topclients.jpg",
              icon: <ChartColumnBig className="h-4 w-4 text-accent" />,
            },
            {
              title: "B2B orders with customer pricing",
              detail: "Manual order creation with customer-specific price list context.",
              metric: "Less friction for sales teams and reps",
              image: "/assets/modules/orders-b2b.jpg",
              icon: <ShoppingCart className="h-4 w-4 text-success" />,
            },
            {
              title: "CFDI 4.0 invoicing",
              detail: "Search, filters and invoice export directly from the fiscal module.",
              metric: "Traceable and organized invoicing operations",
              image: "/assets/modules/invoicing-cfdi.jpg",
              icon: <FileText className="h-4 w-4 text-warning" />,
            },
            {
              title: "Logistics and multi-warehouse",
              detail: "Stock transfer workflows with authorization between warehouse locations.",
              metric: "Inventory control across locations",
              image: "/assets/modules/warehouses-transfer.jpg",
              icon: <PackageSearch className="h-4 w-4 text-primary" />,
            },
          ],
        };

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="section-header">
          <p className="eyebrow mb-3">{copy.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textPrimary mb-6">
            {copy.headline}
          </h2>
          <p className="text-lg text-textSecondary font-medium max-w-3xl mx-auto">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {copy.modules.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-borderLight p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-light/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  {item.icon}
                  <span>{copy.liveBadge}</span>
                </div>
                <div className="text-[11px] font-semibold text-textMuted">iOS</div>
              </div>

              <div className="relative aspect-[9/10] mb-5 rounded-xl overflow-hidden border border-borderLight bg-surface-muted">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                  className="object-cover object-top"
                />
              </div>

              <h3 className="text-lg font-bold text-textPrimary mb-2">{item.title}</h3>
              <p className="text-sm text-textSecondary leading-relaxed mb-4">{item.detail}</p>

              <div className="result-pill self-start">
                {item.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
