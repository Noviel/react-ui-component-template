const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { createCSSLoader } = require('webpack-features');

const cwd = process.cwd();

const getExtractTextOptions = loaders => ({
  fallback: 'style-loader',
  use: loaders[0].loader === 'style-loader' ? loaders.slice(1) : loaders
});

const wrapToExtract = loaders => 
    ExtractTextPlugin.extract(getExtractTextOptions(loaders));

const createStyleRule = ({ target, production }, { 
  preprocessor,
  postcss, 
  modules = false, 
  modulesPath 
}, restOptions = {}) => {
  const loader = createCSSLoader(
    { target, production, useStyleLoader: true },
    { modules, minimize: production }
  );

  if (postcss) {
    loader.add('postcss-loader', postcss);
  }

  if (preprocessor === 'scss') {
    loader.add('sass-loader');
  } else if (preprocessor === 'less') {
    loader.add('less-loader');
  }

  const test =  preprocessor === 'scss' ? /\.scss$/i :
                preprocessor === 'less' ? /\.less$/i :
                /\.css$/i;

  const options = {};

  if (modules) {
    options.include = modulesPath;
  } else {
    options.exclude = modulesPath;
  }
  
  return {
    test,
    use: loader.get(),
    ...options,
    ...restOptions
  };
};

exports.createStyleRules = function({ target, production, componentsPath = path.join(cwd, './src/components') }) {
  const postCssConfig = require('../postcss.config')({ sourceMap: !production });
  const env = { target, production };
  const options = {
    postcss: postCssConfig,
    modulesPath: componentsPath
  };

  const rules = [
    createStyleRule(env, options),
    createStyleRule(env, { 
      ...options,
      modules: true
    }),    
    createStyleRule(env, { 
      ...options,
      preprocessor: 'scss'
    }),
    createStyleRule(env, { 
      ...options,
      preprocessor: 'scss',
      modules: true
    })
  ];

  if (production) {
    for (const rule of rules) {
      rule.use = wrapToExtract(rule.use);
    }
  }

  return rules;
};

exports.createStylePlugin = function({ target, production }) {
  return production ? 
    [new ExtractTextPlugin({
      filename: 'style.css',
      disable: !production,
      allChunks: true
    })] 
    : [];
};
