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
        fadeIn: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(-10px)',
            backdropFilter: 'blur(0px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)',
            backdropFilter: 'blur(8px)'
          }
        },
        fadeOut: {
          '0%': { 
            opacity: '1', 
            transform: 'translateY(0)',
            backdropFilter: 'blur(8px)'
          },
          '100%': { 
            opacity: '0', 
            transform: 'translateY(-10px)',
            backdropFilter: 'blur(0px)'
          }
        }
      },
      animation: {
        'scroll-left': 'scroll-left var(--speed) linear infinite',
        'scroll-right': 'scroll-right var(--speed) linear infinite',
        'fadeIn': 'fadeIn 0.3s ease-out forwards',
        'fadeOut': 'fadeOut 0.3s ease-out forwards'
      },
    },
    screens: {
      xs: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  },
  plugins: [],
};

export default config;