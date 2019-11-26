这里记录一些我写了很多遍，但仍旧记不住的js常用的代码。

有必要把这些全部打印出来，再默写一遍。

1. 正则只匹配数字和字母
```
  var re = /\w/g  
  // note: 数字和字母的个数 和 var re = /\w+/g   这样的数字和字母的个数
  是不一样的。不一样的话，你倒是举列呀。
  如果你不记录下来的话，你看看现在就忘记了。  
```
举例说明：
```
var re = /\w/g;
'abc---**02'.match(re); // ['a','b','c','0','2']

var re1 = /\w+/g;
'abc--**02'.match(re1); // ['abc', '02']
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
var re = /^\s*|\s*$/g; // 匹配开头空格，或者末尾空格，然后将其用没有空格的字符串代替
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

5. array.splice(position, count of ele,  add elements);

请问position上的这个数，会不会被删除呢。
```
let arr = [5,6];
arr.splice(0,0,1,2,3,4);  // [],  注意 返回值为空数组 因为返回的是删除的数组
```

6. string 如何快速转为数组  str.split(",");

关于split转换string为数组，令我惊讶的地方。
```
  "hello".split(",")   // return ["hello"]
  "hello".split()     // return ["hello"]
  "hello".split("")   // return ["h","e","l","l","o"]
  "How4are8you".split(/\d/); // return ["How","are","you"]
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
`arr.splice(0)` // 删除的是0以及0之后的所有数。并不是0位置上的数,返回的是数组 这个用法可以借鉴一下，可以清除arr也可以复制arr。

14. 关于push
`book.push(bookName)`  返回的是book数组添加进bookName之后的数组的长度

15. 关于forEach和filter
```
arr.forEach(function(ele) {
  
}) 
```

16.  关于sort排序内部的用法

参考http://imweb.io/topic/565cf7253ad940357eb99881

数字排序用如下：
`arr.sort(function(a,b) {return a -b})`


8月26日 12:06分

今天又遇到了排序的问题。
脑袋里似乎根深蒂固的记得，sort是可以数字排序的，但是那仅仅是针对0到9。
并不是针对所有的数字。

concat 方法，括号中只能是数组吗？
经测验得知，括号内部可以是数组当然也是可以arg。

遍历字符串最好的方式是什么方式？ for of // 注意for of 不能够遍历对象

判断一个字母是否是大写。该如何判断。
 (1) 本身是否是等于本身转换后的大写，如果等于，那么就是，否则就不是

str 删除元素和添加元素，该如何操作。 拼接
(1) str.slice(p1, p2);   // 截取p1位置到p2位置上的元素
同时 p1 还可以是负数，代表从str的末尾端开始数

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
将一个字符串的第一个值转大写，其余保持不变，最优雅的写法是什么样子？

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
  并不会互相影响呀， 以前的理解有错误
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

判断该值是否在某个对象中。if (nums[i] in ind && i - ind[nums[i]] <= k) 类似于这样

`Math.ceil(55.4) return 56`


new Set 去重并不会改变原来的数组。

我越来越觉得forEach 用法有点毛病


`str.slice(-1)  // 返回就是字符串的最后一位`

indexOf 和 lastIndexOf 的用法，对于连续的重复元素
并不适用，note: 连续

如何判断一个值是否是连续的。
遍历数组`s[i] !== s[i+1`] 那么这个地方，就是一个临界点

如何快速生成一个数组


一个数的绝对值 Math.abs();

11月11日
splice   支持负数吗？  splice  删除元素又插入元素，最后返回值是什么。删除的元素组成的数组

shift  从开头插入元素
unshift 从开头删除元素

你所理解上述是正确的吗？ 答案不是
正确的答案是 shift 是删除元素，  而且仅仅是删除一个元素， unshift 那么就是从开头插入元素 unshift(1,2,3) 这样

unshift的括号里面可以是数组吗？ 不可以， 需要用... 转化下

arr.pop()     返回 值为删除的值
arr.push()    返回 值为push后数组的长度
arr.shift()   返回 值为删除的值
arr.unshift() 返回 值为插入后数组的长度

想要循环对象 究竟是应该用 for of  还是用 for in  呢 ？

都是用 for in 进行遍历，没有 for of 遍历对象的说法
使用for-of 遍历
不仅支持数组，还支持大多数类数组对象，列如 DOM NodeList 对象.
也支持字符串遍历，它将字符串视为一系列的Unicode字符来进行遍历。

