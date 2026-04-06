export type Locale = "es" | "en";

export const translations = {
  es: {
    // Navbar
    nav: {
      home: "Inicio",
      difference: "La Diferencia",
      modules: "Módulos",
      pricing: "Precios",
      faq: "FAQ",
      blog: "Blog",
      login: "Iniciar Sesión",
      bookDemo: "Agendar Demo",
      bookDemoFree: "Agendar Demo Gratis",
    },
    topBanner: {
      badge: "Oferta limitada",
      offer: "Setup y migración inicial GRATIS por lanzamiento",
      spots: "Solo 3 espacios este mes",
      endsIn: "Termina en",
      cta: "Quiero esta oferta",
      close: "Cerrar banner promocional",
    },
    // Hero
    hero: {
      badge: "Prueba Gestory 30 días — si no te convence, no pagas nada",
      headline: "Todo tu negocio en un",
      headlineAccent: "solo lugar",
      subtitle:
        "Opera POS incluso sin internet, emite CFDI 4.0 con auto-facturación QR, controla inventario multi-almacén y toma pedidos B2B desde una sola plataforma.",
      cta1: "Agendar Demo Gratis",
      cta2: "Ver cómo funciona",
      check1: "30 días sin costo",
      check2: "Soporte en español",
      check3: "Seguro y confidencial",
      // Dashboard mockup
      cashflow: "Flujo de Caja Total",
      thisMonth: "este mes",
      stockAlerts: "Alertas de Stock",
      minSkus: "SKUs mínimos",
      restock: "Reabastecer",
      lastOrders: "Últimos Pedidos Sincronizados",
      viewAll: "Ver todos",
      paid: "Pagado",
      processing: "Procesando",
      shipped: "Enviado",
      invoiced: "Facturado",
      stockExact: "Stock Exacto",
      multiWarehouse: "Multi-Almacén Activo",
    },
    // Logo Ticker
    logoTicker: {
      title: "Empresas que confían en Gestory y sus integraciones",
    },
    // Problem / Solution
    problem: {
      eyebrow: "Tu Tiempo Libre",
      headline: "Deja de revisar caja todo el día.",
      headlineBr: "Empieza a expandir el negocio.",
      subtitle:
        "¿Tus números nunca cuadran y vendes productos que resulta ya no existen en almacén? Pon tu empresa en piloto automático.",
      problemTitle: "El Caos del Papel y Múltiples Sistemas",
      problemItems: [
        "Las libretas no te dicen qué producto falta",
        "Cobros dobles y cancelaciones perdiendo el artículo",
        "Escribir la factura del cliente letra por letra",
        "Tener que sumar y revisar ganancias diariamente",
      ],
      solutionTitle: "Todo Controlado y Cuadrado en Tiempo Real",
      solutionItems: [
        "Visualiza todo lo que pasa en todas tus tiendas al mismo tiempo",
        "Alertas predictivas de poco stock antes de que se acabe",
        "Tus clientes se facturan sus ventas por sí solos",
        "Mira las ganancias automáticamente en reportes claros",
      ],
      synced: "Sincronizado",
      live: "Live",
    },
    // How It Works
    howItWorks: {
      eyebrow: "Fácil de Empezar",
      headline: "Empieza a vender en 3 pasos",
      subtitle:
        "No necesitas meses de implementación ni un ingeniero de sistemas. Gestory se adapta a ti.",
      step1Title: "Crea tu cuenta",
      step1Desc:
        "Regístrate en 2 minutos. Sin tarjeta de crédito, sin compromisos.",
      step2Title: "Configura tu negocio",
      step2Desc:
        "Sube tu catálogo de productos, conecta tus sucursales y define precios.",
      step3Title: "Empieza a crecer",
      step3Desc:
        "Vende en todos tus canales: tienda física, online y mayoristas B2B.",
    },
    // Features Bento
    features: {
      eyebrow: "La Plataforma Completa",
      headline: "Todo lo que necesitas para gestionar",
      headlineAccent: "y escalar tu empresa",
      subtitle:
        "Gestory conecta todas las piezas de tu empresa. Cada vez que vendes un artículo, tu dinero e inventarios se actualizan sin que toques una tecla.",
      inventory: "Inventario Multi-Almacén",
      inventoryDesc:
        "Revisa el stock de todas tus sucursales al instante. El sistema te avisa antes de que te quedes sin productos.",
      pos: "Punto de Venta POS",
      posDesc:
        "Cobra desde cualquier dispositivo, incluso sin internet. Las ventas se sincronizan al volver la conexión.",
      ecommerce: "Tienda Online",
      ecommerceDesc:
        "Sube tus productos a internet en un clic. Tu inventario jamás se cruzará con la tienda física.",
      b2b: "Portal B2B Mayoristas",
      b2bDesc:
        "Tus clientes grandes ven precios especiales solo para ellos con un portal exclusivo.",
      invoicing: "Facturación CFDI 4.0",
      invoicingDesc:
        "Conectado con PACs certificados. Tu cliente escanea un QR y se auto-factura su compra.",
      crm: "CRM de Leads",
      crmDesc:
        "Captura, clasifica y da seguimiento a tus prospectos hasta cerrar la venta.",
      priceList: "Listas de Precios",
      priceListDesc:
        "Define precios especiales por cliente, grupo o temporada. Protege tus márgenes automáticamente.",
      reports: "Reportes en Tiempo Real",
      reportsDesc:
        "Visualiza tus ventas, ganancias, productos top y tendencias desde cualquier lugar.",
    },
    // Stats
    stats: {
      companies: "Empresas activas",
      processed: "MXN procesados",
      uptime: "Uptime garantizado",
      satisfaction: "Satisfacción",
    },
    // Testimonials
    testimonials: {
      eyebrow: "Lo Que Dicen Nuestros Clientes",
      headline: "Empresas reales, resultados reales",
      t1Quote:
        "Gestory nos ahorró 15 horas semanales en inventarios. Antes teníamos 3 personas contando producto, ahora lo veo en mi teléfono.",
      t1Name: "Carlos Martínez",
      t1Role: "Director General, Calzado Alpina",
      t1Result: "Redujeron errores de inventario 85%",
      t2Quote:
        "La facturación automática cambió todo. Mis clientes se facturan solos y yo me ahorro discusiones con el contador.",
      t2Name: "María Elena Torres",
      t2Role: "Fundadora, Distribuidora Baeza",
      t2Result: "90% menos tiempo en facturación",
      t3Quote:
        "Conectamos 4 sucursales en una semana. Ahora vemos las ventas de todas las tiendas en tiempo real sin llamar a nadie.",
      t3Name: "Roberto Estrada",
      t3Role: "Gerente de Operaciones, Grupo Arturo Cuervo",
      t3Result: "4 sucursales conectadas en 7 días",
    },
    // Pricing
    pricing: {
      eyebrow: "Planes Transparentes",
      headline: "Paga solo por lo que necesitas.",
      subtitle: "Sin costos ocultos ni sorpresas. Cancela cuando quieras.",
      monthly: "Mensual",
      annual: "Anual",
      saveTag: "Ahorra 20%",
      perMonth: "MXN / mes",
      recommended: "Más Recomendado",
      plan1Name: "Crecimiento",
      plan1Desc:
        "Ideal para una sucursal o tienda en línea que empieza a despegar.",
      plan1Features: [
        "1 Sucursal Física",
        "Conexión a tienda en línea",
        "Inventario Inteligente básico",
        "Punto de venta",
        "Soporte por correo",
      ],
      plan1Cta: "Comenzar ahora",
      plan2Name: "Multi-Sucursal",
      plan2Desc:
        "Para empresas establecidas con varias tiendas y canales de venta.",
      plan2Features: [
        "Hasta 5 sucursales",
        "Sincronización en tiempo real",
        "Auto-facturación para clientes",
        "Alertas de caducidad y stock bajo",
        "Cuentas claras automáticas",
        "Soporte prioritario WhatsApp",
      ],
      plan2Cta: "Elegir plan",
      plan3Name: "Corporativo",
      plan3Desc:
        "Franquicias y empresas con necesidades mayoristas y B2B avanzadas.",
      plan3Features: [
        "Sucursales ilimitadas",
        "Portal de venta para mayoristas",
        "Migración de tu sistema actual",
        "Asesor de cuenta dedicado",
        "Integraciones a medida",
      ],
      plan3Cta: "Agendar Demo",
      guarantee: "30 días sin costo · Sin tarjeta de crédito · Cancela cuando quieras",
    },
    // FAQ
    faq: {
      eyebrow: "Preguntas Frecuentes",
      headline: "Todo lo que necesitas saber",
      items: [
        {
          q: "¿Cuánto tiempo toma implementar Gestory?",
          a: "Puedes estar operando en menos de 24 horas. Nuestro equipo te asiste con la carga de productos y la configuración de sucursales.",
        },
        {
          q: "¿Qué pasa si se cae el internet en mi tienda?",
          a: "El Punto de Venta funciona offline. Sigues cobrando normalmente y cuando regrese la conexión, todo se sincroniza automáticamente.",
        },
        {
          q: "¿Es difícil migrar desde mi sistema actual?",
          a: "No. En el plan Corporativo incluimos migración completa. En los demás planes, puedes importar tu catálogo desde Excel o CSV en minutos.",
        },
        {
          q: "¿Mis clientes necesitan descargar alguna app?",
          a: "No. Gestory es una plataforma web. Tus clientes acceden desde cualquier dispositivo con un navegador, sin instalar nada.",
        },
        {
          q: "¿Cómo funciona la auto-facturación?",
          a: "Gestory se conecta con Facturapi (PAC certificado). Tu cliente escanea un código QR del ticket y genera su CFDI 4.0 solo.",
        },
        {
          q: "¿Mis datos están seguros?",
          a: "Sí. Usamos encriptación de nivel bancario (AES-256), respaldos automáticos diarios y servidores en la nube de Amazon AWS con 99.9% de disponibilidad.",
        },
        {
          q: "¿Puedo tener precios diferentes para cada cliente?",
          a: "Sí. Puedes crear listas de precios por cliente, por grupo o por temporada. Tus márgenes se protegen automáticamente.",
        },
        {
          q: "¿Qué pasa si Gestory no me convence?",
          a: "Tienes 30 días para probar Gestory sin costo. Si no te convence, no pagas absolutamente nada. Sin compromisos.",
        },
      ],
    },
    // Final CTA
    finalCta: {
      headline: "¿Listo para dejar de perder ventas?",
      subtitle:
        "Únete a las empresas que ya automatizaron su negocio con Gestory. Agenda tu demo y ve resultados en la primera semana.",
      cta: "Agendar Demo Gratis",
      badge: "Sin compromiso · Sin tarjeta de crédito · 30 días sin costo",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@empresa.com",
      phonePlaceholder: "+52 (55) 1234 5678",
      sending: "Enviando...",
      successTitle: "¡Listo!",
      successMsg: "Nos pondremos en contacto contigo pronto.",
    },
    // Security
    security: {
      eyebrow: "Confiabilidad",
      headline: "Tus datos están blindados.",
      subtitle:
        "Gestory protege la información de tu negocio con la misma tecnología que usan los bancos.",
      bankLevel: "Seguridad Bancaria",
      bankLevelDesc: "Encriptación AES-256 en toda tu información.",
      backups: "Respaldos Diarios",
      backupsDesc: "Copias automáticas de seguridad cada día.",
      uptime: "99.9% Disponibilidad",
      uptimeDesc: "Infraestructura en Amazon AWS siempre activa.",
      privacy: "Privacidad Total",
      privacyDesc: "Tu información es tuya. Nunca la compartimos.",
    },
    // Footer
    footer: {
      description:
        "El ERP centralizado para que negocios y franquicias escalen sin preocuparse por la tecnología.",
      product: "Producto",
      productLinks: [
        "Inventario Multi-Almacén",
        "Punto de Venta POS",
        "Portal B2B Mayoristas",
        "Facturación CFDI 4.0",
      ],
      company: "Empresa",
      companyLinks: ["Seguridad", "Soporte", "Precios"],
      legal: "Legal",
      legalLinks: ["Términos de Servicio", "Privacidad", "Aviso Legal"],
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      uptimeLabel: "Uptime 99.9%",
      sslLabel: "Seguridad SSL",
    },
    // Demo Modal
    demo: {
      title: "Descubre Gestory en Acción",
      subtitle:
        "Agenda una llamada de 15 minutos con Diego Rodríguez. Veremos tus necesidades y cómo adaptar Gestory a tu empresa.",
      step1: "Paso 1 de 2",
      step2: "Paso 2 de 2",
      step1Title: "¿Cómo te podemos contactar?",
      step2Title: "Personaliza tu demo (opcional)",
      nameLabel: "Nombre Completo",
      namePlaceholder: "Juan Pérez",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "juan@miempresa.com",
      phoneLabel: "Teléfono o WhatsApp",
      phonePlaceholder: "+52 (55) 1234 5678",
      companyLabel: "Nombre de tu Empresa",
      companyPlaceholder: "Mi Empresa S.A. de C.V.",
      teamSizeLabel: "Tamaño del equipo",
      teamSizeOptions: ["1-5 empleados", "6-20 empleados", "21-50 empleados", "50+ empleados"],
      continue: "Continuar",
      back: "Atrás",
      optionalHint: "Este último paso nos ayuda a prepararte una demostración más precisa.",
      submit: "Solicitar mi Demo",
      sending: "Enviando...",
      privacy: "No compartiremos tu información con terceros.",
      successTitle: "¡Demo agendada!",
      successMsg:
        "Diego Rodríguez te contactará en las próximas 24 horas para confirmar tu videollamada.",
      errorMsg: "Hubo un error. Intenta de nuevo o escríbenos por WhatsApp.",
    },
    // WhatsApp
    whatsapp: {
      tooltip: "¿Quieres hablar con Diego Rodríguez sobre el plan Multi-Sucursal?",
      schedule: "Lun-Vie · 9:00 a 18:00 (CDMX)",
      cta: "Hablar con ventas",
      message: "Hola, vi la landing de Gestory y quiero una demo del plan Multi-Sucursal. ¿Me comparten disponibilidad?",
    },
  },
  en: {
    nav: {
      home: "Home",
      difference: "The Difference",
      modules: "Modules",
      pricing: "Pricing",
      faq: "FAQ",
      blog: "Blog",
      login: "Sign In",
      bookDemo: "Book Demo",
      bookDemoFree: "Book Free Demo",
    },
    topBanner: {
      badge: "Limited offer",
      offer: "Free setup + initial migration for new accounts",
      spots: "Only 3 slots left this month",
      endsIn: "Ends in",
      cta: "Claim this offer",
      close: "Close promotional banner",
    },
    hero: {
      badge: "Try Gestory for 30 days — if you don't love it, you don't pay",
      headline: "Your entire business in",
      headlineAccent: "one place",
      subtitle:
        "Run POS even offline, automate CFDI 4.0 invoicing with QR self-service, control multi-warehouse inventory and capture B2B orders from one platform.",
      cta1: "Book Free Demo",
      cta2: "See how it works",
      check1: "30 days free",
      check2: "Spanish support",
      check3: "Secure & confidential",
      cashflow: "Total Cash Flow",
      thisMonth: "this month",
      stockAlerts: "Stock Alerts",
      minSkus: "Min SKUs",
      restock: "Restock",
      lastOrders: "Latest Synced Orders",
      viewAll: "View all",
      paid: "Paid",
      processing: "Processing",
      shipped: "Shipped",
      invoiced: "Invoiced",
      stockExact: "Exact Stock",
      multiWarehouse: "Multi-Warehouse Active",
    },
    logoTicker: {
      title: "Companies that trust Gestory and its integrations",
    },
    problem: {
      eyebrow: "Your Free Time",
      headline: "Stop checking the cash register all day.",
      headlineBr: "Start expanding your business.",
      subtitle:
        "Do your numbers never add up? Are you selling products that turn out to be out of stock? Put your business on autopilot.",
      problemTitle: "The Chaos of Paper and Multiple Systems",
      problemItems: [
        "Notebooks don't tell you which product is missing",
        "Double charges and cancellations losing merchandise",
        "Typing each customer's invoice letter by letter",
        "Having to add up and review earnings daily",
      ],
      solutionTitle: "Everything Controlled in Real Time",
      solutionItems: [
        "See everything happening across all your stores simultaneously",
        "Predictive low-stock alerts before you run out",
        "Your customers self-invoice their own purchases",
        "See your earnings automatically in clear reports",
      ],
      synced: "Synced",
      live: "Live",
    },
    howItWorks: {
      eyebrow: "Easy to Start",
      headline: "Start selling in 3 steps",
      subtitle:
        "No months of implementation or IT engineers needed. Gestory adapts to you.",
      step1Title: "Create your account",
      step1Desc:
        "Sign up in 2 minutes. No credit card, no commitments.",
      step2Title: "Set up your business",
      step2Desc:
        "Upload your product catalog, connect your branches and set your prices.",
      step3Title: "Start growing",
      step3Desc:
        "Sell across all your channels: physical store, online and B2B wholesale.",
    },
    features: {
      eyebrow: "The Complete Platform",
      headline: "Everything you need to manage",
      headlineAccent: "and scale your business",
      subtitle:
        "Gestory connects every piece of your business. Every time you sell an item, your money and inventory update without lifting a finger.",
      inventory: "Multi-Warehouse Inventory",
      inventoryDesc:
        "Check stock across all your branches instantly. The system alerts you before you run out.",
      pos: "POS Point of Sale",
      posDesc:
        "Accept payments from any device, even offline. Sales sync when connection returns.",
      ecommerce: "Online Store",
      ecommerceDesc:
        "Publish your products online in one click. Your inventory never conflicts with your physical store.",
      b2b: "B2B Wholesale Portal",
      b2bDesc:
        "Your wholesale customers see exclusive pricing on their own dedicated portal.",
      invoicing: "CFDI 4.0 Invoicing",
      invoicingDesc:
        "Connected with certified PACs. Your customer scans a QR code and self-invoices.",
      crm: "Lead CRM",
      crmDesc:
        "Capture, classify and follow up on your prospects until you close the deal.",
      priceList: "Price Lists",
      priceListDesc:
        "Set special prices by customer, group or season. Protect your margins automatically.",
      reports: "Real-Time Reports",
      reportsDesc:
        "Visualize your sales, profits, top products and trends from anywhere.",
    },
    stats: {
      companies: "Active companies",
      processed: "MXN processed",
      uptime: "Guaranteed uptime",
      satisfaction: "Satisfaction",
    },
    testimonials: {
      eyebrow: "What Our Clients Say",
      headline: "Real companies, real results",
      t1Quote:
        "Gestory saved us 15 hours a week on inventory. We used to have 3 people counting products, now I check it on my phone.",
      t1Name: "Carlos Martínez",
      t1Role: "General Manager, Calzado Alpina",
      t1Result: "Reduced inventory errors by 85%",
      t2Quote:
        "Automatic invoicing changed everything. My customers invoice themselves and I avoid arguments with the accountant.",
      t2Name: "María Elena Torres",
      t2Role: "Founder, Distribuidora Baeza",
      t2Result: "90% less time on invoicing",
      t3Quote:
        "We connected 4 branches in one week. Now we see all store sales in real time without calling anyone.",
      t3Name: "Roberto Estrada",
      t3Role: "Operations Manager, Grupo Arturo Cuervo",
      t3Result: "4 branches connected in 7 days",
    },
    pricing: {
      eyebrow: "Transparent Pricing",
      headline: "Pay only for what you need.",
      subtitle: "No hidden costs or surprises. Cancel anytime.",
      monthly: "Monthly",
      annual: "Annual",
      saveTag: "Save 20%",
      perMonth: "MXN / month",
      recommended: "Most Popular",
      plan1Name: "Growth",
      plan1Desc: "Ideal for a single branch or online store just getting started.",
      plan1Features: [
        "1 Physical Branch",
        "Online store connection",
        "Basic Smart Inventory",
        "Point of Sale",
        "Email support",
      ],
      plan1Cta: "Get started",
      plan2Name: "Multi-Branch",
      plan2Desc: "For established businesses with multiple stores and sales channels.",
      plan2Features: [
        "Up to 5 branches",
        "Real-time sync",
        "Customer self-invoicing",
        "Expiry & low stock alerts",
        "Automatic reconciliation",
        "Priority WhatsApp support",
      ],
      plan2Cta: "Choose plan",
      plan3Name: "Enterprise",
      plan3Desc: "Franchises and businesses with advanced wholesale & B2B needs.",
      plan3Features: [
        "Unlimited branches",
        "Wholesale sales portal",
        "Full migration from your current system",
        "Dedicated account advisor",
        "Custom integrations",
      ],
      plan3Cta: "Book Demo",
      guarantee: "30 days free · No credit card · Cancel anytime",
    },
    faq: {
      eyebrow: "FAQ",
      headline: "Everything you need to know",
      items: [
        {
          q: "How long does it take to implement Gestory?",
          a: "You can be up and running in less than 24 hours. Our team helps you load products and set up your branches.",
        },
        {
          q: "What happens if the internet goes down in my store?",
          a: "The POS works offline. You keep taking payments normally and when the connection returns, everything syncs automatically.",
        },
        {
          q: "Is it hard to migrate from my current system?",
          a: "No. The Enterprise plan includes full migration. Other plans let you import your catalog from Excel or CSV in minutes.",
        },
        {
          q: "Do my customers need to download an app?",
          a: "No. Gestory is a web platform. Your customers access it from any device with a browser, no installation needed.",
        },
        {
          q: "How does self-invoicing work?",
          a: "Gestory connects with Facturapi (certified PAC). Your customer scans a QR code from the receipt and generates their own CFDI 4.0.",
        },
        {
          q: "Is my data secure?",
          a: "Yes. We use bank-level encryption (AES-256), daily automatic backups and Amazon AWS cloud servers with 99.9% uptime.",
        },
        {
          q: "Can I have different prices for each customer?",
          a: "Yes. You can create price lists by customer, group or season. Your margins are protected automatically.",
        },
        {
          q: "What if Gestory doesn't convince me?",
          a: "You have 30 days to try Gestory at no cost. If you're not convinced, you pay absolutely nothing. No commitments.",
        },
      ],
    },
    finalCta: {
      headline: "Ready to stop losing sales?",
      subtitle:
        "Join the companies that already automated their business with Gestory. Book your demo and see results in the first week.",
      cta: "Book Free Demo",
      badge: "No commitment · No credit card · 30 days free",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      phonePlaceholder: "+52 (55) 1234 5678",
      sending: "Sending...",
      successTitle: "Done!",
      successMsg: "We'll get in touch with you soon.",
    },
    security: {
      eyebrow: "Reliability",
      headline: "Your data is fully protected.",
      subtitle:
        "Gestory protects your business information with the same technology banks use.",
      bankLevel: "Bank-Level Security",
      bankLevelDesc: "AES-256 encryption on all your data.",
      backups: "Daily Backups",
      backupsDesc: "Automatic security copies every day.",
      uptime: "99.9% Uptime",
      uptimeDesc: "Always-on Amazon AWS infrastructure.",
      privacy: "Total Privacy",
      privacyDesc: "Your data is yours. We never share it.",
    },
    footer: {
      description:
        "The centralized ERP for businesses and franchises to scale without worrying about technology.",
      product: "Product",
      productLinks: [
        "Multi-Warehouse Inventory",
        "POS Point of Sale",
        "B2B Wholesale Portal",
        "CFDI 4.0 Invoicing",
      ],
      company: "Company",
      companyLinks: ["Security", "Support", "Pricing"],
      legal: "Legal",
      legalLinks: ["Terms of Service", "Privacy", "Legal Notice"],
      contact: "Contact",
      rights: "All rights reserved.",
      uptimeLabel: "Uptime 99.9%",
      sslLabel: "SSL Security",
    },
    demo: {
      title: "See Gestory in Action",
      subtitle:
        "Schedule a 15-minute call with Diego Rodríguez. We'll review your needs and how to adapt Gestory for your business.",
      step1: "Step 1 of 2",
      step2: "Step 2 of 2",
      step1Title: "How can we contact you?",
      step2Title: "Customize your demo (optional)",
      nameLabel: "Full Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "john@mycompany.com",
      phoneLabel: "Phone or WhatsApp",
      phonePlaceholder: "+52 (55) 1234 5678",
      companyLabel: "Company Name",
      companyPlaceholder: "My Company Inc.",
      teamSizeLabel: "Team size",
      teamSizeOptions: ["1-5 employees", "6-20 employees", "21-50 employees", "50+ employees"],
      continue: "Continue",
      back: "Back",
      optionalHint: "This final step helps us tailor the demo to your operation.",
      submit: "Request my Demo",
      sending: "Sending...",
      privacy: "We won't share your information with third parties.",
      successTitle: "Demo booked!",
      successMsg:
        "Diego Rodríguez te contactará en las próximas 24 horas para confirmar tu videollamada.",
      errorMsg: "There was an error. Try again or write us on WhatsApp.",
    },
    whatsapp: {
      tooltip: "Want to talk with Diego Rodríguez about the Multi-Branch plan?",
      schedule: "Mon-Fri · 9:00 AM to 6:00 PM (CDMX)",
      cta: "Talk to sales",
      message: "Hi, I saw the Gestory landing page and I want a demo of the Multi-Branch plan. Can you share availability?",
    },
  },
};

export type TranslationKeys = typeof translations.es;
