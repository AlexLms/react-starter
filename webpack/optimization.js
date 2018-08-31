const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = () => ({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: {
            keep_fnames: true
          },
          compress: {
            warnings: false, // ? Suppress uglification warnings
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true
          },
          output: {
            comments: false
          },
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          exclude: [/\.min\.js$/gi] // ? skip pre-minified libs
        }
      })
    ]
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
  ]
});