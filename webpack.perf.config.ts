
import prod from './webpack.prod.config';
import merge from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack from 'webpack';

let config: webpack.Configuration = {
  plugins: [new BundleAnalyzerPlugin()]
}

config = merge(prod, config);

export default config;