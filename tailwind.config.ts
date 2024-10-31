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
        background: '#ffffff',
        foreground: '#171717',
        darkBackground: '#0a0a0a',
        darkForeground: '#ededed',
        },
        fontFamily: {
          sans: ['Inter', 'Arial', 'sans-serif'],
        },
      },
    },
  plugins: [

  ],
};
export default config;
