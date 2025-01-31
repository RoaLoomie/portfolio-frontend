import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    require ('tailwind-scrollbar-hide')
  ],
};
export default config;
