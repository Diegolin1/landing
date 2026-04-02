"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenDemo?: (e?: React.MouseEvent) => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "La Diferencia", href: "#como-funciona" },
    { name: "Módulos", href: "#soluciones" },
    { name: "Precios", href: "#precios" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image 
                src="/logos/gestory.png" 
                alt="Gestory Logo" 
                width={140} 
                height={40} 
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-textSecondary hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="https://saas.gestory.com/login"
              className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors"
            >
              Iniciar Sesión
            </Link>
            <button 
              onClick={onOpenDemo}
              className="bg-accent hover:bg-accent-hover text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors shadow-sm"
            >
              Agendar Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-textSecondary hover:text-primary p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-borderLight p-4 shadow-lg absolute w-full left-0 top-full"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-textPrimary hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-borderLight pt-4 flex flex-col space-y-3">
              <Link 
                href="https://saas.gestory.com/login"
                className="text-sm font-medium text-center text-textPrimary border border-borderLight rounded-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Iniciar Sesión
              </Link>
              <button 
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (onOpenDemo) onOpenDemo(e);
                }}
                className="bg-accent text-white text-sm font-bold text-center rounded-lg py-2"
              >
                Agendar Demo Gratis
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}