# 🚀 Guía de Despliegue en Vercel

## ✅ Commit Exitoso

Tu código ya está en GitHub:
- **Repositorio**: https://github.com/Diegolin1/landing.git
- **Rama**: `main`
- **Último commit**: `b5a595a` - feat: Transformación completa de landing page

---

## 📋 Pasos para Desplegar en Vercel

### **Opción 1: Deploy Automático desde Vercel Dashboard** (RECOMENDADO)

1. **Ir a Vercel**
   - Ve a: https://vercel.com
   - Inicia sesión con tu cuenta de GitHub

2. **Importar Proyecto**
   - Click en "Add New..." → "Project"
   - Selecciona tu repositorio: `Diegolin1/landing`
   - Click en "Import"

3. **Configurar el Proyecto**
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **Variables de Entorno** (Opcional)
   ```
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
   ```

5. **Deploy**
   - Click en "Deploy"
   - Espera 2-3 minutos ⏱️
   - ¡Listo! 🎉

---

### **Opción 2: Deploy desde CLI** (Para desarrolladores)

1. **Instalar Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login en Vercel**
   ```bash
   vercel login
   ```

3. **Deploy desde la carpeta landing**
   ```bash
   cd "D:\Descargas disco 2\saas01\landing"
   vercel
   ```

4. **Seguir el wizard interactivo**
   ```
   ? Set up and deploy "D:\Descargas disco 2\saas01\landing"? [Y/n] Y
   ? Which scope do you want to deploy to? [Tu cuenta]
   ? Link to existing project? [N/y] N
   ? What's your project's name? lumina-b2b
   ? In which directory is your code located? ./
   ```

5. **Deploy a producción**
   ```bash
   vercel --prod
   ```

---

## 🔗 URLs Generadas

Después del deploy, Vercel te dará:
- **Preview URL**: `https://lumina-b2b-[hash].vercel.app` (cada commit)
- **Production URL**: `https://lumina-b2b.vercel.app` (rama main)

---

## ⚙️ Configuración Automática de Vercel

Vercel detectará automáticamente:
- ✅ Next.js 16.1.6
- ✅ React 19.2.3
- ✅ Node.js 20.x
- ✅ Build command: `next build`
- ✅ Output directory: `.next`

**No necesitas configurar nada manualmente** 🎯

---

## 🔄 Deploys Automáticos

Cada vez que hagas push a `main`:
```bash
git add .
git commit -m "tu mensaje"
git push origin main
```

Vercel **automáticamente**:
1. Detecta el push
2. Ejecuta el build
3. Despliega a producción
4. Te notifica por email

---

## 🌐 Configurar Dominio Personalizado

### **En Vercel Dashboard:**

1. Ve a tu proyecto → Settings → Domains
2. Agrega tu dominio: `lumina.mx`
3. Configura los DNS en tu registrador:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Espera propagación DNS (5-30 minutos)
5. ✅ Tu sitio estará en `https://lumina.mx`

---

## 📊 Monitoreo y Analytics

### **Vercel Analytics** (Gratis)
- Automáticamente habilitado
- Ve a: Project → Analytics
- Métricas en tiempo real:
  - Page views
  - Unique visitors
  - Top pages
  - Referrers

### **Vercel Speed Insights** (Gratis)
- Ve a: Project → Speed Insights
- Core Web Vitals:
  - LCP (Largest Contentful Paint)
  - FID (First Input Delay)
  - CLS (Cumulative Layout Shift)

---

## 🐛 Troubleshooting

### **Error: Build Failed**
```bash
# Verifica que el build funciona localmente
npm run build

# Si hay error, revisa:
npm install
npm run build
```

### **Error: Module not found**
```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

### **Error 404 en rutas**
- Next.js usa file-based routing
- Verifica que tus rutas están en `src/app/`

---

## 📦 Optimizaciones Post-Deploy

### **1. Habilitar Vercel Analytics**
```bash
# En tu proyecto de Vercel
Settings → Analytics → Enable
```

### **2. Configurar Environment Variables**
```bash
# En Vercel Dashboard
Settings → Environment Variables → Add
```

Variables recomendadas:
```env
NEXT_PUBLIC_SITE_URL=https://lumina.mx
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL=123456789
```

### **3. Configurar Redirects** (Opcional)
Crea `vercel.json` en la raíz:
```json
{
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

---

## 🎯 Checklist Post-Deploy

- [ ] Sitio cargando correctamente
- [ ] Todas las imágenes visibles
- [ ] Formularios funcionando
- [ ] Links internos funcionando
- [ ] Mobile responsive OK
- [ ] Lighthouse score > 90
- [ ] Google Search Console configurado
- [ ] Google Analytics configurado
- [ ] Facebook Pixel configurado (opcional)
- [ ] Dominio personalizado configurado
- [ ] SSL/HTTPS habilitado (automático en Vercel)

---

## 📈 Lighthouse Score Esperado

Después del deploy, tu sitio debería tener:
- **Performance**: 90-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 95-100

Para verificar:
1. Abre Chrome DevTools (F12)
2. Ve a pestaña "Lighthouse"
3. Click en "Analyze page load"

---

## 🔗 Links Útiles

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Tu Repositorio**: https://github.com/Diegolin1/landing

---

## 🆘 Soporte

Si tienes problemas:
1. Revisa los logs de build en Vercel Dashboard
2. Verifica que el build funciona localmente: `npm run build`
3. Contacta a Vercel Support (chat en dashboard)

---

## 🎉 ¡Listo!

Tu landing page está deployada y lista para:
- ✅ Generar leads
- ✅ Convertir visitantes en clientes
- ✅ Competir con Shopify y otros SaaS B2B

**URL de producción**: https://lumina-b2b.vercel.app

¡Feliz crecimiento! 🚀🇲🇽
