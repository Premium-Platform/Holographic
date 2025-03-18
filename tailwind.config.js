/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ark': {
          'bg': '#081426',
          'panel': '#0F1A2D',
          'border': '#1A2B4A',
          'hover': '#152238',
          'active': '#1D2B41',
          'accent': '#38BDF8',
          'text': {
            DEFAULT: '#E0E7FF',
            secondary: '#A3B1E0',
            muted: '#748AC6',
          },
          'blue': {
            light: '#79C0FF',
            DEFAULT: '#1F6FEB',
            dark: '#1958B7',
          },
          'green': {
            light: '#70E0B5',
            DEFAULT: '#29B99A',
            dark: '#1D8673',
          },
          'red': {
            light: '#FF7B9E',
            DEFAULT: '#F85178',
            dark: '#DA3364',
          },
          'yellow': {
            light: '#F8E3A1',
            DEFAULT: '#F2CC60',
            dark: '#D9B44D',
          },
          'purple': {
            light: '#D2A8FF',
            DEFAULT: '#8957E5',
            dark: '#6E40C9',
          },
          'cyan': {
            light: '#76E4F7',
            DEFAULT: '#39C5BB',
            dark: '#1B9E94',
          },
          'orange': {
            light: '#FFAB70',
            DEFAULT: '#F0883E',
            dark: '#DB6D28',
          },
          'pink': {
            light: '#F778BA',
            DEFAULT: '#DB61A2',
            dark: '#BF4B8A',
          },
          'indigo': {
            light: '#A5B4FC',
            DEFAULT: '#6366F1',
            dark: '#4F46E5',
          },
          'teal': {
            light: '#5EEAD4',
            DEFAULT: '#14B8A6',
            dark: '#0D9488',
          }
        },
        'holo': {
          'blue': '#00C2FF',
          'cyan': '#00FFFF',
          'purple': '#B57EFF',
          'pink': '#FF7EF5',
          'indigo': '#536DFE',
        },
      },
      fontFamily: {
        'display': ['Fira Code', 'monospace'],
        'mono': ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        'holographic': 'holographic 5s ease-in-out infinite alternate',
        'holo-shift': 'holo-shift 8s ease-in-out infinite alternate',
        'holo-pulse': 'holo-pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'scan': 'scan 2s linear infinite',
        'scan-vertical': 'scan-vertical 3s linear infinite',
        'holo-rotate': 'holo-rotate 15s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #00C2FF, 0 0 10px #00C2FF' },
          '100%': { textShadow: '0 0 10px #00C2FF, 0 0 20px #00C2FF, 0 0 30px #00C2FF' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00C2FF' },
        },
        holographic: {
          '0%': { 
            filter: 'hue-rotate(0deg) brightness(1) saturate(1.5)',
            boxShadow: '0 0 20px rgba(0, 194, 255, 0.5)'
          },
          '50%': { 
            filter: 'hue-rotate(180deg) brightness(1.1) saturate(2)',
            boxShadow: '0 0 40px rgba(181, 126, 255, 0.5)'
          },
          '100%': { 
            filter: 'hue-rotate(360deg) brightness(1) saturate(1.5)',
            boxShadow: '0 0 20px rgba(0, 194, 255, 0.5)'
          }
        },
        'holo-shift': {
          '0%': { 
            backgroundPosition: '0% 0%',
            opacity: 0.7,
          },
          '50%': { 
            backgroundPosition: '100% 100%',
            opacity: 0.9,
          },
          '100%': { 
            backgroundPosition: '0% 0%',
            opacity: 0.7,
          }
        },
        'holo-pulse': {
          '0%': { 
            opacity: 0.6,
            boxShadow: '0 0 15px rgba(0, 194, 255, 0.6)'
          },
          '50%': { 
            opacity: 0.8,
            boxShadow: '0 0 30px rgba(0, 194, 255, 0.8), 0 0 50px rgba(0, 194, 255, 0.4)'
          },
          '100%': { 
            opacity: 0.6,
            boxShadow: '0 0 15px rgba(0, 194, 255, 0.6)'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        scan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' }
        },
        'scan-vertical': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        'holo-rotate': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' }
        }
      },
      backgroundImage: {
        'cyber-grid': "url('/src/assets/cyber-grid.svg')",
        'circuit': "url('/src/assets/circuit-pattern.svg')",
        'holographic-gradient': 'linear-gradient(45deg, #00C2FF, #B57EFF, #FF7EF5, #00C2FF)',
        'holo-radial': 'radial-gradient(circle, rgba(0, 194, 255, 0.3) 0%, rgba(181, 126, 255, 0.2) 50%, rgba(0, 0, 0, 0) 70%)',
        'scan-line': 'linear-gradient(to bottom, rgba(0, 194, 255, 0.1) 50%, transparent 50%)',
        'holo-grid': 'linear-gradient(0deg, rgba(0, 194, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 194, 255, 0.15) 1px, transparent 1px)',
      },
      boxShadow: {
        'ark': '0 0 10px rgba(0, 194, 255, 0.3)',
        'ark-sm': '0 1px 2px rgba(0, 194, 255, 0.1)',
        'ark-lg': '0 8px 24px rgba(0, 194, 255, 0.4)',
        'holographic': '0 0 20px rgba(0, 194, 255, 0.6), 0 0 40px rgba(0, 194, 255, 0.3), 0 0 60px rgba(0, 194, 255, 0.1)',
        'holo-glow': '0 0 5px rgba(0, 194, 255, 0.8), 0 0 20px rgba(0, 194, 255, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(0, 194, 255, 0.5)',
      },
      borderRadius: {
        'ark': '6px',
      },
      backdropFilter: {
        'holographic': 'blur(10px) saturate(180%)',
      },
    },
  },
  plugins: [],
} 