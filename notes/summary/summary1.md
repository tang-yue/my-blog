两年半后台和移动端工作总结

## js 相关

### 简单js

1. `window.location.reload(true)` 却没有执行。因为是需要当前页面。不是在当前页面的，就不会执行了。

2. scroll top 兼容各个浏览器

w.pageYOffset
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

3. 数字

小数的整数为 `Math.floor(n)`; 小数的余数为 `n - Math.floor(n)`.

### npm 包 moment 的用法总结

1、 字符串`2019-12-23T17:42:19+08:00`转时间戳

```js
let utime = '2019-12-23T17:42:19+08:00'
let timestamp = Math.floor(moment(utime.slice(0,19).replace(/T/g, " ")))
```

2、 获取当前时间戳

```js
Date.parse(new Date())
Math.floor(new Date())
```

3、将当前时间戳转为字符串

```js
moment().format() // 2019-12-23T17:42:19+08:00

moment().format().slice(0,19).replace(/T/g, " ") // 2019-12-23 17:42:19

momrnt().format().slice(0,10) // 2019-12-23

moment().format("L") // 12/23/2019
```

4、在antd，form 表单控件中的运用

```js

// 初始值：initialValue: curItem.effectiveTime&&curItem.expireTime ? [moment(curItem.effectiveTime, "YYY/MM/DD HH:mm:ss"),moment(curItem.expireTime, "YYY/MM/DD HH:mm:ss")] : null,

// 其中 effectiveTime  和 expireTime 的格式为

"00" + moment(timestamp)
              .format("L")
              .split("/")
              .join("-") + moment(timestamp).format("LTS")

```

5、下面这行语句
```js
moment(timestamp).format('lll') 
//  上述语句 在react + antd 项目中 显示为 2019年12月6日 11:38
// 在vue 项目 显示为 Dec 23, 2019 8:48 PM
```
6、将时间戳转换成年月日格式

```js
let date = new Date(timestamp);
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

year + '年' + month + '月' + day + '日'
```

### 判断微信端， 手机版本号，pc端

#### 1、判断pc端还是移动端

```js
isPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", 'SymbianOS', "Windows Phone","iPad", "iPod"];
  var flag = true;
  for(var v = 0; v < Agents.length; v++) {
    if(userAgentInfo.indexOf(Agents[v]) > 0) {
      // 只要有这些，就说明是移动端了
      flag = false;
      break;
    }
  }
  return flag;
}
```

#### 2、判断手机版本号，微信端

```js
export function getDevice(type) {
  const ua = navigator.userAgent;
  let res = false;
  switch (type) {
    case 'ios8':    // 是否是ios8
      if (ua.match(/OS 8_[0-9_]+ like Mac OS X/gi))
        return true
    break;
    case 'wx':
      if (ua.match(/MicroMessenger/i) == "micromessenger")
        return true
    break;
    default:
      res = false;
  }
  return res;
}
```
[更多判断系统类型参考](https://www.jianshu.com/p/00047e800ca1)

### 图片压缩相关

```js
// base64 转二进制文件流
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: mime
    });
}
```

参考链接：

[js 图片压缩方法](https://juejin.im/post/5a097b2ff265da43231a79fa)
[原生js 手写前端图片压缩上传插件](https://juejin.im/post/5e78b6d4f265da57520966c6) 为主
[张鑫旭的纯前端js 压缩实现](https://juejin.im/post/5bec3c6cf265da614312a0fa)

### url里的search相关

```js
// get the request // 最后返回query // key value
function GetRequest(urlStr) {
    let url;
    if (typeof urlStr == "undefined") {
        url = decodeURI(location.search); //获取url中"?"符后的字符串
    } else {
        url = "?" + urlStr.split("?")[1];
    }
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        const str = url.substr(1);
        const strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
```

### cookie 相关

```js
// 获取cookie
import Cookie from "js-cookie";
export function getUser() {
    const obj = ["userId", "avatar", "token","nickname", "wxname"].reduce((result, name) => {
        result[name] = Cookie.get(name);
        return result;
        }, {});
    return { ...obj };
}
// 引用
import { getUser } from './utils/cookie' 
```

```js
// 删除cookies
export function removeCookies() {
    ['userId', 'avatar', 'token', 'nickname', 'wxname'].map(val => {
        Cookies.remove(val);
    })
}
```

## css 相关

1. background 属性

```css
background-size: cover;
background-size: 100% 100%;
background-size: contain
background-size: auto 20px /* 控制背景图大小 */
```

2. 全局定义 分开使用

```css
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

## react 相关

### 关于react子组件向父组件，传值

关于我模糊的记忆，只知道是用函数进行传值。
1、首先，父组件和子组件共用一个函数。
2、在子组件里的某个事件，会调用这个函数。同时，将参数给传递到父组件。
3、父组件就可以直接用这个函数，以及有了参数，进行相对应的操作。
4、最重要的，执行了子组件里的该函数，就是相当于执行了父组件里的该函数。

### react 的另一种没有写过的写法。

```js
  export default class SideMenu extends PureComponent {
    constructor(props) {
      super(props);
      this.flatMenuKeys = getFlatMenuKeys(props.menuData);
      // 那么 this.flatMenuKeys 就可以直接在下面使用
    }
  }
```

```js
UNSAFE_componentWillReceiveProps(nextProps) {
  // to do something
}  
// 就是当props 发生改变的时候，去做些什么。
```

### 模态框思考

1. 比较常用的state值的函数
```
父组件
function change(payload) {
    dispatch({ type: 'homework/save', payload });
  }
将该函数传入子组件中
<Element change={change}/>
```
2. mask 蒙层
这个直接就是写成一个组件  代码如下:
```
import React from 'react';
import { Icon } from 'antd-mobile';

import Center from '../../Container/Center';
import styles from './Mask.css';

function Mask(children,func,sty) {
  if(!sty)
  {
    const sty = 'rgba(0,0,0,0.8)';
  }

  function caclHeight() {
    return document.documentElement.clientHeight;
  }
  return (
    <div
      className={styles.mask}
      onClick={func}
      style={{backgroundColor:sty}}
    >
      <Center style={{ height: `caclHeight()px` }}>
         {children()}
      </Center>
    </div>
  );
}
export default Mask;
```
如何使用mask 这个组件,  maskContent 传入一个纯组件，又传入一个关闭的函数。
只要在maskContent里面写上你在蒙层上面想写的内容就可以了。
```
 {Mask(maskContent,close)}
 {Mask(this.maskContent.bind(this), this.close.bind(this))} // 这里等同于上述
```

## 正则相关

1. 判断是否小数

`let reg = /^[1-9]{1}[0-9]*\.\d+$/`

2. 是否含有中文

`let reg = /.*[\u4e00-\u9fa5]+.*$/`

3. 手机号

`/^1[3|4|5|7|8][0-9]\d{8}$/.test(isPhoneValue)`

## 微信公众号

[微信官方js-sdk地址](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)
