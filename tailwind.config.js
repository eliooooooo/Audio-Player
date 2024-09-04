module.exports = {
    content: ["./public/*.{html,js}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '2rem',
            },
        },
        screens: {
            'xs': '320px',
            'sm': '480px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1440px',
        },
    },
    plugins: [],
}