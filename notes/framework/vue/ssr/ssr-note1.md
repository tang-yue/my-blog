[参考文章](https://segmentfault.com/a/1190000012440041)

[参考文章](https://juejin.im/post/5cee8808f265da1b8f1aa45e)

解决的问题：

为什么打包之后 没有 vue-ssr-server-bundle.json 文件

对比 app/middlewares 下  dev.ssr.js 和 dev.static.js 以及 prod.ssr.js


<!-- vue-ssr-client-manifest.json -->

vue-ssr-client-manifest.json

看官网     ----   看 webpack  webpack4

目标是 搭建一个可用的 ssr 项目。

采用的 vue cli3 webpack4

修改成 vue.config.js 应该怎么做

如果不用 vue.config.js， 直接 用webpack4 配置，并且配置在 vue cli3项目中

webpack3 项目是如何解决 热更新问题的呢？？？

// 开发环境是如何读取 vue-ssr-client-manifest.json 和 vue-ssr-server-bundle.json 的呢？


在开发环境中，通过 npm run dev 命令， 启动一个 webpack-dev-server 和 一个 ssr 服务

通过官方文档可知， 我们可以通过一个文件访问解析好的webpack 配置，

这个文件路径为： node_modules/@vue/cli-service/webpack.config.js

使用webpack 编译此文件， 并将其输出接入到内存文件系统 (memory-fs) 中

监听 webpack ,当 webpack 重新构建时， 我们在监听器内部获取最新的server bundle 文件， 并从 webpack-dev-server 获取client bundle 文件

在每次处理 ssr 请求的中间件逻辑中，使用最新的server bundle 文件 和 client bundle 文件进行渲染。

将中间件 dev.ssr.js 注册到 服务端入口文件  app/server.js 中


一切都要慢慢来。

5月20日

如何搭建 vue + webpack4 + ssr 项目

第一步

安装 webpack 

按装 webpack-cli
要不然  执行npm run xxxx 会报错

第二步

配置 es6/7/8 转 es5 代码

npm install babel-loader @babel/core @babel/preset-env

@babel/core 和 babel-core 的区别是什么？ 仅仅是升级版

babel 只转换新的 js 语法， 不转换 新的API.

如果想使用 新的对象和方法，需要使用polyfill

相关插件
babel-runtime
babel-plugin-transform-runtime
babel-polyfill

第三步

配置 less 转 css

安装 less-loader css-loader style-loader 

第四步

配置 postcss 实现自动添加 css3 前缀

npm install postcss-loader autoprefixer -D

第五步

npm install html-webpack-plugin -D

使用 html-webpack-plugin 来创建html 页面

第六步

npm install webpack-dev-server -D

配置 devServer 热更新功能

第七步

npm install file-loader url-loader -D

配置 webpck 打包 图片、媒体、字体等文件


第八步

让 webpack 识别.vue 文件

npm install vue-loader vue-template-compiler cache-loader thread-loader -D
npm install vue -S



