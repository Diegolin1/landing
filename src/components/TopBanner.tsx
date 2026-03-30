"use client";
import React, { useState, useEffect } from "react";
import { X, Flame } from "lucide-react";

function useEndOfMonthCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getEndOfMonth = () => {
      const now = new Date();
      return new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0, 0);
    };

    const calc = () => {
      const now = new Date();
      const end = getEndOfMonth();
      const diff = Math.max(0, end.getTime() - now.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center leading-none">
      <span className="text-white font-black text-base tabular-nums w-7 text-center">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-amber-300/70 text-[8px] font-bold uppercase tracking-wider mt-0.5">{label}</span>
    </div>
  );
}

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const { days, hours, minutes, seconds } = useEndOfMonthCountdown();

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 text-white px-4 py-2.5 flex items-center justify-center relative z-50 overflow-hidden">
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]" />

      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm font-semibold text-center">
        <div className="flex items-center gap-2">
          <Flame size={16} className="text-amber-400 shrink-0 animate-pulse" />
          <p className="text-sm">
            <span className="bg-white/20 text-white font-black text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider mr-2">Oferta de Cierre</span>
            Setup + Migración de Catálogo <span className="text-amber-300 font-black">GRATIS (Valor $500 USD)</span>
            <span className="hidden sm:inline"> · Solo quedan </span>
            <span className="font-black text-amber-300 hidden sm:inline">3 espacios</span>
          </p>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-1 bg-black/20 border border-white/10 rounded-lg px-3 py-1.5">
          <CountdownUnit value={days} label="días" />
          <span className="text-white/40 font-bold text-sm mx-0.5">:</span>
          <CountdownUnit value={hours} label="hrs" />
          <span className="text-white/40 font-bold text-sm mx-0.5">:</span>
          <CountdownUnit value={minutes} label="min" />
          <span className="text-white/40 font-bold text-sm mx-0.5">:</span>
          <CountdownUnit value={seconds} label="seg" />
        </div>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 p-1.5 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Cerrar banner"
      >
        <X size={14} />
      </button>
    </div>
  );
}
