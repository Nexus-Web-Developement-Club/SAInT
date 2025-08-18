/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#1E3A8A',   
        softWhite: '#F9FAFB',     
        accentYellow: '#FBBF24',  
        neutralGrey: '#6B7280',   
      },
    },
  },
  plugins: [],
};
