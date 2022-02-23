const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

const mode = process.env.NODE_ENV || 'development';

const development = {
  mode,
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
    hot: true,
  },
};

const production = {
  mode,
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        hash: true,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: `[name].css` }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'esnext',
        css: true,
        loader: 'tsx',
      }),
    ],
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};

const config = mode === 'development' ? development : production;

module.exports = merge(config, {
  entry: {
    app: ['babel-polyfill', './src/index.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'css',
              minify: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, `./.env.${mode}`),
    }),
    new ESLintPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ],
});
