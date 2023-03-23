module.exports = {
    content: ['./**/*.html', './pages/**/*.{html, js}'],
    darkMode: "class",
    theme: {
        screen: {
            sm: '480px',
            md: '768px',
            lg: '992px',
            xl: '1400px'
        },
        color: {
            blue: '#1fb6ff',
            pink: '#ff49db',
            orange: '#ff7849,'

        },
        fontFamil: {
            sans: ['Graphik', 'sans-serif'],
            arial: ['arial','arial-black']
        },
        extend: {
            spacing: {
                '128':'32rem',
                '144': '36rem'
            },
            borderRadiud: {
                '4xl': '2rem'
            }
        },
    },

}