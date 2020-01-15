# 基础知识

## 开发环境搭建

```bash

安装全局依赖包
npm install typescript tslint -g

初始化配置
tsc --init

安装webpack
npm install webpack webpack-cli webpack-dev-server -D

安装ts-loader并在webpack-config.js的rules中配置
npm i ts-loader -D

通过cross-dev在start指令中给process.env传递参数
npm i cross-env -D

安装webpack清理插件，html编译模板插件
npm i clean-webpack-plugin html-webpack-plugin -D

在项目中安装typescript
npm i typescript

配置build指令

```
