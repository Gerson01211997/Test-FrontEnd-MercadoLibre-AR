const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";
const outputDirectory = './src/Backend/dist';

module.exports = {
  experiments: {
    topLevelAwait: true
  },
  entry: ['babel-polyfill', './src/FrontEnd/index.jsx'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { "runtime": "automatic" }]
            ]
          }
        }
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        type: 'asset'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:4000'
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: [outputDirectory]
  }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon-32x32.png'
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.jsx$|\.scss$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  ]
};