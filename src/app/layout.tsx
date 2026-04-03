import React from "react";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gestory.com'),
  title: {
    default: "Gestory | ERP y Punto de Venta para Empresas en Crecimiento",
    template: "%s | Gestory"
  },
  description: "Plataforma SaaS de gestión integral. Inventario multi-almacén, punto de venta POS, facturación CFDI 4.0, portal B2B y reportes en tiempo real. Agenda tu demo gratis.",
  keywords: [
    "ERP México", "punto de venta POS", "inventario multi-almacén", "facturación CFDI 4.0",
    "software de gestión empresarial", "SaaS México", "portal B2B mayoristas",
    "gestión de inventarios", "POS offline", "CRM ventas", "listas de precios",
    "Gestory", "ERP en la nube", "software empresarial México"
  ],
  authors: [{ name: "Gestory", url: "https://gestory.com" }],
  creator: "Gestory",
  publisher: "Gestory",
  applicationName: "Gestory",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, telephone: false, address: false },
  category: "Business Software",
  classification: "Enterprise SaaS Platform",
  robots: {
    index: true, follow: true, nocache: false,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://gestory.com', languages: { 'es-MX': 'https://gestory.com', 'en': 'https://gestory.com' } },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/apple-touch-icon.png" },
  openGraph: {
    type: "website", locale: "es_MX", url: "https://gestory.com", siteName: "Gestory",
    title: "Gestory | ERP y Punto de Venta para Empresas en Crecimiento",
    description: "Controla inventario, ventas, facturación y sucursales desde una sola plataforma. Agenda tu demo gratis — 30 días sin costo.",
    images: [{ url: "https://gestory.com/og-image.png", width: 1200, height: 630, alt: "Gestory — ERP y Punto de Venta", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image", site: "@GestoryApp", creator: "@GestoryApp",
    title: "Gestory | ERP + POS + Facturación CFDI 4.0",
    description: "Controla inventario, ventas y facturación desde una sola plataforma. Agenda tu demo gratis.",
    images: ["https://gestory.com/twitter-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Gestory",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "AggregateOffer", "priceCurrency": "MXN", "lowPrice": "990", "highPrice": "2490", "offerCount": "3" },
  "author": {
    "@type": "Organization", "name": "Gestory", "url": "https://gestory.com",
    "contactPoint": { "@type": "ContactPoint", "telephone": "+52-4776633068", "contactType": "Customer Service", "areaServed": "MX", "availableLanguage": ["Spanish", "English"] },
    "address": { "@type": "PostalAddress", "addressLocality": "León", "addressRegion": "Guanajuato", "addressCountry": "MX" }
  },
  "description": "Plataforma SaaS de gestión integral para empresas. Inventario multi-almacén, POS, facturación CFDI 4.0, portal B2B y reportes en tiempo real.",
  "url": "https://gestory.com",
  "softwareVersion": "2.0"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cuánto tiempo toma implementar Gestory?", "acceptedAnswer": { "@type": "Answer", "text": "Puedes estar operando en menos de 24 horas. Nuestro equipo te asiste con la carga de productos y la configuración de sucursales." } },
    { "@type": "Question", "name": "¿Qué pasa si se cae el internet?", "acceptedAnswer": { "@type": "Answer", "text": "El Punto de Venta funciona offline. Sigues cobrando normalmente y cuando regrese la conexión, todo se sincroniza automáticamente." } },
    { "@type": "Question", "name": "¿Cómo funciona la auto-facturación?", "acceptedAnswer": { "@type": "Answer", "text": "Gestory se conecta con Facturapi (PAC certificado). Tu cliente escanea un QR del ticket y genera su CFDI 4.0 sin asistencia." } },
    { "@type": "Question", "name": "¿Puedo tener precios diferentes para cada cliente?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes crear listas de precios por cliente, grupo o temporada. Tus márgenes se protegen automáticamente." } }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#f8fafc" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-textSecondary antialiased`}>
        {children}
      </body>
    </html>
  );
}