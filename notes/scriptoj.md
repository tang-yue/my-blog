
http://scriptoj.mangojuice.top/
因为觉得leetcode上的题目实在是太难了.先来这边刷些中等的题目。记录笔记如下



### 18 数字添加逗号
我的答案：
```
function commafy (num) {
  let arr = [];
  if(num >= 0) {
    arr = num.toString().split('.');
  } else {
    arr = num.toString().slice(1).split('.');
  }
  let dot = arr[1] ? '.'+ arr[1] : '';
  let arrNum = arr[0].split('');
  for(let i = arrNum.length-3; i > 0; i=i-3) {
    arrNum.splice(i, 0, ',');  
  }
  return num >= 0 ? arrNum.join("") + dot:
  '-'+ arrNum.join("") + dot
}
```
终于做出来了，只是耗时太久了

别人的答案：
```
function commafy(num) {
	let arr = num.toString().split('.');
	return Array.from(arr[0]).reverse().map((n, i) => {
		return (n === '-' || i === 0 || i%3 !==0) ? n : n + ','
	}).reverse().join('').concat(arr[i]?'.'+arr[1]:'')
}
```

### 19 获取文件的扩展名
我的答案：
```
const extname = (filename) => {
	let arr = filename.split('.');
	let len = arr.length;
	return arr[len -2] ? '.'+arr[len-1]:'';
}
```
别的答案，都不怎么样

### 20 删除字符串的空白字符
我的答案：
```
const TRIM_REGX = /^\s*|\s*$/g;
```
我的答案应该是很好了吧
### 21 16 进制颜色值转RGB值
我的答案：
```
 let m = hex && hex.slice(1);
  if(/^[a-fA-F0-9]{3}$/g.test(m) || /^[a-fA-F0-9]{6}$/g.test(m)) {
    let n = m.length === 3 ? m.charAt(0).repeat(2) + m.charAt(1).repeat(2) + m.charAt(2).repeat(2) : m;
    let p1 = parseInt(n.charAt(0) + n.charAt(1), 16);
    let p2 = parseInt(n.charAt(2) + n.charAt(3), 16);
    let p3 = parseInt(n.charAt(4) + n.charAt(5), 16);
    return `rgb(${p1}, ${p2}, ${p3})`;
  } else {
    return null;
  }
}
```
遇到的问题
1. 如何匹配固定个数的数字或字母
2. 颜色值字母仅仅是可能到 f，F 的
3. 防止 hex 输入为空

别人的答案：
```
const hexToRGB = (hex) => /* TODO */{
  let o = document.createElement('div');
  o.style.color = hex;
  return o.style.color?o.style.color:null;
}
```
用这种方法，传进去16进制，返回就是rgb格式

## 22 获取子元素属性
其实这道题，我都没有看懂。
并没有放在body里面，它仅仅是作为一个字符串赋值给一个变量
我还是不知道应该怎么做。都看的发困了


别人的答案：
```
const getChildAttributes = (dom, attr) => Array.from(dom.children).map((item) => item.getAttribute(attr))
```
其实完整的答案应该是以下述的
```
// script 标签部分
window.onload = function() {
      let oul = document.getElementById('list');
      const getChildAttributes = (dom, attr) => Array.from(dom.children).map((item) => item.getAttribute(attr))
      console.log(getChildAttributes(oul, 'data-name'));
    }
// body 部分
<ul id='list'>
    <li data-name="Jerry" class="item"><span>1</span></li>
    <li data-name="Lucy" class="item"><span>2</span></li>
    <li data-name="Tomy"><span>3</span></li>
</ul>
```
### 23 肥猫列表
我没有看懂题意，但是觉得是不难的
这道题略过吧，我允许自己不会，允许自己不会react的，但是不允许自己不会jquery

我已经很久不用jQuery了

别人的答案
```
function renderFatCats (cats) { 
  var arr = [];
  arr = cats.sort(function(x, y){
    return y.weight - x.weight
  });
  console.log(arr);
  $('#cats-list').html('');
  
  for(var i=0; i<arr.length; i++){
    $('#cats-list').append(`
      <div class='cat'>
        <span class='cat-name'>${arr[i].name}</span>
        <span class='cat-weight'>${arr[i].weight}</span>
      </div>
    `)    
  }
} 
```
关于自己不动脑的感觉究竟是有多糟糕。

### 24 +1s程序 

这道题巩固一下吧，比较好的。
亲爱的看答案吧，自己琢磨是琢磨不出来的。
别人的答案：
```
const plusFor = (name) => {
  let count = 0;
  return () => {
    count++;
    return `为${name}+${count}s`;
  }
}
```
请问上面的答案很难吗？ 也不是很难吧

### 25 李雷向韩梅梅求婚

看到 promise 我就会觉得头疼呀

别人的答案：
```
const proposeToMissHan = (isOK) => {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
     if(isOK) {
       resolve("ok");
     } else {
       reject("no");
     }
   }, 20)})
}
```
new Promise 包裹一个函数，函数里面又写了一个定时器函数

### 26 分页判断
我的答案：
```
const getPages = (total, itemsPerPage) => {
  let numPage = itemsPerPage === 0 ? 0 : Math.ceil(total/itemsPerPage);
  return numPage;
}
```
这道题还是比较简单的

### 27 compose 函数

