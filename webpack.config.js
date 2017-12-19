const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: '[name].js',
    library: 'Cacheability',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: 'awesome-typescript-loader',
        options: {
          babelCore: '@babel/core',
          babelOptions: {
            babelrc: false,
            plugins: ['lodash'],
            presets: [
              ['@babel/preset-env', {
                debug: true,
                modules: false,
                targets: { browsers: 'last 4 versions' },
                useBuiltIns: 'usage',
              }],
              '@babel/preset-stage-0',
            ],
          },
          transpileOnly: true,
          useBabel: true,
        },
      }],
    }],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new LodashModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
};
