const path = require("path");

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: { 
    filename: "index.js",
    path: path.resolve(__dirname, './dist'),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  }
};
