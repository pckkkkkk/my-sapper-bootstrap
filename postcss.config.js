const dev = process.env.NODE_ENV === 'development';

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.svelte',
        './src/**/*.css',
        './src/**/*.scss',
        './src/**/*.html'
    ]
})

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default'
        }),
        ...!dev ? [ purgecss ] : []
    ]
}