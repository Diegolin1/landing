import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guía Gratuita: 5 Errores Que Cuestan $500/Día en Ventas B2B",
  description: "Descarga la guía práctica para identificar y arreglar los 5 errores más caros que cometen los vendedores B2B en México. Con calculadora de pérdidas.",
  openGraph: {
    title: "Guía Gratuita: 5 Errores en Ventas B2B",
    description: "Descarga la guía específica para fabricantes y distribuidores. Identifica cuánto dinero pierdes cada día.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
