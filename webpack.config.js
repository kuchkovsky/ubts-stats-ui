const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CompressionPlugin = require('compression-webpack-plugin');

const isProd = argv => argv.mode === 'production';

module.exports = (_, argv) => ({
  entry: {
    app: './src/js/index.js',
  },
  output: {
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: isProd(argv) ? false : 'cheap-module-eval-source-map',
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.jsx?$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      favicon: './src/img/favicon.ico',
      template: './src/index.html',
      filename: './index.html',
    }),
    new Dotenv({
      path: `./.env.${isProd(argv) ? 'prod' : 'dev'}`,
    }),
    new CompressionPlugin(),
  ],
  optimization: {
    splitChunks: {
      minSize: 524288,
      maxSize: 524288,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    port: 8080,
  },
});
