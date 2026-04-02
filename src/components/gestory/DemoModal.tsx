"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Mail, Building, Phone } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-textPrimary/40 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-surface rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-primary p-6 text-white relative">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-2xl font-bold font-heading mb-2">Descubre Gestory en Acción</h3>
            <p className="text-blue-100 text-sm font-medium">
              Agenda una videollamada de 15 minutos con un experto. Veremos tus necesidades y cómo adaptar Gestory a tu empresa.
            </p>
          </div>

          {/* Form */}
          <div className="p-6">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-textSecondary mb-1">Nombre Completo</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="h-5 w-5 text-textMuted" />
                  </div>
                  <input type="text" className="block w-full pl-10 pr-3 py-2.5 border border-borderLight rounded-lg text-sm text-textPrimary focus:ring-accent focus:border-accent outline-none transition-all" placeholder="Juan Pérez" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-textSecondary mb-1">Correo Electrónico Laboral</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-textMuted" />
                  </div>
                  <input type="email" className="block w-full pl-10 pr-3 py-2.5 border border-borderLight rounded-lg text-sm text-textPrimary focus:ring-accent focus:border-accent outline-none transition-all" placeholder="juan@miempresa.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-textSecondary mb-1">Teléfono o WhatsApp</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-textMuted" />
                  </div>
                  <input type="tel" className="block w-full pl-10 pr-3 py-2.5 border border-borderLight rounded-lg text-sm text-textPrimary focus:ring-accent focus:border-accent outline-none transition-all" placeholder="+52 (55) 1234 5678" />
                </div>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-accent hover:bg-accent-hover transition-colors">
                  <Calendar className="mr-2 h-5 w-5" />
                  Solicitar mi Demo
                </button>
              </div>
              <p className="text-xs text-center text-textMuted mt-4">
                No compartiremos tu información con terceros.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}