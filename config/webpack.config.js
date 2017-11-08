const { presetReact } = require('webpack-features');

const { root } = require('./paths');

module.exports = presetReact({
  rootPath: root,
  distPath: 'dist',
  cssPreprocessor: 'scss',
  entry: './src/index.js',
  template: false,
  library: 'react-ui-component',
});
