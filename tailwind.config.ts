import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "484px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "Outfit", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "Outfit", "system-ui", "sans-serif"],
      },
      colors: {
        // Gestory Enterprise Palette
        primary: "#1E3A8A",
        "primary-hover": "#1e306e",
        "primary-light": "#DBEAFE",
        accent: "#2563EB",
        "accent-hover": "#1D4ED8",
        
        success: "#10B981",
        "success-light": "#D1FAE5",
        warning: "#F59E0B",
        "warning-light": "#FEF3C7",
        error: "#EF4444",
        "error-light": "#FEE2E2",

        // Surfaces
        background: "#FAFAFA",
        surface: "#FFFFFF",
        "surface-muted": "#F3F4F6",
        "surface-dark": "#0F172A",

        // Typography
        textPrimary: "#0F172A",
        textSecondary: "#475569",
        textMuted: "#94A3B8",
        textInverse: "#F8FAFC",

        // Borders
        borderLight: "#E2E8F0",
        borderMedium: "#CBD5E1",
        borderDark: "#1E293B",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #FAFAFA 0%, #DBEAFE 50%, #EDE9FE 100%)",
        "glass-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
        "footer-dark": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        "cta-gradient": "linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%)",
      },
      boxShadow: {
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        "card-hover": "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.04)",
        "glow": "0 0 20px rgba(37, 99, 235, 0.15)",
        "glow-lg": "0 0 40px rgba(37, 99, 235, 0.2)",
        "float": "0 20px 60px -15px rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(37, 99, 235, 0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(37, 99, 235, 0.3)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "marquee-left": "marquee-left 40s linear infinite",
        "float": "float 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "scale-in": "scale-in 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
