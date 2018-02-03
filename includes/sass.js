module.exports = paths => ({
  module: {
    rules: [
      {
        test: /\.sass$/,
        include: paths,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
