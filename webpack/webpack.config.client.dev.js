const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const resolve = require('./resolve');

const config = {
  resolve,
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr&reload=true',
    path.join(__dirname, '../src/client/index.tsx'),
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'client.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                before: [ReactRefreshTypeScript()],
              }),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
};

module.exports = config;
