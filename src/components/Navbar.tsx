"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, BookOpenIcon } from "lucide-react";
import { scrollToDemoBooking } from "../utils/scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solutionLinks = [
    { label: "Gestión de Ventas", href: "#caracteristicas" },
    { label: "Facturación CFDI 4.0", href: "#caracteristicas" },
    { label: "Catálogo Digital B2B", href: "#caracteristicas" },
    { label: "CRM de Agentes", href: "#caracteristicas" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 h-16 flex items-center justify-between px-6 lg:px-12 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-borderLight shadow-card"
          : "bg-white/80 backdrop-blur-md border-b border-borderLight"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
        {/* Mark — gradiente azul */}
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-sm">
          <span className="text-white text-xs font-semibold">L</span>
        </div>
        <span className="text-base font-medium text-textPrimary group-hover:text-primary transition-colors">
          Lumina B2B
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-1 text-sm items-center">
        {/* Dropdown La Solución */}
        <div className="relative group">
          <button className="flex items-center gap-1 px-4 py-2 text-textSecondary hover:text-textPrimary transition-colors rounded-lg hover:bg-surface-muted">
            La solución
            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
          </button>
          <div className="absolute top-full left-0 mt-1.5 w-52 bg-surface border border-borderLight rounded-xl shadow-card-hover opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1.5 z-50">
            {solutionLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-sm text-textSecondary hover:text-primary hover:bg-primary-light transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <a href="#caracteristicas" className="px-4 py-2 text-textSecondary hover:text-textPrimary transition-colors rounded-lg hover:bg-surface-muted">
          Características
        </a>
        <a href="#precios" className="px-4 py-2 text-textSecondary hover:text-textPrimary transition-colors rounded-lg hover:bg-surface-muted">
          Planes
        </a>
        <Link href="/blog" className="px-4 py-2 text-textSecondary hover:text-textPrimary transition-colors rounded-lg hover:bg-surface-muted flex items-center gap-1.5">
          <BookOpenIcon size={14} />
          Blog
        </Link>
      </nav>

      {/* Desktop CTAs */}
      <div className="hidden lg:flex gap-3 items-center">
        <a
          href="/login"
          className="text-sm text-textSecondary hover:text-textPrimary transition-colors px-4 py-2 rounded-lg hover:bg-surface-muted"
        >
          Iniciar sesión
        </a>
        <button
          onClick={() => scrollToDemoBooking()}
          className="btn-primary text-sm px-5 py-2.5"
        >
          Agendar Demo →
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-textSecondary hover:text-textPrimary transition-colors p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-borderLight shadow-card-hover lg:hidden z-50">
          <nav className="flex flex-col p-5 space-y-1">
            <div className="pb-3 border-b border-borderLight">
              <p className="text-[10px] font-semibold text-textMuted uppercase tracking-widest mb-2 px-3">
                La solución
              </p>
              {solutionLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm text-textSecondary hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a href="#caracteristicas" onClick={() => setIsOpen(false)} className="px-3 py-2 text-sm text-textSecondary hover:text-textPrimary hover:bg-surface-muted rounded-lg transition-colors">
              Características
            </a>
            <a href="#precios" onClick={() => setIsOpen(false)} className="px-3 py-2 text-sm text-textSecondary hover:text-textPrimary hover:bg-surface-muted rounded-lg transition-colors">
              Planes
            </a>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="px-3 py-2 text-sm text-textSecondary hover:text-textPrimary hover:bg-surface-muted rounded-lg transition-colors flex items-center gap-2">
              <BookOpenIcon size={14} />
              Blog
            </Link>

            <div className="pt-3 border-t border-borderLight space-y-2">
              <a href="/login" className="block px-3 py-2 text-sm text-textSecondary hover:text-textPrimary hover:bg-surface-muted rounded-lg transition-colors">
                Iniciar sesión
              </a>
              <button
                onClick={() => { scrollToDemoBooking(); setIsOpen(false); }}
                className="w-full btn-primary justify-center"
              >
                Agendar Demo →
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}