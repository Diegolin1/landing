import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Lumina | El ShowRoom B2B Inteligente",
  description: "Digitaliza tus ventas mayoristas. Catálogos inteligentes, control de vendedores y facturación automática en un solo lugar.",
  keywords: "B2B, catálogo digital, facturación CFDI, vendedores, México, SaaS",
  authors: [{ name: "Lumina" }],
  creator: "Lumina",
  publisher: "Lumina",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://lumina.vercel.app",
    siteName: "Lumina ShowRoom B2B",
    title: "Lumina | El ShowRoom B2B Inteligente para México",
    description: "Plataforma SaaS para digitalizar catálogos mayoristas, gestionar vendedores y facturar en CFDI automáticamente.",
    images: [
      {
        url: "https://lumina.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lumina ShowRoom B2B",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina | ShowRoom B2B para México",
    description: "Digitaliza tu operación mayorista con CFDI integrado",
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}