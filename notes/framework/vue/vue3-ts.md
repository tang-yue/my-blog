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

vue3-element-ts-admin-template

参考地址： https://github.com/cangshudada/vite-vue3-tsx   主要参考



一、项目初始化

参考[vite官网开始](https://au1996.gitee.io/blog/guide/vite-vue3.html)

二、项目改造

1、配置eslint

增加eslint规范`Typescript`以及`vue`代码，相关依赖

```bash
npm install eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

依赖作用：

- eslint: eslint的核心代码
- eslint-plugin-vue: eslint关于检测vue代码规范的插件
- @typescript-eslint/parser: eslint 解析器，解析typescript，从来用来检查和规范typescript代码
- @typescript-eslint/eslint-plugin: eslint插件，包含各类定义好的检测typescript代码的规范


安装 prettier依赖

```bash
npm i prettier eslint-config-prettier eslint-plugin-prettier -D
```

依赖作用：

- prettier: prettier插件的核心代码
- eslint-config-prettier: 解决eslint中的样式规范和prettier中样式规范的冲突，以prettier的样式规范为准，使eslint中样式规范自动失效
- eslint-plugin-prettier: 将prettier作为eslint规范来使用

新增`.eslintrc.js`文件，配置如下：(经报错后换成.cjs)

```js
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      // Allows for the parsing of JSX
      jsx: true
    }
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended', 
    'plugin:prettier/recommended'
  ],
  rules: {}
}
```

新增`.prettierrc.js`文件，配置如下：(经报错后换成.cjs)

```js
// 具体配置可以参考 https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false, // 未尾逗号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 单引号
  quoteProps: 'as-needed',
  bracketSpacing: true,
  trailingComma: 'none', // 未尾分号
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf'
};
```

