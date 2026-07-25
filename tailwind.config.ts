import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          light: "#E6BA54",
          DEFAULT: "#D4AF37",
          dark: "#C58B2B",
        },
        herbal: {
          light: "#A32E23",
          DEFAULT: "#8B261D",
          dark: "#6B1D16",
        },
        botanical: {
          light: "#3C6353",
          DEFAULT: "#2C4A3E",
          dark: "#1E362C",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          soft: "#F4EFE6",
        },
        beige: {
          DEFAULT: "#EFEAE1",
          dark: "#E5DED0",
        },
        earth: {
          DEFAULT: "#4A3728",
          dark: "#38291D",
        },
        charcoal: {
          light: "#242220",
          DEFAULT: "#1A1918",
          dark: "#141312",
        },
        gold: {
          light: "#F3D35B",
          DEFAULT: "#E2C044",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #C58B2B 100%)",
        "herbal-gradient": "linear-gradient(135deg, #8B261D 0%, #4A3728 100%)",
        "sunlight-gradient": "radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.15) 0%, rgba(20, 19, 18, 0) 70%)",
        "glass-radial": "radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
