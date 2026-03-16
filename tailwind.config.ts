import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0B",
        surface: "#141415",
        surfaceHover: "#1E1E20",
        primary: {
          DEFAULT: "#F59E0B", // Ámbar Eléctrico
          hover: "#D97706",
          dark: "#B45309",
        },
        textMain: "#FDFDFD",
        textMuted: "#A1A1AA",
        borderDark: "#27272A",
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 50% -20%, rgba(245, 158, 11, 0.15), rgba(10, 10, 11, 0))',
      },
    },
  },
  plugins: [],
};
export default config;