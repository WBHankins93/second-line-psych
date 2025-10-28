import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#fad1d9',
          300: '#f5a3b5',
          400: '#ed6b8c',
          500: '#e23d68',
          600: '#cd1f51',
          700: '#a01541',
          800: '#7f1239',
          900: '#5c0e2a',
        },
        maroon: {
          50: '#fdf2f4',
          100: '#fbe8ec',
          200: '#f8d5dd',
          300: '#f1b0c0',
          400: '#e7809b',
          500: '#d9547a',
          600: '#c4365e',
          700: '#a8284d',
          800: '#8b2543',
          900: '#75233d',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
}
export default config