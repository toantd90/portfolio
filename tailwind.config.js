/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body:    ["var(--font-body)",    "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 4s ease infinite",
        spotlight: "spotlight 2s ease 0.75s 1 forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% center" },
          "50%": { backgroundPosition: "100% center" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(139, 92, 246, 0.25)",
        "glow-lg": "0 0 40px rgba(139, 92, 246, 0.35)",
      },
    },
  },
  plugins: [],
}
