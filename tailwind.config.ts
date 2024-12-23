import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "gabriela": ["var(--font-gabriela)"],
        "futura-pt": ["var(--font-futura-pt)"],
      },
      colors: {
        "carbon": "#333333",
        "white-smoke": "#f5f5f6",
        "orochimaru": "#d9d9d9",
        "beluga": "#f1f1f1",
      }
    }
  },
  plugins: [
    require("tailwind-scrollbar")({
        nocompatible: true,
        preferredStrategy: 'pseudoelements'
     })
  ],
};

export default config;
