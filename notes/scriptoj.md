
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

### 87 判断美元符号格式
用的是正则。正则没写出来。常规的逻辑也没有写出来。

正则答案：
`const isUSDFormat = (str) => (/^\$([1-9]\d{0,2}(,\d{3})*|0)(\.\d{2})?$/).test(str);`

### 86 字体高亮函数

请你完成highlight 函数，可以把模版字符串中的插入内容替换掉，并且
插入文档以后显示红色。

模版字符串

不会写，不会写

[模版字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)

myTag`that ${ person } is a ${ age }`;
神奇的是，这里居然连个括号都不用加。加括号反倒是错误的了。

### 84 自动绑定实列方法

不会写，不会写啊，啊啊啊

new proxy 是什么东西啊。

在Javascript的类当中，类实列如果不通过实列进行调用，方法中的this
就不会指向实列。
```
class Person {
  constructor (name) {
    this.name = name
  }
  sayHi () {
    console.log(`I am ${this.name}.`)
  }
}

const jerry = new Person('Jerry')
jerry.sayHi()   // ==> 不会报错，this 指向了jerry
const sayHi = jerry.sayHi
sayHi()   // => 报错
```
[Reflect get的用法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get)

参考答案
```
const autoBind = (ToBindClass) => {
  return function(...args) {
    const self = new ToBindClass(...args);
    return new Proxy(self, {
      get(target, key) {
        const val = Reflect.get(target, key)
        if(typeof val === 'function') return val.bind(target)
        else return val
      }
    })
  }
}
```

# 83 filter map

不会写，不会写

别人的参考答案。
```
Map.prototype.filterKeys = function(fn) {
  return new Map([...this].filter(([k, v]) => fn(k)));
}


Map.prototype.filterValues = function(fn) {
  return new Map([...this].filter(([k, v]) => fn(v)));
}
```

# 79 灵魂交换
不会，不会，不会

别人的参考答案：
```
const exchange = (a, b) => {
  const aProto = Object.getPrototypeOf(a);   // Object.getPrototypeOf() method returns the prototype
  const bProto = Object.getPrototypeOf(b);
  Object.setPrototypeOf(a, bProto);      
  // Object.setPrototypeOf() method sets the prototype of a specified object to another object
  Object.setPrototypeOf(b, aProto);
}
```

# 76 属性闪烁
不会
完成一个flikeProps方法，接受一个对象作为参数。可以把该
对象的不可遍历属性变成可遍历属性；把可遍历属性变成不可遍历属性。

参考答案
```
const flikerProps = (obj) => {
  for (let [k, v] of Object.getOwnPropertyNames(obj).entries()) {
    console.log([k, v], '[k, v]');
    Object.defineProperty(obj, v, {
      enumerable: !Object.getOwnPropertyDescriptor(obj, v).enumerable
      })
  }
}
```
example：
```
const obj = {
  a: 1,
  b: 2
}

Object.getOwnPropertyNames(obj)   // ["a", "b"]

Object.getOwnPropertyNames(obj).entries() // Array Iterator {} 
// Array.prototype.entries(), The entries() method returns a new
// Array Iterator object that contains the key/value pairs for each index in the array
// 其实类似于这样 [[0, 'a'],[1, 'b']]
```

Object.defineProperty() 这个主要是做什么呢。
答： The static method Object.defineProperty() defines a new property directly on an object,
or modifies an existing property on an object, and returns the object.

example:
```
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;

// throws an error in strict mode， 没有任何的反应

console.log(object1.property1); // 42
```

Object.getOwnPropertyDescriptor() 的主要作用是什么？
答： The `Object.getOwnPropertyDescriptor()` method returns a property descriptor
for an own property(that is, one directly present on an object and not in the object's prototype chain)
of a given object.

example:
```
const object1 = {
  property1: 42
}

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1.configurable); // true

console.log(descriptor1.value);  // 42
```

for ... of ... 一般是遍历什么呢。 对象是不可以的

### 73 数组的空位填充

如何判断数组里的这个是空位，还是本身就是一个undefined呢
有哪个属性，可以检测到这样的属性呢。
不会写，
参考答案
```
const fillEmpty = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    if(!(i in arr)) {
      arr[i] = 'Hello'
    }
  }
}
```

```
  // map，forEach 都会跳过empty的位置，但是for循环不会
  const arr = [ , , undefined, null, 2, 4];
  arr.forEach((item, index) => console.log(index));
  // 2
  // 3
  // 4
  // 5
  arr.map((item, index) => console.log(index));
  // 2
  // 3
  // 4
  // 5
```

### 72 使用 generator 模拟async/await
不会呀，上帝呀

参考答案:
```
const wrapAsync = (generatorFn) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      const g = generatorFn(...args);
      function go(result) {
        if(result.done) {
          
        }
      }
      })
  }
}
```


