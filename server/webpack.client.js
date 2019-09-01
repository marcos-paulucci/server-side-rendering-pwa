const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  // Tell webpack the root file of our
  // server application
  //entry: './src/client/client.js',
  mode: 'production',
  entry: {
    bundle: './src/client/client.js',
    worker: './src/client/serviceWorker.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        // mini-css-extract plugin extracts CSS into separate files.
        // Creates a CSS file per JS file which contains CSS.
        // Supports On-Demand-Loading of CSS and SourceMaps.
        // This plugin should be used only on production builds without style-loader in the loaders chain,
        // especially if you want to have HMR in development.
        // See the optimization section to see how final bundle is generated with OptimizeCSSAssetsPlugin
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader?minimize', options: { sourceMap: true } },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [require('autoprefixer')({ browsers: ['last 2 versions'] })]
            }
          },
          { loader: 'resolve-url-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|url\.svg)(\?.+)?$/,
        loader: 'url-loader?limit=8192&name=[name].[ext]' // A loader for webpack which transforms files into base64 URIs. It embeds the sources into the final bundle
      },
      {
        // transforms all svgs to inline icons except for files ending
        //  with url.svg that we transform with the url-loader (e.g. using
        //  svg as background image in sass)
        test: /^(?!.*\.url\.svg$).*\.svg$/,
        use: ['babel-loader', 'react-svg-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'bundle.min.css'
      //,allChunks: true
    })
  ]

  // Tell webpack where to put the output file
  // that is generated
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'public')
  // }
};

module.exports = merge(baseConfig, config);
