const forms = require('@tailwindcss/forms')
const typography = require('@tailwindcss/typography')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,vue,js,ts,jsx,tsx,css}'
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        espresso: '#3C2821',
        mocha: '#583C0E',
        blush: '#BEAAAA',
        dusk: '#8D7474',
        linen: '#F3E8D8',
        vanilla: '#FFF3E2',
      },
      fontWeight: {
        black: '900',
      },
      fontSize: {
        '120px': '120px',
        '50px': '50px',
        '35px': '35px',
        '30px': '30px',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(40px)' }
        }
      },
      animation: {
        floatY: 'floatY 3s ease-in-out infinite'
      }
    }
  },
  plugins: [forms, typography],
}
