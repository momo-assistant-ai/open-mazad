import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        dark: '#ffffff',
        primary: '#0EADA7',
        secondary: '#89C668',
        accent: '#E89E3D',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
      },
      boxShadow: {
        'glow-teal': '0 0 100px rgba(14,173,167,0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay-1': 'float 7s ease-in-out 1s infinite',
        'float-delay-2': 'float 8s ease-in-out 2s infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
