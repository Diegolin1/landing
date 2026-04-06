"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  PackageSearch,
  ShoppingBag,
  Globe,
  Calculator,
  BarChart4,
  Users,
  Tag,
  FileText,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useI18n } from "../../i18n";

export default function FeaturesBento() {
  const { t, locale } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const isEs = locale === "es";

  const features = useMemo(
    () => [
      {
        title: t.features.inventory,
        description: t.features.inventoryDesc,
        icon: <PackageSearch className="h-5 w-5 text-primary" />,
        route: "/admin/warehouses",
        screenshot: "/assets/modules/traslados.jpg",
        outcome: isEs
          ? "Control de transferencias y stock entre sucursales"
          : "Control transfers and stock across branches",
      },
      {
        title: t.features.pos,
        description: t.features.posDesc,
        icon: <ShoppingBag className="h-5 w-5 text-success" />,
        route: "/admin/pos",
        screenshot: "/assets/modules/catalogo.png",
        outcome: isEs
          ? "Cobro continuo incluso con conectividad inestable"
          : "Keep charging even with unstable connectivity",
      },
      {
        title: t.features.ecommerce,
        description: t.features.ecommerceDesc,
        icon: <Globe className="h-5 w-5 text-accent" />,
        route: "/",
        screenshot: "/assets/modules/personaliza_tu_empresa.jpg",
        outcome: isEs
          ? "Catalogo unificado para canal digital y tienda fisica"
          : "Unified catalog for digital and physical channels",
      },
      {
        title: t.features.b2b,
        description: t.features.b2bDesc,
        icon: <Users className="h-5 w-5 text-violet-600" />,
        route: "/admin/orders",
        screenshot: "/assets/modules/generar_pedidos.jpg",
        outcome: isEs
          ? "Pedidos mayoristas con reglas de precio por cliente"
          : "Wholesale orders with customer-specific pricing rules",
      },
      {
        title: t.features.invoicing,
        description: t.features.invoicingDesc,
        icon: <FileText className="h-5 w-5 text-warning" />,
        route: "/admin/invoices",
        screenshot: "/assets/modules/facturacion_cfdi.jpg",
        outcome: isEs
          ? "CFDI 4.0 ordenado y exportable en segundos"
          : "Organized CFDI 4.0 invoicing with fast export",
      },
      {
        title: t.features.crm,
        description: t.features.crmDesc,
        icon: <Calculator className="h-5 w-5 text-accent" />,
        route: "/admin/leads",
        screenshot: "/assets/modules/crm.png",
        outcome: isEs
          ? "Seguimiento comercial con visibilidad de conversion"
          : "Sales follow-up with conversion visibility",
      },
      {
        title: t.features.priceList,
        description: t.features.priceListDesc,
        icon: <Tag className="h-5 w-5 text-error" />,
        route: "/admin/promotions",
        screenshot: "/assets/modules/cupones_promociones.jpg",
        outcome: isEs
          ? "Descuentos controlados sin erosionar margen"
          : "Controlled discounts without margin erosion",
      },
      {
        title: t.features.reports,
        description: t.features.reportsDesc,
        icon: <BarChart4 className="h-5 w-5 text-success" />,
        route: "/admin/reports",
        screenshot: "/assets/modules/reportes.jpg",
        outcome: isEs
          ? "KPIs accionables para decisiones del mismo dia"
          : "Actionable KPIs for same-day decisions",
      },
    ],
    [isEs, t]
  );

  const activeFeature = features[activeIndex] ?? features[0];
  const tabsLabel = isEs
    ? "Selector de modulos interactivos"
    : "Interactive module selector";
  const previewLabel = isEs ? "Vista real del modulo" : "Real module preview";

  return (
    <section className="py-16 md:py-28 bg-surface-muted" id="soluciones">
      <div className="section-container">
        
        <div className="section-header">
          <p className="eyebrow mb-3">{t.features.eyebrow}</p>
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-heading font-extrabold text-textPrimary mb-6">
            {t.features.headline}{" "}
            <span className="text-gradient-blue">{t.features.headlineAccent}</span>
          </h2>
          <p className="text-lg text-textSecondary font-medium">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
          <div className="lg:col-span-5" role="tablist" aria-label={tabsLabel}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {features.map((feature, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <motion.button
                    key={feature.title}
                    type="button"
                    role="tab"
                    id={`feature-tab-${idx}`}
                    aria-selected={isActive}
                    aria-controls={`feature-panel-${idx}`}
                    onClick={() => setActiveIndex(idx)}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className={`text-left rounded-2xl border p-4 transition-all duration-300 group ${
                      isActive
                        ? "bg-white border-accent/50 shadow-card"
                        : "bg-white/70 border-borderLight hover:border-accent/30 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`h-10 w-10 shrink-0 rounded-xl border flex items-center justify-center ${
                          isActive
                            ? "bg-accent/10 border-accent/20"
                            : "bg-surface-muted border-borderLight"
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-textPrimary mb-1 line-clamp-1">{feature.title}</p>
                        <p className="text-xs text-textSecondary leading-relaxed line-clamp-2">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeFeature.title}
                role="tabpanel"
                id={`feature-panel-${activeIndex}`}
                aria-labelledby={`feature-tab-${activeIndex}`}
                aria-label={previewLabel}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-borderLight bg-white shadow-card overflow-hidden flex flex-col"
              >
                {/* Contenedor de la Imagen - Ajuste Natural para Máxima Claridad */}
                <div className={`relative w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center ${
                  activeFeature.screenshot.endsWith('.jpg') 
                    ? 'p-8 sm:p-12' // Espacio generoso para móvil vertical
                    : 'p-0' // Cero padding para que la horizontal abarque el 100%
                }`}>
                  {/* Background Blur radiante para móviles (iPhone) */}
                  {activeFeature.screenshot.endsWith('.jpg') && (
                    <Image
                      src={activeFeature.screenshot}
                      alt="Background blur"
                      fill
                      unoptimized
                      className="object-cover opacity-30 blur-3xl scale-125"
                    />
                  )}

                  <div className={`relative z-10 w-full flex justify-center ${
                    activeFeature.screenshot.endsWith('.jpg') ? 'max-h-[600px]' : ''
                  }`}>
                    <Image
                      src={activeFeature.screenshot}
                      alt={activeFeature.title}
                      width={1200}
                      height={800}
                      unoptimized
                      priority
                      className={`transition-transform duration-700 ${
                        activeFeature.screenshot.endsWith('.jpg')
                          ? 'h-[500px] sm:h-[600px] w-auto object-contain drop-shadow-2xl rounded-xl hover:scale-105'
                          : 'w-full h-auto object-cover'
                      }`}
                    />
                  </div>
                  
                  <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 border border-borderLight px-3 py-1 text-[11px] font-bold text-textPrimary shadow-md z-20">
                    {activeFeature.route}
                  </div>
                </div>

                {/* Contenedor de Texto y Descripción */}
                <div className="p-6 md:p-8 flex flex-col bg-white border-t border-borderLight">
                  <div className="mb-4">
                    <p className="text-[11px] font-bold uppercase tracking-wide text-textMuted mb-2">
                      {isEs ? "Impacto operativo" : "Operational impact"}
                    </p>
                    <h3 className="text-xl md:text-2xl font-extrabold text-textPrimary mb-3">
                      {activeFeature.outcome}
                    </h3>
                  </div>
                  
                  <p className="text-base text-textSecondary leading-relaxed mb-6 font-medium">
                    {activeFeature.description}
                  </p>
                  
                  <div className="inline-flex items-center text-sm font-bold text-accent hover:text-blue-700 transition-colors w-fit cursor-pointer">
                    {isEs ? "Explorar este flujo" : "Explore this workflow"}
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}