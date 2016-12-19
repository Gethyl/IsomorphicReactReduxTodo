const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/js/client', 'client.js'),
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: 'bundled.js'
  },
  debug:true,
  devtool: 'source-map',  
  module: {
    loaders: [{
      test: path.join(__dirname, 'src/js'),
      loader: ['babel-loader'],
      query: {
        // cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015','stage-0'],
        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
      }
    },
    { test: /\.css$/, loader: "style-loader!css-loader" },
    { test: /\.png$/, loader: "url-loader?limit=100000" },
    { test: /\.jpg$/, loader: "file-loader" },
    {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
    }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ],
  devServer: {
    historyApiFallback: true,
    
  }
};