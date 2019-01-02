---
2018 年 5月27号开始至今
---
### 删除远程分支

git push origin :branch-name

### js取小数的余数和整数部分
设小数为 n;
小数的整数为 Math.floor(n);
小数的余数为 n - Math.floor(n);

### 关于组件用funtion 而不是 class 组件名称 extends Component {} 这样的形式

一次偶然的发现，代码如下：
```
父组件引用子组件代码
<Landingpage0 
          classMonth={classMonth} 
          classDate={classDate}
          qrcodeImg={qrcodeImg}
          cls={cls}
          hidePic={hidePic}
          price={price}
          pay={pay}
        />
```

```
子组件代码
function Landingpage0({  price, pay, cls, qrcodeImg, classMonth, classDate, hidePic, groupon }) {}
```
完全省略了this.props这样比较重复写的代码。

### urlBase64safe
关于图片拼水印，需要用到安全url
```
var URLSafeBase64 = require('urlsafe-base64') 
    console.log((query.name));
    let name =URLSafeBase64.encode(new Buffer(query.name));
    let userId = URLSafeBase64.encode(new Buffer(getUserInformation.userId))
```
我想说的是最重要的搜索
### 正则校验
`/^[a-zA-Z\d]+$/.test(valueNum)`

### 手机号正则校验 

/^1[3|4|5|7|8][0-9]\d{8}$/.test(isPhoneValue)

### JSON.stringify()
`{courseId: 101, publish: 1, payId: 1001}`
`encodeURI(JSON.stringify(filter))`
### 组件的坏处and好处
我觉得我是不太喜欢用组件的，我也觉得我是太喜欢用组件的。
### dva 里面跳转的新方式 可以跳的很快
```
import { routerRedux } from 'dva/router';
yield put(routerRedux.replace({pathname: '/applySuccess'}));
```
### setTimeout 绑定参数
<!-- 不要再用google搜索了，不要再搜了 -->
```
 function close(grade) {
    setTimeout(function() {
      dispatch({type:'landingpage/save',payload:{isMask:false}});
      window.location.href = `//mp.pipacoding.com/summerClass?courseId=${grade}&origin=landing`
    }.bind(grade),100);
  }
```
### 关于样式，一个标签绑定两个class样式
我发现很久以前不用的东西，很久以前我用的很熟练，之后不用了之后就会忘记掉了。
`styles.bgColor + ' ' + styles.bgColorFloat`
### 关于ref
```
import { Player } from 'video-react';

<Player 
    ref="player" 
    poster={poster}
    onPause={this.videoPause.bind(this,url)} 
/>

```
### nvm的安装以及使用
[nvm](http://bubkoo.com/2017/01/08/quick-tip-multiple-versions-node-nvm/)

### 判断是否是微信环境
mobile-detect    npm 包   安装 MobileDetect
### 获取样式兼容的方式
```
getStyle(obj,name) {
    if(obj.currentStyle) {
      return obj.currentStyle[name];
    } else {
      return getComputedStyle(obj, false)[name];
    }
  }
```
### h5页面撑起高度
```
style={{ minHeight: `${config.pageHeight}rem`}}
```
### 关于跳转加快的两种方式
```
// Inside Effects
yield put(routerRedux.push('/logout'));
// Inside Effects // 带query 的方式
yield put(routerRedux.push({pathname: '/applySuccess',query:{classId:payload.dataInfo.id}}));
// Outside Effects
dispatch(routerRedux.push({pathname: '/applySuccess',query:{classId:payload.dataInfo.id}}));
// 能够看到和用window.location.href跳转url，的明显的区别，
在地址栏的用window,就是直接整个url地址都跳动了，但是用push这种方式，变化的仅仅是路由变化，
前面的window.location.origin 是没有变化的。
```
上面是在dva.1.0中的跳转方法。
dva2.0 的跳转方式如下:
```
  yield put(routerRedux.push('/user'), {name:'tangyue', age: 22});
  那么这个参数会如何接受到呢，如下代码:
  subscriptions: {
    history.listen((location) => {
      console.log(location.state);  // 这里的location.state就是传递过来的参数
      // 即为 {name: "tangyue", age: "20"}
      })
  },

