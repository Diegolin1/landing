"use client";
import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle, Server } from "lucide-react";

export default function SecurityTrust() {
  return (
    <section className="py-20 px-6 bg-background/50">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tu información está completamente segura
          </h2>
          <p className="text-textMuted text-lg">
            Cumplimos con los estándares de protección de datos más exigentes de México y el mundo.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: Lock,
              title: "Encriptación SSL/TLS",
              description: "Todos tus datos viajan encriptados con certificados de 256-bit. El mismo estándar que usan los bancos.",
              color: "text-blue-400"
            },
            {
              icon: Server,
              title: "Backups Automáticos",
              description: "Realizamos copias de seguridad cada 6 horas. Si algo falla, recuperamos tus datos en minutos.",
              color: "text-green-400"
            },
            {
              icon: Shield,
              title: "Cumplimiento GDPR",
              description: "Aunque estés en México, protegemos tus datos según la regulación GDPR de la Unión Europea (la más exigente).",
              color: "text-primary"
            },
            {
              icon: CheckCircle,
              title: "Auditorías Regulares",
              description: "Terceros independientes revisan nuestra seguridad cada trimestre. Certificación comprobable.",
              color: "text-purple-400"
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface border border-borderDark rounded-xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-textMuted text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary/10 border border-primary/30 rounded-xl p-8"
        >
          <p className="text-center font-semibold mb-6 text-lg">Certificaciones y Cumplimiento</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "CFDI 4.0", subtitle: "SAT México" },
              { label: "ISO 27001", subtitle: "Seguridad Informática" },
              { label: "GDPR", subtitle: "Unión Europea" },
              { label: "99.9% SLA", subtitle: "Disponibilidad" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-primary mb-1">{item.label}</div>
                <p className="text-xs text-textMuted">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enterprise Grade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-textMuted mb-4">
            Lumina corre en <span className="text-primary font-semibold">infraestructura empresarial de clase mundial</span> (Render + Supabase + Cloudflare) 
            — la misma que usa Uber, Slack y Netflix.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
