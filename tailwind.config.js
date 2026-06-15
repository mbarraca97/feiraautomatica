/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#F2F2F2',
        border: '#EDEDED',
        foreground: '#000000',
        muted: 'rgba(0, 0, 0, 0.5)',
        accent: '#FF5E2B',
        'accent-subtle': '#FF5E2B1A',
        'nav-glass': 'rgba(0, 0, 0, 0.8)',
        'dark-surface': '#121212',
        'on-dark': '#FFFFFF',
        'on-dark-muted': 'rgba(255, 255, 255, 0.5)',
        link: '#0099FF',
      },
      fontFamily: {
        display: ['Urbanist', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        pill: '100px',
      },
      screens: {
        tablet: '810px',
        desktop: '1440px',
      },
      spacing: {
        'section-sm': '60px',
        'section-md': '80px',
        'section-lg': '100px',
        'section-xl': '120px',
      },
      boxShadow: {
        card: '0px 2px 3px 0px rgba(0, 0, 0, 0.25)',
        badge:
          '0px 0.6px 1.57px -1.5px rgba(0,0,0,0.17), 0px 2.29px 5.95px -3px rgba(0,0,0,0.14), 0px 10px 26px -4.5px rgba(0,0,0,0.02)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
