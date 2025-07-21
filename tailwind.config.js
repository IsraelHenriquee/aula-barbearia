/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Sistema de cores para barbearia
        primary: {
          50: '#faf9f7',
          100: '#f5f2ed',
          200: '#e8e0d1',
          300: '#d9ccb5',
          400: '#c4b084',
          500: '#b8a082', // Marrom principal
          600: '#a08866',
          700: '#8a7354',
          800: '#6d5a43',
          900: '#4a3d2e',
          950: '#2d241a'
        },
        secondary: {
          50: '#fffdf7',
          100: '#fffaeb',
          200: '#fef3c7',
          300: '#fde68a',
          400: '#fcd34d',
          500: '#f59e0b', // Dourado principal
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03'
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717', // Preto principal
          950: '#0a0a0a'
        },
        // Cores semânticas para barbearia
        barber: {
          // Tons principais da marca
          'dark': '#171717',      // Preto principal
          'brown': '#b8a082',     // Marrom principal  
          'gold': '#f59e0b',      // Dourado principal
          'cream': '#faf9f7',     // Branco/creme
          
          // Variações para diferentes usos
          'dark-light': '#262626',
          'dark-lighter': '#404040',
          'brown-light': '#c4b084',
          'brown-dark': '#8a7354',
          'gold-light': '#fcd34d',
          'gold-dark': '#d97706',
          
          // Estados e feedback
          'success': '#059669',   // Verde para sucesso
          'warning': '#d97706',   // Dourado para avisos
          'error': '#dc2626',     // Vermelho para erros
          'info': '#0369a1'      // Azul para informações
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'], // Para títulos elegantes
        'body': ['Inter', 'sans-serif'], // Para texto corpo
        'mono': ['JetBrains Mono', 'monospace'] // Para código
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      boxShadow: {
        'barber': '0 4px 6px -1px rgba(23, 23, 23, 0.1), 0 2px 4px -1px rgba(23, 23, 23, 0.06)',
        'barber-lg': '0 10px 15px -3px rgba(23, 23, 23, 0.1), 0 4px 6px -2px rgba(23, 23, 23, 0.05)',
        'gold': '0 4px 6px -1px rgba(245, 158, 11, 0.2), 0 2px 4px -1px rgba(245, 158, 11, 0.1)'
      }
    },
  },
  plugins: [],
}