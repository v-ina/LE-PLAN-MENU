import type { Config } from "tailwindcss";

const config: Config = {
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
        maingreen : "#00BF63",
        grassgreen : "#7ed957",
        limegreen : "#c1ff71",
        deepgreen : "#0E523B",
        lightgreen : "#A9D985",
      },
      boxShadow : {
        'text-lime' : '2px 2px 4px limegreen'
      },
    },
  },
  plugins: [],
};
export default config;
