const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'] //import引入后可以省略后缀
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map', //开发环境需要source-map调试
  devServer: {
    contentBase: './dist', //本地开发环境服务运行的根目录
    stats: 'errors-only', //webpack 服务在控制台打印哪些信息
    compress: false,
    host: 'localhost',
    port: 8089
  },
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['./dist'] }),
    new htmlWebpackPlugin({
      template: './src/template/index.html'
    })
  ]
}