var arr = ["张三", "李四", "王五", "赵六"];

for(var value of arr) {
  console.log(value);
}
上述就可以输出数组里面的值了 

11月14日
因分不清下述两者的区别，而发生的执行不符合预期。
count[k] = (count[k] || 0) + 1;
count[k] = count[k] || 0 + 1;  //  下述无论存不存在都会将 1 赋值给 count[k]


分析下述两段代码有和区别：

第一段：
```
   var flag;
    for(var i = 2; i <=min; i++) {
      flag = true;
      for(var k in map) {
        if(map[k]%i != 0) {
            flag = false;
            break;  // 退出当前循环，进行到下一次循环，请问是 map 层还是 min 层呢
            // 执行一下看看吧，并且需要强行记忆
            **花了好久，才得出的结论**
            break 会退出当前的这个map层循环，即不会再执行map层了，直接执行下一个i了。
        }
      }
      if(flag === true) {
        return true;
      }
    }
    return true;
```

第二段：
```
    for(var i = 2; i <=min; i++) {
      for(var k in map) {
        if(map[k]%i != 0) {
            return false;  // 这一组里面的i 没有符合条件的，或许，下一个i会有呢。
        }
      }
    }
    return true;
```
我又不知道上述两段代码有何区别了
小写的a 和 大写的A 之间ASCII码值相差多少。

charCodeAt的用法
str.charCodeAt(index);

请问哪一个用法能够得到一个字母的ASCII码 charCodeAt 值。

string  是没有map用法的，即没有 str.map()

'abcd'.split('');  //  return [a,b,c,d]


for of 遍历字符串和 for in 遍历字符串的区别，以下述代码为列
```
let moves = 'abcdefg';
for(let move in moves) {
  console.log(move); // 0, 1, 2, 3, 4
}
```

```
let moves = "abcdefg";
for(let move of moves) {
  console.log(move);  // a b c d e f g
}
```
// 11月16日
复习上述笔记  嘴上说了，但是实际并没有做

如果判断一个值是否是数字
```
var a = 'abc';
typeof a;  // string;

var b = 10;
typeof b; // number;

```
还有一种方法 isNaN
```
var b = 'b';
isNaN(b); // true; 

var a = 10;
isNaN(a); // false;
```
但是需要注意的是如果 b是一个空串或一个空格, isNaN将把b当作数字0来处理，所以检查不严谨。

arr.splice(0, 1) ,,, 这样去删除一个值的时候，请问返回值是什么。 // [arr[0]]

答案: 返回的是删除的值组成的数组

// 如何仅仅是排序数组其中的一部分

// 小写字母，字符串如何排序

```
第一种方法
let arr = ["he w a", 'awbc hh ww', 'gwq d']
arr.sort(function(a,b){return a.localeCompare(b)});
```

```
第二种方法
let arr = [["he", "w", "a"], ["awbc", "hh", "ww"], ["gwq", "d"]];
// 这样的形式 直接 
arr.sort(); 就可以了

```

请问下面这样，可以改变字符串 s 吗？
```
let s = 'abcd';

s.split(' ').push('ef');

console.log(s);  // 'abcd'

所以  实践证明并没有改变s
```

'a'.repeat(3);  // "aaa"

居然还有上述这种做法。

判断大写，请问这样可以判读吗？

‘C’>= 'A' && 'C' <= "Z"
实践证明是可以的。
string.slice(1)
要注意字符串也是有slice方法的

`'abcdefg'.split("") === Array.from('abcdefg')` === [].slice.call("abcdefg")  效果是一样的

怎么匹配数字和字母， `[a-zA-Z0-9]`   或者。\w

正确匹配数字或字母限制个数， `/^\w{3}$/`  这样就是匹配三个数字或字母

获取dom结构的class 值， 把原生的js都给忘的差不多了

sort 排序  末尾 返回的是 大于或者小于也是可以的 

箭头函数如何传参的问题。

c 语言的变量名命名，，，和js的变量名命名，有什么区别吗？

关于递归的列子
```
function recursion(n) {
  if(n === 1) {
    return 1;
  }
  return recursion(n-1)*n; 
}
``` 

关于 document.getElementsByTagName() 方法的返回值

返回nodelist类型的对象
.length 返回集合中的对象个数，length 是只读属性
.item(index) 返回指定索引的节点

[].slice.call(nodelist); 可以将其转化为数组
同样Array.from(nodelist); 应该也是可以的

