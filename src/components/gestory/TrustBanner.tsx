"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function TrustBanner() {
  return (
    <section className="bg-surface py-10 border-y border-borderLight relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-textMuted uppercase tracking-widest mb-6">
          Con la confianza de empresas procesando +$10M USD mensuales
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logo placeholders - in reality these would be true SVGs of partners/clients */}
          {["Facturapi", "Stripe", "Mercado Libre", "Clip", "Amazon AWS"].map((logo, idx) => (
            <div key={idx} className="flex items-center text-xl font-extrabold font-heading text-textSecondary cursor-pointer hover:text-textPrimary transition-colors">
              {logo === "Facturapi" && <CheckCircle className="h-5 w-5 mr-2 text-primary" />}
              {logo === "Stripe" && <div className="h-6 w-16 bg-accent rounded-sm mr-2 opacity-80" />}
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}