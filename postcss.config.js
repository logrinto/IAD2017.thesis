const fs = require('fs');
const noCache = require('require-no-cache');

const postcssCalc = require('postcss-calc');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');
const postcssVars = require('postcss-simple-vars');
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssFunctions = require('postcss-functions');
// const postcssFlegrix = require('flegrix/flegrix');

// this could later be exported
const config = {
  root: `${__dirname}/src/`,
  cssVariables: `${__dirname}/src/shared/css/variables.js`,
  mixinsDir: `${__dirname}/src/shared/css/mixins/`,
  cssFunctions: `${__dirname}/src/shared/css/functions/*.js`,
};

module.exports = {
  plugins: [
    postcssImport({
      root: config.root,
    }),
    postcssVars({
      variables: () => {
        if (fs.existsSync(config.cssVariables)) {
          return noCache(config.cssVariables);
        }
        return {};
      },
    }),
    postcssMixins({
      mixinsDir: config.mixinsDir,
    }),
    postcssFunctions({
      glob: config.cssFunctions,
    }),
    postcssCalc(),
    postcssPresetEnv({
      stage: 0,
      browsers: ['last 2 versions', 'IE > 10'],
    }),
    postcssNested(),
    // postcssFlegrix(),
  ],
};
