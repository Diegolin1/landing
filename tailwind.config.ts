import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      fontWeight: {
        heading: "600",
      },
      colors: {
        // Gestory Enterprise Palette
        primary: "#1E3A8A",        // Deep Navy (Solid, Enterprise)
        "primary-hover": "#1e306e",
        "primary-light": "#DBEAFE", // Soft background
        accent: "#2563EB",         // Vibrant Blue (CTAs, Highlights)
        "accent-hover": "#1D4ED8",
        
        success: "#10B981",         // Clean validation green
        "success-light": "#D1FAE5",
        warning: "#F59E0B",
        "warning-light": "#FEF3C7",
        error: "#EF4444",
        "error-light": "#FEE2E2",

        // Surfaces
        background: "#FAFAFA",      // Clean app background
        surface: "#FFFFFF",         // Cards
        "surface-muted": "#F3F4F6", // Alternate sections (Gray 100)
        "surface-dark": "#0F172A",  // Footer

        // Typography
        textPrimary: "#0F172A",     // Slate 900
        textSecondary: "#475569",   // Slate 600
        textMuted: "#94A3B8",       // Slate 400
        textInverse: "#F8FAFC",     // Slate 50

        // Bordes
        borderLight: "#E2E8F0",     // Slate 200
        borderMedium: "#CBD5E1",    // Slate 300
        borderDark: "#1E293B",      // Slate 800
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #FAFAFA 0%, #DBEAFE 100%)",
        "glass-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
        "footer-dark": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      },
      boxShadow: {
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        "card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)",
        "glow": "0 0 20px rgba(37, 99, 235, 0.2)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "marquee-left": "marquee-left 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
