/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FBBF24', // Tailwind Yellow 500
        primaryDark: '#F59E0B', // Tailwind Yellow 600
        errorLight: '#FEE2E2', // Tailwind Red 100
        errorDark: '#DC2626', // Tailwind Red 600
        textDark: '#374151', // Tailwind Gray 700
        textLight: '#6B7280', // Tailwind Gray 600
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
