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
  metadataBase: new URL('https://lumina.mx'),
  title: {
    default: "Lumina B2B | Plataforma de Ventas Mayoristas para Fabricantes Mexicanos",
    template: "%s | Lumina B2B"
  },
  description: "Plataforma SaaS #1 para fabricantes mexicanos. Catálogo digital B2B, facturación CFDI 4.0 automática, CRM de vendedores y listas de precios. Aumenta 30% tus ventas mayoristas.",
  keywords: [
    "plataforma B2B México", "catálogo digital mayoristas", "facturación CFDI 4.0",
    "software fabricantes México", "showroom digital", "CRM vendedores B2B",
    "pedidos mayoreo", "calzado León Guanajuato", "distribución mayorista",
    "SaaS México", "factura automática SAT", "listas de precios B2B", "gate B2B", "portal mayoristas"
  ],
  authors: [{ name: "Lumina", url: "https://lumina.mx" }],
  creator: "Lumina",
  publisher: "Lumina",
  applicationName: "Lumina B2B",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, telephone: false, address: false },
  category: "Business Software",
  classification: "B2B SaaS Platform",
  robots: {
    index: true, follow: true, nocache: false,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://lumina.mx', languages: { 'es-MX': 'https://lumina.mx' } },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/apple-touch-icon.png" },
  openGraph: {
    type: "website", locale: "es_MX", url: "https://lumina.mx", siteName: "Lumina B2B",
    title: "Lumina B2B | Showroom Digital para Fabricantes Mexicanos",
    description: "Automatiza tus ventas mayoristas con catálogo digital, facturación CFDI 4.0 y CRM de vendedores. Solución #1 para fabricantes de León, Guanajuato. Prueba gratis 14 días.",
    images: [{ url: "https://lumina.mx/og-image.png", width: 1200, height: 630, alt: "Lumina B2B - Plataforma de Ventas Mayoristas para México", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image", site: "@LuminaMX", creator: "@LuminaMX",
    title: "Lumina B2B | Showroom Digital + CFDI 4.0 para Fabricantes",
    description: "Automatiza tus ventas mayoristas. Catálogo digital, facturación CFDI automática y CRM de vendedores. Prueba gratis 14 días.",
    images: ["https://lumina.mx/twitter-image.png"],
  },
  verification: { google: "google-site-verification-code" },
};

// JSON-LD — rendered server-side (no "use client" needed) for maximum SEO crawlability
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Lumina B2B",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "AggregateOffer", "priceCurrency": "MXN", "lowPrice": "1199", "highPrice": "3999", "offerCount": "3" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "127", "bestRating": "5", "worstRating": "1" },
  "author": {
    "@type": "Organization", "name": "Lumina", "url": "https://lumina.mx",
    "contactPoint": { "@type": "ContactPoint", "telephone": "+52-4776633068", "contactType": "Customer Service", "areaServed": "MX" },
    "address": { "@type": "PostalAddress", "addressLocality": "León", "addressRegion": "Guanajuato", "addressCountry": "MX" }
  },
  "description": "Plataforma SaaS B2B para fabricantes mexicanos. Catálogo digital, facturación CFDI 4.0, CRM de vendedores y gestión de pedidos mayoristas.",
  "url": "https://lumina.mx",
  "softwareVersion": "2.0"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cuánto tiempo toma la implementación de Lumina B2B?", "acceptedAnswer": { "@type": "Answer", "text": "Puedes estar operando en menos de 24 horas. Nuestro equipo asiste con la carga de productos y la configuración del Gate B2B." } },
    { "@type": "Question", "name": "¿Mis clientes necesitan descargar una aplicación?", "acceptedAnswer": { "@type": "Answer", "text": "No. Lumina es una PWA. Tus clientes acceden vía URL privada desde cualquier dispositivo, sin instalaciones." } },
    { "@type": "Question", "name": "¿Cómo funciona la integración con el SAT?", "acceptedAnswer": { "@type": "Answer", "text": "Lumina se conecta con PACs certificados. Genera CFDI 4.0 en 1 clic al marcar un pedido como pagado." } },
    { "@type": "Question", "name": "¿Puedo tener precios diferentes para cada cliente?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. El Gate B2B asigna precios o descuentos específicos por cliente o grupo, protegiendo tus márgenes." } }
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
        {/* JSON-LD — server-side for full SEO impact */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-textSecondary antialiased`}>
        {children}
      </body>
    </html>
  );
}