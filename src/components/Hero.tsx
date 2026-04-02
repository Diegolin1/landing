"use client";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { scrollToDemoBooking } from "../utils/scroll";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "43+", label: "Fabricantes activos" },
  { value: "$2.1B", label: "MXN gestionados" },
  { value: "99.8%", label: "Uptime SLA" },
];

const avatarClients = [
  { initials: "FX", bg: "#DBEAFE", color: "#1d4ed8" },
  { initials: "EM", bg: "#FEF3C7", color: "#b45309" },
  { initials: "AL", bg: "#D1FAE5", color: "#15803d" },
  { initials: "BJ", bg: "#EDE9FE", color: "#7c3aed" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center pt-20 pb-0 bg-background overflow-hidden">
      {/* Grid de fondo sutil — enterprise look */}
      <div className="absolute inset-0 hero-grid-bg opacity-60 pointer-events-none" />
      {/* Blob azul suave en esquina superior */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-16 pt-8">

          {/* ── Columna izquierda: copy ─────────────────────────── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mb-5">
              <span className="eyebrow flex items-center gap-2">
                <span className="inline-block w-5 h-px bg-primary" />
                Infraestructura B2B · León, Gto
              </span>
            </motion.div>

            {/* H1 — máx 12 palabras, font-medium */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] text-textPrimary mb-5"
              style={{ fontWeight: 500 }}
            >
              Pedidos, catálogo y{" "}
              <span className="text-primary">CFDI&nbsp;4.0</span>
              <br className="hidden md:block" /> en una sola plataforma.
            </motion.h1>

            {/* Subtítulo corto */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-textSecondary mb-8 leading-relaxed max-w-md"
            >
              Diseñado para fabricantes del Bajío. Elimina el WhatsApp manual,
              protege tus precios y vende 24/7 sin perder un pedido.
            </motion.p>

            {/* CTAs — jerarquía clara: 1 primario sólido + 1 texto con play */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8"
            >
              <button
                id="hero-cta-primary"
                onClick={() => scrollToDemoBooking()}
                className="btn-primary text-base px-7 py-3.5 shadow-glow"
              >
                Agendar Demo <ArrowRight size={16} />
              </button>

              <button
                id="hero-cta-secondary"
                onClick={() => scrollToDemoBooking()}
                className="btn-ghost-play"
              >
                <span className="w-8 h-8 rounded-full border border-borderLight bg-surface flex items-center justify-center shadow-card text-primary text-xs">
                  ▶
                </span>
                <span>Ver demo (2 min)</span>
              </button>
            </motion.div>

            {/* Social strip — avatares + texto */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {avatarClients.map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-semibold shadow-sm"
                    style={{ background: c.bg, color: c.color }}
                  >
                    {c.initials}
                  </div>
                ))}
              </div>
              <p className="text-sm text-textSecondary">
                <span className="font-medium text-textPrimary">
                  43+ fabricantes
                </span>{" "}
                ya digitalizaron sus ventas
              </p>
            </motion.div>
          </motion.div>

          {/* ── Columna derecha: mock de UI del producto ───────── */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Browser frame */}
              <div className="bg-surface border border-borderLight rounded-2xl shadow-card-featured overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-surface-muted border-b border-borderLight">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white border border-borderLight rounded-md px-3 py-1 text-xs text-textMuted mx-4">
                    app.lumina.mx/pedidos
                  </div>
                </div>

                {/* App UI mockup */}
                <div className="flex" style={{ height: 320 }}>
                  {/* Sidebar */}
                  <div className="w-44 border-r border-borderLight bg-surface-muted p-3 flex flex-col gap-1">
                    <div className="text-xs font-semibold text-textMuted uppercase tracking-wider px-2 mb-2">
                      Lumina B2B
                    </div>
                    {["Dashboard", "Pedidos", "Catálogo", "Clientes", "CFDI 4.0", "Agentes"].map(
                      (item, i) => (
                        <div
                          key={item}
                          className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs ${
                            i === 1
                              ? "bg-primary-light text-primary font-medium"
                              : "text-textSecondary hover:text-textPrimary"
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              i === 1 ? "bg-primary" : "bg-borderMedium"
                            }`}
                          />
                          {item}
                        </div>
                      )
                    )}
                    <div className="mt-auto">
                      <div className="w-full h-px bg-borderLight mb-2" />
                      <div className="flex items-center gap-2 px-2 py-1.5">
                        <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center text-[9px] font-semibold text-primary">
                          RG
                        </div>
                        <div>
                          <div className="text-[10px] font-medium text-textPrimary">Roberto G.</div>
                          <div className="text-[9px] text-textMuted">Admin</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-4 overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm font-medium text-textPrimary">Pedidos recientes</div>
                        <div className="text-xs text-textMuted">Hoy · 14 pedidos nuevos</div>
                      </div>
                      <div className="flex gap-2">
                        <div className="px-3 py-1 bg-primary text-white text-[10px] font-medium rounded-lg">
                          + Nuevo pedido
                        </div>
                      </div>
                    </div>

                    {/* Stats mini */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { label: "Hoy", val: "$48,200", color: "text-primary" },
                        { label: "Semana", val: "$312K", color: "text-success" },
                        { label: "Pend. CFDI", val: "3", color: "text-warning" },
                      ].map((s) => (
                        <div key={s.label} className="bg-surface-muted rounded-lg p-2 text-center">
                          <div className={`text-sm font-semibold ${s.color}`}>{s.val}</div>
                          <div className="text-[9px] text-textMuted">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Order rows */}
                    <div className="flex flex-col gap-1.5">
                      {[
                        { id: "#4521", client: "FLEXI León", items: "24 pares", status: "Entregado", statusColor: "bg-success-light text-success" },
                        { id: "#4520", client: "Emyco SA", items: "8 productos", status: "En proceso", statusColor: "bg-primary-light text-primary" },
                        { id: "#4519", client: "Alpina BC", items: "15 pares", status: "CFDI emitido", statusColor: "bg-surface-muted text-textSecondary" },
                      ].map((order) => (
                        <div
                          key={order.id}
                          className="flex items-center gap-3 px-3 py-2 bg-surface border border-borderLight rounded-lg text-[10px]"
                        >
                          <span className="font-mono text-textMuted">{order.id}</span>
                          <span className="flex-1 font-medium text-textPrimary">{order.client}</span>
                          <span className="text-textMuted">{order.items}</span>
                          <span className={`px-2 py-0.5 rounded-full text-[9px] font-medium ${order.statusColor}`}>
                            {order.status}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Gate B2B pill */}
                    <div className="mt-3 flex items-center gap-2 bg-success-light border border-green-200 rounded-lg px-3 py-2">
                      <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      <span className="text-[10px] font-medium text-success">
                        Gate B2B activo · EMYCO está viendo precios de mayoreo
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-surface border border-borderLight rounded-xl px-4 py-2.5 shadow-card-hover flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-success-light flex items-center justify-center">
                  <span className="text-success text-sm">✓</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-textPrimary">Factura timbrada</div>
                  <div className="text-[10px] text-textMuted">CFDI 4.0 en 1 clic</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats bar ───────────────────────────────────────────── */}
        <div className="border-t border-borderLight bg-surface/80 py-5">
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-12 gap-y-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && (
                  <div className="hidden sm:block w-px h-8 bg-borderLight" />
                )}
                <div>
                  <div className="text-2xl font-semibold text-textPrimary leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-textMuted mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}