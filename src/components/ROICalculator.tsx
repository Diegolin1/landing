"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, DollarSign, Calendar } from "lucide-react";

export default function ROICalculator() {
  const [ordersPerMonth, setOrdersPerMonth] = useState(50);

  // Conversiones y cálculos
  const timePerOrderBefore = 5; // minutos
  const timePerOrderAfter = 1; // minutos
  const timeSavedPerOrder = timePerOrderBefore - timePerOrderAfter; // 4 min
  const totalTimeSavedMonthly = timeSavedPerOrder * ordersPerMonth; // minutos
  const hoursPerMonth = totalTimeSavedMonthly / 60; // horas
  const daysPerMonth = hoursPerMonth / 8; // días de trabajo (8h)

  // Dinero ahorrado (pedidos evitados + facturación rápida)
  // Asumimos: 1-2% de pedidos se pierden actualmente
  const lostOrdersPercent = 0.015; // 1.5%
  const avgOrderValue = 2500; // MXN promedio
  const lostRevenueMonthly = ordersPerMonth * lostOrdersPercent * avgOrderValue;

  // Dinero en facturación rápida (cobros más rápido)
  const facturationSavings = ordersPerMonth * 50; // 50 MXN/pedido en tiempo ahorrado

  const totalMoneySavedMonthly = lostRevenueMonthly + facturationSavings;
  const totalMoneySavedYearly = totalMoneySavedMonthly * 12;

  // Planes y ROI
  const planCosts = {
    starter: 499,
    professional: 1499,
    enterprise: 3999,
  };

  const monthsToROIStarter = Math.ceil(planCosts.starter / totalMoneySavedMonthly);
  const monthsToROIProfessional = Math.ceil(planCosts.professional / totalMoneySavedMonthly);
  const monthsToROIEnterprise = Math.ceil(planCosts.enterprise / totalMoneySavedMonthly);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-surface/20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Calcula tu ROI real en 30 segundos
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            Descubre exactamente cuánto dinero ahorrarías con Lumina basado en tu volumen de pedidos.
          </p>
        </motion.div>

        {/* Interactive Calculator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-surface border border-borderDark rounded-2xl p-8 md:p-12 mb-12"
        >
          {/* Slider Input */}
          <div className="mb-12">
            <label className="block text-lg font-semibold mb-4">
              ¿Cuántos pedidos procesas al mes?
            </label>
            
            <div className="flex items-center gap-6">
              <input
                type="range"
                min="10"
                max="500"
                value={ordersPerMonth}
                onChange={(e) => setOrdersPerMonth(Number(e.target.value))}
                className="flex-1 h-2 bg-borderDark rounded-lg appearance-none cursor-pointer accent-primary"
                style={{
                  backgroundImage: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${(ordersPerMonth - 10) / (500 - 10) * 100}%, rgba(0,0,0,0.1) ${(ordersPerMonth - 10) / (500 - 10) * 100}%, rgba(0,0,0,0.1) 100%)`
                }}
              />
              <div className="text-4xl font-bold text-primary min-w-max">
                {ordersPerMonth}
              </div>
            </div>

            <div className="flex justify-between text-xs text-textMuted mt-2">
              <span>10 pedidos</span>
              <span>500 pedidos</span>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Time Saved */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background/50 border border-borderDark rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Tiempo Ahorrado/Mes</h3>
              </div>
              <div className="text-3xl font-bold mb-2">{hoursPerMonth.toFixed(1)} horas</div>
              <p className="text-sm text-textMuted">
                Que equivale a <span className="text-primary font-semibold">{daysPerMonth.toFixed(1)} días de trabajo</span>
              </p>
            </motion.div>

            {/* Money Saved */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background/50 border border-borderDark rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Dinero Ahorrado/Año</h3>
              </div>
              <div className="text-3xl font-bold mb-2">${totalMoneySavedYearly.toLocaleString('es-MX')}</div>
              <p className="text-sm text-textMuted">
                <span className="text-primary font-semibold">${totalMoneySavedMonthly.toLocaleString('es-MX')}</span> mensuales
              </p>
            </motion.div>
          </div>

          {/* Breakdown */}
          <div className="mt-8 bg-primary/5 border border-primary/30 rounded-lg p-6">
            <p className="text-sm text-textMuted mb-4 font-semibold">Desglose del Ahorro Mensual:</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-textMuted">Pedidos no perdidos ({(lostOrdersPercent * 100).toFixed(1)}% de {ordersPerMonth})</span>
                <span className="text-primary font-semibold">${lostRevenueMonthly.toLocaleString('es-MX')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-textMuted">Facturación automática (tiempo × dinero)</span>
                <span className="text-primary font-semibold">${facturationSavings.toLocaleString('es-MX')}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROI by Plan */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Recupera tu inversión en:</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-surface border border-borderDark rounded-xl p-8">
              <h4 className="text-xl font-bold mb-2">Starter</h4>
              <p className="text-textMuted text-sm mb-6">${planCosts.starter}/mes</p>
              
              <div className="mb-6 pb-6 border-b border-borderDark">
                <div className="text-4xl font-bold text-primary mb-2">
                  {monthsToROIStarter === 1 ? "< 1" : monthsToROIStarter}
                </div>
                <p className="text-sm text-textMuted">
                  {monthsToROIStarter === 1 
                    ? "Primera quincena" 
                    : `${monthsToROIStarter} meses`}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                <Calendar className="w-4 h-4" />
                Recuperado
              </div>
            </div>

            {/* Professional (Popular) */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/50 rounded-xl p-8 relative">
              <div className="absolute top-4 right-4 bg-primary text-background text-xs font-bold px-3 py-1 rounded-full">
                RECOMENDADO
              </div>
              
              <h4 className="text-xl font-bold mb-2">Professional</h4>
              <p className="text-textMuted text-sm mb-6">${planCosts.professional}/mes</p>
              
              <div className="mb-6 pb-6 border-b border-borderDark">
                <div className="text-4xl font-bold text-primary mb-2">
                  {monthsToROIProfessional === 1 ? "< 1" : monthsToROIProfessional}
                </div>
                <p className="text-sm text-textMuted">
                  {monthsToROIProfessional === 1 
                    ? "Primera quincena" 
                    : `${monthsToROIProfessional} meses`}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                <Calendar className="w-4 h-4" />
                Recuperado
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-surface border border-borderDark rounded-xl p-8">
              <h4 className="text-xl font-bold mb-2">Enterprise</h4>
              <p className="text-textMuted text-sm mb-6">${planCosts.enterprise}/mes</p>
              
              <div className="mb-6 pb-6 border-b border-borderDark">
                <div className="text-4xl font-bold text-primary mb-2">
                  {monthsToROIEnterprise === 1 ? "< 1" : monthsToROIEnterprise}
                </div>
                <p className="text-sm text-textMuted">
                  {monthsToROIEnterprise === 1 
                    ? "Primera quincena" 
                    : `${monthsToROIEnterprise} meses`}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                <Calendar className="w-4 h-4" />
                Recuperado
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-textMuted mb-6 text-lg">
            A partir del <span className="text-primary font-semibold">mes {Math.max(monthsToROIStarter, 1)}</span>, 
            Lumina se paga sola. Y después, es ganancia pura.
          </p>
          <button className="px-8 py-4 rounded-lg bg-primary hover:bg-primary-hover text-background font-bold text-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]">
            Comienza tu prueba gratis de 14 días
          </button>
        </motion.div>
      </div>
    </section>
  );
}
