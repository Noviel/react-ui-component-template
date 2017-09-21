const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { createStyleRule, wrapLoaderToExtractTextPlugin } = require('webpack-features');

exports.createStyleRules = function({ target, production }, { cssModulesPath } = {}) {
  const postCssConfig = require('../postcss.config')({ sourceMap: !production });
  const env = { target, production };
  const options = {
    postcss: postCssConfig,
    modulesPath: cssModulesPath
  };

  const rules = [
    createStyleRule(env, options),
    createStyleRule(env, { 
      ...options,
      modules: true
    }),

    createStyleRule(env, { 
      ...options,
      preprocessor: 'emotion'
    }),

    createStyleRule(env, { 
      ...options,
      preprocessor: 'scss',
      modules: false
    }),
    createStyleRule(env, { 
      ...options,
      preprocessor: 'scss',
      modules: true
    })
  ];

  if (production) {
    for (const rule of rules) {
      rule.use = ExtractTextPlugin.extract(wrapLoaderToExtractTextPlugin(rule.use));
    }
  }

  return rules;
};
