const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (production) => ({
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          production
            ? {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../', // ? change paths for prod
              },
            }
            : 'style-loader', {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
});
