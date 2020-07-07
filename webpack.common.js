module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|html)$/i,
        use: 'raw-loader'
      }
    ]
  }
};