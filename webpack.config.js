const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js', // 入口
  output: {
    path: path.resolve(__dirname, 'dist'), // 出口路径 绝对路径
    filename: 'bundle.js', // 出口文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        //template为webpack打包生成dist/html文件指定模板
        filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  
],
module :{
    rules:[/* {
        test: /\.css$/,
        use:['style-loader','css-loader']
      }, */
    {
        
    	test: /\.less$/, // 匹配执行类型的文件
    	// 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
      // 执行的顺序 less-loader css-loader style-loader
      // less-loader 先把less代码转换成css
      // css-loader 再把css代码转换成webpack 可以识别的js代码
      // style-loader 在把css代码插入到 dom中
        use: [ "style-loader", "css-loader", 'less-loader']
    }
    ]
}
}