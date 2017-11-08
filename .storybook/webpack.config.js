const path = require('path');
const paths = require('../config/paths');

const initFeatures = require('webpack-features').default;

const { styles, getState } = initFeatures({
  target: { browsers: 'modern' },
  production: false,
});

module.exports = (storybookBaseConfig, configType) => {
  styles({ preprocessors: ['css', 'scss'] });

  storybookBaseConfig.module.rules = storybookBaseConfig.module.rules.concat(
    getState().module.rules
  );

  return storybookBaseConfig;
};
