const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => ({
  optimization: {
    moduleIds: 'named',
    emitOnErrors: false,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: {
            keep_fnames: true,
          },
          compress: {
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
          },
          output: {
            comments: false,
          },
          toplevel: false,
          nameCache: null,
        },
      }),
    ],
  },
  plugins: [
    new CssMinimizerPlugin(),
  ],
});
