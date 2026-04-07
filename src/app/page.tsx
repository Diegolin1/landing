"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { I18nProvider } from "../i18n";
import Navbar from "../components/gestory/Navbar";
import Hero from "../components/gestory/Hero";
import ProblemSolution from "../components/gestory/ProblemSolution";
import HowItWorks from "../components/gestory/HowItWorks";
import FeaturesBento from "../components/gestory/FeaturesBento";
import Pricing from "../components/gestory/Pricing";
import FAQ from "../components/gestory/FAQ";
import DemoModal from "../components/gestory/DemoModal";
import WhatsAppButton from "../components/gestory/WhatsAppButton";
import TopBanner from "../components/gestory/TopBanner";

const Industries = dynamic(() => import("../components/gestory/Industries"));
const Integrations = dynamic(() => import("../components/gestory/Integrations"));
const Stats = dynamic(() => import("../components/gestory/Stats"));
const Testimonials = dynamic(() => import("../components/gestory/Testimonials"));
const ROICalculator = dynamic(() => import("../components/gestory/ROICalculator"));
const FinalCTA = dynamic(() => import("../components/gestory/FinalCTA"));
const SecurityTrust = dynamic(() => import("../components/gestory/SecurityTrust"));
const Footer = dynamic(() => import("../components/gestory/Footer"));

import { useRef, useEffect } from "react";

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isTopBannerVisible, setIsTopBannerVisible] = useState(true);
  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  const openDemo = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsDemoOpen(true);
  };

  useEffect(() => {
    if (!isTopBannerVisible) {
      setBannerHeight(0);
      return;
    }

    const updateHeight = () => {
      if (bannerRef.current) {
        setBannerHeight(bannerRef.current.offsetHeight);
      }
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    if (bannerRef.current) observer.observe(bannerRef.current);
    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [isTopBannerVisible]);

  return (
    <I18nProvider>
      <main className="min-h-screen font-sans bg-background text-textPrimary selection:bg-accent/20 selection:text-accent scroll-smooth">
        {isTopBannerVisible && (
          <div ref={bannerRef}>
            <TopBanner
              onOpenDemo={() => setIsDemoOpen(true)}
              onClose={() => setIsTopBannerVisible(false)}
            />
          </div>
        )}
        <Navbar onOpenDemo={openDemo} bannerOffset={bannerHeight} />
        <Hero onOpenDemo={openDemo} />
        <ProblemSolution />
        <Industries />
        <HowItWorks />
        <FeaturesBento />
        <Integrations />
        <Stats />
        <Testimonials />
        <ROICalculator onOpenDemo={openDemo} />
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