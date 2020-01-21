面试总结

### 1、vue 的生命周期

1、beforeCreate 在实列初始化前被触发

2、created 会在实列初始化之后，被添加到DOM之前触发

3、beforeMount 会在元素已经准备好被添加到DOM，但还没有添加的时候触发

4、mounted 会在元素创建后触发，但不确定被添加到了DOM。可以用nextTick 来保证这一点。

5、beforeUpdate 会在由于数据更新将要对DOM做一些更改时触发

6、updated 会在DOM 的更改已经完成后触发

7、beforeDestroy 会在组件即将被销毁并且从DOM上移除时触发

8、destoryed 会在组件被销毁后触发

### 2、react 的生命周期  react 16 版本

1、初始化阶段

constructor

2、挂载阶段

getDerivedStateFromProps

render

componentDidMount

3、更新阶段

getDerivedStateFromProps(props, state)

shouldComponentUpdate

render

getSnapshotBeforeUpdate(prevProps, prevState)

componentDidUpdate

4、卸载阶段

componentWillUnmount

5、错误处理

componentDidCatch

### 3、从输入URL 到页面加载完成的过程中都发生了什么

https://zhuanlan.zhihu.com/p/23155051

https://segmentfault.com/a/1190000006879700

3次握手

4次挥手

采用tcp协议，保证信息传输的可靠性，三次握手过程中，若一方收不到确认信号，协议会要求重新发送信号。

### 4、Cookie, LocalStorage 与 SessionStorage

#### 三者异同

| 特性         | Cookie     | localStorage  | sessionStorage      | 
| ----------- |:---------------:| -----------:| ----------------: |  
| 数据的生命周期 |  一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效     | 除非被清除，否则永久保存 |  仅在当前会话下有效，关闭页面或浏览器后被清除 | 
| 存放数据大小   |   4k 左右      |     5MB        
| 与服务器端通信 |   每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题    |  仅在客户端（即浏览器）中保存，不参与和服务器的通信     
| 易用性        | 需要程序员自己封装，原生的Cookie 接口不友好                        |  原生接口可以接受，亦可再次封装来对Object和Array 有更好的支持     

#### 应用场景

cookie 一般存储 token 信息，不要放太多，因为每个http 请求都会带着Cookie的信息
localStorage   能存储很多信息
sessionStorage 把表单页面拆分成多个子页面，然后按步骤引导用户填写

#### 安全性考虑

任何数据都不能放在以上三种中，需要时刻注意是否有代码存在xss注入的风险。
因为只要打开控制台，你就随意修改它们的值，也就是说如果你的网站中有xss的风险，它们就能对你的localStorage 肆意妄为。

### 5、vue 的响应式原理

### 6、理解BFC原理

BFC 即Block Formatting Contexts （块级格式化上下文）。它是一个独立的渲染区域，里面的元素和外部的元素相互不影响。

#### 触发BFC
1、body 根元素
2、浮动元素：float: left；float: right
3、定位元素：position为absolute或fixed
4、display：inline-block；table-cell；table-caption；flex；inline-flex
5、overflow：hidden；scroll；auto

#### 利用BFC 能解决哪些问题

1、解决同一BFC容器中的相邻块级元素垂直方向的外边距重叠问题
2、清除浮动
3、BFC可以阻止元素被浮动元素覆盖

https://www.zhihu.com/search?type=content&q=BFC

https://muyiy.cn/question/css/39.html

https://juejin.im/entry/59478ce8a0bb9f006bda9756

### 7、如何实现居中

水平居中： 

1、`text-align: center` 在块级元素内部的行内元素水平居中。
对inline、inline-block、inline-table、inline-flex 元素水平居中都有效 (可以解决大部分问题)

```js
<div class="parent">
  <div class="child">Demo</div>
</div>
<style>
  .parent {
    text-align: center;
  }
  .child {
    // 设置宽度和border，更能看出效果
    display: inline-block;
  }
</style>
```
2、块级元素居中： `margin: 0 auto` (该元素定宽)

3、flex

```js
<div class="parent">
  <div class="child">xxxx</div>
</div>
<style>
  .parent {
    display: flex;
    justify-content:center;
  }
  .child {

  }
</style>
```

垂直居中：

1、PC端有兼容性要求，宽高固定

```js
<div class="parent">
  <div class="child">

  </div>
</div>
<style>
.parent {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid #eee;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  border: 1px solid #aaa;
  width: 100px;
  height: 100px;
}
</style>
```

2、pc 端无兼容性要求，宽高不固定，推荐css-table
```js
<div class="parent">
  <div class="child">

  </div>
</div>
<style>
.parent {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #aaa;
    width: 200px;
    height: 200px;
  }
.child {
  display: inline-block;
  border: 1px solid #aaa;
}
</style>
```

3、pc端无兼容性要求，宽高不固定，推荐flex, （这个比较好）
```js
<div class="parent">
  <div class="child">
  </div>
</div>
<style>
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #aaa;
    width: 200px;
    height: 200px;
}
.child {
    
}
</style>
```

### 跨域问题

#### 完整url的组成

1、协议 例 Http （超文本传输协议，信息是明文传输），Https（具有安全性的ssl加密传输协议）
2、域名 例`www.baidu.com`为网站名字。`baidu.com`为一级域名，www 是服务器
3、端口， 不填写的话，Http 走80端口，https 走 443
4、路径 `http://www.baidu.com/路径1/路径1.2` / 表示根目录
5、查询参数 `查询参数http://www.baidu.com/路径1/路径1.2?name="man"`

#### 同源策略