神奇的地方， join 和 toString() 神奇的地方
[1,2,3,[4,5,[3]],9].join().split(","); // ["1","2","3","4","5","3","9"]
// join() 相当于 join(",")
[1,2,[2,4,[5],8],0].toString().match(/\d/g); // 也能达到同样的上述效果

保留两位小数  num.toFixed(2) 保留两位小数
Math.floor() Math.round() Math.ceil() 请问这几个值得区别在哪里

向 数字的偏小方向 取整
Math.floor(23.89); // 23
Math.floor(-3.01); // -4

向 数字的偏大的方向 取整
Math.ceil(10.01); // 11
Math.ceil(-9.9);  // -9

四舍五入法 取整
Math.round(4.5); // 5
Math.round(5.4); // 5

如判断数字有几位数
num.toString().length;

如何判断是否是数组。iE9 +
Array.isArray();
总结的方法如下：
```
let arr = [1,3,5];

1、
arr instanceof Array;  // true

2、
Object.prototype.toString.call(arr) === "[object Array]";

3、
// 通用的判断数组的方法
function isArray(object) {
  retun object && typeof object === "object" && Array === object.constructor;
}

4、
Array.isArray(arr);
```

dom 元素如何变成元素节点，如何从元素节点获得某个属性名的特定属性。

Array.from(dom.children).map((item) => item.getAttribute(attr));

几种append 的区别
1、 appendChild()
```
var node = document.createElement("LI");                 // Create a `<li>`node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);
```
2. jQuery 里面的append
```
$('.inner').append("<p>Test</p>")
```

清空html jQuery 方法
$("#cats-list").html('');


关于new Promise一定是有一个return 返回值吗？
不需要，他们测试给得样列有点问题。

请问函数的参数是...args, 那么我在函数内部能否用args 去代替...args。
```
function a(...args) {
    console.log(...args); // 1 2 3 4 5 6
    console.log(args); // [1,2,3,4,5,6]
}
a(1,2,3,4,5,6);
```
一目了然就可以看到上述得区别了

string 有splice 方法吗？
没有

同样是遍历字符串，用for 循环和 for of ,发现 for of 所耗费时间更长。

string.replace(s, "");
仅仅会将string 里面的第一个变量s的值给替换成空字符串，其实替换成空字符串就是删掉的意思。
于是我学会了一种新的改变字符串的方法。

请问Array.splice 方法可以改变原数组吗？
肯定会的啊.

reverse() 方法仅仅是数组才有的吗? 是的

string有 slice方法。

巩固一下 substring, subStr
```
str.substring(indexStart[, indexEnd]) 和  slice的方法一样 包含前者而不包含后者
str.substr(start[, length]) 

var str = "Mozilla";
str.substr(1, 2); // oz
str.substr(2); // zilla
```

正则表达式两种写法
```
let regex = /\S/g;
let regex = new RegExp(`\\s${}`, "g");
```

\s  和\S  的区别是在哪里？

\s 匹配任何空白字符，包括空格，制表符，换页符等等。等价于
[\f\n\r\t\v]

\S 匹配任何非空白字符 [^\f\n\r\t\v]

`arr.splice(0, 3).reverse().concat(arr)`  这行代码写的很妙。改变了原数组。

应该是字符串，数组都可以用match(正则表达式) 这样的用法吧？

仅仅是字符串。

关于字符串和正则表达式的两种常见用法

```
let arrStr = "abcdefg";
var reg = new RegExp(`(\\S{${2*2}})`, "g");

console.log(arrStr.match(reg), "match");  // ["abcd"] 
// 我应该记录下返回值
console.log(arrStr.split(reg), "split");  // ["", "abcd", "efg"]
```

如何给字符串快速去重。

如何快速获得obj的keys.

```
Object.keys(obj1);
```

new Set(arr); 有什么作用。
转化成set 形式的数组，然后用set的方法。

`return Object.entries(counts).reduce((res, arr) => arr[1] > res[1] ? arr : res, ['', -Infinity])[0];`

第一次见到以这种形式，去return出对象里面，某个属性值最小的属性。

```
const anObj = {100: "a", 2: "b", 7:"c"};
Object.entries(anObj); // [["2", "b"], ["7", "c"], ["100", "a"]]
```

filter 用法 筛选出的数组请问和原数组的顺序也是保持一致的吗？

arr.reverse()  会直接改变掉原数组的顺序吗？

答案是会的。

字符串一半的位置是在哪个位置。
s.length / 2;   其实用到的时候，用的都是整数，所以不用纠结有小数位。

