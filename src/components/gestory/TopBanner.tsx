"use client";

import { useEffect, useState } from "react";
import { Clock3, Flame, X } from "lucide-react";
import { useI18n } from "../../i18n";

interface TopBannerProps {
  onOpenDemo?: () => void;
  onClose?: () => void;
}

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
}

function useEndOfMonthCountdown() {
  const [timeLeft, setTimeLeft] = useState<Countdown>({ days: 0, hours: 0, minutes: 0 });

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
      setTimeLeft({ days, hours, minutes });
    };

    calc();
    const interval = setInterval(calc, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}

export default function TopBanner({ onOpenDemo, onClose }: TopBannerProps) {
  const { t } = useI18n();
  const { days, hours, minutes } = useEndOfMonthCountdown();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-14 overflow-hidden border-b border-white/20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full animate-shimmer" />
      <div className="relative h-full section-container flex items-center justify-between gap-3">
        <div className="min-w-0 flex items-center gap-2 sm:gap-3">
          <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
            <Flame className="h-3 w-3 text-amber-300" />
            {t.topBanner.badge}
          </span>
          <p className="truncate text-xs sm:text-sm font-semibold">
            {t.topBanner.offer}
            <span className="hidden md:inline"> · {t.topBanner.spots}</span>
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 rounded-lg border border-white/20 bg-black/20 px-2.5 py-1 text-[11px] font-semibold">
            <Clock3 className="h-3.5 w-3.5 text-amber-300" />
            <span>{t.topBanner.endsIn}</span>
            <span className="font-bold tabular-nums">{String(days).padStart(2, "0")}d</span>
            <span className="text-white/60">:</span>
            <span className="font-bold tabular-nums">{String(hours).padStart(2, "0")}h</span>
            <span className="text-white/60">:</span>
            <span className="font-bold tabular-nums">{String(minutes).padStart(2, "0")}m</span>
          </div>

          <button
            onClick={onOpenDemo}
            className="hidden md:inline-flex rounded-lg bg-white text-primary hover:bg-blue-50 px-3 py-1.5 text-xs font-bold transition-colors"
          >
            {t.topBanner.cta}
          </button>

          <button
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/15 transition-colors"
            aria-label={t.topBanner.close}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
