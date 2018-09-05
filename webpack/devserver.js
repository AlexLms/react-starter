const path = require('path');

module.exports = () => ({
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    compress: true,
    port: 3000,
    open: true,
    // ? not display all stuff
    stats: {
      reasons: false,
      modules: false,
    },
  },
});

// ? work if we have installed "webpack-dev-server" via npm
