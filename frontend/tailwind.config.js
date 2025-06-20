const forms = require('@tailwindcss/forms')
const typography = require('@tailwindcss/typography')

module.exports = {
    content: [
        './index.html',
        './src/**/*.{html,vue,js,ts,jsx,tsx,css}'
    ],
    safelist: [
        'hover:text-espresso',
        'text-espresso',
        'bg-espresso',
        'text-vanilla',
        'outline-espresso',
        'text-12-13-16-20',
        'text-14-15-16-20',
        'text-14-15-18-22',
        'text-17-18-21-25',
        'text-18-19-24-30',
        'text-35-50-60-80',
        'text-75-80-90-100',
        'text-45-80-90-100',
        'scrollbar-hide',
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
                    '0%, 100%': {transform: 'translateY(0)'},
                    '50%': {transform: 'translateY(40px)'}
                }
            },
            animation: {
                floatY: 'floatY 3s ease-in-out infinite'
            }
        }
    },
    plugins: [forms, typography],
}
