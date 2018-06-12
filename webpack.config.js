const merge = require('webpack-merge')
const path = require('path')

var config =
  {
    mode: 'production',
    output: {
      path: path.resolve(__dirname, './dist/'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [path.resolve(__dirname, './src')],
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        src: path.resolve(__dirname, './src'),
      },
    },
  }

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      filename: 'index.js',
      libraryTarget: 'umd',
      library: 'vue-permission-management',
    },
  }),
]
