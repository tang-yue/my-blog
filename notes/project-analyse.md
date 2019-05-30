移动端 dva 项目分析

1. 如何做到在pc端打开，显示请在微信客户端打开链接

微信登录的整体思路如下
路由部分
用redux-auth-wrapper
```
import React from "react";
import { Router, Route, IndexRedirect } from "dva/router";
import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';

// 只要state.user.userId 不存在，即cookie里面没有userId，那么会自动跳转到域名+'/login?redirect=xxx'下
const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsAuthenticated',
    predicate: user => user && user.userId && user.userId.length > 0
})
此时我们只要当路由/login 的时候，判断cookie里是否有userId，没有跳转
"//域名/xxx/xx/wechat/mp/login"，即会显示请在微信客户端打开链接

const Authenticated = UserIsAuthenticated(props => React.cloneElement(props.children, props));

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Route path="/" component={Index} >
                <IndexRedirect to="/page" />
                <Route path="login" component={Login} />
                <Route component={Authenticated}>
                    <Route path="adjust" component={Adjust} />
                </Route>
            </Route>
        </Router>
    )
}
export default RouterConfig;
```

别人的cookie值获取函数，写的真好
```
import Cookie from "js-cookie";
export function getUser() {
    const obj = ["userId", "avatar", "token","nickname", "wxname"].reduce((result, name) => {
        result[name] = Cookie(name);
        return result;
        }, {});
    return { ...obj };
}
// 引用
import { getUser } from './utils/cookie' 
```

关于移动端，px 如何相对应的转成rem;


2019 年  5月16日

我的github项目，自己做的。

首先得要有一个主页。 然后导航。


一个既兼容移动端又兼容pc端的vue脚手架，需要包含的哪些东西。

1、首先安装router， 添加router.js和store.js
2、vue.config.js 配置
3、.eslintrc.js  配置
4、.eslintignore 添加
5、 store 的使用


content="width=device-width,initial-scale=1.0"
