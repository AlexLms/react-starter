const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

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
      path: path.resolve(__dirname, 'dist')
    },
    // ? stuff for aliases
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new HtmlWebpackPlugin({
        template: `${path.join(__dirname, 'src')}/index.html`,
        chunks: ['index']
      }),
    ],
    optimization: {
      namedModules: true,
      noEmitOnErrors: true,
    },
    // ? disable ratelimit size warnings
    performance: {
      hints: false
    },
    stats: {
      reasons: false,
      modules: false,
    }
  },
  babel(),
  images(),
  fonts(),
])

module.exports = (env, options) => {
  let isProduction = options.mode === "production";
  return (isProduction
    ? merge([
      common, {
        plugins: [new CleanWebpackPlugin(['dist'])]
      },
      optimize(),
      css(isProduction)
    ])

    : merge([
      common, {
        plugins: [new webpack.HotModuleReplacementPlugin()],
        devtool: 'inline-source-map'
      },
      devServer(),
      css(isProduction)
    ]))
}