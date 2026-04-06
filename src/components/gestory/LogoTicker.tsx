"use client";

import Image from "next/image";
import { useI18n } from "../../i18n";

const logos = [
  { name: "Flexi", src: "/logos/flexi.png" },
  { name: "Alpina", src: "/logos/alpina.png" },
  { name: "Emyco", src: "/logos/emyco.png" },
  { name: "Arturo Cuervo", src: "/logos/arturo-cuervo.png" },
  { name: "Baeza Estrada", src: "/logos/baeza-estrada.png" },
];

export default function LogoTicker() {
  const { t } = useI18n();
  // Duplicate for seamless infinite scroll
  const allLogos = [...logos, ...logos];

  return (
    <section className="bg-white py-10 border-y border-borderLight relative z-20 overflow-hidden">
      <div className="section-container">
        <p className="text-center text-xs font-semibold text-textMuted uppercase tracking-[0.2em] mb-8">
          {t.logoTicker.title}
        </p>
      </div>
      
      {/* Infinite Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee-premium">
          {allLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                sizes="(max-width: 768px) 96px, 120px"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
