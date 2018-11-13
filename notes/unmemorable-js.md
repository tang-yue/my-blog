这里记录一些我写了很多遍，但仍旧记不住的js常用的代码。

1. 正则只匹配数字和字母
```
  var re = /\w/g  
  // note: 数字和字母的个数 和 var re = /\w+/g   这样的数字和字母的个数
  是不一样的。  
```
2. 去掉字符串的开头空格和末尾空格
 tirm()
 用正则表达式怎么写
总结一下： 有两种方法
```
// 第一种
var hello = ' hello world  ';
var re = /\S.*\S/; // 匹配不要两头空格的内容， 点匹配任意字符。
var result = hello.match(re);

// 第二种
var hello = ' hello world  ';
var re = /^\s*|\s*$/g;
var result = hello.replace(re, '');

```
3. 你看啊， 
*push* 推，推动， 施加压力
*pop*  有流行，突然出现的意思
`pop the question for sb`  求婚
*pop* 删除数组的最后一个元素，并返回删除的元素
*shift*  移动，轮班，变化
*shift* 删除数组的第一个元素，并返回删除的元素
*unshift* 在数组的开头增加一个或多个元素，返回数组的新长度

4. *slice* array.slice(first, second) ( first is included, but second is not include)

5. array.splice(position, count of ele,  add elements)

6. string 如何快速转为数组  str.split(",");

关于split转换string为数组，令我惊讶的地方。
```
  "hello".split(",")   // return ["hello"]
  "hello".split()     // return ["hello"]
  "hello".split("")   // return ["h","e","l","l","o"]
  "How4are8yue".split(/\d/); // return ["How","are","you"]
```

```
  ["o","l","l","e","l"].join("")   // return "ollel"
```

关于js中的 join 的用法。 以下面的代码为列
```
  ver ele = ["Fire", "Wind", "Rain"];
  ele.join();    // return "Fire,Wind,Rain"
  ele.join(","); // return "Fire,Wind,Rain"
  ele.join("");  // return "FireWindRain"
  ele.join("-"); // return "Fire-Wind-Rain"
```

数字如何转字符串。
```
    let n = 34;
    n.toString();  //  "34"
```

slice 不会改变原数组。
splice 会改变原数组。

sort 会不会改变原数组？
sort 会改变原数组的。

11. Where do I Belong

写一个简单的排序函数
```
    arr.sort(function(a,b) {
        return a - b;
    })
```
12. 关于setTimeout() 加参数

13. 关于splice 
`arr.splice(0,1)`  // 删除的是0位置上的数，不包含1位置上的数，返回的是数组
`arr.splice(0)` // 删除的是0以及0之后的所有数。并不是0位置上的数,返回的是数组

14. 关于push
`book.push(bookName)`  返回的是book数组添加进bookName之后的数组的长度

15. 关于forEach和filter
```
arr.forEach(function(ele) {
  
}) 
```

16.  关于sort排序内部的用法

参考http://imweb.io/topic/565cf7253ad940357eb99881

字母排序用如下：
`arr.sort(function(a,b) {return a>b})` 其中的原理是什么呢
数字排序用如下：
`arr.sort(function(a,b) {return a -b})`


8月26日 12:06分

今天又遇到了排序的问题。
脑袋里似乎根深蒂固的记得，sort是可以数字排序的，但是那仅仅是针对0到9。
并不是针对所有的数字。

concat 方法，括号中只能是数组吗？
经测验得知，括号内部可以是数组当然也是可以arg。

遍历字符串最好的方式是什么方式？ for of

判断一个字母是否是大写。该如何判断。
 (1) 本身是否是等于本身转换后的大写，如果等于，那么就是，否则就不是

str 删除元素和添加元素，该如何操作。 拼接
(1) str.slice(p1, p2);   // 截取p1位置到p2位置上的元素
同时 p1和p2 还可以是负数，代表从str的末尾端开始数

元音字母是哪几个? aeiou

正则`/ /`  这个里面是如何写变量的呢。
用`var re = new RegExp("^\\d+$", "gim")`
给前面的字符串加变量
```
var v = "b1";
var re = new RegExp("^\\d+" + v + "$", "gim");
```

