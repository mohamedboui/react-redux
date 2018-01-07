const path = require('path');

const config = {
  entry: './index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
   devServer: {
      inline: true,
      port: 8080
  },
  module: {
  loaders: [
         
      ]
  }
};

module.exports = config;