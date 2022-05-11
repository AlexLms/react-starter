const path = require('path');

module.exports = () => ({
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true,
    compress: true,
    port: 3000,
    open: true,
  },
});

// only work if we have installed "webpack-dev-server" via npm
