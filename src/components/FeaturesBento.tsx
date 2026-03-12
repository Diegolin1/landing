"use client";
import { motion } from "framer-motion";
import { Lock, Smartphone, Users, FileText } from "lucide-react";

export default function FeaturesBento() {
  return (
    <section id="solucion" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Construido para el <span className="text-primary">B2B Latino</span></h2>
        <p className="text-textMuted max-w-2xl mx-auto text-lg">Entendemos cómo haces negocios. Herramientas diseñadas para agilizar tu operación sin complicar a tus clientes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Caja 1 */}
        <motion.div whileHover={{ y: -5 }} className="md:col-span-2 bg-surface border border-borderDark rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden group">
          <div className="absolute top-8 right-8 text-primary opacity-20 group-hover:opacity-40 transition-opacity">
            <Lock size={120} />
          </div>
          <h3 className="text-2xl font-bold mb-2 z-10">Gate B2B y Precios Privados</h3>
          <p className="text-textMuted z-10 max-w-md">Protege tu información. Asigna listas de precios específicas por cliente. Tu competencia nunca verá tu catálogo mayorista sin tu autorización.</p>
        </motion.div>

        {/* Caja 2 */}
        <motion.div whileHover={{ y: -5 }} className="bg-surface border border-borderDark rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden group">
          <div className="absolute top-8 right-8 text-primary opacity-20 group-hover:opacity-40 transition-opacity">
            <Smartphone size={80} />
          </div>
          <h3 className="text-2xl font-bold mb-2 z-10">Experiencia Móvil Cero Fricción</h3>
          <p className="text-textMuted z-10">Tus clientes levantan el pedido desde su celular y cierra directo en tu WhatsApp.</p>
        </motion.div>

        {/* Caja 3 */}
        <motion.div whileHover={{ y: -5 }} className="bg-surface border border-borderDark rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden group">
          <div className="absolute top-8 right-8 text-primary opacity-20 group-hover:opacity-40 transition-opacity">
            <Users size={80} />
          </div>
          <h3 className="text-2xl font-bold mb-2 z-10">CRM de Vendedores</h3>
          <p className="text-textMuted z-10">Asigna carteras de clientes, supervisa pedidos y mide comisiones en tiempo real.</p>
        </motion.div>

        {/* Caja 4 */}
        <motion.div whileHover={{ y: -5 }} className="md:col-span-2 bg-surface border border-borderDark rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden group">
          <div className="absolute top-8 right-8 text-primary opacity-20 group-hover:opacity-40 transition-opacity">
            <FileText size={120} />
          </div>
          <h3 className="text-2xl font-bold mb-2 z-10">Facturación CFDI 4.0 Automática</h3>
          <p className="text-textMuted z-10 max-w-md">Calcula el IVA al instante y emite facturas con un clic sin salir de la plataforma. Cumple con el SAT sin dolores de cabeza.</p>
        </motion.div>
      </div>
    </section>
  );
}