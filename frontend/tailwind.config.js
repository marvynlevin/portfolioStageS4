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
            },
            backgroundImage: {
                'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.25'/%3E%3C/svg%3E\")"
            },
        }
    },
    plugins: [forms, typography],
}
