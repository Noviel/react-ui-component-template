module.exports = function({ 
  fileSizeLimit = 10000, 
  imageSizeLimit = 10000,
  imageName = 'images/[hash].[ext]'
} = {}) {
  return [
    { 
      test: /\.woff(2)?(\?[a-z0-9]+)?$/,
      loader: `url-loader?limit=${fileSizeLimit}&mimetype=application/font-woff`
    },
    {
      test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
      loader: `url-loader?limit=${fileSizeLimit}`
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: { 
        loader: 'url-loader',
        options: {
          limit: imageSizeLimit,
          name: imageName
        }
      }
    },
    {
      test: /\.pug$/,
      loader: 'pug-loader'
    }
  ];
};
