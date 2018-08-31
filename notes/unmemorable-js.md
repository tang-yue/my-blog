这里记录一些我写了很多遍，但仍旧记不住的js常用的代码。

1. 正则只匹配数字和字母
2. 去掉字符串的开头空格和末尾空格

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

6. string 如何快速转为数组  str.split(",")

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
    n.toString();
    string(34); // "34"
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
`arr.splice(0,1)`  // 删除的是0位置上的数，不包含1位置上的数
`arr.splice(0)` // 删除的是0以及0之后的所有数。并不是0位置上的数

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

str 删除元素和添加元素，该如何操作。 拼接

元音字母是哪几个？

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

正则里面写=， 出现问题，请问应该如何写等于号。























