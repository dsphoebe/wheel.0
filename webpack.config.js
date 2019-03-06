const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    'wheel.0': './lib/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}