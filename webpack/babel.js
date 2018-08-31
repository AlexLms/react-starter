module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // ? plugin for styled-components
            plugins: ["babel-plugin-styled-components"]
          }
        }
      }
    ]
  },
})