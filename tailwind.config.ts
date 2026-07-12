import type { Config } from "tailwindcss";

/**
 * TurkeyBridge Design System
 * - Deep Corporate Navy   → primary brand color
 * - Premium Gold          → VIP / Elite accents & CTAs
 * - Slate Grays / Whites  → surfaces & typography
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          50: "#F0F4FA",
          100: "#DCE6F2",
          200: "#B9CCE5",
          300: "#8FACD3",
          400: "#5F84BA",
          500: "#3D639E",
          600: "#2C4B7E",
          700: "#1F3760",
          800: "#152847",
          900: "#0B1F3A",
          950: "#061325",
        },
        gold: {
          DEFAULT: "#C9A227",
          50: "#FBF7EA",
          100: "#F5ECC9",
          200: "#EAD88E",
          300: "#DFC254",
          400: "#D4B035",
          500: "#C9A227",
          600: "#A98420",
          700: "#87661B",
          800: "#6D5119",
          900: "#5A4318",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        fa: ["var(--font-vazirmatn)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-up-delay-1": "fade-up 0.7s ease-out 0.15s both",
        "fade-up-delay-2": "fade-up 0.7s ease-out 0.3s both",
        "fade-up-delay-3": "fade-up 0.7s ease-out 0.45s both",
        "fade-in": "fade-in 1s ease-out both",
      },
      boxShadow: {
        card: "0 1px 2px rgba(6, 19, 37, 0.06), 0 8px 24px rgba(6, 19, 37, 0.08)",
        "card-hover": "0 4px 8px rgba(6, 19, 37, 0.08), 0 20px 48px rgba(6, 19, 37, 0.16)",
        gold: "0 8px 32px rgba(201, 162, 39, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
