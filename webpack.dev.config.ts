import base from './webpack.base.config';
import webpack from 'webpack';
import merge from 'webpack-merge';
import Dotenv from 'dotenv-webpack';


let config: webpack.Configuration = {
  output: {
    filename: '[name].js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
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
    new Dotenv({
      path: './dev.env'
    })
  ]
};

config = merge(base, config);
export default config;

