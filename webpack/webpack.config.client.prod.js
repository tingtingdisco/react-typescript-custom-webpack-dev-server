const path = require('path');
const webpack = require('webpack');
const resolve = require('./resolve');

const config = {
  resolve,
  mode: 'production',
  devtool: 'cheap-source-map',
  entry: [path.join(__dirname, '../src/client/index.tsx')],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'client.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
};

module.exports = config;
