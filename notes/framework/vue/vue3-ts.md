v-for 与对象
```js
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
<li v-for="(value, key, index) in myObject">
  {{ key }}: {{ value }}
</li>
```
一、按照官网快速开始

[官网](https://staging-cn.vuejs.org/guide/quick-start.html#with-build-tools)

二、安装typescript，以及配置 tsconfig.json

[配置参考](https://segmentfault.com/a/1190000022809326)

三、在src文件下，加入shims-vue.d.ts文件

```js
// 为避免项目引入vue文件报错
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```
四、配置eslint，和加node的ts声明文件

`npm install @types/node eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev`

[eslint配置参考](https://juejin.cn/post/6975442828386107400)

五、

如何配置 eslint，以及如何配置 tsconfig

### 遇到的问题一：ts 文件不类型检查

项目没有放在根目录，通过将该项目移动到第一位置。 ----解决

搭建 vue + vite + ts + admin 项目

遇到的问题一：加了 lang=ts，但是好像没有起效果。

继续 go go go go