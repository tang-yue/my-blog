视频编辑项目总结

技术栈: vue3 + ts + pinia

### 项目打包出错，以及NODE_ENV和.env.xx 以及 vue-cli-service xxx --mode mm 之间的关系

起因：npm run build test 模式下打包出错，npm run build production 模式下打包没有问题。

报错 `You may need an additional loader to handle the result` 看了下报错的地方主要是ts **问号以及双问号**

[参考](https://juejin.cn/post/7074243362416492552) 这篇文章解决问题。

NODE_ENV 决定您的应用创建运行的模式，是开发，生产还是测试，因此也决定了创建哪种webpack配置，webpack也根据不同的模式执行不同的打包机制，默认是 develop 模式，设置了除test，production 之外的模式，依旧走的是develop模式。

如果环境文件中没有设置NODE_ENV 变量，它的值将取决于模式，在production模式下`--mode production`, 被设置为'production' 在test模式下被设置为'test'，默认则是'development'。`.env.xxx` 与 `--mode xxx` 两处xxx值是相同的。 如果环境文件中设置了NODE_ENV 变量，那么则取决于设置的值。

### 