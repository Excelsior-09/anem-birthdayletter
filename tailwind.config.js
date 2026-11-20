/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sakura: {
          light: '#FCEEF2',
          DEFAULT: '#F4C9D4',
          dark: '#E8A5B7',
        },
        ivory: {
          light: '#FFFFFB',
          DEFAULT: '#FFF8F0',
          dark: '#F7EDE1',
        },
        turquoise: {
          light: '#9EE0DA',
          DEFAULT: '#75C9C2',
          dark: '#4CAEA6',
        },
        sage: {
          light: '#C7D7C1',
          DEFAULT: '#A9BFA2',
          dark: '#87A37E',
        },
        gold: {
          light: '#EAD7A6',
          DEFAULT: '#D6B574',
          dark: '#B8944C',
        },
        botanical: {
          light: '#4C7A6D',
          DEFAULT: '#355B50',
          dark: '#223E36',
        },
        rose: {
          light: '#F5D3DD',
          DEFAULT: '#E8B8C5',
          dark: '#CE93A3',
        },
        warmText: {
          light: '#72605A',
          DEFAULT: '#51443F',
          dark: '#352C28',
        }
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        lora: ['Lora', 'serif'],
        allura: ['Allura', 'cursive'],
        greatvibes: ['"Great Vibes"', 'cursive'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
