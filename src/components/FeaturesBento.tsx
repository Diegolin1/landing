"use client";
import { motion } from "framer-motion";
import { Lock, FileText, Users, Smartphone, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    id: "gate-b2b",
    icon: Lock,
    iconBg: "#EFF6FF",
    iconColor: "#1a56db",
    title: "Gate B2B — Soberanía de Precios",
    desc: "Controla quién ve tus precios. Accesos por cliente, segmentación de catálogo y lista de mayoreo privada. Tu competencia nunca verá tus márgenes.",
    span: "col-span-1 md:col-span-2",
    size: "large",
    mockup: true, // muestra mini UI mockup
  },
  {
    id: "cfdi",
    icon: FileText,
    iconBg: "#FFF7ED",
    iconColor: "#ea580c",
    title: "CFDI 4.0 Nativo",
    desc: "Factura en 1 clic directamente desde el pedido. Sin salir de Lumina. XML listo para el SAT.",
    span: "col-span-1",
    size: "medium",
  },
  {
    id: "pwa",
    icon: Smartphone,
    iconBg: "#F0FDF4",
    iconColor: "#16a34a",
    title: "Pedidos en SAPICA (PWA)",
    desc: "Levanta pedidos en expo sin internet. Sincronización automática al recuperar señal.",
    span: "col-span-1",
    size: "small",
  },
  {
    id: "crm",
    icon: Users,
    iconBg: "#FAF5FF",
    iconColor: "#7c3aed",
    title: "CRM de Agentes",
    desc: "Metas, comisiones y carteras de clientes en tiempo real.",
    span: "col-span-1",
    size: "small",
  },
  {
    id: "analytics",
    icon: TrendingUp,
    iconBg: "#FFFBEB",
    iconColor: "#d97706",
    title: "Analytics en Vivo",
    desc: "Dashboards que muestran qué se vende, quién compra y tus oportunidades de crecimiento.",
    span: "col-span-1",
    size: "small",
  },
  {
    id: "security",
    icon: Shield,
    iconBg: "#F0FDF4",
    iconColor: "#16a34a",
    title: "Seguridad Empresarial",
    desc: "SSL, backups automáticos y cumplimiento de leyes fiscales mexicanas.",
    span: "col-span-1",
    size: "small",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" },
  }),
};

export default function FeaturesBento() {
  return (
    <section id="caracteristicas" className="py-24 px-6 bg-surface-muted">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="mb-12">
          <span className="eyebrow flex items-center gap-2 mb-3">
            <span className="inline-block w-4 h-px bg-primary" />
            Plataforma completa
          </span>
          <h2 className="text-3xl md:text-4xl text-textPrimary mb-3" style={{ fontWeight: 500 }}>
            Infraestructura crítica.
          </h2>
          <p className="text-textSecondary max-w-xl text-base md:text-lg">
            Todo lo que necesitas para vender sin depender de WhatsApp.
          </p>
        </div>

        {/* ── Bento grid asimétrico ────────────────────────────────
            Fila 1: Gate B2B (span-2) | CFDI (span-1)
            Fila 2: PWA | CRM | Analytics | Security
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* ── Gate B2B — card grande con mini mockup ─────────── */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="md:col-span-2 bg-surface border border-borderLight rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
          >
            {/* Ícono */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "#EFF6FF" }}
            >
              <Lock size={20} color="#1a56db" />
            </div>

            <h3 className="text-lg text-textPrimary mb-2" style={{ fontWeight: 500 }}>
              Gate B2B — Soberanía de Precios
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed mb-5">
              Controla quién ve tus precios. Accesos por cliente, segmentación de
              catálogo y lista de mayoreo privada. Tu competencia nunca verá tus márgenes.
            </p>

            {/* Mini mockup de estado de cliente */}
            <div className="bg-surface-muted border border-borderLight rounded-xl p-4 flex flex-col gap-2">
              <div className="text-[10px] font-semibold text-textMuted uppercase tracking-wider mb-1">
                Estado de acceso · Cliente activo
              </div>
              {[
                { client: "FLEXI León", type: "Mayoreo A", status: true },
                { client: "Emyco SA", type: "Mayoreo B", status: true },
                { client: "Visitante anónimo", type: "—", status: false },
              ].map((row) => (
                <div
                  key={row.client}
                  className="flex items-center gap-3 bg-surface rounded-lg px-3 py-2 border border-borderLight"
                >
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      row.status ? "bg-success" : "bg-error/60"
                    }`}
                  />
                  <span className="text-xs font-medium text-textPrimary flex-1">{row.client}</span>
                  <span className="text-[10px] text-textSecondary">{row.type}</span>
                  <span
                    className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                      row.status
                        ? "bg-success-light text-success"
                        : "bg-error-light text-error"
                    }`}
                  >
                    {row.status ? "Ver precios" : "Bloqueado"}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── CFDI — card mediana ─────────────────────────────── */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="bg-surface border border-borderLight rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "#FFF7ED" }}
            >
              <FileText size={20} color="#ea580c" />
            </div>
            <h3 className="text-base text-textPrimary mb-2" style={{ fontWeight: 500 }}>
              CFDI 4.0 Nativo
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed mb-5">
              Factura en 1 clic directamente desde el pedido. Sin salir de
              Lumina. XML y PDF listos para el SAT al instante.
            </p>
            {/* Mini mockup de botón de factura */}
            <div className="mt-auto bg-surface-muted border border-borderLight rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-textMuted">Pedido #4521</span>
                <span className="text-xs font-medium text-textPrimary">$12,450 MXN</span>
              </div>
              <div className="w-full bg-primary text-white text-xs font-medium py-2 rounded-lg text-center">
                Timbrar CFDI 4.0 →
              </div>
              <div className="flex items-center gap-1.5 mt-2.5">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="text-[10px] text-success font-medium">
                  UUID generado · SAT válido
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Fila 2: 4 cards pequeñas ────────────────────────── */}
          {[
            {
              icon: Smartphone,
              iconBg: "#F0FDF4",
              iconColor: "#16a34a",
              title: "Pedidos en SAPICA (PWA)",
              desc: "Sin internet. Levanta pedidos en expo y sincroniza al recuperar señal.",
              tag: "Offline-first",
              tagColor: "text-success bg-success-light",
            },
            {
              icon: Users,
              iconBg: "#FAF5FF",
              iconColor: "#7c3aed",
              title: "CRM de Agentes",
              desc: "Metas, comisiones y carteras de clientes en tiempo real.",
              tag: "Tiempo real",
              tagColor: "text-purple-700 bg-purple-50",
            },
            {
              icon: TrendingUp,
              iconBg: "#FFFBEB",
              iconColor: "#d97706",
              title: "Analytics en Vivo",
              desc: "Dashboards de ventas por agente, cliente y categoría.",
              tag: "Live data",
              tagColor: "text-amber-700 bg-amber-50",
            },
            {
              icon: Shield,
              iconBg: "#F0FDF4",
              iconColor: "#16a34a",
              title: "Seguridad Empresarial",
              desc: "SSL, backups y cumplimiento de leyes fiscales mexicanas.",
              tag: "Certificado MX",
              tagColor: "text-success bg-success-light",
            },
          ].map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                custom={i + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-surface border border-borderLight rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: feat.iconBg }}
                  >
                    <Icon size={18} color={feat.iconColor} />
                  </div>
                  <span
                    className={`text-[9px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${feat.tagColor}`}
                  >
                    {feat.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm text-textPrimary mb-1.5" style={{ fontWeight: 500 }}>
                    {feat.title}
                  </h3>
                  <p className="text-xs text-textSecondary leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}