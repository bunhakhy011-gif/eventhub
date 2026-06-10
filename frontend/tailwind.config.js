/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cambodia: {
          50: '#f7f5ff',
          100: '#ece7ff',
          200: '#d4c6ff',
          300: '#b599ff',
          400: '#8f5fff',
          500: '#6d29f2',
          600: '#5d22d0',
          700: '#4c1cab',
          800: '#3f178c',
          900: '#33146f'
        }
      },
      boxShadow: {
        glass: '0 10px 40px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: []
}
