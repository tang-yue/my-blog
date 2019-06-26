5月31日 开始复习

6月10号 再复习一遍

scriptoj 被锁定了，暂时复习一下，因为真的很多东西，都是我以前学习过的。
start,开始

1、正则只匹配数字和字母。
答案:
```
第一种：
var re = /\w/g;

'2-3-a'.match(re);  [2,3,a]

第二种：

var re = /\w+/g;

'2s-w-1'.match(re); [2s, w, 1]
```

2、用正则表达式，去除字符串的开头空格和末尾空格
// 这道题，我已经复制了n遍，但是当我再写的时候，我仍旧还是写不出来。为什么
```
思路一：匹配到除了开头空格，和末尾空格。

var re = /\S.*\S/g;

'   sseg f  '.match(re);

思路二：将匹配到的开头空格，末尾空格，用''代替

var re = /^\s*|\s*$/g;

'  ge ge '.replace(re, '');
```

3. 解释arr几个属性
push    从数组的末尾添加， 返回push后的数组的长度，可以push多个值
pop     删除数组的最后一个元素，返回的结果是删除的元素，只能删除一个，（记住返回的是元素）
shift   从数组的开头，删除, 返回删除的元素
unshfit 从数组的开头，添加， 返回数组的长度
slice   返回截取后的数组
splice  
arr.splice(position, count of ele, add elements), 返回删除的元素组成的数组,(删除的元素包含了position上的数),同时splice会改变原数组
arr.splice(0) // 返回的是全部的arr数组。即删除的是0及0以后的数，同时数组arr变为空数组

4、用split将str 转换为数组
(1) 将hello 转换为 ['hello']   //  'hello'.split(',')  
(2) 将hello 转换为 ['hello']   //   'hello'.split()
(3) 将hello 转换为 ['h','e','l','l','0']  // 'hello'.split("")
(4) 将How4are8you 转换为 ['how', 'are', 'you'] // 'How4are8yue'.split(/\d/)

5、写出数字排序，和字母排序

6、判断一个字母是否大写

7、将一个字符串的第一个值转大写，其余是小写，最优雅的写法是什么样子？
两种写法

8、
（1）将ASCII值，转化成字符
（2）取某个位置上数的ASCII值

9、find的用法

返回数组里，满足提供的测试方法的第一个值。

10、用this.setState(),将当前值取反

11、
```
var a = [1,2,3];

let b = a;

arr.push(5);

// 此时b为什么
```

12、用es6方法进行去重，并且不会改变原数组

13、
遍历字符串的方法(不止一个，并说出区别)
遍历数组的方法(不止一个)
遍历对象的方法

14、 判断该值是否在某个对象中

15、
Math.ceil(55.4) // 
Math.abs(23.4) //
Math.floor(23.4) //
Math.round(23,4) //

16、判断一个值是否是数字

17、sort会改变原数组?

18、将字母字符串数组，按照字母进行排序。两种方法
```
var arr = ["he w a", 'awbc hh ww', 'gwq d'];
```

19、 a.repeat(3)

20、将字符串，快速变成数组的三种简单方法

// 今天要复习完全部，加油

21、连续匹配三个数字和字母

22、如何获取dom结构的class值

23、document.getElementsByTagName()  方法的返回值是什么。 如何将其处理成数组（两种方法）

24、如何将多维数组，转化成一维数组。简单的两种方法

25、如何判断数字有几位数

26、 写出所有判断数组的方法（4种）

27、dom 元素如何变成元素节点，如何从元素节点获得某个属性名的特定属性。

28、原生是用appendChild()

29、关于...args作为参数，神奇的地方
```
function a(...args) {
  console.log(...args);
  console.log(args);
}
a(1,2,3,4,5)
```

30、
```
'abcdefg'.replace(a, '');   //

'abcdefg'.replace(/a/g, ''); //
```

31、
reverse() 会改变原数组吗？

32、substring 和 subStr 的区别是什么？

33、`arr.splice(0, 3).reverse().concat(arr)`

34、如何给字符串快速去重

35、如何快速获得obj的keys

36、解释如下代码的意思

`return Object.entries(counts).reduce((res, arr) => arr[1] > res[1] ? arr : res, ['', -Infinity])[0];`


37、如何将1100转化成二进制，十进制。

38、赋值
var [carry, i, j, res] = [0, a.length - 1, b.length - 1, ""];


38、两个值颠倒的最通用方法。数组，和字符串能被颠倒吗？







