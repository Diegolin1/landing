"use client";

import React, { useState } from "react";
import Navbar from "../components/gestory/Navbar";
import Hero from "../components/gestory/Hero";
import TrustBanner from "../components/gestory/TrustBanner";
import ProblemSolution from "../components/gestory/ProblemSolution";
import FeaturesBento from "../components/gestory/FeaturesBento";
import Pricing from "../components/gestory/Pricing";
import SecurityTrust from "../components/gestory/SecurityTrust";
import Footer from "../components/gestory/Footer";
import DemoModal from "../components/gestory/DemoModal";

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsDemoOpen(true);
  };

  return (
    <main className="min-h-screen font-sans bg-background text-textPrimary selection:bg-accent selection:text-white scroll-smooth">
      <Navbar onOpenDemo={openDemo} />
      <Hero onOpenDemo={openDemo} />
      <TrustBanner />
      <ProblemSolution />
      <FeaturesBento />
      <Pricing onOpenDemo={openDemo} />
      <SecurityTrust />
      <Footer />
      
      {isDemoOpen && (
        <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      )}
    </main>
  );
}