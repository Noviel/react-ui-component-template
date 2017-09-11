const path = require('path');

const { createStyleRules } = require('../webpack/rules/style');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules = storybookBaseConfig.module.rules.concat(
    createStyleRules({ target: 'client', production: false })
  );

  return storybookBaseConfig;
}
