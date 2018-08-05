const path = require('path');
const webpack = require('webpack');

const config = {
    entry: ['./src/js/main.es6'],
    output: {
        path: path.resolve('dist/js/'),
        filename: 'asyncVideo.js',
    },
    module: {
      rules: [
        {
          test: /\.es6$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['env', {'modules': false}]
                ]
              }
            }
          ]
        }
      ]
    },
    plugins: [

    ],
};

module.exports = config;
