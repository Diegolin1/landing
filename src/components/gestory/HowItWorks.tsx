"use client";

import { motion } from "framer-motion";
import { UserPlus, Settings, Rocket } from "lucide-react";
import { useI18n } from "../../i18n";

export default function HowItWorks() {
  const { t } = useI18n();

  const steps = [
    {
      icon: <UserPlus className="h-6 w-6 text-accent" />,
      title: t.howItWorks.step1Title,
      desc: t.howItWorks.step1Desc,
      number: "01",
    },
    {
      icon: <Settings className="h-6 w-6 text-accent" />,
      title: t.howItWorks.step2Title,
      desc: t.howItWorks.step2Desc,
      number: "02",
    },
    {
      icon: <Rocket className="h-6 w-6 text-accent" />,
      title: t.howItWorks.step3Title,
      desc: t.howItWorks.step3Desc,
      number: "03",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="section-header">
          <p className="eyebrow mb-3">{t.howItWorks.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textPrimary mb-6">
            {t.howItWorks.headline}
          </h2>
          <p className="text-lg text-textSecondary font-medium">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[60px] left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-borderLight via-accent/30 to-borderLight" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="relative text-center group"
            >
              {/* Number circle */}
              <div className="relative mx-auto mb-6">
                <div className="h-[72px] w-[72px] mx-auto rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold w-7 h-7 rounded-lg flex items-center justify-center shadow-sm">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-textPrimary mb-3">{step.title}</h3>
              <p className="text-sm text-textSecondary leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
