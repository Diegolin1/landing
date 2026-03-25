import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f4f5f9',
          100: '#e5e8f0',
          200: '#c7cede',
          300: '#00D1FF', // Cyan accent
          400: '#677db0',
          500: '#0052FF', // Deep Blue Primary
          600: '#0044D4', // Darker shade
          700: '#2c3a64',
          800: '#253153',
          900: '#0B0F19', // Midnight Background
          950: '#070a12',
        },
        gold: {
          100: '#FFF8E1',
          200: '#FFE8B3',
          400: '#FBBF24',
          500: '#D4AF37', // Classic elegant gold
          600: '#B8860B',
        },
        background: "#0A0A0B",
        surface: "#141415",
        surfaceHover: "#1E1E20",
        primary: {
          DEFAULT: "#F59E0B",
          hover: "#D97706",
          dark: "#B45309",
        },
        textMain: "#FDFDFD",
        textMuted: "#A1A1AA",
        borderDark: "#27272A",
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 50% -20%, rgba(0, 82, 255, 0.15), rgba(11, 15, 25, 0))',
        'gold-glow': 'radial-gradient(circle at 50% -20%, rgba(212, 175, 55, 0.15), rgba(11, 15, 25, 0))',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px rgba(0, 82, 255, 0.15)',
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.15)',
      }
    },
  },
  plugins: [],
};
export default config;