const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const include = './includes'
const babel = require(`${include}/babel`)
const extractCSS = require(`${include}/css.extract`)
const css = require(`${include}/css`)
const devServer = require(`${include}/dev-server`)
const fonts = require(`${include}/fonts`)
const images = require(`${include}/images`)
const uglifyJS = require(`${include}/js.uglify`)
const sass = require(`${include}/sass`)

const isProd = process.env.NODE_ENV === 'production'

const PATHS = {
  source: path.join(__dirname, '/src'),
  build: path.join(__dirname, '/dist'),
}

const common = merge([
  {
    entry: {
      app: `${PATHS.source}/index.jsx`,
    },

    output: {
      path: PATHS.build,
      filename: '[name].bundle.js',
    },

    devtool: 'cheap-module-source-map',

    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules', 'src'],
    },

    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new CleanWebpackPlugin(PATHS.build),
      new FaviconsWebpackPlugin({
        logo: `${PATHS.source}/img/logo.png`,
        EmitStats: false,
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        }
      }),
      new HtmlWebpackPlugin({
        title: 'React Starter Pack',
        template: `${PATHS.source}/index.ejs`,
        inject: 'body',
        chunks: ['app', 'common'],
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: 'common.[hash].js',
        minChunks(module) {
          return module.context && module.context.indexOf('node_modules') >= 0
        },
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
    ],
  },
  fonts(),
  babel(),
  images(),
])

module.exports = () =>
  (isProd ?
    merge([common, extractCSS(), uglifyJS()])
    :
    merge([common, devServer(), sass(), css()]))
