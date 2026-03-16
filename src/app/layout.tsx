import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lumina.mx'),
  title: {
    default: "Lumina B2B | Plataforma de Ventas Mayoristas para Fabricantes Mexicanos",
    template: "%s | Lumina B2B"
  },
  description: "Plataforma SaaS #1 para fabricantes mexicanos. Catálogo digital B2B, facturación CFDI 4.0 automática, CRM de vendedores y listas de precios. Aumenta 30% tus ventas mayoristas.",
  keywords: [
    "plataforma B2B México",
    "catálogo digital mayoristas",
    "facturación CFDI 4.0",
    "software fabricantes México",
    "showroom digital",
    "CRM vendedores B2B",
    "pedidos mayoreo",
    "calzado León Guanajuato",
    "distribución mayorista",
    "SaaS México",
    "factura automática SAT",
    "listas de precios B2B",
    "gate B2B",
    "portal mayoristas"
  ],
  authors: [{ name: "Lumina", url: "https://lumina.mx" }],
  creator: "Lumina",
  publisher: "Lumina",
  applicationName: "Lumina B2B",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  category: "Business Software",
  classification: "B2B SaaS Platform",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://lumina.mx',
    languages: {
      'es-MX': 'https://lumina.mx',
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://lumina.mx",
    siteName: "Lumina B2B",
    title: "Lumina B2B | Showroom Digital para Fabricantes Mexicanos",
    description: "Automatiza tus ventas mayoristas con catálogo digital, facturación CFDI 4.0 y CRM de vendedores. Solución #1 para fabricantes de León, Guanajuato. Prueba gratis 14 días.",
    images: [
      {
        url: "https://lumina.mx/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lumina B2B - Plataforma de Ventas Mayoristas para México",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@LuminaMX",
    creator: "@LuminaMX",
    title: "Lumina B2B | Showroom Digital + CFDI 4.0 para Fabricantes",
    description: "Automatiza tus ventas mayoristas. Catálogo digital, facturación CFDI automática y CRM de vendedores. Prueba gratis 14 días.",
    images: ["https://lumina.mx/twitter-image.png"],
  },
  verification: {
    google: "tu-codigo-google-search-console",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Preconnect to external services */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Google Analytics 4 */}
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}