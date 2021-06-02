const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const resolve = require('./resolve');

const config = {
  resolve,
  mode: 'production',
  entry: [path.join(__dirname, '../src/server/server.ts')],
  target: 'node',
  output: {
    path: path.join(__dirname, '../build/'),
    filename: 'server.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
};

module.exports = config;
