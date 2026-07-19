import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#38BDF8",
        background: "#0F172A",
        surface: "#1E293B",
        text: "#F8FAFC",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
