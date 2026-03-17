import Link from "next/link";
import { Mail, Phone, MessageCircle, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-borderDark bg-surface pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Quick Contact Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs text-textMuted uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:ventas@lumina.com" className="text-white hover:text-primary transition-colors font-medium">
                  ventas@lumina.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs text-textMuted uppercase tracking-wider mb-1">WhatsApp</p>
                <a href="https://wa.me/528131234567" className="text-white hover:text-primary transition-colors font-medium">
                  +52 813 1234 567
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs text-textMuted uppercase tracking-wider mb-1">Soporte</p>
                <a href="tel:+528131234567" className="text-white hover:text-primary transition-colors font-medium">
                  +52 813 1234 567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <span className="text-primary tracking-tighter">{"///"}</span>
              <span>Lumina</span>
            </Link>
            <p className="text-textMuted text-sm leading-relaxed mb-6">
              Infraestructura digital diseñada para los fabricantes y distribuidores que mueven a México.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" className="bg-white/5 hover:bg-primary/20 text-textMuted hover:text-primary transition-all p-2.5 rounded-lg" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="bg-white/5 hover:bg-primary/20 text-textMuted hover:text-primary transition-all p-2.5 rounded-lg" title="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" className="bg-white/5 hover:bg-primary/20 text-textMuted hover:text-primary transition-all p-2.5 rounded-lg" title="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Producto</h4>
            <ul className="space-y-3 text-sm text-textMuted">
              <li><Link href="#features" className="hover:text-primary transition-colors">Características</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">Planes</Link></li>
              <li><Link href="#integrations" className="hover:text-primary transition-colors">Integraciones</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">API Docs</Link></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Empresa</h4>
            <ul className="space-y-3 text-sm text-textMuted">
              <li><Link href="#" className="hover:text-primary transition-colors">Acerca de</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#success-stories" className="hover:text-primary transition-colors">Casos de Éxito</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Carreras</Link></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Recursos</h4>
            <ul className="space-y-3 text-sm text-textMuted">
              <li><Link href="/guia-gratuita" className="hover:text-primary transition-colors">Guía Gratuita</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Documentación</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Webinars</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Soporte 24/7</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-textMuted">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacidad</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Términos</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cookies</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cumplimiento</Link></li>
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
            <Link href="#" className="hover:text-primary transition-colors">Mapa del Sitio</Link>
            <span className="text-borderDark">•</span>
            <Link href="#" className="hover:text-primary transition-colors">Reportar Abuso</Link>
            <span className="text-borderDark">•</span>
            <Link href="#" className="hover:text-primary transition-colors">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}