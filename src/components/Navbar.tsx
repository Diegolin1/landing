"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-borderDark h-16 flex items-center justify-between px-6 lg:px-12">
      <div className="text-2xl font-bold flex items-center gap-2">
        <span className="text-primary tracking-tighter">///</span>
        <span className="tracking-wide">Lumina</span>
      </div>
      
      <nav className="hidden md:flex gap-8 text-sm font-medium text-textMuted">
        <a href="#solucion" className="hover:text-primary transition-colors">La Solución</a>
        <a href="#caracteristicas" className="hover:text-primary transition-colors">Características</a>
        <a href="#precios" className="hover:text-primary transition-colors">Planes</a>
      </nav>

      <div className="hidden md:flex gap-4">
        <button className="text-sm font-medium text-textMuted hover:text-white transition-colors">
          Iniciar Sesión
        </button>
        <button className="text-sm bg-surface border border-borderDark px-4 py-2 rounded-md hover:border-primary hover:text-primary transition-colors">
          Prueba Gratis
        </button>
      </div>

      <button className="md:hidden text-textMuted" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}