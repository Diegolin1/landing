"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useI18n } from "../../i18n";

const WHATSAPP_NUMBER = "524776633068";

export default function WhatsAppButton() {
  const { t } = useI18n();
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsapp.message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="bg-white rounded-xl shadow-float border border-borderLight p-4 max-w-[220px] relative"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-textMuted hover:text-textPrimary"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="text-sm font-medium text-textPrimary pr-4">{t.whatsapp.tooltip}</p>
            <p className="text-xs text-textMuted mt-1">{t.whatsapp.schedule}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center text-xs font-bold text-white bg-[#25D366] hover:bg-[#20BD5A] rounded-lg py-2 transition-colors"
            >
              {t.whatsapp.cta} →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden md:flex items-center gap-2 bg-white border border-borderLight rounded-full px-3 py-1.5 shadow-card">
        <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
        <span className="text-[11px] font-semibold text-textSecondary">{t.whatsapp.schedule}</span>
      </div>

      {/* Button */}
      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="h-14 w-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg flex items-center justify-center transition-colors relative"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.button>
    </div>
  );
}
