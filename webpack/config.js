const { createBuildManager } = require('webpack-features');

const paths = require('./paths');
const createJSRules = require('./rules/js');
const { createStyleRules, createStylePlugin } = require('./rules/style');
const createMediaRules = require('./rules/media');

const apps = [
  {
    name: 'index',
    target: 'client',
    entry: 'src/index.js'
  }
];

module.exports = function({ BUILD_APPS, target, production }) {
  BUILD_APPS = process.env.BUILD_APPS || BUILD_APPS;

  const env = { target, production };
  const buildManager = createBuildManager({
    BUILD_APPS,
    target,
    production,
    root: paths.root
  });

  buildManager.addEntries(apps);

  const rules = [
    ...createStyleRules(env), 
    ...createJSRules(env), 
    ...createMediaRules()
  ];

  const plugins = []
    .concat(...buildManager.plugins())
    .concat(createStylePlugin(env));

  const entries = buildManager.entries();

  return {
    rules() { return rules; },
    entries() { return entries; },
    plugins() { return plugins; }
  };
};
