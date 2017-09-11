const { createBabelLoader } = require('webpack-features');

module.exports = function({ target, production }) {
  const loader = createBabelLoader({ target, production });

  return [{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [...loader.get()]
  }];
};
