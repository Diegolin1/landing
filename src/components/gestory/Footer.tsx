import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    product: ["Inventario Multi-Almacén", "Punto de Venta POS", "B2B Mayoristas", "API & Webhooks"],
    company: ["Acerca de", "Casos de Éxito", "Seguridad", "Blog"],
    legal: ["Términos de Servicio", "Privacidad", "Aviso Legal", "Soporte SLA"]
  };

  return (
    <footer className="bg-surface-dark text-textInverse border-t border-borderDark pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/">
              <Image 
                src="/logos/gestory.png" 
                alt="Gestory Logo" 
                width={120} 
                height={32} 
                className="h-8 w-auto brightness-0 invert mb-6"
                priority
              />
            </Link>
            <p className="text-textMuted text-sm font-medium leading-relaxed mb-6">
              El ERP centralizado para que negocios y franquicias escalen sin preocuparse por la tecnología.
            </p>
            <div className="flex space-x-4 text-textMuted">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold text-white mb-4 tracking-wider uppercase text-xs">Producto</h5>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-textMuted hover:text-white font-medium transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4 tracking-wider uppercase text-xs">Empresa</h5>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-textMuted hover:text-white font-medium transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4 tracking-wider uppercase text-xs">Legal</h5>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-textMuted hover:text-white font-medium transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-borderDark flex flex-col md:flex-row justify-between items-center text-sm text-textMuted">
          <p>© {new Date().getFullYear()} Gestory SaaS. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <span>Uptime 99.99%</span>
            <span>Seguridad SSL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}