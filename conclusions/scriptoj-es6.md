[地址](http://scriptoj.mangojuice.top/problemsGroups)  ---> ES6 新增特性练习题

### 1. #94 按下标插入

思路：首先将sections数组，按照index从小到大排序。注意点，如果插入过一次，第二次插入是按照原位置进行插入，即现在的原位置+1，的位置进行插入。

实现：

```
const injectSections = (items, sections) => {
  sections.sort((a, b) => a.index - b.index);
    for(let i = 0; i < sections.length; i++) {
      items.splice(sections[i].index+i, 0, sections[i].content)
    }
  return items;
}
```

### 2. #91 数组拍平（二）

[yield用法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)

思路：首先变为一维数组，之后参考yield用法就可以了

实现：

```
function *flatten2 (arr) {
  var result = func(arr);
  for(let i = 0; i < result.length; i++) {
    yield result[i];
  }
}

function func(arr) {
  var res = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
        res = res.concat(func(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
```

### 3. #90 判断两个Set是否相同

思路：两个set的内容完全一致，应该满足什么样的条件？长度一样，内容都彼此包含，由于new Set() 方法出来的，
不会有重复的值，因此不需要去重操作。

note： new set() 创造出来的，没有filter方法。 遍历的话，用for of； 

实现：
```
const isSameSet = (s1, s2) => {
  if(s1.size !== s2.size) return false;
  for(var ele of s1) {
    if(!s2.has(ele)) {
      return false;  
    }
  }
  return true;
}
```

### 4. #89 数组去重

note： Array.from(new Set(arr))；说明Array.from()
可以将new Set() 格式的转化成数组。

实现：
```
const unique = (arr) => {
  return Array.from(new Set(arr));
}
```

### 5. #87 判断美元格式

当你觉得是一个麻烦的时候，那它就是一个麻烦
第一条： 要以$开头
思路：

我的实现：
```
const isUSDFormat = (str) => {
  if(str[0] !== '$') return false;
  let arr = str.slice(1).replace(/\,/g, '').split('.');
  if(arr.length > 2) return false;
  let left = arr[0];
  let right = arr[1];
  if(!/^[0-9,]+$/g.test(left)) return false;
  if(right&&!/^[0-9]+$/g.test(right)) return false;
  // 去除整数部分，开头为0的
  if(!left) return false;
  if(left.length !== 1 && left[0] === '0') return false;
    let leftArr = left.split('');
    for(let i = leftArr.length-3; i > 0; i=i-3) {
      leftArr.splice(i,0,',');
    }
    if(leftArr.join('') === str.slice(1).split('.')[0]) {
        //  这是有小数的
        if(right) {
          if(right.length === 2 && right.length !== '00') {
            return true;
          } else {
            return false;
          }
        } else {
          if(str.slice(-1) === '.') {
            return false;
          }
          return true;
        }
    } else {
        return false;
    }
}

// 以上虽然有点麻烦，但是通过了
```

别人的正则表达式实现：
```
const isUSDFormat = (str) => {
  return /^(\$([1-9](\d{1,2})?(,[0-9]{3})*)|\$0)(?:\.\d{2})?$/.test(str);
}
```

### 6. #86 字体高亮函数

思路：提取出变量然后进行拼接
我的实现： 错误的
```
const highlight = (str) => {
  //  我觉得是要匹配出来吧
  let new_str1 = str.replace(/\$/g, '');
  let new_str2 = new_str1.replace(/\{/g, '<span class="highlight">');
  let new_str3 = new_str2.replace(/\}/g, '</span>')
  return '<p>' + new_str3 + '</p>'
}
```
遇到的问题：拼接的时候，关于变量部分，用的应该是{},还是${}

note： 这题考的是解析模版字符串
函数解析模版字符串的相关知识点。要找的应该是如何遍历模版字符串。
[参考阮一峰标签模版](http://es6.ruanyifeng.com/#docs/string)

实现：
```
.red {
  color: red;
}
```

```
const highlight = (arr, ...args) => {
  let res = '';
  for(let i = 0; i < args.length; i++) {
    res += arr[i] + `<span class="red">${args[i]}</span>`
  }
  res += arr[arr.length -1]
  return res;
}
```

### 7. #84 自动绑定实例方法
别人的写法
```
const autoBind = (fn) => new Proxy(fn, {
  construct (target, args) {
    return new Proxy(new fn(...args), {
      get: (target, key) => {
        return typeof target[key] === 'function' ? target[key].bind(target) : target[key]
      }
    })
  }
})
```
[理解new proxy](https://javascript.info/proxy)

### 8. #83 filter map
不会
别人的写法
```
Map.prototype.filterKeys = function(fn) {
  return new Map([...this].filter(([k, v]) => fn(k)));
}


Map.prototype.filterValues = function(fn) {
  return new Map([...this].filter(([k, v]) => fn(v)));
}
```
这么简单都不会

### 9. #79 灵魂交换
别人的写法
```
const exchange = (a, b) => {
  let aProto = Object.getPrototypeOf(a);
  let bProto = Object.getPrototypeOf(b);
  Object.setPrototypeOf(a, bProto);
  Object.setPrototypeOf(b, aProto);
}
```
传入的是两个类
[Object.getPrototypeOf(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)

### 10. #76 属性闪烁
别人的写法
```
const flikerProps = (obj) => {
  const a = Object.getOwnPropertyNames(obj)
  const b = Object.keys(obj)
  for (let i = 0; i < a.length; i++) {
    Object.defineProperty(obj, a[i], {enumerable: b.indexOf(a[i]) === -1})
  }
}
```
需要学习一下Object的所有方法属性了。

### 11. #数组的空位填充
思路：我们要思考的是，究竟哪一种判断能够判断出空位。
脑海里突然闪现map方法好像可以
我的答案：（正确）
```
const fillEmpty = (arr) => {
    let bArr = [];
    arr.map((item, index) => {
      bArr.push(index);
    })
    for(let i = 0; i < arr.length; i++) {
      if(bArr.indexOf(i) === -1) {
        arr[i] = 'Hello'
      }
    }
  }

```
### 12. 使用generator 模拟async/await

思路：照着所给的列子，以及描述

我的答案： (错误)
```
const wrapAsync = (generatorFn) => {
  return (name) => {
    return new Promise((resolve, reject) => {
      return resolve(generatorFn(name))
    })
  }
}
```
写了好久，我也还是没有写出来呀

别人的答案：
```
const wrapAsync = (generatorFn) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      const g = generatorFn(...args);
      function go(result) {
        if (result.done) {
          resolve(result.value);
          return;
        }
        return result.value.then(val => {
          return go(g.next(val))
        })
      }
      go(g.next())
    })
  }
}
```
是不是下次看上面的答案我就明白了呢？？
8月23日   再看的时候，有一点的明白。
学习[generators](https://javascript.info/generators)

### 13. #71 不重复数字

[Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

思路：首先找到实现一个，然后遍历push 就可以了
实现：
```
const uniqueNums = (n) => {
  var res = [];
  while(res.length < n) {
    let randomNum = Math.floor(Math.random() *(32-2+1) + 2);
    if(res.indexOf(randomNum) === -1) {
      res.push(randomNum)
    };
  }
  return res;
}
```

### 14. #70 Math.clz32 的Polyfill

思路：首先如何得到一个整数的32位的二进制形式

note：一个整数如何转化成二进制形式。`num.toString(2)`

问题：负数的二进制形式如何判断有多少位前置的0

别人的实现：
```
const clz32 = (num) => {
  let v = num >>> 0 
  // 会将num 转化成32的整数
  // >>> 0 没有位被移位
  // 结果将被转换成数字
  return v ? 32 - v.toString(2).length : 32
}
```

### 15. #69 简单的模版引擎

思路： 不会不会

8月27日 下午5:18 分，我仍旧觉得应该先放着。
别人的答案：
```

```

### 16. #68 字符串居中补全

note: [String.padStart(), String.padEnd()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

用法`str.padStart(targetLength[, padString])`

实现：
```
const centerPad = (str, len, pad) => {
  let length = str.length;
  return str.padStart(Math.floor((len-length)/2) + length, pad).padEnd(len, pad);
}
```

### 17. #64 翻箱倒柜

思路：不会

实现：
```
class Box {
  constructor(arr) {
    this[Symbol.iterator] = function* () {
      let len = arr.length, i = 0;
      while(i < len) {
        yield arr[i++]
      }
    }
  }
}
```
参考如下代码：

[截取文档中的代码](https://javascript.info/async-iterators-generators)
```
let range = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
}
alert([...range])
```

### 18. #63 Symbol转换

note： 了解什么是Symbol的对象，如何遍历symbol对象。
[Object.getOwnPropertySymbols(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)


实现一：
```
const convertSymbolToNormalStr = obj => 
  Object.getOwnPropertySymbols(obj).reduce((r, symbol) => ((r[symbol.toString().slice(7,-1)] = obj[symbol]), r), {})
```

实现二：
```
const convertSymbolToNormalStr = (obj) => {
    (typeof obj[symbol] === 'object') && convertSymbolToNormalStr(obj[symbol])
    let key = symbol.toString().match(/\((.*)\)/)[1];
    obj[key] = obj[symbol];
    delete obj[symbol];
  })
  return obj;
```

### 19. #61 监听数组变化

不会

note: 
[Object.defineProperty()]()

别人的实现：
```
class ObserverableArray extends Array {
  constructor() {
    super()
    this.observerMethods = [
      'push',
      'pop',
      'shift',
      'unshift',
      'splice',
      'sort',
      'reverse'
    ]
    
    this.observerMethods.forEach(method => {
      const _method = this[method]
      
      Object.defineProperty(this, method, {
        get() {
          console.log(method)
          return _method
        }
        })
    })
  }
}
```

### 20. #57 shallowEqual

思路：必须要保证这两个参数的值相同，或者这两个参数都是对象并且对象的第一层数据相同。

所以我的想法是如何是基本类型，只要判断是否相等就可以了，如果不是基本类型，那么要遍历第一层，
看对应的值是否相等，如果相等则返回true，如果不是则返回false。
但是我发现我这样的思路是不正确的。

遇到的问题：为什么传入参数-0 和 +0 返回的是false呢

[Object.is()是做什么的](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

Object.is() 并不会特殊处理NaN,-0,+0

我的错误答案：
```
const shallowEqual = (x, y) => {
  if(typeof x !== typeof y) return false;
  if(typeof x === 'object') {
    for(var a in x) {
    if(typeof x[a] !== 'object') {
      if(x[a].toString() !== y[a].toString()) return false;
    } else {
      return false;
    }
  }
  return true;
  } else {
    if(x.toString() === y.toString()) return true;
  }
}
```

别人的实现：
```
const shallowEqual = (x, y) => {
  if (typeof x !== typeof y) return false
  if (typeof x !== 'object') {
    return Object.is(x, y)
  } else {
    if (x === null || y === null) return x === y
    let keys1 = Object.keys(x), keys2 = Object.keys(y)
    if (keys1.length !== keys2.length) return false
    return keys1.every(d => Object.is(x[d], y[d]))
  }
}
```

### 21. #56 到底一不一样

思路：其实这个就是要求实现Object.is()吧。
遇到的问题：如果是对象里嵌套了之后又嵌套了呢

实现：
```
const is = (x, y) => {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y
  } else {
    return x !== x && y !== y
  }
}
```

### 22. #53 你会被谷歌拒绝吗？

思路：就是2的几次方的数，翻转一下，然后再拼接上去。
1 + 2 + 4 + 8
0 1   2的一次方减一
1 3   2的二次方减一
3 7   2的三次方减一
7 15  2的四次方减一

实现：
```
const invertTree = (tree) => {
  var i = 0, count = 1,previous = 0;
  while(count <= tree.length) {
    i++;
    count = Math.pow(2, i) - 1;
    previous = Math.pow(2, i-1) - 1;
    tree.splice(previous, previous+1, ...tree.slice(previous,count).reverse());
  }
  return tree;
}
```

### 23. #51 Don't Touch Me

思路： 完全不会

别人的实现：
```
const tomy = new Proxy({}, {
  set: (target, key, value, receiver) => {
    console.log(`Don't Touch Me.`);
  },
  deleteProperty: (target, propKey) => {
    console.log(`Don't Touch Me.`);
  }
});
```

### 24. #50 实现js数据类型的判断


思路：
六种基本数据类型(number, null, undefined, string, boolean, symbol)
我应该如何判断。
我觉得应该是要，针对一条一条的，通通列出来，有必要。因为string 包括了'a' 和new String(） 出来的
number   我所想到的方法是用typeof
null    我觉得应该是单独写死 如果参数值等于null， 那么返回的也是null
undefined 同null 是一样的
string 有两种，用或者的关系就好， typeof 参数值 和  参数值 instanceof String
boolean 只有一种用typeof 就好
下面三个应该有个大前提  首先是对象
date    只要用instanceof 就好
Array   用instanceof 
其余的应该就是object了

我的实现： 不正确
```
const type = (obj) => {
  if(typeof obj === 'number') {
    return 'number';
  } else if(typeof obj === 'string' || obj instanceof String) {
    return 'string';
  } else if(obj === null) {
    return 'null';
  } else if(obj === undefined) {
    return 'undefined';
  } else if(typeof obj === 'boolean') {
    return 'boolean';
  } else if(typeof obj === 'symbol') {
    return 'symbol';
  } else if(typeof obj === 'object') {
    if(obj instanceof Date) {
      return 'date';
    } else if(obj instanceof Array) {
      return 'array';
    } else {
      return 'object';
    }
  }
}
```

新发现，原来有如此多种

别人的实现一：
```
const type = (obj) => {
  let dataType = {
    '[object Null]': 'null',
    '[object Undefined]': 'undefined',
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regexp',
    '[object Object]': 'object',
    '[object Symbol]': 'symbol',
    '[object Map]': 'map',
    '[object Set]': 'set',
    '[object Int8Array]': 'int8array',
    '[object Error]': 'error'
  }

  return dataType[Object.prototype.toString.call(obj)]
}

// 最后一行的代码 Object.prototype.toString.call(obj); 难道真的只有死记硬背？
// 返回一个对象的字符串表示
```

变更别人的写法：
```
const type = (obj) => {
  let str = Object.prototype.toString.call(obj).split(' ')[1];

  return str.slice(0,str.length-1).toLowerCase();
}
```

### 25. #49 时间停止

思路： 考虑到await的使用方式，知道pause是返回一个new Promise()

[参考文档](https://javascript.info/async-await)
实现：
```
const pause = async (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time);
  })
}
```

### 26. #44 同字母异序

思路： 如果两个一模一样，那么肯定同序，排除在外。

我的实现：
```
const isAnagram = (str1, str2) => {
  if(str1 === str2) return true;
  let arr1 = str1.split('').sort();
  let arr2 = str2.split('').sort();
  return arr1.join('') === arr2.join('');
}
```

### 27. #39 不用循环生成数组

思路：不用循环的方式，生成一个数组长度为n的数组，并且数组里值为该值为的下标。

实现一：
```
const arrWithoutLoop = (n) => {
  return Array.from(new Array(n).keys());
}
```

实现二：
```
const arrWithoutLoop = (n) => {
  return [...Array(n).keys()]
}
```

实现三：
```
const arrWithoutLoop = (n) => {
 return [...Array.from({length:n}).keys()]
}
```

### 28. #33 数组拍平

思路：写过很多遍了

实现：
```
const flatten = (arr) => {
  var res = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      res = [...res,...flatten(arr[i])];
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
```

### 29. #32 后端数据处理

思路： 简单

实现：
```
const parseData = (data) => {
    return data.rows.reduce((res, cur) => {
      var obj = {};
      for(let i = 0; i < data.metaData.length; i++) {
        obj[data.metaData[i].name] = cur[i]
      }
      res.push(obj);
      return res;
    }, [])
  }
```

别人的答案：
```
const parseData = ({rows, metaData}) => {
  return rows.map(row => {
    return row.reduce((obj, value, index) => {
      return Object.assign(obj, {
        [metaData[index].name]: value
      })
    }, {})
  })
}
```

### 30. #27 compose函数

我的实现： 错误的， 错误原因：Maximum call stack size exceeded
```
const compose = (...args) => {
  var res = args[0];
  for(let i = 1; i < args.length; i++) {
    res = (v) => args[i](res(v))
  }
  return res;
}
```

别人的实现一：
```
const compose = (...args) => {
  return x => {
    let re = args.pop()(x)
    return args.length ? compose(...args)(re) : re
  }
}
// 为什么别人实现起来就是这么简单呢
```

别人的实现二：
[array.reduceRight()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)
数组里面的值，从右向左执行。
```
const compose = (...fns) => {
  return x => fns.reduceRight((v, f) => f(v), x);
}
```























