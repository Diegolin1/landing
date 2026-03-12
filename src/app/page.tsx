import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import BlogHighlights from "../components/BlogHighlights";
import TrustSignals from "../components/TrustSignals";

// Lazy load heavy components that aren't in viewport on first load
const BeforeAfter = dynamic(() => import("../components/BeforeAfter"), {
  loading: () => <div className="h-96 bg-surface/30 rounded-2xl animate-pulse" />,
  ssr: true,
});

const FeaturesBento = dynamic(() => import("../components/FeaturesBento"), {
  loading: () => <div className="h-96 bg-surface/30 rounded-2xl animate-pulse" />,
  ssr: true,
});

const WhyLumina = dynamic(() => import("../components/WhyLumina"), {
  loading: () => <div className="h-96 bg-surface/30 rounded-2xl animate-pulse" />,
  ssr: true,
});

const ROICalculator = dynamic(() => import("../components/ROICalculator"), {
  loading: () => <div className="h-96 bg-surface/30 rounded-2xl animate-pulse" />,
  ssr: true,
});

const SecurityTrust = dynamic(() => import("../components/SecurityTrust"), {
  loading: () => <div className="h-96 bg-surface/30 rounded-2xl animate-pulse" />,
  ssr: true,
});

const Pricing = dynamic(() => import("../components/Pricing"), {
  loading: () => <div className="h-96 bg-surface/30 rounded-2xl animate-pulse" />,
  ssr: true,
});

const FAQ = dynamic(() => import("../components/FAQ"), {
  loading: () => <div className="h-96 bg-surface/30 rounded-2xl animate-pulse" />,
  ssr: true,
});

const Footer = dynamic(() => import("../components/Footer"), {
  loading: () => <div className="h-32 bg-surface/30 animate-pulse" />,
  ssr: true,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <BeforeAfter />
      <FeaturesBento />
      <WhyLumina />
      <ROICalculator />
      <SecurityTrust />
      
      {/* Banner de urgencia */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-background py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Toma la delantera en tu industria hoy mismo</h2>
          <p className="mb-8 font-medium text-lg max-w-2xl mx-auto opacity-90">Los fabricantes que se digitalizan hoy crecen 5x más rápido que sus competidores. ¿Cuántos pedidos estás perdiendo por mantener tu catálogo en PDF?</p>
          <button className="bg-background text-primary font-bold px-8 py-4 rounded-lg hover:shadow-xl transition-all hover:scale-105 text-lg">
            Comienza tu prueba gratis ahora
          </button>
        </div>
      </section>

      <TrustSignals />
      <BlogHighlights />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}