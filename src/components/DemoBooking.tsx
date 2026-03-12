"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function DemoBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    time: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the data to your backend
    console.log("Demo booking:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const availableTimes = [
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-background to-surface/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
            📅 Demo en Vivo
          </p>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Agendar una Demo Personalizada
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Un especialista de Lumina te mostrará en 30 minutos cómo triplicar
            tus ingresos sin complejidad operativa.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          {/* Left Side - Benefits */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/20">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">30 Minutos</h4>
                <p className="text-white/70 text-sm">
                  Sesión rápida y sin compromisos
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/20">
                  <User className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  Especialista Dedicado
                </h4>
                <p className="text-white/70 text-sm">
                  Un experto que conoce tu industria
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/20">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  100% Personalizado
                </h4>
                <p className="text-white/70 text-sm">
                  Basado en tu modelo de negocio
                </p>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-8">
              <p className="text-sm text-white/80">
                <span className="text-primary font-semibold">
                  Bonus incluido:
                </span>{" "}
                Reporte de oportunidades para tu negocio (sin costo)
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            variants={itemVariants}
            className="bg-surface border border-borderDark rounded-xl p-8"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-green-500/20 border border-green-500/50 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2 text-lg">
                  ¡Demo Agendada!
                </h4>
                <p className="text-white/70 text-sm">
                  Te enviaremos un email de confirmación y el link de la
                  videollamada.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full bg-background border border-borderDark rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Tu empresa"
                      className="w-full bg-background border border-borderDark rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@empresa.com"
                    className="w-full bg-background border border-borderDark rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+52 813 1234 567"
                    className="w-full bg-background border border-borderDark rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-2">
                      Fecha Preferida
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-background border border-borderDark rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-2">
                      Hora Preferida
                    </label>
                    <select
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-background border border-borderDark rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Selecciona una hora</option>
                      {availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 text-background font-bold py-3 rounded-lg transition-all transform hover:scale-105"
                >
                  Agendar Demo Ahora
                </button>

                <p className="text-xs text-white/60 text-center">
                  Respetamos tu privacidad. Sin spam garantizado.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
