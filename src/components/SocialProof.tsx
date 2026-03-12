"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Roberto García",
    role: "Fabricante de Calzado, León",
    content: "Pasé de 5 pedidos a 25 pedidos/mes. Sin más trabajo.",
    avatar: "RG",
    rating: 5,
  },
  {
    name: "María Hernández",
    role: "Gerente de Ventas, Distribuidor",
    content: "La facturación CFDI me ahorra 4 horas diarias. Sin complicaciones.",
    avatar: "MH",
    rating: 5,
  },
  {
    name: "Carlos López",
    role: "Dueño de PYME, Textil",
    content: "Mi equipo de vendedores está 10x más organizado. Los leads no se pierden.",
    avatar: "CL",
    rating: 5,
  },
];

const stats = [
  {
    number: "500+",
    label: "PYMES en la plataforma",
  },
  {
    number: "$120M",
    label: "En facturas CFDI procesadas",
  },
  {
    number: "50K+",
    label: "Pedidos digitalizados",
  },
  {
    number: "99.9%",
    label: "Uptime garantizado",
  },
];

const clients = [
  { name: "Cuero Firme", initials: "CF" },
  { name: "Textil México", initials: "TM" },
  { name: "Accesorios Bajío", initials: "AB" },
  { name: "Distribuciones Premium", initials: "DP" },
];

export default function SocialProof() {
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-textMuted text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-16" />

        {/* Testimonials */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
          >
            Lo que dicen nuestros clientes
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface border border-borderDark rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-textMuted mb-6 italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center font-bold text-sm text-background">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">{testimonial.name}</p>
                    <p className="text-textMuted text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-textMuted text-sm mb-8">Confían en nosotros</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-surface border border-borderDark rounded-lg p-6 flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors"
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center font-bold text-primary mb-2 mx-auto">
                    {client.initials}
                  </div>
                  <p className="text-xs text-textMuted font-medium">{client.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
