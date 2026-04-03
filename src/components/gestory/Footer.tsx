"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Phone } from "lucide-react";
import { useI18n } from "../../i18n";

export default function Footer() {
  const { t } = useI18n();

  const productAnchors = ["#soluciones", "#soluciones", "#soluciones", "#soluciones"];
  const companyAnchors = ["#security", "#faq", "#precios"];

  return (
    <footer className="bg-surface-dark text-textInverse border-t border-borderDark pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <Image 
                src="/logos/gestory-white.png" 
                alt="Gestory Logo" 
                width={160} 
                height={50} 
                className="h-10 w-auto mb-5"
                priority
              />
            </Link>
            <p className="text-textMuted text-sm font-medium leading-relaxed mb-5">
              {t.footer.description}
            </p>
            <div className="flex gap-3 text-textMuted">
              <a href="https://wa.me/524776633068" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10" aria-label="WhatsApp">
                <Phone className="h-4 w-4" />
              </a>
              <a href="mailto:contacto@gestory.com" className="hover:text-white transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wider uppercase text-xs">{t.footer.product}</h4>
            <ul className="space-y-2.5">
              {t.footer.productLinks.map((link, i) => (
                <li key={link}>
                  <Link href={productAnchors[i] || "#"} className="text-sm text-textMuted hover:text-white font-medium transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wider uppercase text-xs">{t.footer.company}</h4>
            <ul className="space-y-2.5">
              {t.footer.companyLinks.map((link, i) => (
                <li key={link}>
                  <Link href={companyAnchors[i] || "#"} className="text-sm text-textMuted hover:text-white font-medium transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wider uppercase text-xs">{t.footer.legal}</h4>
            <ul className="space-y-2.5">
              {t.footer.legalLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-textMuted hover:text-white font-medium transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Contact info */}
            <div className="mt-6 pt-4 border-t border-borderDark">
              <h4 className="font-semibold text-white mb-3 tracking-wider uppercase text-xs">{t.footer.contact}</h4>
              <a href="https://wa.me/524776633068" target="_blank" rel="noopener noreferrer" className="text-sm text-textMuted hover:text-white font-medium transition-colors block mb-1">
                +52 (477) 663 3068
              </a>
              <a href="mailto:contacto@gestory.com" className="text-sm text-textMuted hover:text-white font-medium transition-colors block">
                contacto@gestory.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-borderDark flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-textMuted">
          <p>© {new Date().getFullYear()} Gestory. {t.footer.rights}</p>
          <div className="flex gap-4">
            <span>{t.footer.uptimeLabel}</span>
            <span>•</span>
            <span>{t.footer.sslLabel}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}