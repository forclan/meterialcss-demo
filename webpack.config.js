module.exports = {
  module: {
    entry: {
      index: './src/index.html',
    },
    output: {
      filename: '[name].html',
    },
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      }
    ]
  },
  otherSassLoaderConfig: {
  }
};
