'use strict';

const baseConfig = require('./webpack.base.config');

const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
  devtool: 'hidden-source-map',
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
});
