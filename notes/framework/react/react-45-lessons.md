10 月 7 日 至 10 月 20 日
React 实战进阶 45 讲

笔记
componentDidMount

1、UI 渲染完成后调用
2、只执行一次
3、典型场景： 获取外部资源

componentDidUpdate

1、每次 UI 更新时被调用
2、典型场景： 页面需要根据 props 变化重新获取数据

理解 Virtual DOM 及 Key 属性

一个高阶组件的写法。

```
export default function withTimer(WrappedComponent) {
    return class extends React.Component {
        ,,,,,,
        some code
        some code
        render() {
            return <WrappedComponent time={this.state.time} {...this.props} />
        }
    }
}


// 使用如上的高阶组件
import withTimer from '../../withTimer';

// 导出的是封装后高阶组件
export default withTimer(ChatApp);  // ChatApp 是一个组件
```

函数作为子组件 例子如下：

```
class MyComponent extends React.Component {
    render() {
        return (
            <div>
                {this.props.children('Nate Wang')}
            </div>
        )
    }
}

<MyComponent>
{(name) => (
    <div>{name}</div>
)}
</MyComponent>
```

高阶组件和函数子组件都是设计模式

08 | 理解新的 Context API 及其使用场景

09 | 使用脚手架工具，创建 React application
三个 crate app 、rekit、 codesandbox

为什么需要打包 ?

1、编译 ES6 语法特性， 编译 JSX
因为这些语言语法并不能直接被浏览器执行，而且需要考虑到浏览器兼容性问题，因此需要一个编译工具
对其进行一个转换，转换成所有浏览器都能执行的语言。
2、整合资源，例如图片，Less/Sass 样式文件
3、优化代码体积
包括对变量名进行缩短，去除注释，去除空格，去除不必要的变量。

打包注意事项
1、设置 nodejs 环境为 production
2、禁用开发时专用代码，比如 logger
3、设置应用根路径

前端为何需要状态管理库
1、Redux 让组件通信更加容易
2、Single Source of Truth
store 是唯一的数据来源
3、可预测性
state + action = new state
4、纯函数更新 Store

12| 深入理解 Store、Action， Reducer

理解 Store
const store = createStore(reducer);
1、 getState()
2、 dispatch(action)
3、subscribe(listener)

理解 action
描述了一个行为的数据结构。

```
{
    type: ADD_TODO,
    text: 'Build my first Redux app'
}
```

理解 reducer

```
function todoApp(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
          return Object.assign({}, state, {
              todos: [
                  ...state.todos,
                  {
                    text: action.text,
                    completed: false
                  }
              ]
          })
        default:
          return state
    }
}
```

理解 combineReducers

```
import { combineReducers } from 'redux';
export default combineReducers({
    todos,  // 另一个reducer
    counter // 一个reducer
})
```

理解 bindActionCreators

pure-redux 目录是例子

counter 是目录是例子 在 React 中使用 Redeux

14| Redux(4)： 理解异步 Action、Redux 中间件

Redux 中间件 (Middleware)

1、截获 action
2、发出 action

1、 异步 action 不是特殊 action, 而是多个同步 action 的组合使用
2、 中间件在 dispatcher 中截获 action 做特殊处理

15| Redux(5) 如何组织 Action 和 Reducer

“标准”形式 Redux Action 问题
1、所有 Action 放一个文件，会无限扩展
2、Action，Reducer 分开，实现业务逻辑时需要来回切换
3、系统中有哪些 Action 不够直观

新的方式： 每个文件一个 Action
1、易于开发： 不用在 action 和 reducer 文件间来回切换
2、易于维护：每个 action 文件都很小，容易理解
3、易于测试：每个业务逻辑只需对应一个测试文件
4、易于理解：文件名就是 action 名字，文件列表就是 action 列表

16| 理解不可变数据 （Immutability）

1、性能优化
2、易于调试和跟踪
3、易于推测

原生写法： {...}, Object.assign

```
const state = { filter: 'completed', todos: [
    'Learn React'
]};
const newState = { ...state, todos: [
    ...state.todos,
    'Learn Redux'
]};
const newState2 = Object.assign({}, state, {
    todos: [
        ...state.todos,
        'Learn Redux'
    ]
});
```

immutability-helper

```
import update from 'immutability-helper';

const state = { filter: 'completed', todos: [
    'Learn React'
]}

const newState = update(state, { todos: {$push: ['Learn Redux']}});
```

17| React Router (1)：路由不只是页面切换，更是代码组织方式

三种路由实现方式

1、URL 路径
import { BrowserRouter as Router } from "react-router-dom";
2、hash 路由
import { HashRouter as Router } from "react-router-dom";
3、内存路由
import { MemoryRouter } from 'react';
url 并没有发生变化

基于路由配置进行资源组织
1、实现业务逻辑的松耦合
2、易于扩展，重构和维护
3、路由层面实现 Lazy Load

React Router API
1、<Link>: 普通链接，不会触发浏览器刷新
2、<NavLink>: 类似 Link 但是会添加当前选中状态
3、<Prompt>: 满足条件时提示用户是否离开当前页面
4、<Redirect>: 重定向当前页面，例如登录判断
5、<Route>: 路由配置的核心标记，路径匹配时显示对应组件
6、<Switch>: 只显示第一个匹配的路由

18| React Router(2): 参数定义，嵌套路由的使用场景

嵌套路由
nested-route 目录

19| UI 组件库对比和介绍： Ant.Design, Material UI、Semantic UI

单元测试涉及的工具
1、Jest： Facebook 开源的 JS 单元测试框架
2、JS DOM: 浏览器环境的 NodeJS 模拟
3、Enzyme: React 组件渲染和测试
4、nock: 模拟 HTTTP 请求
5、sinon: 函数模拟和调用跟踪
6、istanbul: 单元测试覆盖率

