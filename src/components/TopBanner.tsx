"use client";
import React, { useState } from "react";
import { X, Flame } from "lucide-react";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-brand-950 border-b border-brand-500/20 text-white px-4 py-2 flex items-center justify-center relative z-50 shadow-glow">
      <div className="flex items-center gap-2 text-sm sm:text-base font-semibold animate-pulse">
        <Flame size={18} className="text-amber-400" />
        <p>
          Oferta de cierre de mes: Setup + Migración de Catálogo GRATIS (Valor $500 USD). <span className="underline decoration-wavy decoration-amber-400 font-bold">Solo quedan 3 espacios.</span>
        </p>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}
