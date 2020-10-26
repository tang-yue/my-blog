准确的说是 unmemorable-js2 里的问题

1. 正则只匹配数字和字母。
`'ab-4-hu'.match(/\w/g)`
`'ab-4-hu'.match(/\w+/g)`

2. 用正则表达式，去除字符串的首尾。
用两种方法去除。
一个是将首尾的所有空字符串替换为''.
`'  bac d   '.replace(/^\s*|\s*$/g,  '')`

二是只匹配不是首尾字符串的部分.
`' abcd e  '.match(/\S.*\S/g);`

`\s` 代表空格
`\S` 代表不是空格

3. 解释arr的几个属性
说出如何用，以及返回什么。
push  在数组的末尾添加数，1个或者多个，返回添加后的数组的长度。
pop   从数组的末尾删除数，只能删除一个，返回删除的值
shift  从数组的头部删除数，只能删除一个，返回删除的值
unshift 从数组的头部，添加数，1个或者多个，返回添加后的数组的长度
slice
splice   arr.splice(position, counts, eles of add)  返回删除的元素（包括position上的数）组成的数组

arr.splice(0,1);  // 删除的是0位置上的数， 返回的是0位置上的数，组成的数组
arr.splice(0);    // 删除掉了arr里的所有数

4.  解释下split是数组可以的用的，还是字符串可以的用的，还是两者都可以。
不可以对数组，只可以对字符串。

将字符串转化为数组。也就是根据，你想如何转化为数组。可以写正则表达式。

'abcd'.split() === 'abcd'.split(',')
与之相反的是join()

5. 写出数字排序和字母排序函数

数字排序
arr.sort((a, b) => a - b);

字母排序

`arr.sort((a,b) => a.localeCompare(b));`

或者直接就是sort.

中文首字母排序

`arr.sort((a,b) => a.localeCompare(b, 'zh'));`

6. 判断一个字母是否是大写

只要判断它被转化成大写后是否等于本身

7. 将一个字符串的第一个值转大写，其余是小写，最优雅的写法是什么样子？

第一种写法
str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

第二种写法
难道要用split的用法？

str[0].toUpperCase() + str.split('').splice(1).join('').toLowerCase()


8.
（1）将ASCII值，转化成字符
（2）取某个位置上数的ASCII值

String.fromCharCode(ASCII值)

str.charAt(某个位置).charCodeAt();

9.  find 的用法

```
 var arr = [
  {
    name: 'uu',
    v: 'u'
  },
  {
    name: "yy",
    v: "y"
  },
  {
    name: "zz",
    v: "z"
  }
 ]

var res = arr.find(function(obj) {
  return obj.name === "yy"
 })

console.log(res, 'res');
```

10. 用this.setState(),将当前值取反

```
this.setState((state) => {
  show: !state.show
  })
```

11. 用es6方法进行去重，并且不会改变原数组

Array.from(new Set(arr));

12. 遍历字符串的方法(不止一个，并说出区别)
遍历数组的方法(不止一个)
遍历对象的方法


我已经做了n遍了，为什么我还是分不清。

for i in 数组 对象 字符串 s[i] 才是指的单个值吧 

for s of 数组 字符串 这个指字符串的时候，这个s就是单个值吧

forEach   数组

13. 判断某个属性是否在对象中

if(某个属性 in obj)  

14. 说出下面几个的区别

Math.ceil()  针对小数部分向上取整
Math.floor() 印象中是什么都不变，但是对于小数，会完全的忽略掉小数，针对小数部分向下取整
Math.round() 四舍五入
Math.abs() 取绝对值

15. 将字符串，快速变成数组的三种简单方法

第一种 str.split('');

第二种 Array.from(str);

第三种 想不起来 看答案后得知为 [].slice.call(str)


16. 连续匹配三个数字和字母

`678h-uio+`.match(/\w{3}/g);

17. document.getElementsByTagName()  方法的返回值是什么。 如何将其处理成数组（两种方法）

只会一种方法,另一种不会写。

18. 如何将多维数组，转化为一维数组。两种方法

第一种用 array.from(), 代码如下
```
var arr = [[1,3], [5,6], [8,9]];

  var res = [];

  for(let i = 0; i < arr.length; i++) {
    res = res.concat(arr[i]);
  }

  console.log(res, 'res');   //  这里就能打印出res 为 [1,3,5,6,8,9]

```

19. 如何判断数字有几位数 (假设是整数)

var num = 12345

num.toString();


20. 写出所有判断数组的方法（4种）

isArray 的用法是什么样子。

第一种Array.isArray();

instanceof 的用法是什么样子。

第二种 arr instanceof Array

第三种 想不起来

第四种 想不起来

看过答案后，知道的第三种方法

function isArray(obj) {
  return obj && typeof obj === 'object' && 'Array' === obj.constructor
}

看过答案后，知道的第四种方法

Object.prototype.toString.call(arr)   这个不太好记

21. substring 和 subStr 的区别是什么？

```
var str = "Mozilla";

str.substr(1, 2); 位置， 长度  // 'oz'

str.substr(-1, 1); // 'a'

str.substr(-20, 2);  // 'Mo'
```

```
str.substring(1, 3) // 开始位置， 末尾位置 'oz'  包括开始位置，而不包括末尾位置。

上面和 str.substring(3, 1)  返回的结果是一样的

str.substring(1)  // 'ozilla' 
```

如何给字符串快速去重

es6 去重法了。

Array.from(new Set(str)).join();

22. 如何二进制转十进制，，十进制转二进制


