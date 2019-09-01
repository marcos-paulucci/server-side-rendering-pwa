const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'es2015',
            'stage-0'          ]
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
};
