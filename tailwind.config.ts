import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionDuration: {
        custom: '500ms',
      },
      colors: {
        primary: {
          DEFAULT: '#030712',
          light: '#f9fafb',
          dark: '#030712',
        },
        secondary: {
          DEFAULT: '#3f3f46',
          light: '#d4d4d4',
          dark: '#3f3f46',
        },
        background: '#fafafa',
        surface: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
