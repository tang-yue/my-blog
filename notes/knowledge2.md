### 关于react子组件向父组件，传值
关于我模糊的记忆，只知道是用函数进行传值。
1、首先，父组件和子组件共用一个函数。
2、在子组件里的某个事件，会调用这个函数。同时，将参数给传递到父组件。
3、父组件就可以直接用这个函数，以及有了参数，进行相对应的操作。
4、最重要的，执行了子组件里的该函数，就是相当于执行了父组件里的该函数。

### react 的另一种没有写过的写法。

```
  export default class SideMenu extends PureComponent {
    constructor(props) {
      super(props);
      this.flatMenuKeys = getFlatMenuKeys(props.menuData);
      // 那么 this.flatMenuKeys 就可以直接在下面使用
    }
  }
```

UNSAFE_componentWillReceiveProps(nextProps) {
  // to do something
}  这个地方，表示什么意思呢

就是当props 发生改变的时候，去做些什么。

/// 
```
 ajax 原生请求写法
function getVersion() {
    var httpRequest;
    httpRequest = new XMLHttpRequest();

    if(!httpRequest) {
      alert('Giving up : Cannot create an XMLHttp instance');
      return false;
    }

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'http://test.pipacoding.com:8000/public/version.txt');
    httpRequest.send();

   function alertContents() {
     if(httpRequest.readyState === XMLHttpRequest.DONE) {
       if(httpRequest.status === 200) {
         const version = httpRequest.responseText;
         const oldVersion = Cookie.get('version') || 'version0';
         console.log('oldVersion', oldVersion);
         console.log('version', version);
         if(oldVersion !== version) {
             window.location.reload(true);
             Cookie.set('version', version);
         }
       } else {
         alert('There was a problem with the request.');
       }
     }
   }
}
```

3月6日
我今天遇到了一个很奇怪的问题，
```
if(oldVersion !== version) {
  window.location.reload(true);
  Cookie.set('version', version);
}

// 这个里面的Cookie.set('version', version); 这个执行了，
// 但是window.location.reload(true) 却没有执行。我觉得这件事很奇怪。因为是需要当前页面。不是在当前页面的，就不会执行了。
```
如何在函数内部，调用该函数。

如何判断一个数，是不是小数。
用正则表达式进行判断。
var reg = /^[0-9]{1}\.\d+$/

如何判断字符串里含有8位数字呢，正则。

找到url里的key-value 值
```
var theRequest = {};
const search = location.search;
if(search.indexOf("?") !== -1)
```

代码执行顺序， regular code, then promise handing, then everything else, like events etc


11月21日 更新
```
funciton select() {
let startMonth = new Date(Math.floor(date)).getMonth() + 1;
      let startDay = new Date(Math.floor(date)).getDate();
      let endYear = new Date(Math.floor(date)).getFullYear();
      let endMonth = startMonth + 1;
      let endStr = `${endYear}-${endMonth}-${startDay}`;
      if(startMonth + 1 > 12) {
        endYear = endYear + 1;
        endMonth = 1;
      }

      if(endMonth <= 9 && startDay <= 9) {
        endStr = `${endYear}-0${endMonth}-0${startDay}`;
        // return;
      } else if(endMonth <= 9) {
        endStr = `${endYear}-0${endMonth}-${startDay}`;
      } else if(startDay <= 9) {
        endStr = `${endYear}-${endMonth}-0${startDay}`;
      }

      while(!moment(endStr, dateFormat)['_isValid']) {
        startDay = startDay -1;
        if(startDay <= 9) {
          endStr = `${endYear}-${endMonth}-0${startDay}`;
        } else {
          endStr = `${endYear}-${endMonth}-${startDay}`;
        }
      }
}
```
如上代码，选择当前时间，则下一个控件变成 当前时间的下一个月的同一天


11月22日 更新

我点击创建完成按钮
去更改了渲染dom里的数组，我没有执行this.setState({})操作，为什么就会直接改掉了值。


工作总结1

#### npm 包 moment 的用法总结

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

moment().slice(0,19).replace(/T/g, " ") // 2019-12-23 17:42:19

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


```js
sliceStr(str) {
    // 三个特殊字符英文  ===== 一个中文
    // 两个数字  ======== 一个中文
    let strArr = str.split('')
    let len = 0;
    let count = 0;
      
    for(let i = 0; i < strArr.length; i++) {
      if(/.*[\u4e00-\u9fa5]+.*$/.test(strArr[i])) {
        // 含有中文
        len = len + 1
        count = count + 1
      } else if(/[0-9]/.test(strArr[i])) {
        // 含有数字
        len = len + 2
        count = count + 1
      } else {
        count = count + 1
        len = len + 3
      }
      if(count === 10) {
        return len
      }
    }
  }
```
