// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "spin-slow": "spin 4s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      colors: {
        peach: {
          50: '#FBE4D6', // Light peach background
        },
      },
      fontFamily: {
            irish: ["'Irish Grover'", "cursive"],
          },
    },
  },
  plugins: [],
};

export default config;
