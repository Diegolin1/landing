import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesBento from "@/components/FeaturesBento";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturesBento />
      
      {/* Banner de urgencia */}
      <section className="bg-primary text-background py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Toma la delantera en tu industria hoy mismo</h2>
        <p className="mb-6 font-medium max-w-2xl mx-auto">No dejes que tu competencia se lleve a tus compradores por tener un proceso de compra más fácil.</p>
        <button className="bg-background text-primary font-bold px-8 py-3 rounded-lg hover:shadow-lg transition-shadow">
          Crear mi cuenta gratis
        </button>
      </section>

      <Pricing />
      <Footer />
    </main>
  );
}