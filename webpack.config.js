import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: './',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve('dist'),
    },
    port: 8080,
    open: true,
    hot: true,
  },
  resolve: {
    extensions: ['.js'],
  },
};
