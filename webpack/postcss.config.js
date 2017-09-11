module.exports = ({ sourceMap = true } = {}) => ({
  plugins: () => [
    require('autoprefixer'),
    require('precss')
    // ,require('postcss-autoreset')({
    //   reset: 'initial'
    // }),
    // require('postcss-initial')({
    //   reset: 'inherited'
    // })
    // require('postcss-import'),
  ],
  sourceMap
});
