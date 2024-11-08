// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--clashdisplay)'],

      },
      colors: {
        primary: '#CEF440',
        secondary: '#151516',
        gray:'#d5d5d5'
     
      },
       keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(calc(-100% - var(--gap)))' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'scroll-left': 'scroll-left var(--speed) linear infinite',
        'scroll-right': 'scroll-right var(--speed) linear infinite',
      },

    },
  },
  plugins: [],
};

export default config;