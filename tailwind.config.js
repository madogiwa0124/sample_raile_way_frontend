const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/components/**/*.html.erb',
    './app/components/**/*.rb',
    './app/helpers/**/*.rb',
    './app/frontend/**/*.js',
    './app/frontend/**/*.css',
  ],
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        'body': {
          fontFamily: 'system-ui, sans-serif',
          fontSize: '1rem',
          fontHeight: '1.5',
        },
        'h1': {
          fontSize: theme('fontSize.3xl'),
          marginBottom: theme('margin.4'),
        },
      })
    })
  ],
  prefix: 'tw-'
}
