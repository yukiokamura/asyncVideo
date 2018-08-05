const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const ip = require('./myIPget.js');
const config = merge(baseConfig, {
  mode:'development',
  devtool: 'inline-source-map',
  watch: true,
  serve: ({
      content:'dist/',
      port: 8080,
      host: ip().en0,
      inline: true,
      watchContentBase: true,
      open:true,
  }),
});
console.log(ip());
console.log('dev server url -> ' + ip().en0 + ':8080');
module.exports = config;
