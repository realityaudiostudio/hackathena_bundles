export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/images/grid.svg')",
            },
        },
        colors: {
            background: 'var(--primary-background)',
            foreground: 'var(--primary-text)',
            accent: 'var(--primary-accent)',
        },
    },
    plugins: [
        require("@xpd/tailwind-3dtransforms")
    ],
}
