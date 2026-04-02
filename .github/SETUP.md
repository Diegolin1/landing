# 🚀 GitHub Actions Setup Required

Para activar el CI/CD en este repositorio, necesitas completar estos pasos:

## 1️⃣ Agregar GitHub Secrets (OPCIONAL)

Si quieres auto-deploy a Vercel en push a main, ve a: **Settings > Secrets and variables > Actions**

Agrega estos secrets:

```
VERCEL_TOKEN = <obtén de https://vercel.com/account/tokens>
VERCEL_ORG_ID = <tu org ID>
VERCEL_PROJECT_ID = <project ID del landing>
```

## 2️⃣ Commit & Push

```bash
git add .github/
git commit -m "ci: Add GitHub Actions CI/CD workflow"
git push origin main
```

## 3️⃣ Verificar

Ve a: **Actions tab** para ver los workflows corriendo

---

**Los workflows incluyen:**
- ✅ ESLint validation
- ✅ Next.js production build
- ✅ TypeScript type checking
- ✅ Build artifact upload

**Opcional:** Para auto-deploy a Vercel, configura los secrets listados arriba.
