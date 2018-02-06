module.exports = () => ({
  devServer: {
    contentBase: '/dist',
    hot: true,
    compress: true,
    port: 8080,
    open: true,
    stats: 'errors-only',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}
);
