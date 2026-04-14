/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/i18n/**/*.js',
  ],

  theme: {
    container: {
      center: true,
      screens: {
        xl: '1320px',
      },
      padding: '15px',
    },

    extend: {
      screens: {    
        '3xl': '1600px',
        '4xl': '1920px',
        '5xl': '2250px',
        '6xl': '2560px',
      },

      colors: {
        primary: '#232f74',
        secondary: '#b68756',
        accent: '#192152',
        dark: '#232f74',
        light: '#F8FAFC',
        border: '#E5E7EB',
        muted: '#6B7280',
      },

      fontFamily: {
        sans: ['var(--font-primary)', 'sans-serif'],
        arabic: [
          'var(--font-arabic)',
          'var(--font-primary)',
          'sans-serif',
        ],
      },
      backgroundImage: {
    'primary-gradient': 'linear-gradient(90deg, #1e2a78 0%, #243caa 50%, #1e2a78 100%)',
  },
    },
  },

  plugins: [],
};