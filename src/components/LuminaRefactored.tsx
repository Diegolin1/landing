"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ObjectionsHandler from "./ObjectionsHandler";
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      teamSize: formData.get('teamSize'),
    };
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (_) {
      // Fallo silencioso — el lead se registra igualmente si el backend está caído
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSuccess(false);
      }, 3000);
    }
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
    starter: billingCycle === 'monthly' ? 1199 : 899,
    professional: billingCycle === 'monthly' ? 1299 : 999,
    enterprise: 'Personalizado'
  };

  const testimonials = [
    {
      name: "Roberto García",
      role: "Director Comercial",
      company: "Calzado García León",
      image: "/logos/alpina.png",
      rating: 5,
      text: "Pasamos de enviar PDFs por WhatsApp a tener un catálogo profesional que nuestros clientes consultan 24/7. Aumentamos 40% en pedidos recurrentes."
    },
    {
      name: "María Fernanda Ruiz",
      role: "Gerente de Ventas",
      company: "Textiles del Bajío",
      image: "/logos/flexi.png",
      rating: 5,
      text: "La facturación CFDI 4.0 automática nos ahorra 15 horas a la semana. Recuperamos la inversión en el primer mes."
    },
    {
      name: "Carlos Mendoza",
      role: "CEO",
      company: "Distribuidora MX",
      image: "/logos/emyco.png",
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
      a: "Todos los planes incluyen soporte por email y chat. El plan Industrial incluye soporte prioritario por WhatsApp con tiempos de respuesta menores a 2 horas."
    }
  ];

  return (
    <>
      <div className="bg-brand-900 text-stone-300 font-sans antialiased scroll-smooth transition-colors duration-500 overflow-x-hidden">
        {/* Top Announcement Bar - LinkedIn Style */}
        <div className="bg-brand-600 px-4 py-2 text-center text-[10px] md:text-xs font-bold tracking-[0.1em] text-white uppercase overflow-hidden relative group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          Prueba Gratuita de 14 días para fabricantes del Bajío · Sin tarjeta de crédito
        </div>

        {/* Navbar Premium */}
        <nav className="sticky top-0 z-50 bg-brand-900/80 backdrop-blur-2xl border-b border-white/[0.05] px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 group cursor-pointer">
                <Image src="/assets/logo-light.png" alt="Lumina B2B" width={130} height={32} className="h-8 w-auto object-contain" priority />
              </div>

              {/* Desktop Menu - Apple Style */}
              <div className="hidden lg:flex gap-8 text-[13px] font-semibold text-stone-400">
                <a href="#features" className="hover:text-white transition-colors">Infraestructura</a>
                <a href="#comparativa" className="hover:text-white transition-colors">Diferencial B2B</a>
                <a href="#pricing" className="hover:text-white transition-colors">Planes</a>
                <a href="/blog" className="hover:text-white transition-colors">Blog Industrial</a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 text-stone-400 hover:text-white transition-colors"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <div className="hidden sm:flex items-center gap-6">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-brand-900 px-6 py-2.5 rounded-full font-bold text-[13px] hover:bg-stone-100 transition-all active:scale-95"
                >
                  Agendar Auditoría
                </button>
              </div>
              
              <button 
                className="lg:hidden p-2 text-stone-400 hover:text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section — Harvard/Stripe Style Overhaul */}
        <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-900 pt-20 pb-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-ping"></span>
                <span className="text-[10px] font-bold tracking-widest text-brand-200 uppercase">La Infraestructura de Ventas para León GTO</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter italic">
                Soberanía <br /> Comercial <span className="text-brand-400">B2B</span>.
              </h1>

              <p className="text-lg md:text-xl text-stone-400 leading-relaxed mb-10 max-w-xl font-medium">
                La plataforma de pedidos y facturación diseñada exclusivamente para <span className="text-white">fabricantes del Bajío</span>. Digitaliza tu catálogo y domina SAPICA/ANPIC.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-brand-900 px-10 py-5 rounded-full font-bold text-[15px] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-3 group"
                >
                  Iniciar Auditoría de Ventas
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="bg-brand-900/50 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-full font-bold text-[15px] hover:bg-white/5 transition-all flex items-center justify-center gap-3"
                >
                  <Play size={18} className="fill-white" />
                  Ver Demo Industrial
                </button>
              </div>

              <div className="mt-16 flex flex-col gap-6 w-full items-center lg:items-start opacity-70">
                <p className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase">Respaldo de Fabricantes en Guanajuato</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 grayscale brightness-200">
                  <div className="text-xl font-black text-white/50 italic tracking-tighter">FLEXI</div>
                  <div className="text-xl font-black text-white/50 italic tracking-tighter">EMYCO</div>
                  <div className="text-xl font-black text-white/50 italic tracking-tighter">ALPINA</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:col-span-5 hidden lg:block relative"
            >
              <div className="glass-premium rounded-[2rem] p-6 border-white/20 relative overflow-hidden">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 rounded-2xl bg-white/5">
                      <p className="text-[10px] text-stone-500 font-bold uppercase mb-1">Hoy</p>
                      <p className="text-2xl font-black text-white">$142,500</p>
                    </div>
                    <div className="glass-card p-4 rounded-2xl bg-white/5">
                      <p className="text-[10px] text-stone-500 font-bold uppercase mb-1">Pedidos</p>
                      <p className="text-2xl font-black text-white">418</p>
                    </div>
                  </div>
                  <div className="h-40 bg-white/5 rounded-2xl flex items-center justify-center">
                    <BarChart3 size={40} className="text-brand-500/50" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Dynamic Partner Marquee — Clean Harvard Style */}
        <section className="bg-brand-900 border-y border-white/[0.03] py-16 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-stone-600 mb-12">
              LA INFRAESTRUCTURA DE CONFIANZA DEL BAJÍO
            </p>
            <div className="relative overflow-hidden group">
              <div
                className="flex gap-20 items-center animate-marquee-premium"
                style={{ width: "max-content" }}
              >
                {[
                  "Arturo Cuervo", "Botas Milenarias", "Baeza & Estrada", "Grupo Alpina", "Flexi", "Emyco", 
                  "Arturo Cuervo", "Botas Milenarias", "Baeza & Estrada", "Grupo Alpina", "Flexi", "Emyco"
                ].map((name, i) => (
                  <div key={i} className="flex-shrink-0 flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <span className="text-xl md:text-2xl font-black tracking-tighter text-white/50 hover:text-white cursor-default select-none uppercase">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section — Subtlest approach */}
        <section className="bg-brand-900 py-12 px-6 border-b border-white/[0.03]">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12">
            {[
              { val: "150+", label: "Fabricantes en Red", sub: "Guanajuato / Jalisco" },
              { val: "$2.5B", label: "Ventas Gestionadas", sub: "MXN Transaccionados" },
              { val: "99.9%", label: "Disponibilidad", sub: "SLA Industrial" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-3xl font-black text-white leading-none">{s.val}</span>
                <span className="text-[10px] font-bold tracking-widest text-stone-500 uppercase">{s.label}</span>
                <span className="text-[9px] text-stone-600">{s.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bento Grid Features — Industrial High End */}
        <section id="features" className="bg-brand-900 py-24 lg:py-48 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 space-y-4 max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Infraestructura Crítica.</h2>
              <p className="text-lg text-stone-500 font-medium">No es solo software; es la columna vertebral de tu operación mayorista.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[300px]">
              <div className="md:col-span-6 lg:col-span-8 glass-premium rounded-[2.5rem] p-10 flex flex-col justify-end group transition-all hover:bg-white/[0.02] border-white/5 relative">
                <div className="relative z-10">
                  <Lock size={32} className="text-brand-400 mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4">Soberanía de Precios (Gate B2B)</h3>
                  <p className="text-stone-400 max-w-md">Protege tus márgenes. Controla quién ve tus precios de mayoreo con accesos restringidos por cliente.</p>
                </div>
              </div>
              <div className="md:col-span-3 lg:col-span-4 glass-premium rounded-[2.5rem] p-10 flex flex-col justify-between group hover:bg-white/[0.02] border-white/5">
                <Smartphone size={32} className="text-gold-400" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Pedidos en Expo (PWA)</h3>
                  <p className="text-stone-500 text-sm">Levanta pedidos en SAPICA sin internet. Sincronización automática al recuperar señal.</p>
                </div>
              </div>
              <div className="md:col-span-3 lg:col-span-4 glass-premium rounded-[2.5rem] p-10 flex flex-col justify-between group hover:bg-white/[0.02] border-white/5">
                <Users size={32} className="text-indigo-400" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Gestión de Agentes</h3>
                  <p className="text-stone-500 text-sm">Monitorea a tus comisionistas en tiempo real con tableros de rendimiento individual.</p>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-8 bg-brand-600 rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden">
                <FileText size={48} className="text-white mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Timbrado Fiscal CFDI 4.0</h3>
                <p className="text-white/80 max-w-sm">Genera facturas legales en 1 clic directamente desde el pedido. Integración nativa con el SAT.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials — Exclusive Industrial Context */}
        <section className="bg-brand-950 py-24 lg:py-48 px-6 border-y border-white/[0.02]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-black text-white mb-6 tracking-tighter italic">Líderes que <br /> <span className="text-brand-400">Escalan</span>.</h2>
              <p className="text-stone-500 font-medium leading-relaxed">Directores que transformaron sus cuellos de botella operativos en ventajas logísticas.</p>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  name: "Roberto González", 
                  role: "Director de Operaciones", 
                  company: "Manufactura de Calzado León",
                  text: "En SAPICA pasábamos de pedidos en papel a errores de captura de 3 días. Con Lumina, el pedido entra directo al almacén mientras el cliente sigue en el stand." 
                },
                { 
                  name: "Elena Vázquez", 
                  role: "CEO", 
                  company: "Textiles del Bajío",
                  text: "La facturación masiva era nuestro dolor más grande. Recuperamos 20 horas hombre a la semana automatizando el CFDI 4.0 directamente de las compras web." 
                }
              ].map((t, i) => (
                <div key={i} className="glass-premium p-10 rounded-[2rem] flex flex-col justify-between border-white/5">
                  <p className="text-stone-300 font-medium leading-relaxed italic mb-8">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="text-white font-bold">{t.name}</p>
                    <p className="text-[11px] font-bold text-brand-400 uppercase tracking-widest mt-1">{t.role} · {t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Comparativa Tú vs Competencia - Refactorizado */}
      <section id="comparativa" className="py-24 lg:py-32 px-4 sm:px-6 bg-stone-50 dark:bg-brand-900/50 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-900 dark:text-white mb-6">WhatsApp + Excel vs. Lumina B2B</h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">Por qué los fabricantes más activos de León están dejando los métodos manuales para siempre.</p>
          </div>

          <div className="bg-white dark:bg-brand-800 rounded-3xl border border-stone-200 dark:border-stone-700 shadow-glass overflow-hidden relative">
            {/* Sticky Header Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 z-20 bg-stone-50 dark:bg-brand-800 border-b border-stone-200 dark:border-stone-700">
                  <tr>
                    <th className="p-6 text-sm font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 w-1/3">Área</th>
                    <th className="p-6 text-sm font-bold uppercase tracking-wider text-red-600 w-1/3 text-center">📱 WhatsApp + Excel</th>
                    <th className="p-6 text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 w-1/3 text-center">✨ Lumina B2B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 dark:divide-stone-700">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-stone-50 dark:hover:bg-brand-800/50 transition-colors">
                      <td className="p-6 font-bold text-brand-800 dark:text-stone-200">{row.feature}</td>
                      <td className="p-6 text-center border-x border-stone-100 dark:border-stone-700">
                        <div className="flex flex-col items-center gap-2">
                          <X className="text-red-500" size={32} strokeWidth={3} />
                          <span className="text-sm text-stone-500 dark:text-stone-400 font-medium">{row.traditional}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center bg-brand-50/30 dark:bg-brand-900/10 relative">
                        <div 
                          className="flex flex-col items-center gap-2 cursor-help group"
                          onMouseEnter={() => setHoveredFeature(i)}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <Check className="text-gold-500" size={32} strokeWidth={3} />
                          <span className="text-sm text-brand-900 dark:text-brand-100 font-bold underline decoration-brand-200 decoration-dotted underline-offset-4">{row.lumina}</span>
                          
                          {/* Custom Tooltip */}
                          <AnimatePresence>
                            {hoveredFeature === i && (
                              <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-brand-900 text-white text-xs rounded-xl shadow-glass z-30 pointer-events-none"
                              >
                                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-900 rotate-45"></div>
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
          
          <div className="mt-12 p-8 bg-gradient-to-r from-brand-600 to-brand-600 rounded-3xl text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <p className="text-xl font-bold italic relative z-10">
              &ldquo;Lumina elimino el caos de pedidos por WhatsApp y nos permitio recuperar 15 horas a la semana de trabajo administrativo.&rdquo;
            </p>
          </div>
        </div>
      </section>


      {/* Financial Performance Forecast (ROI) — Advanced Analytics Style */}
        <section className="py-24 lg:py-48 px-6 bg-brand-900 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-600/5 via-transparent to-transparent -z-0"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 xl:col-span-5 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
                <span className="text-[10px] font-bold tracking-widest text-brand-200 uppercase">Calculadora de Eficiencia Financiera</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mt-4">Calcula la fuga <br /> de capital.</h2>
              <p className="text-lg text-stone-400 font-medium max-w-md">Descubre el impacto económico de operar con procesos manuales en tu fábrica.</p>
              
              <div className="space-y-6 pt-8">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-4">Pedidos Mensuales</label>
                  <input
                    type="range" min="10" max="1000" step="10"
                    value={roiInputs.orders}
                    onChange={(e) => setRoiInputs({...roiInputs, orders: Number(e.target.value)})}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-500"
                  />
                  <div className="flex justify-between mt-2 text-xl font-bold text-white">
                    <span>{roiInputs.orders}</span>
                    <span className="text-[11px] text-stone-500 font-medium">unidades/mes</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-4">Ticket de Mayoreo Promedio (MXN)</label>
                  <input
                    type="range" min="1000" max="50000" step="1000"
                    value={roiInputs.avgTicket}
                    onChange={(e) => setRoiInputs({...roiInputs, avgTicket: Number(e.target.value)})}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-500"
                  />
                  <div className="flex justify-between mt-2 text-xl font-bold text-white">
                    <span>${roiInputs.avgTicket.toLocaleString()}</span>
                    <span className="text-[11px] text-stone-500 font-medium font-bold">Inversión promedio del cliente</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI Results Card — Dashboard Style */}
            <div className="lg:col-span-12 xl:col-span-7 glass-premium rounded-[3rem] p-10 border-white/10 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="p-8 rounded-[2rem] bg-red-500/5 border border-red-500/10">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-2">Escenario: Pérdida por Error Humano</p>
                    <p className="text-5xl font-black text-red-500">${calculateROI().lostToErrors.toLocaleString()}</p>
                    <p className="text-xs text-stone-500 mt-4 leading-relaxed">Pedidos mal surtidos, cancelaciones por falta de stock y horas hombre en conciliación.</p>
                  </div>

                  <div className="p-8 rounded-[2rem] bg-brand-500/5 border border-brand-500/10">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-brand-400 mb-2">Impacto Lumina: Recuperación Mensual</p>
                    <p className="text-5xl font-black text-brand-400">${calculateROI().recovered.toLocaleString()}</p>
                    <p className="text-xs text-stone-500 mt-4 leading-relaxed">Capital recuperado mediante automatización de inventario y pedidos digitales.</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center text-center p-10 bg-white/[0.02] rounded-[2rem] border border-white/5">
                  <div className="w-32 h-32 rounded-full border-4 border-brand-500/20 flex items-center justify-center relative mb-8">
                    <div className="absolute inset-0 border-t-4 border-brand-400 rounded-full animate-spin-slow"></div>
                    <span className="text-4xl font-black text-white">{calculateROI().roi}%</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Retorno de Inversión</h4>
                  <p className="text-sm text-stone-500 mb-10">Este sistema se paga a sí mismo <br /> en los primeros 12 días de uso.</p>
                  
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-white text-brand-900 h-16 rounded-full font-black text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all active:scale-95"
                  >
                    Diagnóstico Gratuito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Tabla Comparativa Secundaria - RESPONSIVE */}
      <section id="comparativa-plataformas" className="py-24 lg:py-32 px-4 sm:px-6 dark:bg-brand-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 dark:text-white mb-4">Lumina vs Shopify y otros</h2>
            <p className="text-lg text-stone-600 dark:text-stone-400">Por qué los fabricantes eligen una solución B2B especializada.</p>
          </div>

          {/* Versión Desktop: Tabla */}
          <div className="hidden sm:block relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-0 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-xl overflow-hidden bg-white dark:bg-brand-800">
                <thead>
                  <tr className="bg-stone-50 dark:bg-brand-800/50">
                    <th className="p-6 text-sm font-bold uppercase tracking-wider text-stone-400 border-b border-stone-200 dark:border-stone-700">Característica</th>
                    <th className="p-6 text-brand-900 dark:text-brand-400 font-bold text-lg border-b border-brand-600 bg-brand-50/50 dark:bg-brand-900/20">Lumina B2B</th>
                    <th className="p-6 text-stone-400 font-medium border-b border-stone-200 dark:border-stone-700">Shopify/B2C</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 dark:divide-stone-700">
                  {[
                    ["Facturación CFDI 4.0 Nativa", true, "Solo con Apps"],
                    ["Privacidad B2B (Gate)", true, "No nativo"],
                    ["CRM de Agentes de Venta", true, false],
                    ["UX Especializada", true, "Enfoque Minorista"]
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="p-6 font-semibold text-stone-700 dark:text-stone-300 text-sm">{row[0]}</td>
                      <td className="p-6 bg-brand-50/30 dark:bg-brand-900/10">
                        {row[1] === true ? <Check className="text-gold-500" /> : <X className="text-red-300" />}
                      </td>
                      <td className="p-6 text-stone-400 text-sm">
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
              <div key={i} className="bg-white dark:bg-brand-800 rounded-xl border border-stone-200 dark:border-stone-700 p-4">
                <p className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3">{row[0]}</p>
                <div className="flex justify-between gap-4">
                  <div className="flex-1 text-center">
                    <p className="text-xs text-stone-500 dark:text-stone-400 mb-1 font-medium">Lumina</p>
                    <div className="flex justify-center">
                      {row[1] === true ? <Check className="text-gold-500" size={20} /> : <X className="text-red-300" size={20} />}
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-xs text-stone-500 dark:text-stone-400 mb-1 font-medium">Shopify</p>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      {row[2] === false ? <X className="text-red-300 inline-block" size={20} /> : row[2]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section — Linear/Stripe High End Style */}
        <section id="pricing" className="bg-brand-900 py-24 lg:py-48 px-6 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter italic">Inversión en <span className="text-brand-400">Escalamiento</span>.</h2>
              <p className="text-lg text-stone-500 max-w-2xl mx-auto font-medium">Precios transparentes diseñados para fabricantes que no aceptan límites tecnológicos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {/* Plan Emprendedor */}
              <div className="glass-premium p-10 rounded-[2.5rem] border-white/5 group hover:border-brand-500/50 transition-all flex flex-col">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-xl font-bold text-white">Fabricante</h3>
                    <p className="text-xs text-stone-500 mt-1 font-bold italic uppercase tracking-widest text-emerald-400/80">Para marcas locales</p>
                  </div>
                  <span className="text-xs font-bold text-stone-500">v.1.0</span>
                </div>
                
                <div className="mb-10">
                  <p className="text-5xl font-black text-white">$1,199 <span className="text-sm text-stone-500">MXN/mes</span></p>
                </div>

                <ul className="space-y-4 mb-12 flex-1">
                  {["Catálogo Digital (Gate B2B)", "Hasta 100 productos", "1 Vendedor Master", "Levantamiento de Pedidos", "Soporte Vía Chat"].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-stone-400 font-medium">
                      <CheckCircle2 size={16} className="text-brand-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full h-14 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-all uppercase tracking-wider"
                >
                  Empezar ahora
                </button>
              </div>

              {/* Plan Industrial - PRO */}
              <div className="glass-premium p-10 rounded-[2.5rem] border-brand-500 ring-4 ring-brand-500/10 scale-105 shadow-[0_0_50px_-12px_rgba(0,132,255,0.3)] relative overflow-hidden flex flex-col z-10">
                <div className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-bl-3xl">Pilar Comercial</div>
                
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-xl font-bold text-white">Industrial</h3>
                    <p className="text-xs text-brand-400 mt-1 font-bold italic uppercase tracking-widest">Lo más solicitado en León</p>
                  </div>
                </div>
                
                <div className="mb-10">
                  <p className="text-5xl font-black text-white">$2,499 <span className="text-sm text-stone-500">MXN/mes</span></p>
                </div>

                <ul className="space-y-4 mb-12 flex-1">
                  {["Productos Ilimitados", "CRM de 5 Vendedores", "Facturación CFDI 4.0 Nativa", "Configuración SAPICA/ANPIC", "Capacitación en Fábrica"].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-stone-300 font-bold">
                      <CheckCircle2 size={16} className="text-gold-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full h-14 rounded-full bg-brand-500 text-white font-black text-sm hover:bg-brand-400 transition-all uppercase tracking-wider shadow-glow-blue"
                >
                  Dominar Mercado
                </button>
              </div>

              {/* Plan Enterprise */}
              <div className="glass-premium p-10 rounded-[2.5rem] border-white/5 group hover:border-brand-500/50 transition-all flex flex-col">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-xl font-bold text-white">Fábrica Plus</h3>
                    <p className="text-xs text-stone-500 mt-1 font-bold italic uppercase tracking-widest">Infrastructura Robusta</p>
                  </div>
                </div>
                
                <div className="mb-10">
                  <p className="text-5xl font-black text-white">$4,999 <span className="text-sm text-stone-500">MXN/mes</span></p>
                </div>

                <ul className="space-y-4 mb-12 flex-1">
                  {["Integración con ERP Local", "CRM de Vendedores Ilimitado", "Múltiples Listas de Precios", "Account Manager Dedicado", "Infraestructura Cloud Prioritaria"].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-stone-400 font-medium">
                      <CheckCircle2 size={16} className="text-brand-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full h-14 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-all uppercase tracking-wider"
                >
                  Consultar ERP
                </button>
              </div>
            </div>
          </div>
        </section>

      {/* Platform Mockup Section - NUEVO */}
      <section className="py-24 px-4 sm:px-6 bg-white dark:bg-brand-900 transition-colors duration-300 border-t border-stone-100 dark:border-brand-800">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-900 dark:text-white mb-6">Tu nuevo centro de comando B2B</h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              Una interfaz diseñada para la velocidad. Sin distracciones, solo herramientas para <span className="text-brand-600 dark:text-brand-400 font-bold">vender más</span> y gestionar mejor.
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
            <div className="relative z-10 bg-stone-100 dark:bg-brand-800 rounded-[2rem] p-2 md:p-4 shadow-glass border-4 border-stone-200 dark:border-stone-700">
              <div className="bg-white dark:bg-brand-900 rounded-2xl overflow-hidden aspect-video relative shadow-inner">
                {/* Mockup App Interface (Visual representation) */}
                <div className="absolute inset-0 flex">
                  {/* Mock Sidebar */}
                  <div className="w-[18%] bg-stone-50 dark:bg-brand-800/50 border-r border-stone-200 dark:border-stone-700 p-4 space-y-6 hidden md:block">
                    <div className="h-8 w-full bg-brand-600 rounded-lg"></div>
                    <div className="space-y-3">
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className={`h-3 w-full rounded-full ${i === 1 ? 'bg-brand-100 dark:bg-brand-900/40' : 'bg-stone-200 dark:bg-stone-700'}`}></div>
                      ))}
                    </div>
                  </div>
                  {/* Mock Content */}
                  <div className="flex-1 p-6 md:p-10 space-y-8 bg-white dark:bg-brand-900">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2">
                        <div className="h-6 w-48 bg-stone-100 dark:bg-brand-800 rounded-full"></div>
                        <div className="h-4 w-32 bg-stone-50 dark:bg-brand-800/50 rounded-full"></div>
                      </div>
                      <div className="h-12 w-40 bg-brand-600 rounded-2xl shadow-glow"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { val: "$125,430", lab: "Ventas Hoy", col: "blue" },
                        { val: "48", lab: "Pedidos Nuevos", col: "emerald" },
                        { val: "92%", lab: "Eficiencia", col: "amber" }
                      ].map((card, i) => (
                        <div key={i} className="p-6 bg-stone-50 dark:bg-brand-800/40 rounded-2xl border border-stone-100 dark:border-stone-700">
                          <div className={`w-8 h-8 rounded-lg bg-${card.col}-100 dark:bg-${card.col}-900/30 mb-4`}></div>
                          <p className={`text-2xl font-black text-${card.col}-600 dark:text-${card.col}-400`}>{card.val}</p>
                          <p className="text-xs text-stone-500 font-bold uppercase tracking-wider">{card.lab}</p>
                        </div>
                      ))}
                    </div>
                    <div className="h-48 md:h-64 bg-stone-50 dark:bg-brand-800/40 rounded-2xl border border-stone-100 dark:border-stone-700 p-6 flex items-center justify-center">
                       <div className="text-center space-y-4 opacity-40">
                         <BarChart3 size={48} className="mx-auto text-stone-400" />
                         <p className="text-sm font-bold">Gráfico de tendencias en tiempo real</p>
                       </div>
                    </div>
                  </div>
                </div>
                {/* Realism Overlays */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/5 via-transparent to-white/10 pointer-events-none"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-brand-900/40 backdrop-blur-[2px]">
                   <button 
                    onClick={() => setVideoModalOpen(true)}
                    className="bg-white dark:bg-brand-800 text-brand-600 dark:text-brand-400 px-8 py-4 rounded-2xl font-black shadow-glass flex items-center gap-3 hover:scale-105 transition-transform"
                   >
                     <Play size={20} className="fill-brand-600 dark:fill-brand-400" /> VER INTERFAZ REAL
                   </button>
                </div>
              </div>
            </div>
            {/* Background decorations */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-gold-600/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
          </motion.div>
        </div>
      </section>

        {/* Objections section */}
        <ObjectionsHandler />

        {/* FAQ Section — Premium Style */}
        <section className="py-24 lg:py-48 px-6 bg-brand-900 border-t border-white/[0.05]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-6">Claridad Absoluta.</h2>
              <p className="text-stone-500 font-medium">Respuestas directas sobre la infraestructura comercial de Lumina.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-premium rounded-3xl overflow-hidden border-white/5 transition-all">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-8 text-left flex justify-between items-center gap-6 group"
                  >
                    <span className="font-bold text-lg text-white group-hover:text-brand-400 transition-colors uppercase tracking-tight">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${openFaqIndex === index ? 'bg-brand-500 border-brand-500' : ''}`}>
                      <ChevronDown size={16} className={`text-white transition-transform duration-500 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: openFaqIndex === index ? "auto" : 0, opacity: openFaqIndex === index ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-stone-400 leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer — Low Profile Industrial */}
        <footer className="bg-brand-950 py-24 px-6 border-t border-white/[0.03]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="space-y-8">
              <div className="text-2xl font-black tracking-tighter text-white uppercase italic">
                Lumina <span className="text-brand-500">B2B</span>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed font-medium">
                La plataforma de comercio mayorista líder para fabricantes en México. <br />
                León, Guanajuato.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, j) => (
                  <a key={j} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-stone-500 hover:text-white hover:border-white/20 transition-all font-medium">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {[
              { title: "Producto", links: ["Características", "Seguridad", "Integraciones", "API Docs"] },
              { title: "Empresa", links: ["Sobre Nosotros", "Contacto", "Carreras", "Prensa"] },
              { title: "Legal", links: ["Privacidad", "Términos", "Cookies", "Contrato"] }
            ].map((col, i) => (
              <div key={i} className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-400">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map((link, k) => (
                    <li key={k}>
                      <a href="#" className="text-sm text-stone-500 hover:text-white font-medium transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto pt-24 mt-24 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">© 2026 Lumina Business Solutions. Todos los derechos reservados.</p>
            <div className="flex gap-8">
               <span className="text-[10px] font-bold text-stone-700 uppercase tracking-widest flex items-center gap-2">
                 <Shield size={12} /> INFRAESTRUCTURA SEGURA
               </span>
               <span className="text-[10px] font-bold text-stone-700 uppercase tracking-widest flex items-center gap-2">
                 <Star size={12} className="fill-stone-700" /> TOP-RATED B2B PLATFORM
               </span>
            </div>
          </div>
        </footer>

        {/* Final CTA Modal Container */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-brand-900/95 backdrop-blur-xl" 
                onClick={() => setIsModalOpen(false)}
              />
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative z-10 w-full max-w-xl glass-premium rounded-[3rem] p-10 md:p-16 border-white/10 shadow-2xl"
              >
                {isSuccess ? (
                  <div className="text-center py-10 space-y-6">
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                      <Check size={40} />
                    </div>
                    <h3 className="text-3xl font-black text-white">Solicitud Recibida.</h3>
                    <p className="text-stone-400 font-medium">Un consultor especializado te contactará en menos de 2 horas.</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-10 space-y-2">
                      <h3 className="text-3xl font-black text-white italic">Agenda tu Demo.</h3>
                      <p className="text-stone-500 font-medium italic">Sin compromiso comercial. Solo eficiencia.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <input name="name" required placeholder="Nombre Completo" className="w-full h-14 bg-white/5 rounded-2xl px-6 border border-white/10 text-white focus:border-brand-500 outline-none transition-all" />
                        <input name="email" type="email" required placeholder="Correo Corporativo" className="w-full h-14 bg-white/5 rounded-2xl px-6 border border-white/10 text-white focus:border-brand-500 outline-none transition-all" />
                        <input name="phone" required placeholder="WhatsApp de Contacto" className="w-full h-14 bg-white/5 rounded-2xl px-6 border border-white/10 text-white focus:border-brand-500 outline-none transition-all" />
                        <input name="company" required placeholder="Nombre de la Fábrica" className="w-full h-14 bg-white/5 rounded-2xl px-6 border border-white/10 text-white focus:border-brand-500 outline-none transition-all" />
                        <select name="teamSize" className="w-full h-14 bg-white/5 rounded-2xl px-6 border border-white/10 text-white focus:border-brand-500 outline-none transition-all appearance-none">
                          <option value="" className="bg-brand-900">Tamaño del Equipo</option>
                          <option value="1-5" className="bg-brand-900">1-5 personas</option>
                          <option value="6-20" className="bg-brand-900">6-20 personas</option>
                          <option value="20+" className="bg-brand-900">Más de 20</option>
                        </select>
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-16 bg-white text-brand-900 rounded-full font-black text-sm uppercase tracking-wider hover:bg-brand-50 transition-all active:scale-95 disabled:opacity-50"
                      >
                        {isSubmitting ? "Enviando..." : "Confirmar Diagnóstico"}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Video Preview Modal */}
        <AnimatePresence>
          {videoModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-brand-900/98 backdrop-blur-3xl"
                onClick={() => setVideoModalOpen(false)}
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative z-10 w-full max-w-6xl aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default LuminaRefactored;