这道题，我也是不会写呀。
别人的答案：
```
const compose = (...rest) => {
  return (para) => {
    for(let i = rest.length -1; i > 0; i--) {
      para = rest[i](para);
    }
    return para;
  }
}
```
默写一下吧，你不是已经理解了吗

别人的另一个答案：
```
const compose = (...fns) => {
  return x => fns.reduceRight((f, v) => f(v), x);
}
```

### 28 韩梅梅拒绝了李雷

只有这三个属性 tall wealthy handsome

怎么给同时拥有这三个属性添加css样式

答案：
```
div.tall.wealthy.handsome {
  border: 1px solid red;
}
```

### 29 转换驼峰命名

只需要把字符串中，下划线部分给替换掉就可以了。

```
let variable = 'this_is_name';
let re = /^_*|_*$/g;
let newVar = variable.replace(re, '%');
```
遇到一个很奇怪的问题，为什么newArr 会变成 %this_is_name% 呢。
我还是第一次这样遇到。
现在这个遇到的最大问题是，如何处理开头和末尾的下划线。

别人的答案：
```
const toCamelCaseVar = (variable) => {
  return variable.replace(/_+[^_]/g, (...arg) => {
    // 这里我需要解释一下
    // 值得注意的是，不同的正则表达式，后面的...args 是不一样的
    // arg[0] 代表被正则匹配的元素
    // arg[1] 代表被匹配的元素的最后一个元素在字符串中的位置
    if (arg[1]) {  // 正好可以忽略开头
      let rt = arg[0];
      return rt[rt.length - 1].toUpperCase();
    } else 
      return arg[0];
  });
}
```
上述这个人的答案，真的是挺不错的。


### 30 curry 函数

这道题我没有思路。
经典加法的列子，我自己在浏览器里面运行了下，并不是想要的结果。
别人的答案：
```
var curry = function curry(fn) {
  // 获取curry的参数，如果第二个参数不存在，则创建一个空数组
  var arr = arguments[1]?arguments[1]:[];

  return function f1() {
    // 获取当前函数的参数
    var args = [].slice.call(arguments);
    return function f2(a) {
      return a.length === fn.length ? fn.apply(null, a) : curry(fn, a);
    }([].concat(arr, args));
  };
};
```

这道题我想了很久，还是没有想明白。
我不明白，为什么，内层的arguments和外层的arguments,有什么不同，最后还要再合起来。

太浪费时间了，看下一道题吧

# 31 DOM 标签统计
完全我是不知道有什么思路。
```
const getPageTags = () =>  {
  let  dom = document.getElementsByTagName('*');
  let arr = new Set([].slice.call(dom).map((item) => item.tagName));
  return Array.from(arr);
}
```
### 32 后端数据处理
```
const parseData = (data) => {
  let rows = data.rows;
  let metaData = data.metaData;
  let res = [];
  for(let i = 0; i < rows.length; i++) {
    let item = {};
    for(let j = 0; j < metaData.length; j++) {
      item[metaData[j].name] = rows[i][j];  
    }
    res.push(item);
  }
  return res;
}
```
### 33数组拍平
11月28日
再一次的回顾这道题，我还是不知道应该怎么做。
这道题我居然一点都不知道应该怎么写。
别人的答案：
```
const flatten = (arr) => {
  let result = [];
  arr.forEach((item) => {
    if(Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  })
  return result;
}
```
### 34 操作 Cookie
单例 是什么意思，
一看到cookie,就觉得头晕了，心里就觉得自己不会。
这个真的太难了，这个待会再看吧
cookie 部分需要自己复习一下，这个还是看书吧。

### 36 实现一个EventEmitter
function 形式的函数如何修改成class形式
```
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return '(' + this.x + ',' + this.y + ')';
};

var p = new Point(1,2); 
```

```
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + "," + this.y + ')';
  }
}
```
别人的答案：
```
class EventEmitter {
  constructor() {
    this.messageBox = {};
  }
  on(type, handle) {
    if(!this.messageBox.hasOwnProperty(type)) {
      this.messageBox[type] = [];
      handle && this.messageBox[type].push(handle);
    } else {
      handle && this.messageBox[type].push(handle);
    }
  }
  emit(type, ...args) {
    if(this.messageBox.hasOwnProperty(type)) {
      const handleQueen = this.messageBox[type];
      handleQueen.forEach((handle, index, arr) => {
        handle(...args);
      })
    }
  }
  off(type, handle) {
    if(this.messageBox.hasOwnProperty(type)) {
      const handleQueen = this.messageBox[type];
      if(handleQueen.includes(handle)) {
        const atIndex = handleQueen.indexOf(handle);
        handleQueen.splice(atIndex, 1);
      }
    }
  }
}
```

重新回归  leetcode 

2月14日
重新刷scriptOJ上的面试题。

简单算法部分

### 95 Virtual DOM (二)
const ul = h('ul', {id: 'list', style: 'color: red'}, [
  h('li', {class: 'item'}, ['Item 1']),
  h('li', {class: 'item'}, ['Item 2']),
  h('li', {class: 'item'}, ['Item 3'])
])

ES6 新增特性练习题

### 91 数组拍平
you can't use yield inside of the inner function.

这就是为什么，
```
for(...) {
  yield v;
}
``` 
是可以的。
而
forEach 和 map 是不可以的

### 90 判断两个Set是否相同
如何从new set的对象里取出值。
const set1 = new Set([1,2,3]);
用set1去取值。
遍历，如下遍历
for(let item of set1) {
  
}
set1的长度怎么取








