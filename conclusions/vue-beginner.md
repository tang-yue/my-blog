-- 写于12月20日，  -- 更新于 1月7日

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

#### 问题三
如果要用less 需要安装 less-loader 和 less


### 从零开始搭建 vue 项目


我修改的地方

#### vue.config.js 文件
参考 https://segmentfault.com/a/1190000015801427
[vue cli3 配置](https://cli.vuejs.org/zh/config/#babel)
```
module.exports = {
    baseUrl: '/my-app',
    // 你的应用被部署在 https://www.my-app.com/my-app/， 默认是'/'
    outputDir: 'dist/example',
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

#### .eslintrc.js  文件
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

#### axios request 封装
见[request 封装](https://github.com/tang-yue/my-blog/blob/master/conclusions/request.md)
















