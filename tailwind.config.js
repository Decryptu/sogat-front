/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        sermas: "var(--sermas)",
        haquette: "var(--haquette)",
        aretec: "var(--aretec)",
        cip: "var(--cip)",
        sp2iPrehension: "var(--sp2i-prehension)",
        sp2iFeroviaire: "var(--sp2i-feroviaire)",
        tracip: "var(--tracip)",
        tracipMecano: "var(--tracip-mecano)",
      },
    },
  },
  plugins: [],
};
