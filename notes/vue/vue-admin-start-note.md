用自己所学的知识。做一遍，遇到不会的地方，去翻翻笔记。而不是一开始就去看笔记。执行下面的步骤：
重要不是记忆，而是能够解决问题

第一步: 安装和创建

npm install -g @vue/cli
vue create hello-world

第二步：修改端口号

在根目录新建vue.config.js  文件。
复制进以下代码：

```
module.exports = {
    devServer: {
        port: 8090,
    }
}
```

第三步： 配置路由
（1） 配置路由文件
在src目录下新建路由文件 router.js
```
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'

Vue.use(Router);

export default new Router({
    mode: 'history',    // 这个模式可以替换掉带有#号的路径
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/hello',
            component: HelloWorld
        }
    ]
})
```
（2）在App.vue 文件中 配置路由插座 <router-view></router-view>，以及路由的跳转使用标签router-link
```
<template>
  <div id="app">
    <ul>
      <li><router-link to="/test">test 页面</router-link></li>
      <li><router-link to="/hello">hello 页面</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
```

 (3) 路由文件注入到main.js 文件中
```
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
```

第四步： 使用less

npm install less less-loader -D
`<style lang="less"></style>`

第五步： 封装request，请求api
新建目录utils，在此目录下创建 request.js 文件   
[参考axios文档](https://www.npmjs.com/package/axios)


先不着急其他的，先要把这个侧边栏menu给做好。
vue项目在哪个生命周期里初始化页面数据。

遇到一个问题：在created里去请求一个值，结果我还没有执行resolve,created里的then后面，就已经执行了。
原因：
```
import request from '../utils/request.js';

export async function getData(params) {
    return request('https://api.randomuser.me/?nat=US&results=5', params);  // 我把最前面的return值给丢掉了
}
```

完整的request 请求封装如下：
```
import axios from 'axios';
import Cookie from 'js-cookie';

const instance = axios.create({
  baseURL: '',
  timeout: 500000
});

instance.interceptors.request.use((req) => {
  req.headers.authorization = Cookie('token');
  return req;
}, err => Promise.reject(err));

instance.interceptors.response.use(
  res => res,
  err => Promise.reject(err)
);

export default function request(url, options) {
  const opt = options || {};
  return new Promise((resolve, reject) => {
    instance({
        url,
        method: opt.type || 'get',
        data: opt.params || {},
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((res) => {
        if (res) {
            resolve(res.data);
        } 
        return res;
      })
      .catch((err) => { reject(err) });
  });
}
```

第六步：配置.eslintrc.js 文件

```
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': 0,
    'linebreak-style': 0,
    'comma-dangle':0,
    "indent": 0,
    "semi":0,
    "space-infix-ops":0,
    "no-mixed-operators":0,
    "no-trailing-spaces":0,
    "no-multi-spaces":0,
    "no-else-return": 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  }
};
```

第七步，具体是要选择哪个库，我觉得还需要根据需要。
element-ui 这个是必须的

第八步， vue 项目如何保存代码后，立即就能够更新。
这里遇到一个问题，hostOnly 是起作用的，在用localhost的情况下，但是如果换成公司对应的域名就不能够热更新了。


11月15日
----------------------
和做这个项目的一些思考
1、 如何把导航调成我想要的颜色。 done, 如果以前框架里面自带了颜色，那么要用 !important.
2、 目前滚动导航暂时就不加了。
3、 要实现折叠导航。相信自己, 如何给它加上一个折叠时候的动效。


v-bind:style="{width: isCollapse ? '75px' : '230px'}"

:collapse="isCollapse"

这个里面的东西真的好多。

关于路由跳转的文档 https://juejin.im/post/5b82bcfcf265da4345153343

vue 自带 path 包 import path from 'path';

每个人的request封装方法都不太一样。

为什么导航的标题要用两种方式写呢。
什么东西都是一步一步写出来的，不要着急，想把什么都一下子做好。
我觉得我无论如何精简代码，组织架构还是应该要保留的。

关于vue 几个官方链接

 router:   https://router.vuejs.org/
 vuex:   https://vuex.vuejs.org/
 vue:    https://vuejs.org


 
 ```
  <el-submenu index="2" class="nest-menu">
    <template slot="title">
        <i class="el-icon-box"></i>
        <span>Navigator Two</span>
    </template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
</el-submenu>

<template>
    <el-menu-item>
        <i class="el-icon-box"></i>
        <span>Navigator three</span>
    </el-menu-item>
</template>
```

```
this.$store.dispatch('user/changeRoles', val).then(() => {
          this.$emit('change')
        }) 
```

三者 渲染的优先级 ： render 函数 > template 属性 > 外部html

11月25日
现在做的事情，是我想做的事情。

router.js 里

routers 是一个数组，数组里的对象，如果对象里没有 children 属性，那么就不展示。

就是这里的每个menu,都有一个固定的属性，一个码对应多个属性。


11月26日

遇到一个问题，项目突然加载不到页面了： 我没有改任何的东西。
居然是路径的名字被我写错了。

我觉得我需要保持清醒思考的艺术。

我觉得我有必要学习下，vue router 的配置规范，和原则。

从这个项目中我能学习到什么。公司的项目总要求我们，再嵌套一个路由，它的实现过程究竟是怎么样的。


                    <!-- v-bind:style="{width: isCollapse ? '75px' : '230px'}"  -->

                    v-bind:style="{width: isCollapse ? '75px' : '230px'}" 

vue 中 vue 中有那些跳转路由的方式。

我怎么会犯如此低级的错误。

window.location.href = window.location.origin + '/fe-user-growth/card/punchCard'

table 表格 参考 Complex Table http://localhost:9527/#/table/complex-table

获取对象属性的几种方法。

取不出 headers 下的content-type 属性

如何写好 css 的一个重要原则，就是不要有多余的css

vue 中 图片转二维码   用哪个npm 包

我觉得关于 vue中，上传图片到oss, 需要用到全局store

vue 中上传图片
https://segmentfault.com/a/1190000015545333

一步一步慢慢的做。

https://www.jianshu.com/p/e637452e1961

vue 的 if 条件  如何写上三目运算符， 因为不会计算，所以要加上布尔值。

```
<script>

export default {
    name: 'CommonInvite'
}
</script>

<style lang="less">
.title {
    color: blue;
    .subTitle {
        color: red;
    }
}
</style>
```

关于路由跳转同一个页面，页面不刷新的问题。












