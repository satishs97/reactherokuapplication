module.exports = {
    plugins: [
      // ...
      require('tailwindcss'),
      require('@fullhuman/postcss-purgecss')({
        content: [
            './src/**/*.jsx',
            './src/**/*.js',
            './src/*.js',
            './public/index.html'
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
      // ...
    ]
  }
  