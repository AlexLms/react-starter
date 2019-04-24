const path = require('path');

module.exports = () => ({
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    compress: true,
    port: 3000,
    open: true,
    stats: {
      reasons: false,
      modules: false,
    },
  },
});

// only work if we have installed "webpack-dev-server" via npm