```
  function myReplace(str, before, after) {
       // 其中before 和 after 都是 变量
      str.replace(/`${before}`/g, after);时 // 是错误的写法
      str.replace(before, after);    // 这个才是正确的写法
  }
```
将一个字符串的第一个值转大写，其余是小写，最优雅的写法是什么样子？

str.charAt(index) 这个代表取出index 位置上的数。

`after = after.charAt(0).toUpperCase() + after.slice(1)`

`charAt(position)` 直接就是返回这个位置上的那个数。
`charCodeAt(num)`  直接对应的就是这个位置上的数的ASCII码值。
`String.fromCharCode(num)` num 指代ASCII码值，将该数字转换成字符。 

另外一种 `after = after[0].toUpperCase() + after.slice(1)`

indexOf 是数组和str 都有的方法吗？
答案： 数组， str 
区别在哪里？
`arr.indexOf(searchElement[, fromIndex])`
`str.indexOf(searchValue[,  fromIndex])`

数组里面又嵌了一个数组，应该如何处理？

关于charAt和charCodeAt我自己还是有点模糊。

filter用法
以代码为列
```
  arr.filter((item) => !args.includes(item));
  return arr;   // 原数组arr并没有被改变
```
和如下进行对比
```
  return arr.filter((item) => !args.includes(item));
  // 返回的是筛选之后的数组
```

这里值得注意是 无论是string 还是 array 都有includes 的用法
但是我不太常用。

正则里面写=， 出现问题，请问应该如何写等于号。

```
  var regex = \/=\g;   // 要这样单独写，然后`regex.test`， 连起来写的话，会出问题。
```

如何用this.setState 去改变对象里的某个key下的value 值。
我好像总是遇到这样的问题。

JSON.parse(value)  这个value值为什么样子，得到的值为数组。

神奇  JSON.parse("[1,2,3]") // 返回值为[1,2,3]

```
this.setState(state => ({
  showWarning: !state.showWarning
}))
// 这段代码我也是写了好多次了，可是仍旧没有记住
```


9月11日，遇到的很奇怪的问题。
关于for循环和forEach循环得内部执行机制是什么样子呢？

9月14日
今天 我犯了一个很严重的错误。
```
  var a = ["a", "b", "c"];
  let b;
  b = a;  // 这一句，这个时候，b和a 就建立了一种关系
  此时只要改变了数组a, 那么 数组b也会被改变
  注意只要改变了b,那么 数组a也会被改变
```

9月17日  今天我把这些内容都给复习了一遍

如何交换两个值
```
t = a;
a = b;
b = t;
```

`array.from(new Set(["foo", window, "foo"])) // return ["foo", window]`


reduce 方法一定要有 return 语句吗？

遍历对象 `for(var k in obj)`
遍历数组 `for(num of nums)`
遍历数组`for(var i in nums)`

`Math.ceil(55.4) return 56`


new Set 去重并不会改变原来的数组。

我越来越觉得forEach 用法有点毛病


`str.slice(-1)  // 返回就是字符串的最后一位`

indexOf 和 lastIndexOf 的用法，对于连续的重复元素
并不适用，note: 连续

如何判断一个值是否是连续的。
遍历数组`s[i] !== s[i+1`] 那么这个地方，就是一个临界点

如何快速生成一个数组

sort 对于负数应该如何排列

一个数的绝对值 Math.abs();

11月11日
splice   支持负数吗？  splice  删除元素又插入元素，最后返回值是什么。

shift  从开头插入元素
unshift 从开头删除元素

你所理解上述是正确的吗？ 答案不是
正确的答案是 shift 是删除元素，  而且仅仅是删除一个元素， unshift 那么就是从开头插入元素 unshift(1,2,3) 这样

unshift的括号里面可以是数组吗？ 不可以， 需要用... 转化下

arr.pop()     返回 值为删除的值
arr.push()    返回 值为push后数组的长度
arr.shift()   返回 值为删除的值
arr.unshift() 返回 值为插入后数组的长度
























