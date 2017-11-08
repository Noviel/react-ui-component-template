const path = require('path');
const fs = require('fs');

const root = fs.realpathSync(process.cwd());

const resolveDir = relativePath => path.resolve(root, relativePath);

const paths = {
  root,
  client: {
    components: resolveDir('src/client/components'),
    assets: resolveDir('static'),
    dist: resolveDir('static/dist'),
    images: resolveDir('static/images'),
  },
};

module.exports = paths;
