/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand — Coral Red accent
        coral: {
          DEFAULT: '#E63946',
          50: '#FDF1F2',
          100: '#FBDFE1',
          400: '#EE7079',
          500: '#E63946',
          600: '#CF2D3A',
          700: '#A82330'
        },
        // Neutrals — warm minimal premium
        ink: '#1A1A1A',
        cream: '#FAF9F7',
        paper: '#FFFFFF',
        stone: {
          100: '#F2F0EC',
          200: '#E5E1DA',
          300: '#CFC8BD',
          400: '#8A8A8A',
          500: '#6B6B6B',
          600: '#4A4A4A'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '"Noto Sans KR"',
          '"Noto Sans SC"',
          '"Noto Sans JP"',
          '"Noto Sans"',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif'
        ]
      },
      borderRadius: {
        xl: '14px',
        '2xl': '20px'
      },
      boxShadow: {
        card: '0 1px 2px rgba(26,26,26,0.04), 0 4px 16px rgba(26,26,26,0.06)',
        float: '0 8px 32px rgba(26,26,26,0.12)'
      },
      maxWidth: {
        app: '480px'
      }
    }
  },
  plugins: []
};
