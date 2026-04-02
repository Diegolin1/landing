"use client";

import { motion } from "framer-motion";
import { Server, Lock, DatabaseBackup, ActivitySquare } from "lucide-react";

export default function SecurityTrust() {
  const points = [
    {
      icon: <Lock className="h-5 w-5 text-primary" />,
      title: "Seguridad de Nivel Bancario",
      desc: "Toda tu información secreta de negocio está encriptada con la misma tecnología que usan los bancos grandes del mundo."
    },
    {
      icon: <DatabaseBackup className="h-5 w-5 text-success" />,
      title: "Respaldos y Copias Diarias",
      desc: "El sistema hace una copia de seguridad cada vez que vendes para un historial por meses."
    },
    {
      icon: <ActivitySquare className="h-5 w-5 text-accent" />,
      title: "Siempre Encendido Garantizado",
      desc: "Nuestro soporte asegura que tu sistema nunca deje de funcionar con tu negocio."
    },
    {
      icon: <Server className="h-5 w-5 text-warning" />,
      title: "Privacidad Absoluta",
      desc: "Lo que es tuyo, es tuyo. Los clientes y tu dinero lo puedes ver y proteger."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface-dark bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] border-y border-borderDark text-textInverse overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-blue-300 font-semibold tracking-wide uppercase text-sm mb-3">CONFIABILIDAD</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6">
            Tus datos están blindados. 
          </h3>
          <p className="text-lg text-blue-100/70 font-medium">
            Para que estés tranquilo siempre. <br/>
            Gestory protege la información de tu negocio contra cualquiera, menos para ti.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm lg:p-8 hover:bg-white/10 border-t-white/20 transition-all"
            >
              <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center mb-5 border border-white/5">
                {point.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{point.title}</h4>
              <p className="text-sm font-medium text-blue-100/60 leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}