```
### 关于元素属性offsetTop
```
var anchor = document.getElementById(selector);
if(document.body.scrollTop) {
  document.body.scrollTop = anchor.offsetTop;
} else if (document.documentElement.scrollTop) {
  document.documentElement.scrollTop = anchor.offsetTop;
}else {
  var oPos = anchor.offsetTop;
  window.scrollTo(0, oPos-36)
}
```
### 关于手机返回键
```
]  !function(pkg, undefined){
    var STATE = 'x-back';
    var element;

    var onPopState = function(event){
        event.state === STATE && fire();
    }

    var record = function(state){
        history.pushState(state, null, location.href);
    }

    var fire = function(){
        var event = document.createEvent('Events');
        event.initEvent(STATE, false, false);
        element.dispatchEvent(event);
    }

    var listen = function(listener){
        element.addEventListener(STATE, listener, false);
    }

    ;!function(){
        element = document.createElement('span');
        window.addEventListener('popstate', onPopState);
        this.listen = listen;
        record(STATE);
    }.call(window[pkg] = window[pkg] || {});

}('XBack');

XBack.listen(function(){
    window.location.href = 'https://www.baidu.com'
});
// 可以监听到手机的返回键.
```
### 关于loading 出现的大bug
1、 loading 方式
2、 && 我所遇到的fundebug 报错 ，包括滚动组件
### 关于ios 键盘和安卓键盘问题，针对这两个我的处理方式
### 关于用dva搭建项目，我所遇到的一些问题。
主要是关于绑定事件问题
配置文件问题
新的用法问题
关于select问题
### css 优雅的写法
#### 选择器
```
// .vue 文件
<div class="AboutUs_details content" :id="index" v-for="(value, index) in History">
      <p class="post" v-text='value.post'></p>
      <p class="pay" v-text="value.pay"></p>
      <P class="standard">
        <span v-for="valueR in value.standard" v-text="valueR"></span>
      </P>
</div>
// .css 文件
.AboutUs_details>p{
  text-align: center;
}
.AboutUs_details>p.post {
  margin: 100px auto 0;
  font-size: 26px;
}
.AboutUs_details>p.pay {
  margin: 12px auto;
  font-size: 24px;
  color: #ee6d0f;
}
.AboutUs_details>p.standard {
  margin: 12px auto;
  font-size: 14px;
  color: #9c9591;
}
.AboutUs_details>p.standard span{
  padding-left: 20px;
  margin-right: 20px;
}
.AboutUs_details>p.standard span:nth-child(1){
  background: url(//img.pipacoding.com/assets/pc/landingpage2.0/my/standard_0.png) no-repeat 0px center;
}
```
#### 全局定义，分开引用
```
@imgUrl: "//img.pipacoding.com/assets/pc/landing3.0/";
@color_back_gray: rgba(240, 240, 240, 1);

// 使用
.select {
  background: url("@{imgUrl}select_001.png") no-repeat center 0px;
}
.select {
  p {
    span {
      color: @color_back_gray;
    }
  }
}
```

### 关于支付前提示
这个需求是根据后端接口的返回码，
用antd design 里面的toast去提示用户，
比如，你购买的课已经卖完了。
可是我做了很多很多次，得到的结果都是，
会出现点击第一次没有反应，第二次才会出现提示。
我一直是把 toast 写在routes层，却从未想过要把它写在modal层。
基于之前刚看过一个项目，用的是antd design 里的message提示，
是写在modal层。
几天再一次回到这个项目，我为什么也不写在modal。
今天终于把这个问题给解决了。
### 我决定要为dva写一个总结文档。
### 关于一个简单的js基础
我却每次都在网上搜索资料。
我觉得我不应该再去网上搜索资料，就可以写出来。
于是记录如下：
`moment().format('L').split('/').join('-')`
说明:2018/08/10  变成为  2018-08-10
### 关于网站加载慢的几个因素
### 复制一份数组，但是不改变原数组
默写一遍吧
.concat()
let newState = [].concat();
.map()
let newState = state.map((item) => item)
.slice()
let newState = state.slice(0)
es6 方法
let newState = [...state]

### 一个问题
because its MIME type ('text/html') is not a
supported stylesheet MIME type, and strict MIME
checking is enabled.

通过路由去点击一下，完全是可以展示页面的，但是
我不知道为什么，刷新一下就会报这个错误。 

### 获取scrollTop兼容各浏览器的方法
window.pageYOffset
属于window对象，IE9、firefox、chrome,opera
均支持该方式获取页面滚动高度值，并且忽略Doctype
定义规则。
window.scrollY
属于window对象，firefox、chrome，opera支持，IE不支持，忽略Doctype规则
document.documentElement.scrollTop
如果页面定义了doctype文档头，基本所有的浏览器都支持
（）

为了兼容，不管有没有DTD，可以使用如下代码:

```
var scrollTop = window.pageYOffset     // IE9+ 
                || document.documentElement.scrollTop    // firefox
                || document.body.scrollTop            // chrome
                || 0;
```







