react + ts  移动端搭建

vite 官网选择 typescript + react

router部分
`npm install react-router react-router-dom --save`
`npm install @types/react-router @types/react-router-dom --dev`
css 预处理部分
`npm install sass --save`
redux部分
`npm install redux react-redux --save`
axios 部分
`npm install axios --save`
`npm install @types/axios --dev`
移动端自适应配置
`npm install amfe-flexible postcss-pxtorem --save`
// amfe-flexable 是阿里发布的一套可伸缩适配方法
// 也可用 lib-flexible + postcss-pxtorem 方式解决移动端适配
[参考](https://juejin.cn/post/7186236863714164793)
第三方组件库 ant-mobile
`npm install vite-plugin-imp -D 重要插件`
`npm install antd-mobile --save`
[参考](https://blog.csdn.net/weixin_48213294/article/details/126294090)

eslint
提交配置
husky lint-staged commit

vue 如何打包优化

import 'antd-mobile/es/global'
遇到的问题？？
antd-mobile 要不要开启postcss-pxtorem 进行转换