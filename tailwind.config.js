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
        bg: "#0a0a0f",
        surface: "#111118",
        card: "#13131c",
        border: "#1e1e2e",
        accent: "#7B6EF6",
        "accent-dim": "#4f46a8",
        cyan: "#22d3ee",
        muted: "#4a4a6a",
        "text-primary": "#e8e8f0",
        "text-secondary": "#8888aa",
        "text-dim": "#4a4a6a",
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