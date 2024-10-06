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
      }
    }
  },
  plugins: [],
};
export default config;
