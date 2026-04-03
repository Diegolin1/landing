"use client";

import { motion } from "framer-motion";
import { PackageSearch, ShoppingBag, Globe, Calculator, BarChart4, Users, Tag, FileText } from "lucide-react";
import { useI18n } from "../../i18n";

export default function FeaturesBento() {
  const { t } = useI18n();

  const features = [
    {
      title: t.features.inventory,
      description: t.features.inventoryDesc,
      icon: <PackageSearch className="h-6 w-6 text-primary" />,
      className: "col-span-1 md:col-span-2",
      accent: "from-primary-light/30 to-transparent",
    },
    {
      title: t.features.pos,
      description: t.features.posDesc,
      icon: <ShoppingBag className="h-6 w-6 text-success" />,
      className: "col-span-1",
      accent: "from-success-light/30 to-transparent",
    },
    {
      title: t.features.ecommerce,
      description: t.features.ecommerceDesc,
      icon: <Globe className="h-6 w-6 text-accent" />,
      className: "col-span-1",
      accent: "from-blue-50/50 to-transparent",
    },
    {
      title: t.features.b2b,
      description: t.features.b2bDesc,
      icon: <Users className="h-6 w-6 text-violet-600" />,
      className: "col-span-1 md:col-span-2",
      accent: "from-violet-50/30 to-transparent",
    },
    {
      title: t.features.invoicing,
      description: t.features.invoicingDesc,
      icon: <FileText className="h-6 w-6 text-warning" />,
      className: "col-span-1 md:col-span-2",
      accent: "from-warning-light/30 to-transparent",
    },
    {
      title: t.features.crm,
      description: t.features.crmDesc,
      icon: <Calculator className="h-6 w-6 text-accent" />,
      className: "col-span-1",
      accent: "from-blue-50/30 to-transparent",
    },
    {
      title: t.features.priceList,
      description: t.features.priceListDesc,
      icon: <Tag className="h-6 w-6 text-error" />,
      className: "col-span-1",
      accent: "from-error-light/30 to-transparent",
    },
    {
      title: t.features.reports,
      description: t.features.reportsDesc,
      icon: <BarChart4 className="h-6 w-6 text-success" />,
      className: "col-span-1 md:col-span-2",
      accent: "from-success-light/30 to-transparent",
    },
  ];

  return (
    <section className="section-padding bg-surface-muted" id="soluciones">
      <div className="section-container">
        
        <div className="section-header">
          <p className="eyebrow mb-3">{t.features.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textPrimary mb-6">
            {t.features.headline}{" "}
            <span className="text-gradient-blue">{t.features.headlineAccent}</span>
          </h2>
          <p className="text-lg text-textSecondary font-medium">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden rounded-2xl border border-borderLight bg-white shadow-card hover:shadow-card-hover transition-all duration-300 p-7 ${feature.className}`}
            >
              {/* Subtle gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} pointer-events-none`} />
              
              <div className="flex flex-col h-full z-10 relative">
                <div className="h-12 w-12 rounded-xl bg-white border border-borderLight shadow-sm flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-textPrimary mb-2">{feature.title}</h3>
                <p className="text-sm text-textSecondary leading-relaxed">
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