"use client";

import React, { useState, useEffect } from "react";
import StructuredData from "./StructuredData";
import {
  Check,
  X,
  Shield,
  Smartphone,
  Users,
  BarChart3,
  Clock,
  Lock,
  ArrowRight,
  MessageCircle,
  FileText,
  Menu,
  ChevronDown,
  Play,
  TrendingUp,
  Star,
  Award,
  Sparkles,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Sun,
  Moon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LuminaRefactored = () => {
        {/* Sticky CTA Desktop Only */}
        <div className="hidden sm:block fixed bottom-8 right-8 z-40 animate-bounce">
          <button
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              pricingSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl shadow-blue-600/50 flex items-center gap-2 text-lg transition-all active:scale-95"
            aria-label="Ver planes de Lumina"
          >
            💡 Ver Planes
          </button>
        </div>
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [roiInputs, setRoiInputs] = useState({ orders: 50, avgTicket: 5000, errorRate: 15 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const comparisonData = [
    {
      feature: "Catálogos de productos",
      traditional: "PDFs pesados que se desactualizan",
      lumina: "Showroom digital 100% dinámico",
      tooltip: "Tus clientes siempre ven existencias y precios reales en tiempo real."
    },
    {
      feature: "Toma de pedidos",
      traditional: "WhatsApp y errores manuales",
      lumina: "Portal de autoservicio 24/7",
      tooltip: "Reduce errores de captura en un 99% y libera a tu equipo de ventas."
    },
    {
      feature: "Facturación CFDI 4.0",
      traditional: "Proceso manual lento y tedioso",
      lumina: "Generación automática en 1 clic",
      tooltip: "Ahorra 15 horas a la semana automatizando el timbrado legal."
    },
    {
      feature: "Privacidad de Precios",
      traditional: "Expuestos a toda la competencia",
      lumina: "Acceso privado por cliente (Gate B2B)",
      tooltip: "Controla quién ve qué precios y protege tus márgenes comerciales."
    }
  ];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const calculateROI = () => {
    const monthlyRevenue = roiInputs.orders * roiInputs.avgTicket;
    const lostToErrors = monthlyRevenue * (roiInputs.errorRate / 100);
    const recovered = lostToErrors * 0.7;
    const planCost = billingCycle === 'monthly' ? 1299 : 999;
    const netGain = recovered - planCost;
    const roi = ((netGain / planCost) * 100).toFixed(0);
    return { lostToErrors, recovered, netGain, roi };
  };

  const prices = {
    starter: billingCycle === 'monthly' ? 499 : 399,
    professional: billingCycle === 'monthly' ? 1299 : 999,
    enterprise: 'Personalizado'
  };

  const testimonials = [
    {
      name: "Roberto García",
      role: "Director Comercial",
      company: "Calzado García León",
      image: "/testimonial-1.jpg",
      rating: 5,
      text: "Pasamos de enviar PDFs por WhatsApp a tener un catálogo profesional que nuestros clientes consultan 24/7. Aumentamos 40% en pedidos recurrentes."
    },
    {
      name: "María Fernanda Ruiz",
      role: "Gerente de Ventas",
      company: "Textiles del Bajío",
      image: "/testimonial-2.jpg",
      rating: 5,
      text: "La facturación CFDI 4.0 automática nos ahorra 15 horas a la semana. Recuperamos la inversión en el primer mes."
    },
    {
      name: "Carlos Mendoza",
      role: "CEO",
      company: "Distribuidora MX",
      image: "/testimonial-3.jpg",
      rating: 5,
      text: "El CRM de vendedores transformó nuestra operación. Ahora sabemos exactamente qué vendedor genera más, en tiempo real."
    }
  ];

  const faqs = [
    {
      q: "¿Cuánto tiempo toma la implementación?",
      a: "Típicamente puedes estar operando en menos de 24 horas. Nuestro equipo te ayuda con la carga masiva de tus primeros productos y la configuración del Gate B2B."
    },
    {
      q: "¿Mis clientes necesitan descargar una App?",
      a: "No. Lumina es una Progressive Web App (PWA). Tus clientes acceden vía URL privada, pero la experiencia es fluida y rápida como una aplicación nativa, optimizada para móviles."
    },
    {
      q: "¿Cómo funciona la integración con el SAT?",
      a: "Lumina se conecta nativamente con proveedores autorizados de certificación (PAC). Al marcar un pedido como pagado, puedes generar la factura CFDI 4.0 con un solo clic."
    },
    {
      q: "¿Puedo tener diferentes precios para diferentes clientes?",
      a: "Sí. Nuestra función de Gate B2B te permite asignar niveles de precio o descuentos específicos por grupo de clientes, protegiendo siempre tus márgenes."
    },
    {
      q: "¿Ofrecen garantía de satisfacción?",
      a: "Sí, ofrecemos garantía de 30 días. Si Lumina no cumple tus expectativas, te devolvemos el 100% de tu inversión, sin preguntas."
    },
    {
      q: "¿Qué tipo de soporte ofrecen?",
      a: "Todos los planes incluyen soporte por email y chat. El plan Professional incluye soporte prioritario por WhatsApp con tiempos de respuesta < 2 horas."
    }
  ];

  return (
    <>
      <StructuredData />
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans antialiased scroll-smooth transition-colors duration-300">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 dark:shadow-blue-900 group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-2xl">L</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-blue-900 dark:text-blue-100">Lumina</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-sm font-bold text-slate-500 dark:text-slate-400">
            <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">Solución</a>
            <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">Funciones</a>
            <a href="#comparativa" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">Comparativa</a>
            <a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">Precios</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="hidden sm:block text-blue-600 dark:text-blue-400 font-bold text-sm px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
              Iniciar Sesión
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 dark:shadow-blue-900/40 active:scale-95"
            >
              Agenda tu Demo
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-6 gap-4 font-bold text-slate-600 dark:text-slate-300">
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="py-4 border-b border-slate-50 dark:border-slate-800">Solución</a>
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="py-4 border-b border-slate-50 dark:border-slate-800">Funciones</a>
              <a href="#comparativa" onClick={() => setIsMenuOpen(false)} className="py-4 border-b border-slate-50 dark:border-slate-800">Comparativa</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="py-4 border-b border-slate-50 dark:border-slate-800">Precios</a>
              <button className="w-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-4 rounded-xl mt-4">Iniciar Sesión</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Mejorado con Glassmorphism y Animaciones */}
      <header className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-44 bg-gradient-to-br from-blue-50/30 via-white to-emerald-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-blue-900/20 transition-colors duration-300">
        {/* Efectos de fondo */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 dark:bg-emerald-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-lg shadow-blue-200 dark:shadow-none animate-bounce-slow">
              <Sparkles size={14} className="fill-white" />
              <span>✨ Plataforma B2B #1 en México 2024</span>
            </div>
            {/* H1 SEO visible */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 dark:text-white mb-4 mt-2">
              Automatiza pedidos y facturas B2B con Lumina
            </h1>

            {/* Título principal - Ajustado al Copywriting */}
            <h1 className="text-5xl lg:text-7xl font-extrabold text-blue-900 dark:text-white leading-[1.05] mb-8 tracking-tight">
              Ahorra <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">10 horas a la semana</span> en tus entregas
            </h1>

            {/* Subtítulo con beneficios claros - Menos Nosotros, Más Tú */}
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6 max-w-lg font-medium">
              Toma el control total de tu negocio. Olvida el caos operativo y enfócate en lo que importa: <span className="text-blue-600 dark:text-blue-400 font-bold">hacer crecer tus ventas</span> mientras Lumina automatiza tus pedidos y facturas.
            </p>

            {/* CTAs mejorados - Azul Eléctrico y Social Proof */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                  aria-label="Solicita tu demo gratis"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Solicita tu demo gratis
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center justify-center gap-3 group shadow-lg"
                  aria-label="Ver demo de Lumina"
                >
                  <Play size={20} className="fill-blue-600 dark:fill-blue-400" />
                  Ver Demo
                </button>
              </div>
                {/* Garantía visible cerca del CTA */}
                <div className="mt-2">
                  <span className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-bold text-xs px-4 py-2 rounded-full border border-emerald-200 dark:border-emerald-800">
                    Garantía 30 días, sin riesgo.
                  </span>
                </div>
              
              {/* Prueba Social Instantánea */}
              <div className="flex items-center gap-3 mt-2 px-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div className="w-full h-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-[10px] font-bold text-blue-600">
                        {String.fromCharCode(64 + i)}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Únete a <span className="text-blue-600 dark:text-blue-400 font-bold">+500 fabricantes y empresas ya usan Lumina</span>
                </p>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Shield size={18} className="text-emerald-500" />
                <span className="font-semibold">Sin tarjeta</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Clock size={18} className="text-blue-500" />
                <span className="font-semibold">Setup rápido</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Award size={18} className="text-amber-500" />
                <span className="font-semibold">Garantía total</span>
              </div>
            </div>
          </motion.div>

          {/* Sección de video/demo con Glassmorphism */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-[3rem] blur-3xl -z-10 animate-pulse"></div>
            <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl rounded-3xl border-2 border-white/50 dark:border-slate-700/50 shadow-2xl p-6 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl aspect-video w-full flex flex-col items-center justify-center border-2 border-slate-700 overflow-hidden group cursor-pointer shadow-inner"
                onClick={() => setVideoModalOpen(true)}
              >
                {/* Video placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-emerald-600/20 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Dashboard Mockup Simulation Behind */}
                <div className="absolute inset-0 p-6 opacity-30 flex flex-col gap-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500/50 rounded-full"></div>
                      <div className="w-3 h-3 bg-amber-500/50 rounded-full"></div>
                      <div className="w-3 h-3 bg-emerald-500/50 rounded-full"></div>
                    </div>
                    <div className="h-4 w-24 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-16 bg-blue-500/20 rounded-xl border border-white/10"></div>
                    <div className="h-16 bg-white/10 rounded-xl border border-white/10"></div>
                    <div className="h-16 bg-white/10 rounded-xl border border-white/10"></div>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-4">
                    <div className="w-full h-full border-t border-l border-white/10 rounded-tl-lg"></div>
                  </div>
                </div>

                <div className="relative z-10 text-center">
                  <p className="text-white font-bold text-base mb-6">3 Momentos que van a cambiar tu negocio:</p>
                  <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto">
                    {[
                      { icon: Lock, title: "Catálogo Privado 24/7", desc: "Tus clientes ven precios únicos" },
                      { icon: FileText, title: "Factura en 1 Click", desc: "CFDI 4.0 automático" },
                      { icon: TrendingUp, title: "CRM de Vendedores", desc: "Ve quién vende qué en vivo" }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setVideoModalOpen(true)}
                        className="p-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-blue-400/50 rounded-lg cursor-pointer transition-all transform hover:scale-105 group"
                      >
                        <div className="w-10 h-10 bg-blue-600/60 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <item.icon size={20} className="text-white" />
                        </div>
                        <p className="text-white font-semibold text-xs mb-1">{item.title}</p>
                        <p className="text-blue-200 text-[11px]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Glassmorphism Decorative Elements */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between gap-4">
                  <div className="h-12 w-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"></div>
                  <div className="h-12 w-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"></div>
                </div>
              </div>

              {/* Mini stats con Glassmorphism */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { label: "Empresas", value: "500+", textColor: "text-blue-600 dark:text-blue-400" },
                  { label: "Ventas MXN", value: "100M+", textColor: "text-emerald-600 dark:text-emerald-400" },
                  { label: "Rating", value: "4.9/5", textColor: "text-amber-600 dark:text-amber-400" }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-3 bg-white/50 dark:bg-slate-700/50 backdrop-blur-md border border-white/50 dark:border-slate-600/50 rounded-xl">
                    <p className={`text-xl font-bold ${stat.textColor}`}>{stat.value}</p>
                    <p className="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Social Proof Section - Logos en escala de grises */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 border-y border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-slate-400 dark:text-slate-500 font-bold text-sm uppercase tracking-[0.15em] mb-12 flex items-center justify-center gap-2">
            <Award size={18} className="text-slate-400" />
            Empresas y Facultades que confían en nosotros
          </p>

          {/* Logos de sectores industriales en escala de grises */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {[
              "Calzado",
              "Textil",
              "Alimentos",
              "Electrónica",
              "Distribución"
            ].map((sector, i) => (
              <div key={i} className="font-black text-lg md:text-xl text-slate-500 dark:text-slate-400 tracking-tighter">
                {sector}
              </div>
            ))}
          </div>

          {/* Trust badges mejorados con Dark Mode */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12 border-t border-slate-200 dark:border-slate-800">
            {[
              { icon: <CheckCircle2 size={24} />, label: "SAT CFDI 4.0", sub: "Validado", bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400" },
              { icon: <Shield size={24} />, label: "SSL 256-bit", sub: "Seguro", bg: "bg-emerald-100 dark:bg-emerald-900/30", text: "text-emerald-600 dark:text-emerald-400" },
              { icon: <TrendingUp size={24} />, label: "99.9% Uptime", sub: "Garantizado", bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-600 dark:text-amber-400" },
              { icon: <Users size={24} />, label: "500+ Usuarios", sub: "Activos", bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400" }
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                <div className={`w-12 h-12 rounded-xl ${badge.bg} flex items-center justify-center ${badge.text}`}>
                  {badge.icon}
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{badge.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios Section - Mejorado con Dark Mode y Animaciones */}
      <section className="py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Fabricantes que transformaron su operación con Lumina</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} size={20} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-8 italic text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-600 dark:border-blue-400">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-blue-900 dark:text-blue-100">{testimonial.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativa Tú vs Competencia - Refactorizado */}
      <section id="comparativa" className="py-24 lg:py-32 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-6">Tú vs. La Competencia</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Por qué las empresas líderes están abandonando los métodos tradicionales por Lumina.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden relative">
            {/* Sticky Header Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 z-20 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-6 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-1/3">Característica</th>
                    <th className="p-6 text-sm font-bold uppercase tracking-wider text-red-600 w-1/3 text-center">Competencia</th>
                    <th className="p-6 text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 w-1/3 text-center">Lumina</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 font-bold text-slate-800 dark:text-slate-200">{row.feature}</td>
                      <td className="p-6 text-center border-x border-slate-100 dark:border-slate-700">
                        <div className="flex flex-col items-center gap-2">
                          <X className="text-red-500" size={32} strokeWidth={3} />
                          <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{row.traditional}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center bg-blue-50/30 dark:bg-blue-900/10 relative">
                        <div 
                          className="flex flex-col items-center gap-2 cursor-help group"
                          onMouseEnter={() => setHoveredFeature(i)}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <Check className="text-emerald-500" size={32} strokeWidth={3} />
                          <span className="text-sm text-blue-900 dark:text-blue-100 font-bold underline decoration-blue-200 decoration-dotted underline-offset-4">{row.lumina}</span>
                          
                          {/* Custom Tooltip */}
                          <AnimatePresence>
                            {hoveredFeature === i && (
                              <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-slate-900 text-white text-xs rounded-xl shadow-2xl z-30 pointer-events-none"
                              >
                                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45"></div>
                                <p className="leading-relaxed font-medium">{row.tooltip}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <p className="text-xl font-bold italic relative z-10">
              &ldquo;Lumina elimino el caos de pedidos por WhatsApp y nos permitio recuperar 15 horas a la semana de trabajo administrativo.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Características - Mejorado con Dark Mode y Animaciones */}
      <section id="features" className="bg-slate-50 dark:bg-slate-900/50 py-24 lg:py-32 px-4 sm:px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">Todo lo que necesitas para dominar tu mercado</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">Ahorra tiempo y elimina el error humano con herramientas diseñadas para la eficiencia.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Lock size={28} />, title: "Gate B2B", desc: "Protege tus precios. Solo clientes autorizados acceden a tu catálogo.", bg: "bg-blue-50 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400" },
              { icon: <Smartphone size={28} />, title: "100% Mobile", desc: "Tus clientes pueden pedir desde su celular, en cualquier lugar.", bg: "bg-emerald-50 dark:bg-emerald-900/30", text: "text-emerald-600 dark:text-emerald-400" },
              { icon: <Users size={28} />, title: "CRM de Ventas", desc: "Gestiona a tus vendedores y sus metas desde un solo lugar.", bg: "bg-blue-50 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400" },
              { icon: <FileText size={28} />, title: "CFDI 4.0", desc: "Facturación automática integrada lista para el SAT.", bg: "bg-blue-50 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className={`p-4 ${feature.bg} ${feature.text} rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-blue-900 dark:text-white mb-3">{feature.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabla Comparativa Secundaria - RESPONSIVE */}
      <section id="comparativa-plataformas" className="py-24 lg:py-32 px-4 sm:px-6 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">Lumina vs Shopify y otros</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Por qué los fabricantes eligen una solución B2B especializada.</p>
          </div>

          {/* Versión Desktop: Tabla */}
          <div className="hidden sm:block relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-0 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden bg-white dark:bg-slate-800">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <th className="p-6 text-slate-400 font-bold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-700">Característica</th>
                    <th className="p-6 text-blue-900 dark:text-blue-400 font-bold text-lg border-b border-blue-600 bg-blue-50/50 dark:bg-blue-900/20">Lumina B2B</th>
                    <th className="p-6 text-slate-400 font-medium border-b border-slate-200 dark:border-slate-700">Shopify/B2C</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {[
                    ["Facturación CFDI 4.0 Nativa", true, "Solo con Apps"],
                    ["Privacidad B2B (Gate)", true, "No nativo"],
                    ["CRM de Agentes de Venta", true, false],
                    ["UX Especializada", true, "Enfoque Minorista"]
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="p-6 font-semibold text-slate-700 dark:text-slate-300 text-sm">{row[0]}</td>
                      <td className="p-6 bg-blue-50/30 dark:bg-blue-900/10">
                        {row[1] === true ? <Check className="text-emerald-500" /> : <X className="text-red-300" />}
                      </td>
                      <td className="p-6 text-slate-400 text-sm">
                        {row[2] === false ? <X className="text-red-300" /> : row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Versión Mobile: Cards apiladas */}
          <div className="sm:hidden space-y-3">
            {[
              ["Facturación CFDI 4.0 Nativa", true, "Solo con Apps"],
              ["Privacidad B2B (Gate)", true, "No nativo"],
              ["CRM de Agentes de Venta", true, false],
              ["UX Especializada", true, "Enfoque Minorista"]
            ].map((row, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">{row[0]}</p>
                <div className="flex justify-between gap-4">
                  <div className="flex-1 text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">Lumina</p>
                    <div className="flex justify-center">
                      {row[1] === true ? <Check className="text-emerald-500" size={20} /> : <X className="text-red-300" size={20} />}
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">Shopify</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {row[2] === false ? <X className="text-red-300 inline-block" size={20} /> : row[2]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section - NUEVO */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-900 dark:to-indigo-950 text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Calcula tu ROI con Lumina</h2>
            <p className="text-xl text-blue-100">Descubre cuánto dinero estás perdiendo sin un sistema automatizado</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <label className="block text-sm font-bold mb-3 text-blue-100">Pedidos por mes</label>
                <input
                  type="number"
                  value={roiInputs.orders}
                  onChange={(e) => setRoiInputs({...roiInputs, orders: Number(e.target.value)})}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 text-white text-lg font-bold focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-3 text-blue-100">Ticket promedio (MXN)</label>
                <input
                  type="number"
                  value={roiInputs.avgTicket}
                  onChange={(e) => setRoiInputs({...roiInputs, avgTicket: Number(e.target.value)})}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 text-white text-lg font-bold focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-3 text-blue-100">% de errores/pérdidas</label>
                <input
                  type="number"
                  value={roiInputs.errorRate}
                  onChange={(e) => setRoiInputs({...roiInputs, errorRate: Number(e.target.value)})}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 text-white text-lg font-bold focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <p className="text-blue-200 text-sm font-semibold mb-2">Pierdes al mes</p>
                <p className="text-4xl font-black text-red-300">
                  ${calculateROI().lostToErrors.toLocaleString()}
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <p className="text-blue-200 text-sm font-semibold mb-2">Recuperas con Lumina</p>
                <p className="text-4xl font-black text-emerald-300">
                  ${calculateROI().recovered.toLocaleString()}
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <p className="text-blue-200 text-sm font-semibold mb-2">ROI Primer Mes</p>
                <p className="text-4xl font-black text-amber-300">
                  {calculateROI().roi}%
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-blue-100 text-sm mb-6">
                💡 <strong>Ganancia neta estimada:</strong> ${calculateROI().netGain.toLocaleString()} MXN/mes
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 active:scale-95"
              >
                Reclamar mi acceso gratuito →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Mockup Section - NUEVO */}
      <section className="py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 transition-colors duration-300 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-6">Tu nuevo centro de comando B2B</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Una interfaz diseñada para la velocidad. Sin distracciones, solo herramientas para <span className="text-blue-600 dark:text-blue-400 font-bold">vender más</span> y gestionar mejor.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            {/* Mockup Frame */}
            <div className="relative z-10 bg-slate-100 dark:bg-slate-800 rounded-[2rem] p-2 md:p-4 shadow-2xl border-4 border-slate-200 dark:border-slate-700">
              <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden aspect-video relative shadow-inner">
                {/* Mockup App Interface (Visual representation) */}
                <div className="absolute inset-0 flex">
                  {/* Mock Sidebar */}
                  <div className="w-[18%] bg-slate-50 dark:bg-slate-800/50 border-r border-slate-200 dark:border-slate-700 p-4 space-y-6 hidden md:block">
                    <div className="h-8 w-full bg-blue-600 rounded-lg"></div>
                    <div className="space-y-3">
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className={`h-3 w-full rounded-full ${i === 1 ? 'bg-blue-100 dark:bg-blue-900/40' : 'bg-slate-200 dark:bg-slate-700'}`}></div>
                      ))}
                    </div>
                  </div>
                  {/* Mock Content */}
                  <div className="flex-1 p-6 md:p-10 space-y-8 bg-white dark:bg-slate-900">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2">
                        <div className="h-6 w-48 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                        <div className="h-4 w-32 bg-slate-50 dark:bg-slate-800/50 rounded-full"></div>
                      </div>
                      <div className="h-12 w-40 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { val: "$125,430", lab: "Ventas Hoy", col: "blue" },
                        { val: "48", lab: "Pedidos Nuevos", col: "emerald" },
                        { val: "92%", lab: "Eficiencia", col: "amber" }
                      ].map((card, i) => (
                        <div key={i} className="p-6 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-700">
                          <div className={`w-8 h-8 rounded-lg bg-${card.col}-100 dark:bg-${card.col}-900/30 mb-4`}></div>
                          <p className={`text-2xl font-black text-${card.col}-600 dark:text-${card.col}-400`}>{card.val}</p>
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{card.lab}</p>
                        </div>
                      ))}
                    </div>
                    <div className="h-48 md:h-64 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-700 p-6 flex items-center justify-center">
                       <div className="text-center space-y-4 opacity-40">
                         <BarChart3 size={48} className="mx-auto text-slate-400" />
                         <p className="text-sm font-bold">Gráfico de tendencias en tiempo real</p>
                       </div>
                    </div>
                  </div>
                </div>
                {/* Realism Overlays */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-white/10 pointer-events-none"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-900/40 backdrop-blur-[2px]">
                   <button 
                    onClick={() => setVideoModalOpen(true)}
                    className="bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-2xl font-black shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform"
                   >
                     <Play size={20} className="fill-blue-600 dark:fill-blue-400" /> VER INTERFAZ REAL
                   </button>
                </div>
              </div>
            </div>
            {/* Background decorations */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section - Mejorado */}
      <section id="pricing" className="bg-slate-900 py-24 lg:py-40 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 -z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Inversión que se paga sola</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Sin comisiones por venta. Sin costos ocultos. Cancela cuando quieras.</p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-bold transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-500'}`}>Mensual</span>
              <button 
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="w-14 h-8 bg-slate-700 rounded-full p-1 relative transition-colors hover:bg-slate-600"
              >
                <div className={`w-6 h-6 bg-blue-500 rounded-full shadow-lg transition-transform ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'}`}></div>
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-bold transition-colors ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-500'}`}>Anual</span>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Ahorra 20%
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {/* Starter */}
            <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700 text-white hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10">
              <h4 className="text-xl font-bold mb-2">Starter</h4>
              <p className="text-slate-400 mb-8 text-sm italic">Para fabricantes que empiezan a digitalizarse.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">${prices.starter}</span>
                <span className="text-slate-400"> MXN/mes</span>
                {billingCycle === 'yearly' && <p className="text-xs text-blue-400 mt-1 font-medium">Facturado anualmente</p>}
                <p className="text-[11px] text-slate-500 italic mt-3 border-t border-slate-700 pt-3">Ideal para probar. Cancela cuando quieras.</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-blue-400 shrink-0" />Hasta 50 productos</li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-blue-400 shrink-0" />1 Agente de venta</li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-blue-400 shrink-0" />Showroom Digital interactivo</li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-blue-400 shrink-0" />Facturación CFDI 4.0 básica</li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-blue-400 shrink-0" />Soporte vía Ticket</li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-blue-400 shrink-0" />Portal de autoservicio 24/7</li>
              </ul>
              <button className="w-full py-4 rounded-xl font-bold border border-slate-600 hover:bg-slate-700 transition-all active:scale-95">
                Elegir Starter
              </button>
            </div>

            {/* Professional */}
            <div className="bg-blue-600 p-1 rounded-3xl relative transform lg:scale-105 shadow-2xl">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-xs font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                Más Popular
              </div>
              <div className="bg-slate-900 p-8 rounded-[1.6rem] text-white">
                <h4 className="text-2xl font-bold mb-2">Professional</h4>
                <p className="text-slate-400 mb-8 text-sm italic">Para empresas en expansión constante.</p>
                <div className="mb-8">
                  <span className="text-5xl font-extrabold">${prices.professional}</span>
                  <span className="text-slate-400"> MXN/mes</span>
                  {billingCycle === 'yearly' && <p className="text-xs text-blue-400 mt-1 font-medium">Facturado anualmente</p>}
                  <p className="text-[11px] text-slate-400 italic mt-3 border-t border-slate-700 pt-3">La opción sin riesgo de los que ya facturan +$1M.</p>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex gap-3 text-slate-200"><Check size={20} className="text-blue-400 shrink-0" />Productos ilimitados</li>
                  <li className="flex gap-3 text-slate-200"><Check size={20} className="text-blue-400 shrink-0" />Hasta 10 agentes de venta</li>
                  <li className="flex gap-3 text-slate-200"><Check size={20} className="text-blue-400 shrink-0" />Facturación CFDI 4.0 ilimitada</li>
                  <li className="flex gap-3 text-slate-200"><Check size={20} className="text-blue-400 shrink-0" />Gate B2B Inteligente (precios por cliente)</li>
                  <li className="flex gap-3 text-slate-200"><Check size={20} className="text-blue-400 shrink-0" />Portal de autoservicio 24/7</li>
                  <li className="flex gap-3 text-slate-200"><Check size={20} className="text-blue-400 shrink-0" />Soporte prioritario WhatsApp & Ticket</li>
                  <li className="flex gap-3 text-slate-200"><Check size={20} className="text-blue-400 shrink-0" />Integración SAT/PAC</li>
                </ul>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-4 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-900/20 transition-all hover:scale-[1.02] active:scale-95"
                >
                  Probar Professional Gratis
                </button>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700 text-white hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10">
              <h4 className="text-xl font-bold mb-2">Enterprise</h4>
              <p className="text-slate-400 mb-8 text-sm italic">Soluciones a medida para grandes corporativos.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold italic">Personalizado</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-blue-400 shrink-0" />Agentes ilimitados</li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-blue-400 shrink-0" />Integración API / ERP</li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-blue-400 shrink-0" />Account Manager dedicado</li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-blue-400 shrink-0" />Entrenamiento presencial</li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-blue-400 shrink-0" />Portal de autoservicio 24/7</li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-blue-400 shrink-0" />Facturación CFDI 4.0 ilimitada</li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-blue-400 shrink-0" />Soporte prioritario WhatsApp & Ticket</li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-blue-400 shrink-0" />Integración SAT/PAC</li>
              </ul>
              <button className="w-full py-4 rounded-xl font-bold border border-slate-600 hover:bg-slate-700 transition-all active:scale-95">
                Contactar Ventas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-lg text-slate-600">Todo lo que necesitas saber sobre Lumina B2B.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-sm hover:shadow-md"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center gap-4"
                >
                  <span className="font-bold text-lg text-blue-950">{faq.q}</span>
                  <ChevronDown className={`shrink-0 text-blue-600 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${openFaqIndex === index ? 'pb-8 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA Mejorado */}
      <section className="py-32 px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-bold mb-8">
            <Sparkles size={16} />
            <span>Prueba sin riesgo por 14 días</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Transforma tus ventas B2B <span className="text-emerald-300">hoy mismo</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Únete a los +500 fabricantes mexicanos que ya eliminaron el caos de WhatsApp y aumentaron sus ventas 30%.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3"
              aria-label="Solicita tu showroom en 24 horas"
            >
              👉 QUIERO MI SHOWROOM EN 24 HORAS
            </button>
            <a
              href="https://wa.me/5214771234567?text=Hola,%20quiero%20más%20información%20sobre%20Lumina%20B2B"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-white font-bold text-xl px-12 py-5 border-2 border-white rounded-2xl hover:bg-white/10 transition-all"
            >
              <MessageCircle />
              Hablar con Ventas
            </a>
          </div>
          <p className="text-blue-100 text-xs mb-6">
            ✅ Setup gratis en 24 horas. No necesitas tarjeta de crédito para comenzar.
          </p>
          <p className="text-blue-200 text-sm flex items-center justify-center gap-4 hidden">
            <span>✓ Sin tarjeta de crédito</span>
            <span>•</span>
            <span>✓ Garantía 30 días</span>
            <span>•</span>
            <span>✓ Cancela cuando quieras</span>
          </p>
        </div>
      </section>

      {/* Strategic Trust Section - NUEVO */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 px-4 sm:px-6 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Trust Badge 1 - Seguridad */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <Shield size={24} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm mb-1">Datos 100% Seguros</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Encriptación SSL 256-bit. Tus datos y los de tus clientes protegidos.</p>
                </div>
              </div>
            </div>

            {/* Trust Badge 2 - Geográfico */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm mb-1">Fabricantes de León</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">500+ empresas locales confían en Lumina para crecer.</p>
                </div>
              </div>
            </div>

            {/* Trust Badge 3 - SAT/Certificación */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 size={24} className="text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm mb-1">SAT CFDI 4.0 Certificado</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Validado con proveedores autorizados del SAT.</p>
                </div>
              </div>
            </div>

            {/* Trust Badge 4 - Garantía */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <Award size={24} className="text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm mb-1">Garantía 30 Días</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Si no satisface, devolvemos 100% sin preguntas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA Button - Mobile Only */}
      <div className="sm:hidden fixed bottom-6 right-4 z-40 animate-bounce">
        <button
          onClick={() => {
            const pricingSection = document.getElementById('pricing');
            pricingSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full shadow-2xl shadow-blue-600/50 flex items-center gap-2 text-sm transition-all active:scale-95"
        >
          💡 Ver Planes
        </button>
      </div>

      {/* Footer Completo - NUEVO */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Logo y descripción */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-2xl">L</span>
                </div>
                <span className="text-2xl font-black text-white">Lumina B2B</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
                La plataforma #1 de showroom digital para fabricantes mexicanos. Automatiza pedidos, factura CFDI 4.0 y crece tus ventas B2B.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Producto */}
            <div>
              <h4 className="text-white font-bold mb-4">Producto</h4>
              <ul className="space-y-3 text-sm">
                {['Características', 'Precios', 'Demo', 'Casos de Éxito', 'API Docs', 'Integraciones'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h4 className="text-white font-bold mb-4">Recursos</h4>
              <ul className="space-y-3 text-sm">
                {['Blog', 'Guías Gratuitas', 'Webinars', 'Centro de Ayuda', 'Videos Tutoriales', 'Calculadora ROI'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="text-white font-bold mb-4">Empresa</h4>
              <ul className="space-y-3 text-sm mb-6">
                {['Acerca de', 'Contacto', 'Soporte', 'Carreras', 'Términos', 'Privacidad'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
              {/* Contacto rápido */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-400" />
                  <a href="mailto:Diegorodvaz73@gmail.com" className="hover:text-blue-400">Diegorodvaz73@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-blue-400" />
                  <a href="tel:+524776633068" className="hover:text-blue-400">+52 477 663 3068</a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-blue-400 mt-1 shrink-0" />
                  <span className="text-slate-400">León, Guanajuato, México</span>
                </div>
              </div>
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-500 text-center md:text-left">
                © 2024 Lumina B2B. Todos los derechos reservados. Hecho con ❤️ en México.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="hover:text-blue-400 transition-colors">Términos</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Privacidad</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-emerald-400" />
                  <span className="text-slate-500">Seguridad SAT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" 
            onClick={() => !isSubmitting && setIsModalOpen(false)}
          ></div>
          <div className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-in zoom-in-95 duration-300 border dark:border-slate-700">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white relative">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                disabled={isSubmitting}
              >
                <X size={24} />
              </button>
              <h3 className="text-3xl font-bold mb-2">Acceso Gratuito</h3>
              <p className="text-blue-100">Únete a la comunidad B2B y ahorra tiempo desde el primer día.</p>
            </div>
            
            <div className="p-8">
              {isSuccess ? (
                <div className="text-center py-12 animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-blue-950 dark:text-white mb-2">¡Solicitud recibida!</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">Pronto estaremos en contacto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Nombre Completo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Corporativo</label>
                    <input 
                      required
                      type="email" 
                      placeholder="juan@tuempresa.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Teléfono / WhatsApp</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="55 1234 5678"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all flex items-center justify-center gap-2 mt-6 disabled:bg-slate-300 shadow-xl shadow-blue-500/20"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      "Reclamar mi acceso gratuito"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Video Modal - NUEVO */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setVideoModalOpen(false)}
          ></div>
          <div className="relative z-10 w-full max-w-5xl animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors p-2"
            >
              <X size={32} />
            </button>
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700">
              <div className="aspect-video bg-slate-800 flex items-center justify-center">
                {/* Aquí iría el iframe de YouTube/Vimeo */}
                <div className="text-center">
                  <Play size={64} className="text-blue-500 mx-auto mb-4 fill-blue-500" />
                  <p className="text-white font-bold text-xl">Demo de Lumina B2B</p>
                  <p className="text-slate-400 mt-2">Video demo aquí (integrar iframe de YouTube)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default LuminaRefactored;
