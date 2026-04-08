"use client";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Gestory",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "MXN",
      "lowPrice": "499",
      "highPrice": "3999",
      "offerCount": "3"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "Gestory",
      "url": "https://gestory.com",
      "logo": "https://gestory.com/logo.png",
      "sameAs": [
        "https://facebook.com/luminamx",
        "https://twitter.com/luminamx",
        "https://linkedin.com/company/luminamx",
        "https://instagram.com/luminamx"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+52-4776633068",
        "contactType": "Sales and Support",
        "areaServed": "MX",
        "availableLanguage": ["Spanish"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "León",
        "addressRegion": "Guanajuato",
        "addressCountry": "MX"
      }
    },
    "description": "Plataforma SaaS B2B para fabricantes mexicanos. Catálogo digital, facturación CFDI 4.0, CRM de vendedores y gestión de pedidos mayoristas.",
    "featureList": [
      "Catálogo digital B2B con Gate de acceso",
      "Facturación CFDI 4.0 automática",
      "CRM de vendedores con métricas en tiempo real",
      "Listas de precios diferenciadas",
      "Gestión de pedidos mayoristas",
      "Integración con WhatsApp",
      "Dashboard de ventas y analytics",
      "Multi-tenant SaaS"
    ],
    "screenshot": "https://lumina.mx/screenshot.png",
    "url": "https://lumina.mx",
    "softwareVersion": "2.0",
    "releaseNotes": "Facturación CFDI 4.0, ROI Calculator, Portal del comprador"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://lumina.mx"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Características",
        "item": "https://lumina.mx#caracteristicas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Precios",
        "item": "https://lumina.mx#precios"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo toma la implementación de Lumina B2B?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Típicamente puedes estar operando en menos de 24 horas. Nuestro equipo te ayuda con la carga masiva de tus primeros productos y la configuración del Gate B2B."
        }
      },
      {
        "@type": "Question",
        "name": "¿Mis clientes necesitan descargar una aplicación?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Lumina es una Progressive Web App (PWA). Tus clientes acceden vía URL privada, pero la experiencia es fluida y rápida como una aplicación nativa, optimizada para móviles."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo funciona la integración con el SAT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lumina se conecta nativamente con proveedores autorizados de certificación (PAC). Al marcar un pedido como pagado, puedes generar la factura CFDI 4.0 con un solo clic."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo tener diferentes precios para diferentes clientes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Nuestra función de Gate B2B te permite asignar niveles de precio o descuentos específicos por grupo de clientes, protegiendo siempre tus márgenes."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