今天遇到一个很奇怪的问题。
```
有一个字符串，s
for(let i = 0; i <= s.length; i++) {
  if(条件) {
    return true;
  }
}

for(let i = 0; i <= s.length/2; i++) {
  if(条件) {
    return true;
  }
}
```
其中条件会在 i < s.length/2 范围内就满足，请问
上述代码执行时间，哪个短，还是一样长。 

二进制是如何计算的
110

2的0次方 * 0 + 2的1次方 * 1 + 2的2次方 * 1 = 2 + 4 = 6

如何将二进制转化成10进制整数。

var a = 1010;
alert(a.toString(2)); //转成二进制 
alert(parseInt( "101110100 ",2)) ;//转成十进制

字符串 s = "abcdefg"; 请问 s[-1] 的值是多少？ 

答案: undefined

var [carry, i, j, res] = [0, a.length - 1, b.length - 1, ""];

这个赋值方法是值得借鉴的。

关于连续不连续，临界值的判断
```
 方法一 if(str[i] != str[i+1]);
 方法二 while(str[i+1] && str[i+1] === str[i])
 第二种方法我不太常用
```

obj[word] = obj[word] + 1 || 1;
上述用法只要记住就好了

两个值颠倒，请问应该如何颠倒呢。
```
temp = a;
a = b;
b = temp;
```
字符串好像是没有办法颠倒两个位置的值的，而数组是可以的。
```
let s = "abcdefg";
let  t;
t = s[0];
s[0] = s[5];
s[5] = t;
console.log(s); // abcdefg  并不会改变
```

```
let s = ["a", "b", "c", "d", "e", "f", "g"];
let t ;
t = s[0];
s[0] = s[5];
s[5] = t;
console.log(s); // ["f", "b", "c", "d", "e", "a", "g"] 会颠倒两个值
```
/////////////

后面的这些，是后增加的。
要注意if("")  和 if(" ") 的区别，所以还是用.length 去判断比较好。

```
var countSegments = function(s) {
    return s.split(" ").filter(function(n){return n}).length;
};
```

可以完全杜绝掉，全是空格的字符串。

如何死循环的临界值呢。如何知道是否死循环了呢。

十进制转化为二进制用什么办法呢。

parseInt(str, radix) 将其他进制转化为10进制数

parseInt('11', 2);  二进制的11 转化为10进制的3  // 3

x.toString(2);
但是 x 是有值限制的， x < 256
有吗？有吗？

分析 toString() 方法

如何用js 函数法， 将十进制转成 2进制？

js 中  2的几次方如何写。

如何在数组的某个地方，插入某个值 splice

input 去掉聚焦时的颜色

input {
    outline: none;
}

去掉a 标签的下划线

a {
  text-decoration: none;
}

str.substr(start, len);    //  包含 start  上的位置
str.substring(indexStart, indexEnd); // 包含indexStart位置上的，不包含indexEnd 位置上的
str.substring(indexStart) // 从indexStart 位置开始，到末尾

22. 创建一个正则表达式， 匹配所有的字符，除去元音和数字
<!-- 答案:   /^[aeiou0-9]/g -->
上述答案是错误的，上述匹配的是除去开头是元音和数字的。 注意是开头
正确的答案是 /[aeiou0-9]/g 


第三次遇到 获取url上的参数，并解析。
window.location.search.substr(1).split('&');

将switch 方法再重新默写一遍。


关于字母和汉字，转换为字符长度的问题。 因为放在一个div里，字母和汉字所占的长度不一样。

只要字符串里数字



让一个div 居中

```
让外部有个div,并给其宽度，让内部再有一个div,也给一个宽度，再加上margin: 0 auto。
```

```
-moz-  代表 FireFox 火狐 浏览器
-ms- 代表 IE 浏览器
-webkit- 代表 safari、chrome 浏览器
-o-  代表 opera 浏览器
```


true && false || false   // 关于这样的代码的执行方式
结果是为true 吗？ 真的是吗？
最后结果为false


哪个是返回删除数组里的某个元素。
pop(从末尾删除)
push(从末尾增加)  
shift(从开头删除)  
unshift(从开头增加)

最后答案应该是splice吧， 会直接改变掉数组

7月10日  新增

toString 的用法是怎样的
要多尝试，而不是是一下子没有想起来就去百度。这样的习惯不好。

如何判断某个给定的值是否是字符

typeof str === 'String' || str instanceof String

