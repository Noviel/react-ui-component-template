const path = require('path');
const paths = require('../webpack/paths');

const { createStyleRules } = require('../webpack/rules/style');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules = storybookBaseConfig.module.rules.concat(
    createStyleRules({ target: 'client', production: false }, {
      cssModulesPath: paths.components
    })
  );

  return storybookBaseConfig;
}
