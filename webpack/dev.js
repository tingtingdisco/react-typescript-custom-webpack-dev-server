const path = require('path');
const nodemon = require('nodemon');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackServerConfig = require('./webpack.config.server.dev.js');
const webpackClientConfig = require('./webpack.config.client.dev.js');

const serverCompiler = webpack(webpackServerConfig);
const clientCompiler = webpack(webpackClientConfig);

const clientDevServer = express();
clientDevServer.use(
  webpackDevMiddleware(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    writeToDisk: true,
  })
);
clientDevServer.use(webpackHotMiddleware(clientCompiler));
clientDevServer.listen(3001, () => {
  console.log('clientDevServer start listening on port 3001');
});

let isNodemonStarted;
const startNodemon = () => {
  if (!isNodemonStarted) {
    const options = {
      script: path.resolve(__dirname, '../build/server.bundle.js'),
      watch: [path.resolve(__dirname, '../build/')],
    };

    nodemon(options)
      .on('start', function () {
        console.log('App has started');
      })
      .on('quit', function () {
        console.log('App has quit');
        process.exit();
      })
      .on('restart', function (files) {
        console.log('App restarted due to: ', files);
      })
      .on('error', () => {
        console.log('Err');
        process.exit();
      });

    isNodemonStarted = true;
  }
};

serverCompiler.watch({ ignored: /node_modules/ }, (error, stats) => {
  if (error) {
    console.log(error, 'error');
  }
});

serverCompiler.hooks.done.tap('first build', startNodemon);
