import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'xsm': '420px'
    },
    dropShadow: {
      'text': '3px 3px rgba(0, 0, 0, 0.4)'
    },
    animation: {
      'fade-in': 'fade 1s cubic-bezier(0.4, 0, 0.6, 1)',
      'pulse2': 'pulse2 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
    },
    keyframes: {
      fade: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      pulse2: {
        '0%': {
          opacity: '0'
        },
        '50%': {
          opacity: '.5'
        },
        '100%': {
          opacity: '0'
        },
      }
    }
  },
  plugins: [],
}
export default config
