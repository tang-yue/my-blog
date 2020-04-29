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


##### 过程概述

1、浏览器查找域名对应的IP地址；
2、浏览器根据IP地址与服务器建立socket 连接；
3、浏览器与服务器通信：浏览器请求，服务器处理请求；
4、浏览器与服务器断开连接。

说明：
可以把多个提供相同服务的服务器IP设置为同一个域名，但在同一时刻一个域名只能解析出一个IP地址；同时，一个IP地址可以绑定多个域名，数量不限。

建立连接--三次握手

1、主机向服务器发送一个建立连接的请求 （您好，我想认识您）
2、服务器接到请求后发送同意连接的信号  （好的，很高兴认识您）
3、主机接到同意连接的信号后，再次向服务器发送了确认信号（我也很高兴认识您），自此，主机与服务器两者建立了连接。

说明：
采用tcp协议，保证信息传输的可靠性，三次握手过程中，若一方收不到确认信号，协议会要求重新发送信号。

断开连接--四次挥手

1、主机向服务器发送一个断开连接的请求 （不早了，我该走了）
2、服务器接到请求后发送确认收到请求的信号（知道了）
3、服务器向主机发送断开通知（我也该走了）
4、主机接到断开通知后断开连接并反馈一个确认信号（嗯，好的），服务器收到确认信号后断开连接。


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

[参考1](https://www.zhihu.com/search?type=content&q=BFC)
[参考2](https://muyiy.cn/question/css/39.html)
[参考3](https://juejin.im/entry/59478ce8a0bb9f006bda9756)

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

同源：三个相同："协议相同"，"域名相同", "端口相同”

同源的目的：保证用户信息的安全，防止恶意的网站窃取数据。 不同源会导致cookie共享。

不同源会导致跨域问题

### 如何解决跨域问题

1、JSONP 

只是请求了一个js文件并且执行了，而且这种跨域方法只能进行GET请求。

web 页面上调用js文件不受浏览器同源策略的影响，所以通过Script 便签可以进行跨域的请求：

(1) 首先前端先设置好回调函数，并将其作为url的参数。
(2) 服务端接受到请求后，通过该参数获得回调函数名，并将数据放在参数中将其返回。
(3) 收到结果后因为是script 标签，所以浏览器会当做是脚本进行运行，从而达到跨域获取数据的目的。

JSONP 安全性问题

  CSRF 攻击

  CSRF 跨站请求伪造。

    解决方法： 验证JSONP 的调用来源，服务端判断Referer 是否是白名单，或者部署随机Token 来防御。

  XSS 漏洞

    XSS 漏洞 跨站脚本攻击，为了避免和css重复， 就叫XSS了。

XSS 的危害有哪些？
（1）劫持 Cookie，（2）构建Get 和Post 请求  （3）获取用户系统信息

2、CORS 总结

总的来说，CORS实现跨域的方法就是根据请求头的Origin 值和响应头的Access-Control-Request-Headers 和 Access-Control-Request-Method 的值进行比对，
通过了就可以请求成功，没通过就请求失败。

3、服务端代理

服务器代理，顾名思义，当你需要有跨域的请求操作时发送请求给后端，让后端帮你代为请求，然后最后将获取的结果发送给你。

location.hash 

window.name

postMessage 

document.domain

4、反向代理

[跨域参考文章](https://github.com/happylindz/blog/issues/3)

5、location.hash、  window.name、 postMessage、 document.doman

JSONP 和 CORS 的对比

JSONP 只支持GET 请求，和后端配置相应回调函数。 CORS 支持所有类型的HTTP请求
JSONP 的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据

### js 里面的闭包

```
  // 徒手写一个闭包

  function sayHello(name) {
    let str = `Hello, ${name}`;
    function say() {
      console.log(str);
    }
    return say;
  }

  let myHello = sayHello('abby');

  myHello();  // Hello,abby
```


apply bind call 的区别

这三个函数都是改变了当前函数的this 指向。

apply 接收的是数组，并会立即执行
call  接收的是用逗号隔开的参数，并会立即执行
bind  接收的是用逗号隔开的参数，但是不会立即执行，而是返回一个新的函数


缓存分为强缓存和协商缓存，强缓存不过服务器，协商缓存需要过服务器，协商缓存返回的状态码是304。
两类缓存机制可以同时存在，强缓存的优先级高于协商缓存。当执行强缓存时，如若缓存命中，则直接使用缓存数据库中的数据，不再进行缓存协商。


一  数组去重

Array.prototype.distinct01 = function () {
  const arr = []
  this.forEach(item => {
    if (arr.indexOf(item) === -1) {
      arr.push(item)
    }
  })
  return arr
}


Array.prototype.distinct03 = function() {
  return Array.from(new Set(this))
}










