import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0a0a0a",
        purple: {
          start: "#8b5cf6",
          end: "#3b82f6",
        },
      },
      backgroundImage: {
        "gradient-purple": "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
        "gradient-purple-hover": "linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "gradient-shift": "gradient 8s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

