"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useI18n } from "../../i18n";

interface NavbarProps {
  onOpenDemo?: (e?: React.MouseEvent) => void;
  bannerOffset?: number;
}

export default function Navbar({ onOpenDemo, bannerOffset = 0 }: NavbarProps) {
  const { t, locale, toggleLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#inicio" },
    { name: t.nav.difference, href: "#como-funciona" },
    { name: t.nav.modules, href: "#soluciones" },
    { name: t.nav.pricing, href: "#precios" },
    { name: t.nav.faq, href: "#faq" },
    { name: t.nav.blog, href: "/blog" },
  ];

  return (
    <nav
      style={{ top: `${bannerOffset}px` }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-borderLight/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container">
        <div className="flex justify-between items-center">
          {/* Logo with Premium Brand Impact */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="relative animate-logo-glow"
              >
                <div className="relative overflow-hidden rounded-lg animate-logo-shine">
                  <Image
                    src="/logos/gestory.png"
                    alt="Gestory Logo"
                    width={280}
                    height={88}
                    className={`w-auto object-contain transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-md ${
                      scrolled ? "h-14 lg:h-16" : "h-16 lg:h-18"
                    }`}
                    priority
                  />
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-textSecondary hover:text-accent px-3 py-2 rounded-lg hover:bg-accent/5 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons + Language */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 text-sm font-medium text-textMuted hover:text-textPrimary px-3 py-2 rounded-lg hover:bg-surface-muted transition-all"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase text-xs font-bold">{locale === "es" ? "EN" : "ES"}</span>
            </button>

            <button
              onClick={onOpenDemo}
              className="bg-accent hover:bg-accent-hover text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-glow hover:shadow-glow-lg"
            >
              {t.nav.bookDemo}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLocale}
              className="text-textMuted hover:text-textPrimary p-2"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-textSecondary hover:text-accent p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-borderLight shadow-lg absolute w-full left-0 top-full overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-textPrimary hover:text-accent px-4 py-3 rounded-lg hover:bg-accent/5 transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-borderLight pt-3 mt-2 flex flex-col gap-2">
                <button
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (onOpenDemo) onOpenDemo(e);
                  }}
                  className="bg-accent text-white text-sm font-bold text-center rounded-xl py-2.5 hover:bg-accent-hover transition-colors"
                >
                  {t.nav.bookDemoFree}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}