const merge = require('webpack-merge'),
  common = require('./webpack.common.js'),
  glob = require('glob'),
  path = require('path'),
  CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: '**/*.html',
          context: './src/'
        }
      ]
    })
  ],
  mode: 'development',
  entry: glob.sync('./src/**/index.js').reduce((acc, item) => {
    const nameArray = item.split('/');
    const path = nameArray.slice(nameArray.length - 2);
    const name = path.join('/');
    acc[name] = item;
    return acc;
  }, {}),
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'demos')
  }
});