'use strict';

const path = require('path');
const glob = require('glob');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const getESPage = () => {
  const entry = {};
  const htmlWebpackPlugins = [];
  const htmlList = [];
  const entryFiles = glob.sync(path.join(__dirname, './src/**/*index.js'));

  Object.keys(entryFiles).map((index) => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/(.*)\/*index\.js/);
    const pageName = match && match[1];
    if (!pageName) {
      return;
    }

    let entryJSName = `${pageName}index`;
    entry[entryJSName] = entryFile;

    let htmlTitle = pageName.replace(/\//g, ' - ');
    if (pageName.endsWith('/')) {
      htmlTitle = pageName.substring(0, pageName.length - 1);
      htmlTitle = htmlTitle.replace(/\//g, ' - ');
    }
    if (htmlTitle.endsWith('.')) {
      htmlTitle = htmlTitle.substring(0, htmlTitle.length - 1);
    }
    htmlList.push({
      title: htmlTitle,
      url: `${pageName}index.html`,
      entryJS: `${pageName}index.bundle.js`,
    });

    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        inlineSource: '.css$',
        template: './src/assets/template.html',
        filename: `${pageName}index.html`,
        title: htmlTitle,
        chunks: [entryJSName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false,
        },
      })
    );
  });

  entry['index'] = './src/index.js';
  htmlWebpackPlugins.push(
    new HtmlWebpackPlugin({
      title: 'ECMAScript Next 学习笔记',
      template: './src/assets/index.html',
      chunks: ['index'],
      list: JSON.stringify(htmlList),
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false,
      },
    })
  );

  return {
    entry,
    htmlWebpackPlugins,
  };
};

const {entry, htmlWebpackPlugins} = getESPage();

module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory'],
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: __dirname + '/src/static',
          to: __dirname + '/dist/static',
        },
      ],
    }),
    new HardSourceWebpackPlugin(),
    ...htmlWebpackPlugins,
  ],
  performance: {
    hints: 'warning',
    maxEntrypointSize: 50000000,
    maxAssetSize: 30000000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js');
    },
  },
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, 'src/lib'),
    },
  },
};
