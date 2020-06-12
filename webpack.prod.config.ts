import base from './webpack.base.config';
import webpack from 'webpack';
import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Dotenv from 'dotenv-webpack';


let config: webpack.Configuration = {
  output: {
    filename: '[name].[chunkhash].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]'
              },
              localsConvention: 'camelCase'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].css'
    }),
      new Dotenv({
        path: './prod.env'
      })
  ]
};

config = merge(base, config);
export default config;
