const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, 'bookmarklet/bookmarklet.ts'),
  output: {
    filename: 'bookmarklet.js',
    path: path.resolve(__dirname, 'bookmarklet/dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss', '.css']
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'bookmarklet/dist/bookmarklet.css'})
  ],
  devtool: 'source-map'
};