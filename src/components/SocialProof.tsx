"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const featuredTestimonial = {
  name: "Roberto González",
  role: "Director de Operaciones",
  company: "Manufactura de Calzado · León, Gto",
  initials: "RG",
  avatarBg: "#DBEAFE",
  avatarColor: "#1d4ed8",
  rating: 5,
  quote:
    "El pedido entra directo al almacén mientras el cliente sigue en el stand de SAPICA. Eliminamos 3 días de captura manual y los pedidos nunca se pierden.",
  result: "↑ 3 días → 0 en tiempo de captura",
};

const miniTestimonials = [
  {
    name: "Elena Vázquez",
    role: "CEO · Textiles del Bajío",
    initials: "EV",
    avatarBg: "#FEF3C7",
    avatarColor: "#b45309",
    quote:
      "Recuperamos 20 horas a la semana automatizando el CFDI 4.0. Ya no tenemos que capturar manualmente.",
    result: "↑ 20 hrs/semana recuperadas",
  },
  {
    name: "Jorge Martínez",
    role: "Dir. Comercial · Calzado Bajío",
    initials: "JM",
    avatarBg: "#F0FDF4",
    avatarColor: "#15803d",
    quote:
      "Nuestros distribuidores piden solos desde su celular. Cero mensajes de WhatsApp al equipo.",
    result: "↓ 95% mensajes manuales",
  },
];

const stats = [
  { value: "500+", label: "PYMES en la plataforma" },
  { value: "$2.1B", label: "MXN en pedidos procesados" },
  { value: "50K+", label: "Pedidos digitalizados" },
  { value: "99.8%", label: "Uptime garantizado" },
];

const clients = [
  { name: "Cuero Firme", initials: "CF", bg: "#EFF6FF", color: "#1a56db" },
  { name: "Textil México", initials: "TM", bg: "#FEF3C7", color: "#b45309" },
  { name: "Accesorios Bajío", initials: "AB", bg: "#F0FDF4", color: "#15803d" },
  { name: "Distribuciones Premium", initials: "DP", bg: "#FAF5FF", color: "#7c3aed" },
  { name: "Botas del Norte", initials: "BN", bg: "#FFF7ED", color: "#ea580c" },
  { name: "Calzado Suárez", initials: "CS", bg: "#FFFBEB", color: "#d97706" },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="py-24 px-6 bg-surface-muted">
      <div className="max-w-7xl mx-auto">

        {/* ── Stats bar ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-borderLight rounded-2xl overflow-hidden mb-16 border border-borderLight shadow-card"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-8 py-6 text-center">
              <div className="text-2xl md:text-3xl text-textPrimary mb-1" style={{ fontWeight: 500 }}>
                {stat.value}
              </div>
              <p className="text-textMuted text-xs">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Header testimonios ───────────────────────────────── */}
        <div className="mb-10">
          <span className="eyebrow flex items-center gap-2 mb-3">
            <span className="inline-block w-4 h-px bg-primary" />
            Resultados reales
          </span>
          <h2 className="text-3xl md:text-4xl text-textPrimary" style={{ fontWeight: 500 }}>
            Lo que dicen nuestros fabricantes
          </h2>
        </div>

        {/* ── Layout asimétrico: 1 featured + 2 minis ─────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-16">

          {/* Featured — span 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-surface border border-borderLight rounded-2xl p-8 shadow-card flex flex-col justify-between"
          >
            <div>
              <StarRating />
              <p className="text-base md:text-lg text-textPrimary leading-relaxed mb-6 italic">
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                  style={{
                    background: featuredTestimonial.avatarBg,
                    color: featuredTestimonial.avatarColor,
                  }}
                >
                  {featuredTestimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-textPrimary">
                    {featuredTestimonial.name}
                  </p>
                  <p className="text-xs text-textMuted">{featuredTestimonial.role}</p>
                  <p className="text-xs text-textMuted">{featuredTestimonial.company}</p>
                </div>
              </div>
              <span className="result-pill">{featuredTestimonial.result}</span>
            </div>
          </motion.div>

          {/* Minis — span 2 */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {miniTestimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface border border-borderLight rounded-2xl p-6 shadow-card flex-1 flex flex-col justify-between"
              >
                <div>
                  <StarRating />
                  <p className="text-sm text-textSecondary leading-relaxed italic mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                      style={{ background: t.avatarBg, color: t.avatarColor }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-textPrimary">{t.name}</p>
                      <p className="text-[10px] text-textMuted">{t.role}</p>
                    </div>
                  </div>
                  <span className="result-pill text-[10px]">{t.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Logos de clientes en grid estático ───────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-xs text-textMuted uppercase tracking-widest font-semibold mb-6">
            Fabricantes que ya digitalizaron sus ventas
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {clients.map((client) => (
              <motion.div
                key={client.name}
                whileHover={{ scale: 1.04 }}
                className="bg-surface border border-borderLight rounded-xl p-4 flex flex-col items-center justify-center gap-2 shadow-card hover:shadow-card-hover transition-all duration-200 cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-semibold"
                  style={{ background: client.bg, color: client.color }}
                >
                  {client.initials}
                </div>
                <p className="text-[9px] text-textMuted font-medium text-center leading-tight">
                  {client.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