22| 常用开发调试工具： ESLint、Prettier、React DevTool、Redux DevTool

1、使用.eslintrc 进行规则的配置
2、使用 airbnb 的 JavaScript 代码风格

prettier
1、代码格式化的神器
2、保证更容易写出风格一致的代码

23| 前端项目的理想架构： 可维护、可扩展、可测试、易开发、易建构

// 易于开发
1、 开发工具是否完善
2、生态圈是否繁荣
3、社区是否活跃

// 易于扩展
1、增加新功能是否容易
2、新功能是否会显著增加系统复杂度

// 易于维护
2、文档是否健全

// 易于测试
1、功能的分层是否清晰
2、副作用少
3、尽量使用纯函数

// 易于构建
1、使用通用技术和架构
2、构建工具的选择

24| 拆分复杂度(1)： 按领域模型 (feature) 组织代码，降低耦合度

25| 拆分复杂度(2)： 如何组织 component、action 和 reducer

26| 拆分复杂度(3)： 如何组织 React Router 的路由配置

29| 使用 React Router 管理登录和授权

1、实现基础： React Router 的动态路由机制
2、区分受保护路由和公开路由
3、访问未授权路由时重定向到登录页面

31| 实现表单（2）: 错误处理，动态表单元素，内容动态加载

32| 列表页（1）: 搜索，数据缓存和分页

1、如何翻页
2、如何进行内容搜索
3、如何缓存数据
4、何时进行页面刷新

componentDidUpdate(prevProps) {
const page = this.props.match.params.page || 1;
const prevPage = prevProps.match.params.page ||
}

33| 列表页（2）: 缓存更新，加载状态，错误处理
我觉得并没有获取到什么。

34| 页面数据需要来源多个请求的处理

页面数据来自多个请求
1、请求之间无依赖关系，可以并发进行
2、请求有依赖，需要依次进行
3、请求完成之前，页面显示 Loading 状态

35| 内容页和列表页的数据关系

1、简单业务：列表页数据包含内容页的数据
2、复杂业务：内容页数据需要额外获取
3、内容页数据的缓存

36| 基于 React Router 实现分步操作

向导页面需要考虑的技术要点

1. 使用 URL 进行导航的好处
2. 表单内容存放的位置
3. 页面状态如何切换

37| 常见页面布局的实现

38| 使用 React Portals 实现对话框，使用 antd 对话框

React Portals

1、React 16.3 新引入的 API
2、可以将虚拟 DOM 映射到任何真实 DOM 节点
3、解决了漂浮层的问题，比如 Dialog, Tooltip 等

39| 集成第三方 JS 库： 以 d3.js 为例

1、使用 ref 获取原生 DOM 节点引用
2、手动将组件状态更新到 DOM 节点
3、组件销毁时移除原生节点 DOM 事件

...这样的操作符 应该要常用

```
const id = `id${new Date().getTime()}`;

const node = { id, group: _.random(1,9)};

this.setState({
    data: {
        nodes: [...this.state.data.nodes, node],
        links: [
            ...this.state.data.links,
            { source: "id1", target: id, value: 1 }
        ]
    }
})
```

这个用法可以尝试去用。

```
componentDidUpdate(prevProps, prevState) {
    // 当检测到数据发生变化的时候， 执行某个函数，去重新加载某个dom
    if(this.state.data !== prevState.data) this.updateDiagrarm();
}
```

40| 基于路由实现菜单导航

技术要点
1、菜单导航只是改变 URL 状态
2、根据当前 URL 显示菜单的当前状态

做选中导航， 使用 NavLink

```
import { NavLink } from 'react-router-dom';

<li>
     // 精确匹配的时候
    <NavLink exact activeClassName="is-active">welcome</NavLink>
</li>
<li>
    <NavLink exact activeClassName="is-active">Counter Demo</NavLink>
</li>

.is-active {
  color: red
}


function mapStateToProps(state) {
    return {
        router: state.router,
        examples: state.examples
   }
}
```

41| React 中拖放的实现

觉得是比较难的，拖放功能

42| 性能永远是第一需求，时刻考虑性能问题

如何避免应用出现性能问题

1、了解常见的性能问题场景
比如输入框输入卡顿问题，鼠标移动事件
2、时刻注意代码的潜在性能问题
尽可能拆分成比较小的组件，这样可重用性比较高
3、注重可重构的代码
代码的耦合性必须比较低，不被其他的代码所依赖，即使这段代码出现问题，也只要即使修复就好了
4、了解如何使用工具定位性能问题

43| 网络性能优化，自动化按需加载

如何在 React 中实现按需加载

1、什么是按需加载
2、使用 Webpack 的 import API
3、使用 react-loadable 库实现 React 异步加载

代码举例

```
import React from 'react';
import loadable from 'react-loadable';

// 把组件又封装了一层
const RedditListPage = loadable({
    loader: () => import('./RedditListPage'),
    loading: () => <div>Loading...</div>
})
```

44| 使用 Reselect 避免重复计算

45| 下一代 React: 异步渲染

时间分片： DOM 操作的优先级低于浏览器原生行为，例如键盘和鼠标输入，从而保证操作的流畅。
渲染刮起： 虚拟 DOM 节点可以等待某个异步操作的完成，并指定 timeout，之后才完成真正的渲染。

时间分片
1、虚拟 DOM 的 diff 操作可以分片进行
2、React 新 API：unstable_deferredUpdates
3、Chrome 新 API： requestIdleCallback

46| 使用 Chrome DevTool 进行性能调优

1.使用 React DevTool 找到多余渲染 2.使用 Chrome DevTool 定位性能瓶颈

总结： 整体的过程，有些能够理解，但是有些是觉得过于去讲的深奥。不太实用
