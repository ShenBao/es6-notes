'use strict';

const baseConfig = require('./webpack.base.config');

const {merge} = require('webpack-merge');

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
});
