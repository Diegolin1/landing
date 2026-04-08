"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustBanner() {
  const integrations = [
    {
      name: "Facturapi",
      logo: "https://facturapi.io/img/facturapi-logo.png",
      alt: "Facturapi logo",
    },
    {
      name: "Mercado Pago",
      logo: "https://images.ctfassets.net/4z4jvbyw63ei/KqUEv2gHgKnvKjvNW1FkL/46ef9d47e6f39a0f25ae3f6bc8c06f80/mercadopago-icon.png",
      alt: "Mercado Pago logo",
    },
    {
      name: "Mercado Libre",
      logo: "https://http2.mlstatic.com/assets/portal/static/img/mercadolibre-logo-small.png",
      alt: "Mercado Libre logo",
    },
    {
      name: "Clip",
      logo: "https://clip.com.mx/_next/static/images/logo-dark-d2c6b97bd3f8c0cc3c16e0e67ba7a60e.svg",
      alt: "Clip logo",
    },
    {
      name: "Stripe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo.png/1200px-Stripe_Logo.png",
      alt: "Stripe logo",
    },
    {
      name: "OXXO",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/OXXO_logo_%282022%29.svg/1200px-OXXO_logo_%282022%29.svg.png",
      alt: "OXXO logo",
    },
  ];

  return (
    <section className="bg-surface py-10 border-y border-borderLight relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-textMuted uppercase tracking-widest mb-6">
          Con la confianza de empresas procesando +$10M USD mensuales
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
          {integrations.map((integration, idx) => (
            <div
              key={idx}
              className="flex items-center cursor-pointer hover:opacity-100 opacity-80 transition-opacity"
              title={integration.name}
            >
              <div className="relative h-8 w-auto">
                <Image
                  src={integration.logo}
                  alt={integration.alt}
                  width={80}
                  height={32}
                  className="h-8 w-auto object-contain"
                  priority={idx < 3}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}