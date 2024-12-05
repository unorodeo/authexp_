import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "var(--font-inter)"],
        mono: ["var(--font-geist-mono)", "Consolas"],
      },
    },
  },
  plugins: [],
};
export default config;

