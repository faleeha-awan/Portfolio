module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        bg: "#020403",
        surface: "#141413",
        card: "#1a1918",
        border: "#252422",
        accent: "#5F2E1B",
        "accent-bright": "#8B4513",
        "accent-dim": "#3d1e10",
        cyan: "#1A2324",
        muted: "#4a4540",
        "text-primary": "#f5f5f2",
        "text-secondary": "#b0aba5",
        "text-dim": "#5a5550",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "slide-in": "slideIn 0.5s ease forwards",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px #7B6EF620" },
          "100%": { boxShadow: "0 0 40px #7B6EF640" },
        },
      },
    },
  },
  plugins: [],
};