const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const resolve = require('./resolve');

const config = {
  resolve,
  mode: 'development',
  entry: [path.join(__dirname, '../src/server/server.ts')],
  target: 'node',
  output: {
    path: path.join(__dirname, '../build/'),
    filename: 'server.bundle.js',
    publicPath: '/',
  },
  externals: [nodeExternals()],
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  node: {
    __dirname: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = config;
