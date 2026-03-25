"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const activities = [
  { name: "Distribuidora de Calzado XYZ", action: "acaba de ahorrar 15hrs semanales con Lumina.", time: "Hace 2 min" },
  { name: "Textiles del Bajío", action: "agendó una demo para su equipo de ventas.", time: "Hace 5 min" },
  { name: "Grupo Alpina", action: "automatizó 450 facturas CFDI en 1 click.", time: "Hace 12 min" },
  { name: "Botas Milenarias", action: "lanzó su catálogo B2B privado exitosamente.", time: "Hace 25 min" }
];

export default function RecentActivityToasts() {
  const [currentActivity, setCurrentActivity] = useState<number | null>(null);

  useEffect(() => {
    // Show first toast after 5 seconds
    const initialTimer = setTimeout(() => {
      setCurrentActivity(0);
    }, 5000);

    // Rotate toasts every 20 seconds
    const interval = setInterval(() => {
      setCurrentActivity(prev => {
        if (prev === null) return 0;
        const next = prev + 1;
        return next >= activities.length ? 0 : next;
      });
    }, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  // Hide after 5 seconds of being shown
  useEffect(() => {
    if (currentActivity !== null) {
      const hideTimer = setTimeout(() => {
        setCurrentActivity(null);
      }, 6000);
      return () => clearTimeout(hideTimer);
    }
  }, [currentActivity]);

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
      <AnimatePresence>
        {currentActivity !== null && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl rounded-xl p-4 flex items-start gap-4 max-w-sm pointer-events-auto"
          >
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full shrink-0">
              <CheckCircle2 size={24} className="text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="flex-1 pr-4">
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                {activities[currentActivity].name}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                {activities[currentActivity].action}
              </p>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 font-medium">
                {activities[currentActivity].time}
              </p>
            </div>
            <button 
              onClick={() => setCurrentActivity(null)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
