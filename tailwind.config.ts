import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'], // Keep it sleek and unified
      },
      colors: {
        brand: {
          50: '#f6f8fb',
          100: '#edf1f7',
          200: '#d7e1ee',
          300: '#b4c6df',
          400: '#8ba4cc',
          500: '#5a7bf0', // Primary SaaS blue
          600: '#3d5adf', // Hover state
          700: '#3248bd',
          800: '#2b3d9b',
          900: '#26347c',
          950: '#0b0f19', // Deep dark mode background
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        gold: {
          400: '#facc15',
          500: '#eab308',
        },
        background: "#0c0a09",
        surface: "#1c1917",
        surfaceHover: "#292524",
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(90, 123, 240, 0.15), transparent 50%)',
        'gold-glow': 'radial-gradient(circle at 50% 0%, rgba(234, 179, 8, 0.1), transparent 50%)',
      },
      boxShadow: {
        'glass': '0 4px 24px -1px rgba(0, 0, 0, 0.05)',
        'glass-dark': '0 4px 32px -1px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 24px rgba(90, 123, 240, 0.15)',
      }
    },
  },
  plugins: [],
};
export default config;