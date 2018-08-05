const serve = require('webpack-serve');
const argv = {};
const config = require('./webpack.dev.js');

serve(argv, { config }).then((result) => {
  console.log(result);
});
