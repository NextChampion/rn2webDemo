const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, '../index.web'), // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出的路径
    filename: 'bundle.js', // 打包后文件
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {},
        },
        // exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            // name: 'images/[name].[ext]'
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    port: 9090,
  },
  devtool: 'source-map', // 代码调试
};
