"use client";
import { motion } from "framer-motion";
import { Lock, Smartphone, Users, FileText, TrendingUp, Shield } from "lucide-react";

export default function FeaturesBento() {
  return (
    <section id="caracteristicas" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Construido para el <span className="text-primary">B2B Latino</span></h2>
        <p className="text-textMuted max-w-2xl mx-auto text-lg">Entendemos cómo haces negocios. Herramientas diseñadas para agilizar tu operación sin complicar a tus clientes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* 1. Gate B2B */}
        <motion.div 
          whileHover={{ y: -8 }} 
          className="md:col-span-2 bg-gradient-to-br from-surface to-surface/50 border border-borderDark rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-6 right-6 text-primary opacity-15 group-hover:opacity-30 transition-opacity">
            <Lock size={140} strokeWidth={1} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Gate B2B y Precios Privados</h3>
            </div>
            <p className="text-textMuted max-w-md">Protege tu información comercial. Asigna listas de precios específicas por cliente mayorista. Tu competencia nunca verá tu catálogo sin tu autorización.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute bottom-4 right-4 bg-primary/10 border border-primary/30 rounded-lg px-3 py-1 text-xs text-primary font-medium opacity-0"
          >
            SKU privado protegido
          </motion.div>
        </motion.div>

        {/* 2. Móvil */}
        <motion.div 
          whileHover={{ y: -8 }} 
          className="bg-gradient-to-br from-surface to-surface/50 border border-borderDark rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-6 right-6 text-primary opacity-15 group-hover:opacity-30 transition-opacity">
            <Smartphone size={100} strokeWidth={1} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">100% Móvil First</h3>
            </div>
            <p className="text-textMuted text-sm">Tus clientes levantan el pedido desde cualquier celular. La compra es tan fácil que se cierra antes de que te lo pienses.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute bottom-4 right-4 bg-primary/10 border border-primary/30 rounded-lg px-3 py-1 text-xs text-primary font-medium opacity-0"
          >
            70% tráfico es móvil
          </motion.div>
        </motion.div>

        {/* 3. CRM */}
        <motion.div 
          whileHover={{ y: -8 }} 
          className="bg-gradient-to-br from-surface to-surface/50 border border-borderDark rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-6 right-6 text-primary opacity-15 group-hover:opacity-30 transition-opacity">
            <Users size={100} strokeWidth={1} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">CRM de Vendedores</h3>
            </div>
            <p className="text-textMuted text-sm">Asigna carteras de clientes, supervisa pedidos en tiempo real y mide comisiones automáticamente.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute bottom-4 right-4 bg-primary/10 border border-primary/30 rounded-lg px-3 py-1 text-xs text-primary font-medium opacity-0"
          >
            Cartera digitalizada
          </motion.div>
        </motion.div>

        {/* 4. CFDI */}
        <motion.div 
          whileHover={{ y: -8 }} 
          className="md:col-span-2 bg-gradient-to-br from-surface to-surface/50 border border-borderDark rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-6 right-6 text-primary opacity-15 group-hover:opacity-30 transition-opacity">
            <FileText size={140} strokeWidth={1} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Facturación CFDI 4.0 Automática</h3>
            </div>
            <p className="text-textMuted max-w-md">Calcula el IVA al instante y emite facturas con un clic sin salir de la plataforma. Cumple con el SAT 100% de acuerdo. Archivo XML listo para comprobación fiscal.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute bottom-4 right-4 bg-primary/10 border border-primary/30 rounded-lg px-3 py-1 text-xs text-primary font-medium opacity-0"
          >
            SAT Validado
          </motion.div>
        </motion.div>

        {/* 5. Analytics */}
        <motion.div 
          whileHover={{ y: -8 }} 
          className="bg-gradient-to-br from-surface to-surface/50 border border-borderDark rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-6 right-6 text-primary opacity-15 group-hover:opacity-30 transition-opacity">
            <TrendingUp size={100} strokeWidth={1} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Analytics en Vivo</h3>
            </div>
            <p className="text-textMuted text-sm">Dashboards que muestran exactamente qué se vende, quién compra y cuáles son tus oportunidades de crecimiento.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute bottom-4 right-4 bg-primary/10 border border-primary/30 rounded-lg px-3 py-1 text-xs text-primary font-medium opacity-0"
          >
            Datos reales
          </motion.div>
        </motion.div>

        {/* 6. Seguridad */}
        <motion.div 
          whileHover={{ y: -8 }} 
          className="bg-gradient-to-br from-surface to-surface/50 border border-borderDark rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-6 right-6 text-primary opacity-15 group-hover:opacity-30 transition-opacity">
            <Shield size={100} strokeWidth={1} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Seguridad Empresarial</h3>
            </div>
            <p className="text-textMuted text-sm">Encriptación SSL, backups automáticos, cumplimiento de leyes fiscales mexicanas y soporte en zona horaria.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute bottom-4 right-4 bg-primary/10 border border-primary/30 rounded-lg px-3 py-1 text-xs text-primary font-medium opacity-0"
          >
            Certificado
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}