react hooks + ts 管理端后台搭建过程记录

官方 react 教程： https://reactjs.org/
官方 ts 教程：https://www.typescriptlang.org/docs/handbook/intro.html
官方 react + ts 教程： https://www.typescriptlang.org/docs/handbook/react.html
官网 ant design of react：https://ant.design/docs/react/introduce

第一步 create-react-app 起新项目

react-ant-admin 项目 localhost:63980

http://localhost:60976/#/dashboard 这个是 react-antd-admin-template 样式参考

第二步 安装 react react-redux redux redux-logger redux-thunk

redux 教程一： https://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

redux 教程二：

第三步 安装 antd axios

react 下 使用 ts https://segmentfault.com/a/1190000021838241

<!-- npx create-react-app my-app --scripts-version=react-scripts-ts -->

https://www.typescriptlang.org/docs/handbook/react.html react-typescript 参考手档

https://create-react-app.dev/docs/adding-typescript 也很重要

https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets

第四步 安装 classnames @ant-design/icons

只看官方文档，继续搭建

第五步：

先看下了泛型的概念，理清主项目架构。

api ------ 数据请求接口文件夹

utils ------ request 函数 ts 封装

1、新建 api 以及 utils 文件夹，在 utils 文件夹下，新建 requset 文件

发现有很多 ts 报错，继续安装 ts 相关依赖

2、安装 js-cookie @types/js-cookie 以及处理报错问题

// 首先解决看是因为什么报错的吧

3、直接使用 [@umijs/fabric](https://github.com/umijs/fabric) 依赖，直接配置一些样式，格式配置，按照官网直接复制下来即可。

(1）根据报错安装 @typescript-eslint/parser 依赖，并配置 .eslintignore 文件
(2) 发现还是没有解决 request.ts 文件报错问题

[vue + ts 项目管理模版](https://github.com/anncwb/vue-vben-admin)

(3) 安装 eslint