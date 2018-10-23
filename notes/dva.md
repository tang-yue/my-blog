-----------------
下面是需要待做的
1. mock-browser 页面 待会再研究，并不是我所要关注的主要逻辑
 移除 `<MockBrowser />`

-----------------
-----------------

之后研究出来，实在是令我大失所望。
前端是根本就做不了，权限控制的。
学习 dva 动态加载


https://juejin.im/post/5a3b22246fb9a045023bcd12 

参考这篇文章配置的mock

不要去看其他的，你只需要用心，将这个项目给搭建起来就可以了。
不要临时去看其他的东西。

学习一下 这里里面的  dva/fetch  请求 是怎么写的。

我觉得得要量的积累才能产生质的突变。

源码往往考验很深的js数据结构和算法基础。
所以如果你对这些不是很熟悉的话，那么你就不可能看懂源码。


common/router.js  下
究竟是如何做到 将model 给加载进来的呢。

Array.isArray() 的用法 判断是否是数组

if this value is true 否则 为 false

自带的终端是连在当前在哪个分支都看不到的。

---------- ---------
关于学习这个 我要实现的几个小目标。

1. 从起点搭建 项目。
要有如下功能。

（1）eslint 插件   能够更好的实现让前端代码更加的规范。
（2）权限用的插件，authority         优先级最高
 (3) 其实别人的源码， 一般有 侧边里menu,layout布局，还有自己原生的权限代码，
 别人的代码好就好在，这些封装的东西上面。 
（4） 自己写一个 只要将路径加在框架里面就可以了， 外面的框架是不要动的。
 我觉得我自己简陋的代码是可以做到的。
 好的，就这样分，自己能够做到什么样，那么就做到什么样。当初是因为项目真的实在太赶的缘故。
 所以才会直接使用别人的框架。导致，现在别人的代码太过复杂，看不懂了。


 权限， 基本布局，   这两大块就，是目前是需要解决的

 其实关于 权限我以前有看过demo 然后就忘记了，所以我应该算是在做重复的事情。
 少即是多，永远都是那么的有道理。

-----------------

权限部分笔记

```
<Router history={history}>
  <Switch>
    <Route path="/user" component={UserLayout} />
    <AuthorizedRoute path="/" component={BasicLayout} />
    <Redirect to="/" />
  </Switch>
</Router>
```

codesandbox  react 编辑器 地址 https://codesandbox.io/

https://codepen.io/bradwestfall/project/editor/XWNWge?preview_height=50&open_file=src/app.js

参考文章
因为需要做权限管理，所以我需要看，虽然不是dva的权限管理，但是react 和dva 完全是类似的。

用codeopen写react 太过耗费时间， 于是舍弃.

安装了 nvm   node 版本管理器

和我目前的目录结构有点不一样，我需要将其改成我现在的目录，并且功能要保持完全一致。

yarn eject   可以把create-react-app  本身封装好的，给暴露出来。这样就会更清晰


https://github.com/lidaguang1989/react-seed   参照这个项目

```
<Route path={match.path} exact component={BrowseUsersPage} />
<Route path={`${match.path}/:userId`} component={UserProfilePage} />

```


我现在所要做的，是要和被人的功能保持一摸一样。这是我的目的，搞清楚自己的目的之后。


主要用的是build之后的html， 本质上和public下面的没有什么关系。


10月20日
4:40分 已完成基本布局，下面需要研究细节部分
// 以下部分内容
6:46分 重新学习ant design pro 源码
我看懂源码的本质原因.

关于这个源码部分，我究竟应该从哪个入口开始修改。
10月22日
今天看了一会，我还是连代码都没有看懂。
连代码都没有看懂。可是我又没有办法将props给打印出来看看，因为我并不知道应该
先不考虑权限的问题，也不要去考虑布局的问题，仅仅是去改路由部分。
所以无论页面变成什么样子，都不要去太过的担心。
在哪个地方才能打印出这个props。


路由，，，路由，，，路由，，，路由
我一直很好奇，这个models 究竟是如何加载的，如何加载的，如何加载的。

请问点击。侧边栏上 menu， 会发生什么呢，会执行什么





