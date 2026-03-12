"use client";

import React, { useState, useEffect } from "react";
import StructuredData from "./StructuredData";
import {
  Check,
  X,
  Shield,
  Smartphone,
  Users,
  Zap,
  BarChart3,
  Clock,
  Lock,
  ArrowRight,
  ChevronRight,
  MessageCircle,
  FileText,
  AlertCircle,
  Menu,
  ChevronDown,
  Play,
  TrendingUp,
  Star,
  Award,
  Target,
  DollarSign,
  Sparkles,
  CheckCircle2,
  Package,
  CreditCard,
  Layers,
  Truck,
  Globe,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from "lucide-react";

const LuminaRefactored = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [roiInputs, setRoiInputs] = useState({ orders: 50, avgTicket: 5000, errorRate: 15 });

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
      <div className="bg-white text-slate-900 font-sans antialiased scroll-smooth">
        {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-2xl">L</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-blue-900">Lumina</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-sm font-bold text-slate-500">
            <a href="#solucion" className="hover:text-blue-600 transition-colors py-2">Solución</a>
            <a href="#features" className="hover:text-blue-600 transition-colors py-2">Funciones</a>
            <a href="#comparativa" className="hover:text-blue-600 transition-colors py-2">Comparativa</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors py-2">Precios</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-blue-600 font-bold text-sm px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors">
              Iniciar Sesión
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95"
            >
              Agenda tu Demo
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-6 gap-4 font-bold text-slate-600">
              <a href="#solucion" onClick={() => setIsMenuOpen(false)} className="py-4 border-b border-slate-50">Solución</a>
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="py-4 border-b border-slate-50">Funciones</a>
              <a href="#comparativa" onClick={() => setIsMenuOpen(false)} className="py-4 border-b border-slate-50">Comparativa</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="py-4 border-b border-slate-50">Precios</a>
              <button className="w-full bg-blue-50 text-blue-600 py-4 rounded-xl mt-4">Iniciar Sesión</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Mejorado */}
      <header className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-44 bg-gradient-to-br from-blue-50/30 via-white to-emerald-50/20">
        {/* Efectos de fondo */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-lg shadow-blue-200 animate-bounce-slow">
              <Sparkles size={14} className="fill-white" />
              <span>✨ Plataforma B2B #1 en México 2024</span>
            </div>

            {/* Título principal */}
            <h1 className="text-5xl lg:text-7xl font-extrabold text-blue-900 leading-[1.05] mb-8 tracking-tight">
              Vende mayoreo <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">10x más rápido</span> con catálogo digital
            </h1>

            {/* Subtítulo con beneficios claros */}
            <p className="text-xl text-slate-700 leading-relaxed mb-6 max-w-lg font-medium">
              La plataforma que usan <span className="text-blue-600 font-bold">fabricantes de León, Gto.</span> para eliminar PDFs, automatizar pedidos y generar <span className="text-emerald-600 font-bold">facturas CFDI 4.0</span> en un clic.
            </p>

            {/* Lista de beneficios rápidos */}
            <div className="mb-10 space-y-3">
              {[
                "Catálogo digital privado 24/7 (Gate B2B)",
                "Facturación CFDI 4.0 automática integrada",
                "CRM de vendedores con métricas en tiempo real",
                "Aumenta 30% tus pedidos recurrentes"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs mejorados */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-2xl shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1 flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Prueba Gratis 14 Días
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
              <button
                onClick={() => setVideoModalOpen(true)}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-3 group shadow-lg"
              >
                <Play size={20} className="fill-blue-600" />
                Ver Demo (2 min)
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Shield size={18} className="text-emerald-500" />
                <span className="font-semibold">Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock size={18} className="text-blue-500" />
                <span className="font-semibold">Setup en 24 horas</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Award size={18} className="text-amber-500" />
                <span className="font-semibold">Garantía 30 días</span>
              </div>
            </div>
          </div>

          {/* Sección de video/demo mejorada */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-[3rem] blur-3xl -z-10 animate-pulse"></div>
            <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-2xl p-6 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl aspect-video w-full flex flex-col items-center justify-center border-2 border-slate-700 overflow-hidden group cursor-pointer"
                onClick={() => setVideoModalOpen(true)}
              >
                {/* Video placeholder mejorado */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-emerald-600/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform">
                    <Play size={32} className="fill-white text-white ml-1" />
                  </div>
                  <p className="text-white font-bold text-lg mb-2">Ver Lumina en acción</p>
                  <p className="text-blue-200 text-sm">2:30 min · Demo completa</p>
                </div>

                {/* Mockup de interfaz en fondo */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-40">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-lg"></div>
                    <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-lg"></div>
                    <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Mini stats debajo del video */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-3 bg-blue-50 rounded-xl">
                  <p className="text-2xl font-bold text-blue-600">500+</p>
                  <p className="text-xs text-slate-600 font-medium">Empresas</p>
                </div>
                <div className="text-center p-3 bg-emerald-50 rounded-xl">
                  <p className="text-2xl font-bold text-emerald-600">30%</p>
                  <p className="text-xs text-slate-600 font-medium">+ Ventas</p>
                </div>
                <div className="text-center p-3 bg-amber-50 rounded-xl">
                  <p className="text-2xl font-bold text-amber-600">24h</p>
                  <p className="text-xs text-slate-600 font-medium">Setup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof Section - Mejorado */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-500 font-bold text-sm uppercase tracking-[0.15em] mb-12 flex items-center justify-center gap-2">
            <Award size={18} className="text-amber-500" />
            Confianza de +500 fabricantes en México
          </p>

          {/* Logos de empresas */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-12">
            {[
              "CALZADO GARCÍA",
              "TEXTILES LEÓN",
              "MODA BAJÍO",
              "PLÁSTICOS MX",
              "DISTRIBUCIONES GTO"
            ].map((company, i) => (
              <div key={i} className="font-black text-xl md:text-2xl text-slate-400 hover:text-blue-600 transition-colors cursor-default tracking-tight">
                {company}
              </div>
            ))}
          </div>

          {/* Trust badges mejorados */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12 border-t border-slate-200">
            <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <CheckCircle2 size={24} />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-700">SAT CFDI 4.0</p>
                <p className="text-xs text-slate-500">Validado</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Shield size={24} />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-700">SSL 256-bit</p>
                <p className="text-xs text-slate-500">Seguro</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                <TrendingUp size={24} />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-700">99.9% Uptime</p>
                <p className="text-xs text-slate-500">Garantizado</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Users size={24} />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-700">500+ Clientes</p>
                <p className="text-xs text-slate-500">Activos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section - NUEVO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Fabricantes mexicanos que transformaron sus ventas B2B con Lumina</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} size={20} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-slate-700 font-medium leading-relaxed mb-8 italic text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                    <p className="text-xs text-slate-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El Problema vs La Solución */}
      <section id="solucion" className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">El caos del WhatsApp está frenando tu crecimiento</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Mantener tu negocio B2B en procesos manuales no solo es frustrante, es costoso.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Problema */}
            <div className="bg-slate-100 rounded-3xl p-8 lg:p-12 border border-slate-200 flex flex-col">
              <div className="flex items-center gap-3 text-red-600 font-bold mb-8 uppercase tracking-wider text-sm">
                <AlertCircle size={20} />
                <span>Método Tradicional</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-8">La pesadilla operativa</h3>
              <ul className="space-y-6 flex-grow">
                {[
                  "Catálogos en PDF pesados que se desactualizan al enviarlos.",
                  "Errores constantes en precios y existencias.",
                  "Cobranza manual y rastreo de depósitos por chats interminables.",
                  "Precios de mayoreo expuestos a la competencia."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-slate-600">
                    <X className="text-red-400 shrink-0 mt-1" size={20} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-6 bg-red-50 rounded-2xl border border-red-100">
                <p className="text-red-800 font-medium">Resultado: Pérdida del 15% de ventas por errores y falta de seguimiento.</p>
              </div>
            </div>

            {/* Solución - Lumina */}
            <div className="bg-blue-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl shadow-blue-200 transform lg:scale-[1.05] z-10 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="flex items-center gap-3 text-blue-100 font-bold mb-8 uppercase tracking-wider text-sm">
                <Zap size={20} className="fill-blue-100" />
                <span>La Solución Lumina</span>
              </div>
              <h3 className="text-3xl font-bold mb-8 italic tracking-tight">Showroom Inteligente</h3>
              <ul className="space-y-6 flex-grow">
                {[
                  "Catálogo digital 100% dinámico y privado.",
                  "Pedidos en 1 clic que se integran a tu almacén.",
                  "Facturación CFDI 4.0 automática desde el pedido.",
                  "Gestión de agentes de venta con métricas en tiempo real."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <Check className="text-emerald-400 shrink-0 mt-1" size={20} />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                <p className="text-blue-50 font-medium">Resultado: Aumento del 30% en pedidos recurrentes y 0 errores de facturación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Características */}
      <section id="features" className="bg-slate-50 py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Todo lo que necesitas para dominar tu mercado</h2>
              <p className="text-xl text-slate-600 max-w-2xl">Diseñamos Lumina pensando específicamente en la realidad del fabricante mexicano.</p>
            </div>
            <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Ver todas las funciones <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all hover:-translate-y-2 group">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Lock size={28} />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Gate B2B</h4>
              <p className="text-slate-600 leading-relaxed">
                Protege tus precios de mayoreo. Solo clientes autorizados pueden acceder a tu catálogo y condiciones comerciales.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all hover:-translate-y-2 group">
              <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl w-fit mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Smartphone size={28} />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">100% Mobile First</h4>
              <p className="text-slate-600 leading-relaxed">
                Diseñado para usarse en el celular, tanto para tus clientes como para tus vendedores en campo o exposiciones.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all hover:-translate-y-2 group">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Users size={28} />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">CRM Vendedores</h4>
              <p className="text-slate-600 leading-relaxed">
                Gestiona rutas, metas de venta y el historial de pedidos de cada agente desde un tablero centralizado y fácil de usar.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all hover:-translate-y-2 group">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FileText size={28} />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">CFDI Automático</h4>
              <p className="text-slate-600 leading-relaxed">
                Genera facturas 4.0 al instante. Sin procesos manuales, sin errores fiscales y listo para el SAT.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabla Comparativa */}
      <section id="comparativa" className="py-24 lg:py-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Lumina vs Shopify y otros</h2>
            <p className="text-lg text-slate-600">Por qué los fabricantes eligen una solución B2B especializada.</p>
          </div>

          <div className="relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-0 rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-6 text-slate-400 font-bold uppercase text-xs tracking-wider border-b border-slate-200">Característica</th>
                    <th className="p-6 text-blue-900 font-bold text-lg border-b border-blue-600 bg-blue-50/50">Lumina B2B</th>
                    <th className="p-6 text-slate-400 font-medium border-b border-slate-200">Shopify/B2C</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-6 font-semibold text-slate-700">Facturación CFDI 4.0 Nativa</td>
                    <td className="p-6 bg-blue-50/30"><Check className="text-emerald-500" /></td>
                    <td className="p-6 text-slate-400">Solo con Apps Extras</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-slate-700">Privacidad B2B (Gate)</td>
                    <td className="p-6 bg-blue-50/30"><Check className="text-emerald-500" /></td>
                    <td className="p-6 text-slate-400">No nativo</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-slate-700">CRM de Agentes de Venta</td>
                    <td className="p-6 bg-blue-50/30"><Check className="text-emerald-500" /></td>
                    <td className="p-6 text-slate-400"><X className="text-red-300" /></td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-slate-700">UX Especializada en Mayoristas</td>
                    <td className="p-6 bg-blue-50/30"><Check className="text-emerald-500" /></td>
                    <td className="p-6 text-slate-400">Enfoque Minorista</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-slate-700">Soporte Estratégico en MX</td>
                    <td className="p-6 bg-blue-50/30"><Check className="text-emerald-500" /></td>
                    <td className="p-6 text-slate-400">Genérico / Inglés</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Adorno de fondo */}
            <div className="absolute -z-10 -right-20 -bottom-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section - NUEVO */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
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
              <p className="text-blue-100 text-sm mb-4">
                💡 <strong>Ganancia neta estimada:</strong> ${calculateROI().netGain.toLocaleString()} MXN/mes
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl"
              >
                Comenzar mi Prueba Gratis →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Mejorado */}
      <section id="pricing" className="bg-slate-900 py-24 lg:py-40 px-6 relative overflow-hidden">
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
              </div>
              <ul className="space-y-4 mb-8">
                {["Hasta 50 productos", "1 Agente de venta", "Showroom Digital", "Soporte vía Ticket"].map((feat, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300">
                    <Check size={18} className="text-blue-400 shrink-0" />
                    {feat}
                  </li>
                ))}
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
                </div>
                <ul className="space-y-4 mb-10">
                  {[
                    "Productos ilimitados",
                    "Hasta 10 agentes de venta",
                    "Facturación CFDI 4.0 Ilimitada",
                    "Gate B2B Inteligente",
                    "Soporte Prioritario WhatsApp"
                  ].map((feat, i) => (
                    <li key={i} className="flex gap-3 text-slate-200">
                      <Check size={20} className="text-blue-400 shrink-0" />
                      {feat}
                    </li>
                  ))}
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
                {["Agentes ilimitados", "Integración API / ERP", "Account Manager Dedicado", "Entrenamiento presencial"].map((feat, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300">
                    <Check size={18} className="text-blue-400 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold border border-slate-600 hover:bg-slate-700 transition-all active:scale-95">
                Contactar Ventas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-slate-50 px-6">
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
      <section className="py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
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
            >
              Comenzar Prueba Gratis
              <ArrowRight />
            </button>
            <button className="flex items-center justify-center gap-3 text-white font-bold text-xl px-12 py-5 border-2 border-white rounded-2xl hover:bg-white/10 transition-all">
              <MessageCircle />
              Hablar con Ventas
            </button>
          </div>
          <p className="text-blue-200 text-sm flex items-center justify-center gap-4">
            <span>✓ Sin tarjeta de crédito</span>
            <span>•</span>
            <span>✓ Garantía 30 días</span>
            <span>•</span>
            <span>✓ Cancela cuando quieras</span>
          </p>
        </div>
      </section>

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
                  <a href="mailto:hola@lumina.mx" className="hover:text-blue-400">hola@lumina.mx</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-blue-400" />
                  <a href="tel:+524771234567" className="hover:text-blue-400">+52 477 123 4567</a>
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
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-blue-600 p-8 text-white relative">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                disabled={isSubmitting}
              >
                <X size={24} />
              </button>
              <h3 className="text-3xl font-bold mb-2">Agenda tu Demo</h3>
              <p className="text-blue-100">Déjanos tus datos y un experto se contactará contigo en menos de 2 horas.</p>
            </div>
            
            <div className="p-8">
              {isSuccess ? (
                <div className="text-center py-12 animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-blue-950 mb-2">¡Solicitud recibida!</h4>
                  <p className="text-slate-600 text-lg">Pronto estaremos en contacto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Nombre Completo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Corporativo</label>
                    <input 
                      required
                      type="email" 
                      placeholder="juan@tuempresa.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Teléfono / WhatsApp</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="55 1234 5678"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 mt-6 disabled:bg-slate-300 shadow-xl shadow-blue-100"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      "Confirmar mi Demo"
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
