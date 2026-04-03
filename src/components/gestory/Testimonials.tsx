"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useI18n } from "../../i18n";

export default function Testimonials() {
  const { t } = useI18n();

  const testimonials = [
    {
      quote: t.testimonials.t1Quote,
      name: t.testimonials.t1Name,
      role: t.testimonials.t1Role,
      result: t.testimonials.t1Result,
      avatar: "/logos/alpina.png",
    },
    {
      quote: t.testimonials.t2Quote,
      name: t.testimonials.t2Name,
      role: t.testimonials.t2Role,
      result: t.testimonials.t2Result,
      avatar: "/logos/baeza-estrada.png",
    },
    {
      quote: t.testimonials.t3Quote,
      name: t.testimonials.t3Name,
      role: t.testimonials.t3Role,
      result: t.testimonials.t3Result,
      avatar: "/logos/arturo-cuervo.png",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="section-header">
          <p className="eyebrow mb-3">{t.testimonials.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textPrimary mb-6">
            {t.testimonials.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-borderLight p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1 mb-6">
                <Quote className="absolute -top-1 -left-1 h-6 w-6 text-accent/10" />
                <p className="text-sm text-textSecondary leading-relaxed pl-4 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Result pill */}
              <div className="result-pill mb-5 self-start">
                {item.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-borderLight">
                <div className="h-10 w-10 rounded-full bg-surface-muted border border-borderLight flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-textPrimary">{item.name}</p>
                  <p className="text-xs text-textMuted">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
