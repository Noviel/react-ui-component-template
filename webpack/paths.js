const path = require('path');
const fs = require('fs');

const root = fs.realpathSync(process.cwd());

function resolveDir(relativePath) {
  return path.resolve(root, relativePath);
}

const paths = {
  root,
  src: resolveDir('src'),
  components: resolveDir('src/components'),
  build: resolveDir('dist')
};

module.exports = paths;
