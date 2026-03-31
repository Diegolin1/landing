"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, BookOpenIcon, GiftIcon } from "lucide-react";
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
    { label: "Control de Pedidos", href: "#caracteristicas" },
    { label: "Facturación Electrónica", href: "#caracteristicas" },
    { label: "Catálogo Interactivo", href: "#caracteristicas" },
    { label: "Portal de Clientes", href: "#caracteristicas" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-primary/20 shadow-lg shadow-primary/5"
          : "bg-background/80 backdrop-blur-md border-b border-borderDark"
      } h-16 flex items-center justify-between px-6 lg:px-12`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group cursor-pointer">
        <div className="relative">
          <div className="text-2xl font-bold flex items-center gap-1">
            <span className="text-primary tracking-tighter group-hover:scale-110 transition-transform">{"///"}</span>
            <span className="tracking-wide group-hover:text-primary transition-colors">Gestory</span>
          </div>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-1 text-sm font-medium items-center">
        {/* Solution Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-1 px-4 py-2 text-textMuted hover:text-white transition-colors rounded-lg hover:bg-primary/5">
            Soluciones
            <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
          </button>
          <div className="absolute top-full left-0 mt-2 w-48 bg-surface border border-borderDark rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
            {solutionLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-sm text-textMuted hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <a href="#caracteristicas" className="px-4 py-2 text-textMuted hover:text-white transition-colors rounded-lg hover:bg-primary/5">
          Características
        </a>
        <a href="#precios" className="px-4 py-2 text-textMuted hover:text-white transition-colors rounded-lg hover:bg-primary/5">
          Planes
        </a>
        <Link href="/blog" className="px-4 py-2 text-textMuted hover:text-white transition-colors rounded-lg hover:bg-primary/5 flex items-center gap-1">
          <BookOpenIcon size={16} />
          Blog
        </Link>

        {/* Divider */}
        <div className="w-px h-6 bg-borderDark mx-2" />

        {/* CTA Buttons */}
        <Link
          href="/guia-gratuita"
          className="px-4 py-2 text-sm font-semibold text-primary hover:text-white hover:bg-primary/20 transition-all rounded-lg flex items-center gap-2"
        >
          <GiftIcon size={16} />
          Guía Gratuita
        </Link>
      </nav>

      {/* Desktop Right Buttons */}
      <div className="hidden lg:flex gap-3 items-center">
        <a 
          href="/login"
          className="text-sm font-medium text-textMuted hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-surface"
        >
          Iniciar Sesión
        </a>
        <button 
          onClick={() => scrollToDemoBooking()}
          className="text-sm bg-primary text-background font-bold px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:scale-105"
        >
          Prueba Gratis
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-textMuted hover:text-white transition-colors p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-surface/95 backdrop-blur-lg border-b border-borderDark shadow-lg lg:hidden">
          <nav className="flex flex-col p-6 space-y-2">
            <div className="pb-4 border-b border-borderDark">
              <p className="text-xs font-semibold text-primary mb-3">LA SOLUCIÓN</p>
              {solutionLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm text-textMuted hover:text-white hover:bg-primary/5 rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#caracteristicas"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm text-textMuted hover:text-white hover:bg-primary/5 rounded transition-colors"
            >
              Características
            </a>
            <a
              href="#precios"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm text-textMuted hover:text-white hover:bg-primary/5 rounded transition-colors"
            >
              Planes
            </a>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm text-textMuted hover:text-white hover:bg-primary/5 rounded transition-colors flex items-center gap-2"
            >
              <BookOpenIcon size={16} />
              Blog
            </Link>

            <div className="pt-4 border-t border-borderDark space-y-2">
              <Link
                href="/guia-gratuita"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-primary hover:text-white hover:bg-primary/20 rounded transition-colors"
              >
                📦 Descargar Guía Gratuita
              </Link>
              <a 
                href="/login"
                className="block w-full text-sm font-medium text-textMuted hover:text-white transition-colors px-3 py-2 rounded hover:bg-surface"
              >
                Iniciar Sesión
              </a>
              <button 
                onClick={() => {
                  scrollToDemoBooking();
                  setIsOpen(false);
                }}
                className="w-full text-sm bg-primary text-background font-bold px-4 py-2.5 rounded hover:bg-primary/90 transition-all"
              >
                Prueba Gratis
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}