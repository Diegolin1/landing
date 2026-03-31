"use client";
import { motion } from "framer-motion";
import { FileText, MessageCircle, Clock, AlertCircle, CheckCircle, Zap } from "lucide-react";

const comparisons = [
  {
    metric: "Tiempo por Pedido",
    before: "5-10 minutos",
    after: "1 minuto",
    icon: Clock,
  },
  {
    metric: "Errores/Mes",
    before: "3-5 pedidos",
    after: "0 errores",
    icon: AlertCircle,
  },
  {
    metric: "Facturación",
    before: "2 horas/día",
    after: "Automática",
    icon: Zap,
  },
  {
    metric: "Seguimiento",
    before: "Libreta + Excel",
    after: "Dashboard instantáneo",
    icon: CheckCircle,
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            El cambio que tus vendedores verán <span className="text-primary">cada día</span>
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            De luchar contra el proceso a cerrarlo en segundos. Esto es lo que transforman nuestros clientes en la práctica.
          </p>
        </motion.div>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* ANTES */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-surface/50 border border-red-900/30 rounded-2xl p-8 backdrop-blur">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-red-900/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold">El Método Actual</h3>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { icon: FileText, text: "Envías PDF por WhatsApp", color: "text-orange-400" },
                  { icon: MessageCircle, text: "Clientes piden aclaraciones", color: "text-blue-400" },
                  { icon: Clock, text: "Esperas confirmación horas", color: "text-yellow-400" },
                  { icon: AlertCircle, text: "Pierdes pedidos entre chats", color: "text-red-400" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-1`} />
                    <p className="text-textMuted">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-red-900/10 border border-red-900/30 rounded-lg p-4 text-sm">
                <p className="text-textMuted"><strong className="text-red-400">Problema:</strong> Inventario desactualizado, sin control de lo que se vende.</p>
              </div>
            </div>
          </motion.div>

          {/* DESPUÉS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 backdrop-blur">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-primary/30 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Con Lumina</h3>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { icon: CheckCircle, text: "Cliente ve catálogo actualizado en vivo", color: "text-green-400" },
                  { icon: Zap, text: "Agrega productos al carrito en 1 clic", color: "text-primary" },
                  { icon: CheckCircle, text: "Confirma pedido en segundos", color: "text-emerald-400" },
                  { icon: CheckCircle, text: "Tú factura automáticamente", color: "text-green-400" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-1`} />
                    <p className="text-textMuted">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-sm">
                <p className="text-textMuted"><strong className="text-primary">Resultado:</strong> Control total, cero errores, facturas en segundos.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metrics Comparison */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {comparisons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-surface border border-borderDark rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-textMuted mb-3 font-medium">{item.metric}</p>
                
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Antes</p>
                    <p className="font-semibold text-red-400 text-sm">{item.before}</p>
                  </div>
                  <div className="flex items-center gap-2 py-2">
                    <div className="flex-1 h-px bg-primary/30" />
                    <ArrowDownIcon />
                    <div className="flex-1 h-px bg-primary/30" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Después</p>
                    <p className="font-semibold text-primary text-sm">{item.after}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-textMuted mb-6">¿Listo para dejar atrás los PDFs y WhatsApp?</p>
          <button className="px-8 py-4 rounded-lg bg-primary hover:bg-primary-hover text-background font-bold text-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]">
            Comienza tu transformación hoy
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowDownIcon() {
  return (
    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}
