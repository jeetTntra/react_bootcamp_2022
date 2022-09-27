// cracp.config.js
module.exports = {
  style: {
    postcss: { // if type error match craco version with postcss version rename it to postcssOptions
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}