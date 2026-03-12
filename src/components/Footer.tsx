export default function Footer() {
  return (
    <footer className="border-t border-borderDark bg-surface pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <div className="text-2xl font-bold flex items-center gap-2 mb-4">
            <span className="text-primary tracking-tighter">///</span>
            <span>Lumina</span>
          </div>
          <p className="text-textMuted text-sm max-w-sm mb-6">
            Infraestructura digital diseñada para los fabricantes y distribuidores que mueven a México. Crece tus ventas al mayoreo sin fricciones.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Producto</h4>
          <ul className="space-y-2 text-sm text-textMuted">
            <li><a href="#" className="hover:text-primary transition-colors">Catálogo Digital</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">CRM B2B</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Facturación CFDI</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Precios</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Soporte</h4>
          <ul className="space-y-2 text-sm text-textMuted">
            <li><a href="#" className="hover:text-primary transition-colors">Centro de Ayuda</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contacto Ventas</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-borderDark pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-textMuted">
        <p>© {new Date().getFullYear()} Lumina ShowRoom B2B. Todos los derechos reservados.</p>
        <p>Hecho para impulsar la industria mexicana.</p>
      </div>
    </footer>
  );
}