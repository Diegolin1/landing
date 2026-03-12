export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-borderDark bg-surface pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold flex items-center gap-2 mb-4">
              <span className="text-primary tracking-tighter">///</span>
              <span>Lumina</span>
            </div>
            <p className="text-textMuted text-sm leading-relaxed mb-6">
              Infraestructura digital diseñada para los fabricantes y distribuidores que mueven a México.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-textMuted hover:text-primary transition-colors" title="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a href="#" className="text-textMuted hover:text-primary transition-colors" title="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Producto</h4>
            <ul className="space-y-3 text-sm text-textMuted">
              <li><a href="#solucion" className="hover:text-primary transition-colors">Características</a></li>
              <li><a href="#precios" className="hover:text-primary transition-colors">Planes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integraciónes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Docs</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Empresa</h4>
            <ul className="space-y-3 text-sm text-textMuted">
              <li><a href="#" className="hover:text-primary transition-colors">Acerca de</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Soporte</h4>
            <ul className="space-y-3 text-sm text-textMuted">
              <li><a href="#" className="hover:text-primary transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto Ventas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Estado del Servicio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Soporte 24/7</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-textMuted">
              <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cumplimiento</a></li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-surface/50 border border-borderDark rounded-lg p-6 mb-12">
          <p className="text-sm text-textMuted text-center mb-4">Certificaciones y Cumplimiento</p>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div>
              <p className="text-xs font-semibold text-primary">CFDI 4.0</p>
              <p className="text-xs text-textMuted">SAT Validado</p>
            </div>
            <div className="w-px bg-borderDark" />
            <div>
              <p className="text-xs font-semibold text-primary">SSL/TLS</p>
              <p className="text-xs text-textMuted">Encriptación 256-bit</p>
            </div>
            <div className="w-px bg-borderDark" />
            <div>
              <p className="text-xs font-semibold text-primary">GDPR</p>
              <p className="text-xs text-textMuted">Protección de Datos</p>
            </div>
            <div className="w-px bg-borderDark" />
            <div>
              <p className="text-xs font-semibold text-primary">99.9%</p>
              <p className="text-xs text-textMuted">Uptime SLA</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-borderDark pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-textMuted">
          <p>© {currentYear} Lumina ShowRoom B2B. Todos los derechos reservados.</p>
          <p>
            <span className="text-primary">Hecho en 🇲🇽</span> para impulsar la industria mexicana.
          </p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:text-primary transition-colors">Mapa del Sitio</a>
            <span className="text-borderDark">•</span>
            <a href="#" className="hover:text-primary transition-colors">Reportar Abuso</a>
            <span className="text-borderDark">•</span>
            <a href="#" className="hover:text-primary transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}