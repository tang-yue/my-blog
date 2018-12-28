用vue 搭建 简单后台

### 构建vue项目

#### 问题一
yarn global add @vue/cli
# OR
npm install -g @vue/cli

npm uninstall vue-cli -g 删除不掉旧版本。
解决方法， 手动找到安装的vue，将其删除。用npm install 安装

#### 问题二
遇到了热更新停滞的问题，在其他电脑上访问不正常，在自己电脑上访问正常。


从零开始搭建 vue 项目


我修改的地方

vue.config.js 文件
参考 https://segmentfault.com/a/1190000015801427
[vue cli3 配置](https://cli.vuejs.org/zh/config/#babel)
```
module.exports = {
    baseUrl: '/my-app',
    // 你的应用被部署在 https://www.my-app.com/my-app/， 默认是'/'
    outputDir: 'dist/fe-staff',
    // 生产环境构建文件的目录
    lintOnSave: true,
    // 需要安装eslint-loader ，预处理错误，将lint错误输出为编译警告
    // lintOnSave: 'error'， 将lint错误输出为编译错误
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: () => {},
    configureWebpack: () => {},
    productionSourceMap: true,
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {},
        modules: false,
    },
    parallel: require('os').cpus().length > 1,
    devServer: {
        open: process.platform === 'darwin',
        // 我不知道open 这行设置有什么意义
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        // 像host、port 和 https 可能会被命令行参数覆写
        proxy: {
            '/xx/xx': {
                target: 'https://www.example.com',
                changeOrigin: true
            }
        },
        disableHostCheck: true,
        // 上面一行针对用公司配的域名访问时，出现invalid host header的情况
        before: (app) => {}
    },
    // 第三方插件配置
    pluginOptions: {

    }
};
```

将 package.json 文件中的eslintConfig配置迁移到新建的.eslintrc.js 文件中
```
module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        // "eslint:recommended",
        "@vue/airbnb",
        // 需要安装@vue/eslint-config-airbnb，在配置里面eslint-config这个前缀可以省略不写，
        // airbnb 是别人自定义的编码规范，这样我们就使用了eslint-config-airbnb中的规则，而不是
        // 官方的规则 "extends":"eslint:recommended"了。
    ],
    "rules": {
        'no-unused-vars': 0, // 定义了变量，未使用。可能有全局变量，别人使用的
        'global-require': 0, // 不能使用require
        'comma-dangle': 0, // 结尾逗号
        'no-console': 0, // 不能有console，警告
        'no-param-reassign': 0, // 不允许函数参数重新赋值
        'no-unused-expressions': 0, // 不允许  this.toast.finally && this.toast.finally();形式
        'func-names': 0, // 不允许使用 const getList = function() {...}，是个警告
        'no-prototype-builtins': 0, // 不能使用prototype操作
        'no-restricted-syntax': 0, // 禁止使用for in
        'prefer-const': 0, // 如果没改变的话，必须是const
        'no-undef': 0, // 使用了未定义的变量
        'arrow-parens': 0, // 箭头函数用小括号括起来
        'object-shorthand': 0, //强制对象字面量缩写语法、
        'guard-for-in': 0, // for in循环要用if语句过滤
        'import/no-dynamic-require': 0 // 不能使用动态require
        // 上述规则可通过编译查看，可自行选择，或者自己修改代码
    },
    "parserOptions": {
        "parser": "babel-eslint"
    }
}
```

研究request 封装

如果要用less 需要安装 
less-loader 和 less

它是否是用了什么组件呢



       {
                  "title":"做孩子理科思维的启蒙", "content":`
          作为数学学渣，未来孩子的功课辅导方面一定是有缺陷的。幸好遇到了核桃编程，万万
          没想到，一个看上去普通的小游戏，居然已经包含了动作与循环、负数、克隆、变量等知识点在里边。\n
          孩子作业中的问题，老师也会在批改中一一指出，但又不直接点出解决之道。所以小朋友还得再仔细检查
          一遍，自己去发现其中的错漏。这个过程无疑又锻炼了逻辑思维能力，想敷衍含糊是不可能的，借此培养起认真仔细的态度是必然的。`
          "avatar":"//img-hetao.oss-cn-beijing.aliyuncs.com/assets/%08pc-official/Group%2021%20Copy%202.png", "parent":"8岁孩子·一涵的妈妈",
          "color": "#FDDE02", "background-color": "#2c3e50" 
                },
                {
                  "title": "让孩子学会自主学习", "content":`
          让孩子学核桃编程，一方面是满足他想学的欲望，另一方面是想锻炼他的自主学习能力。\n
          在开始编程之前，他是一个学习依赖性极强、碰上难题就一脸懵逼的孩子。而在这个课程中，
          除了帮助孩子进入课程，其他我完全置之不理。孩子把课程视频拿出来反复看，练习到不用
          跟随视频也可以自己做出来作业，最后顺利完成了属于自己的毕业作品。 \n
          这个作品是他跨越了无数的障碍，理解了什么叫按自己的想法去实现后的结果，更是他第一
          次一路遇到难题而没有放弃的见证。`, "avatar": "//img-hetao.oss-cn-beijing.aliyuncs.com/assets/%08pc-official/Group%202%20Copy.png", 
          "parent": "7岁孩子·朱越的妈妈", "color": "#fff", "background-color": "#4dc5c0"
                },
                {
                  "title":"做孩子理科思维的启蒙", "content":`
          作为数学学渣，未来孩子的功课辅导方面一定是有缺陷的。幸好遇到了核桃编程，万万
          没想到，一个看上去普通的小游戏，居然已经包含了动作与循环、负数、克隆、变量等知识点在里边。\n
          孩子作业中的问题，老师也会在批改中一一指出，但又不直接点出解决之道。所以小朋友还得再仔细检查
          一遍，自己去发现其中的错漏。这个过程无疑又锻炼了逻辑思维能力，想敷衍含糊是不可能的，借此培养起认真仔细的态度是必然的。`
          "avatar":"//img-hetao.oss-cn-beijing.aliyuncs.com/assets/%08pc-official/Group%2021%20Copy%202.png", "parent":"8岁孩子·一涵的妈妈",
      "color": "#FDDE02", "background-color": "#2c3e50"
                },
                {
                  "title": "让孩子学会自主学习", "content":`
          让孩子学核桃编程，一方面是满足他想学的欲望，另一方面是想锻炼他的自主学习能力。\n
          在开始编程之前，他是一个学习依赖性极强、碰上难题就一脸懵逼的孩子。而在这个课程中，
          除了帮助孩子进入课程，其他我完全置之不理。孩子把课程视频拿出来反复看，练习到不用
          跟随视频也可以自己做出来作业，最后顺利完成了属于自己的毕业作品。 \n
          这个作品是他跨越了无数的障碍，理解了什么叫按自己的想法去实现后的结果，更是他第一
          次一路遇到难题而没有放弃的见证。`, "avatar": "//img-hetao.oss-cn-beijing.aliyuncs.com/assets/%08pc-official/Group%202%20Copy.png", 
          "parent": "7岁孩子·朱越的妈妈", "color": "#fff", "background-color": "#4dc5c0"
                },
                {
                  "title":"做孩子理科思维的启蒙", "content":`
          作为数学学渣，未来孩子的功课辅导方面一定是有缺陷的。幸好遇到了核桃编程，万万
          没想到，一个看上去普通的小游戏，居然已经包含了动作与循环、负数、克隆、变量等知识点在里边。\n
          孩子作业中的问题，老师也会在批改中一一指出，但又不直接点出解决之道。所以小朋友还得再仔细检查
          一遍，自己去发现其中的错漏。这个过程无疑又锻炼了逻辑思维能力，想敷衍含糊是不可能的，借此培养起认真仔细的态度是必然的。`
          "avatar":"//img-hetao.oss-cn-beijing.aliyuncs.com/assets/%08pc-official/Group%2021%20Copy%202.png", "parent":"8岁孩子·一涵的妈妈",
          "color": "#FDDE02", "background-color": "#2c3e50"
                }




                <swiper :options="swiperOption2" v-for="swiper in swiperMain">
                    <swiper-slide>
                        <div></div>
                    </swiper-slide>
               </swiper>


<swiper :options="swiperOption2" >
  <swiper-slide v-for="item in swiperMain" :key="item.title">
      <div></div>
  </swiper-slide>
</swiper>


两个swiperOption 会相互影响，请问我应该如何解决呢.

swiper 点击按钮 如何去掉点击时的样式。

如何去掉边框样式  border-style: none

去掉outline样式  outline: none

vue 中 数据里面的p标签内容，如何换行 

`<p v-html="item.content"></p>`

段首缩进  如何实现

动态的  src
<img :src="item.backgroundImage" alt="image"/>

span 的background 可以有两个url如下

```
span {
  url(), url()
}
```








