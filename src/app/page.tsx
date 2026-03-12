import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import BeforeAfter from "../components/BeforeAfter";
import FeaturesBento from "../components/FeaturesBento";
import WhyLumina from "../components/WhyLumina";
import ROICalculator from "../components/ROICalculator";
import SecurityTrust from "../components/SecurityTrust";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

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

      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
      
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

      <Pricing />
      <Footer />
    </main>
  );
}