你没有看到是或者的关系吗？这也就代表了我们不应该只用一种方法就判定一切。
也就是说 typeof str === 'String' // false 不代表不是字符串
同样地，str instanceof String // false 不代表不是字符串

而后一种的主要运用场景是如下 针对的是new String() 用法

```
var simpleStr = 'This is a simple string';

var myString = new String();

var newStr = new String('String created with constructor');

simpleStr instanceof String;  // return false

myString instanceof String;

newStr instanceof String;
```


连简单的递归函数都不会写，难道你不觉得汗颜吗.

7月12日  新增

`[34].join('/')`  你觉得会在34后面加一个 '/' 吗？
不会

说说以下几个前缀，代表什么意思。
-moz-  代表 FireFox 火狐 浏览器
-ms- 代表 IE 浏览器
-webkit- 代表 safari、chrome 浏览器
-o-  代表 opera 浏览器

a[i]++
a[i] // 试问此时此刻 a[i] 有在原来的基础上加1吗？
是的

new Date()   如何获取到几号中的几
```
var date = new Date();
data.getDate(); //  几
date.getDay();  // 获取到的周，，，，需要注意的是周日是0
```


'56'.split('.')  // 会发生什么 为 ['56']

'45.'.split('.')   // 会发生什么 为 ['45', '']

<!-- 整数部分每隔四位分割一下。 -->

将1234567890.89301 的整数部分分割下。（它可能本身就是整数）

arr.join('')   和   arr.join()   的区别

第一个是无逗号拼接，第二个是逗号拼接

if('0') {
  console.log('请问执行这里了吗？');  // 最后还是基础不牢
}

执行了呀

校验是否是正整数  ？？
你认为的快速方法。
其实这个正则是比较简单的。
```
/^[1-9][0-9]*$/.test(100); // true

```

如何将不是数字，，即如何匹配非数字。
'1asw32we3d4rf5t'.split(/\d/g).join('');

如何快速去掉，字符串的最后一个字符。
请写下你的最好的方法。

```
var str = 'string';
var str = str.slice(0, str.length-1);
```
更简便的方法
substr 和 subString 有什么区别

str.substring(indexStart[, indexEnd]);

str.substr(start[, length]);

单纯的substring 和substr 会改变原字符串吗？

答案： 不会

数组的颠倒函数，会改变原数组吗？  答案是会

用 this.state 的时候，先取值，然后再赋值， 然后再打印刚刚已经取过的值，请问取到值是赋值之后的吗？还是赋值之前的呢？

const 和 let 一样也是局部变量

safari  不支持这样的获取时间戳方式
var stringTime = "2014-07-10 10:21:12";
var timestamp2 = Date.parse(new Date(stringTime));


        <StandardTable
          selectedRows={3}
          loading={loading}
          data={data}
          columns={columns}
          rowKey={record => record.id}
          onChange={this.requestData.bind(this)}
        />

遍历对象是用什么？

将小写字母转化成大写，的单词是如何拼写的。

\W 表示什么意思 /\W/ or /[^A-Za-z0-9_]/  注意有下划线
\w 匹配数字和字母包括下划线[0-9a-zA-Z_]

如何校验一串字符串里仅仅包含数字和字母。 ??? 这个已经是写过八百遍了

和我想象中的有些不太一样。 答案为 `/^[0-9a-zA-Z_]{1,}$/`  后面并不需要带全局的变量g

小s 和大s   的区别。
\s  表示什么意思   匹配任何空白字符，包括空格、制表符、换页符等等
\S  表示什么意思   匹配任何非空白字符


pop 是从尾部删除还是从头部删除 ？？ 尾部

isArray的用法是怎样的？

NaN 是什么类型。

数组和对象都可以用哪一种方法进行遍历。

replace 会改变原字符串吗？ 不会

```
let str = '1200000000';
let a = str.split('')

for(let i = a.length - 3; i > 0; i= i-3) {
  a.splice(i, 0, ',');  // 这里每隔三位进行分割
  // i++
  // i--
  // 上述无论是i++ 还是i-- 都是不需要的，因为这里是用i进行减3操作，其实和新插入的字符没有什么关系
  console.log(a.length, i)
}
```
如何判断一个数是不是整数。

11月15日
我今天在if else if else if else if 后面加上break，直接导致编译出错了


11月21日
push() 方法   可向数组的末尾添加一个或多个元素，并返回新的长度

arr.push(ele1, ele2, ele3, ..., ele4)

unshift()

如何将时间戳转换成  '2019-11-20T00:00:00+08:00'




