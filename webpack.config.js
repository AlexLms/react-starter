const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
// ? need to install "webpack-bundle-analyzer"
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const devServer = require('./webpack/devserver');
const babel = require('./webpack/babel');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const optimize = require('./webpack/optimization');
const css = require('./webpack/css');


const common = merge([
  {
    entry: {
      index: './src/index.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // ? stuff for aliases
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules'],
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      // ? analyze bundle
      // new BundleAnalyzerPlugin(),
      new HtmlWebpackPlugin({
        template: `${path.join(__dirname, 'src')}/index.html`,
        chunks: ['index'],
      }),
    ],
    // ? disable ratelimit size warnings
    performance: {
      hints: false,
    },
    stats: {
      reasons: false,
      modules: false,
    },
  },
  babel(),
  images(),
  fonts(),
]);

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  return (isProduction
    ? merge([
      common, {
        plugins: [
          new CleanWebpackPlugin(['dist']),
          new webpack.optimize.OccurrenceOrderPlugin(),
          new MiniCssExtractPlugin({
            filename: isProduction
              ? 'css/[name].[hash].css'
              : 'css/[name].css',
            chunkFilename: isProduction
              ? 'css/[id].[hash].css'
              : 'css/[id].css',
          }),
        ],
      },
      optimize(),
      css(isProduction),
    ])

    : merge([
      common, {
        plugins: [new webpack.HotModuleReplacementPlugin()],
        devtool: 'source-map',
      },
      devServer(),
      css(isProduction),
    ]));
};
