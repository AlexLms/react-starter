const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (production) => ({
  plugins: [new MiniCssExtractPlugin({

      filename: production
        ? 'css/[name].[hash].css'
        : 'css/[name].css',
      chunkFilename: production
        ? 'css/[id].[hash].css'
        : 'css/[id].css'
    })],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          production
            ? {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../' // ? change paths for prod
              }
            }
            : 'style-loader', {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
})