两年半后台和移动端工作总结

#### 1、npm 包 moment 的用法总结

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

### 2、判断微信端， 手机版本号，pc端

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













