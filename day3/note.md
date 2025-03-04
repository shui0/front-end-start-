# day3笔记 项目重构
## npm
npm全称Node Package Manager，是一个js包管理工具

npm安装js包|(save指将依赖名添加到package.json文件)
```
npm install <Module Name> --save
```

npm安装js包到开发环境
```
npm install <Module Name>  --save -dev
```

项目初始化
```
npm init
```

## webpack
### 介绍与功能
webpack是一个前端模块打包工具
1.将前端所有模块进行打包

2.对不同模块进行依赖管理

3.利用加载器对除js外不能运行文件转行位可执行的文件

4.将多个不同模块的代码进行整理统合，使代码更高效

5.提供丰富的插件系统
### 核心概念
1.Entry入口:即项目的初始页

2.Output出口:打包后的文件路径

3.Loader加载器:处理js外的其他文件转换为可执行文件

4.plugin:拓展webpack功能
### 重构方式
重构命令
```
npm run build
```
css打包

修改配置
```
module: {
  rules: [
    {
      //正则表达式，表示.css后缀的文件
      test: /\.css$/,
      //针对css文件使用的loader，有先后顺序，数组项越靠后越先执行(从下到上，从右到左)
      use: ['style-loader', 'css-loader']
    }
  ]
}
```
图片打包

修改配置
```
module: {
    rules: [
      {
        //正则表达式，表示图片文件
        test: /\.(png|jpg|gif|svg)$/,
        //针对图片文件使用的loader
        loader: 'file-loader',
        //选项，可以让打包后的图片保持原先的名称
        options: {
          name: 'images/[name].[ext]'
        }
      }
    ]
  }
 
```
html打包

1.安装html打包插件
```
npm install --save-dev html-webpack-plugin
```
2.修改配置
```
//打包需要的各种插件
  plugins: [
    //打包HTML
    new htmlWebpackPlugin({
      //HTML模板路径
      template: './src/index.html'
    })
  ]
```