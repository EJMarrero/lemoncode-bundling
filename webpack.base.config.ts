import webpack from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from "path";

const basePath: string = __dirname;

const config: webpack.Configuration = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss']
  },
  stats: "errors-only",
  entry: ['./rootApp.tsx', './global.scss'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          babelCore: '@babel/core'
        }
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}

export default config;