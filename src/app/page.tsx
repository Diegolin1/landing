"use client";

import React, { useState } from "react";
import { I18nProvider } from "../i18n";
import Navbar from "../components/gestory/Navbar";
import Hero from "../components/gestory/Hero";
import LogoTicker from "../components/gestory/LogoTicker";
import ProblemSolution from "../components/gestory/ProblemSolution";
import HowItWorks from "../components/gestory/HowItWorks";
import FeaturesBento from "../components/gestory/FeaturesBento";
import Stats from "../components/gestory/Stats";
import Testimonials from "../components/gestory/Testimonials";
import Pricing from "../components/gestory/Pricing";
import FAQ from "../components/gestory/FAQ";
import FinalCTA from "../components/gestory/FinalCTA";
import SecurityTrust from "../components/gestory/SecurityTrust";
import Footer from "../components/gestory/Footer";
import DemoModal from "../components/gestory/DemoModal";
import WhatsAppButton from "../components/gestory/WhatsAppButton";

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsDemoOpen(true);
  };

  return (
    <I18nProvider>
      <main className="min-h-screen font-sans bg-background text-textPrimary selection:bg-accent/20 selection:text-accent scroll-smooth">
        <Navbar onOpenDemo={openDemo} />
        <Hero onOpenDemo={openDemo} />
        <LogoTicker />
        <ProblemSolution />
        <HowItWorks />
        <FeaturesBento />
        <Stats />
        <Testimonials />
        <Pricing onOpenDemo={openDemo} />
        <FAQ />
        <FinalCTA />
        <SecurityTrust />
        <Footer />
        
        {isDemoOpen && (
          <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
        )}
        
        <WhatsAppButton />
      </main>
    </I18nProvider>
  );
}