关于 跨域的知识点

写一篇博客关于jsonp 廖雪峰的教程。

js 笔试面试题笔记
如果每道错题，我都要记录的话，我觉得太过浪费时间。

1.
output(typeof (function() {output(“Hello World!”)})());

立即执行函数仍旧是一个函数。
首先输出的是“Hello World”，因为之后执行完了就变成了undefined,然后输出的是undefined.


var f = function g() {
    return 23;
};
typeof g(); 

答案: Error
因为根本找不到。

3. 
alert(undefined == null); // true
alert(undefined === null); // false

4. 浏览器的同源策略
默认情况下，javascript在发送AJAX请求时，URL的域名必须和当前页面完全一致
（1）域名要相同 （2）协议要相同 （3）端口号要相同， 有的浏览器口松一点，允许端口不同，大多数浏览器都会严格遵守这个限制。

请求外域的几种方法
一是通过Flash插件发送HTTP请求，这种方式可以绕过浏览器的安全限制，但必须安装Flash,并且跟Flash交互。
不过Flash用起来麻烦，而且现在用得也越来越少了。
二是通过在同源域名下架设一个代理服务器来转发，Javascript负责把请求发送到代理服务器：
代理服务器再把结果返回，这样就遵守了浏览器的同源策略。这种方式麻烦之处在于需要服务器端额外做开发。
三称为JSONP， 它有个限制，只能用GET请求，并且要求返回Javascript。这种方式跨域实际上是利用了浏览器允许跨域引用Javascript资源
四CORS， 跨资源共享

Origin 表示本域，也就是浏览器当前页面的域。
当JavaScript向外域（如sina.com）发起请求后，浏览器收到响应后，
首先检查Access-Control-Allow-Origin是否包含本域，如果是，则此次跨域请求成功，如果不是，则请求失败，
Javascript将无法获取到响应的任何数据。


假设本域是my.com，外域是sina.com，只要响应头Access-Control-Allow-Origin为http://my.com ,或者`*`，本
次请求就可以成功。
可见，跨域能否成功，取决于对方服务器是否愿意给你设置一个正确的Access-Control-Allow-Origin,决定权始终在对方手中。

引用cdn 字体资源，如果该CDN服务商未正确设置Access-Control-Allow-Origin,那么浏览器无法加载字体资源

对于PUT，DELETE以及其他类型如application/json的POST请求，浏览器会先发送一个OPTIONS请求到
这个URL上，询问目标服务器是否接受：
服务器必须响应并明确指出允许的Method，浏览器确认服务器响应的Access-Control-Allow-Methods头
确实包含将要发送的AJAX请求的method，才会继续发送AJAX，否则，抛出一个错误。
由于以POST、PUT方式传送JSON格式的数据在REST中很常见，所以要跨域正确处理POST和PUT请求，服务端必须正确
响应OPTIONS请求。


JSONP的缺点则是：它只支持GET请求而不支持POST等其它类型的HTTP请求；它只支持跨域 

5. NOSCRIPT 标签是做什么用的？
用来定义在脚本未被执行时的替代内容(文本)

6. cookie会被Http请求携带，但localstorage不会

7. then 有两个参数 都是回调函数 第一个回调函数，在Promise状态为resolve执行，第二个在状态为reject执行。
catch方法，相当于then(null, reject)的一个变体。

8. Math.max(arr) 括号里面不能够是数组。

9. var a = "40", var b = 7;  则执行a%b 等于多少。
等于5;

10. js的全局函数
setTimeout 是window的一个方法，如果把window当做全局对象来看待的话，它就是全局函数。
严格来讲，它不是。全局函数与内置对象的属性或方法不是一个概念。全局函数它不属于任何一个内置对象。

11. js赋值问题
key = var 这样的形式，声明的是全局变量，往往最好不要采用这样的做法。


12. JavaScript 全局函数
函数                    描述
decodeURI()   	       解码某个编码的URI
decodeURIComponent()   解码一个编码的URI组件
encodeURI()            把字符串编码为URI
encodeURIComponent()   把字符串编码为URI组件
escape()               对字符串进行编码
eval()                 计算javascript字符串，并把它作为脚本代码来执行
isFinite()             检查某个值是否为有穷大的数
isNaN()                判断一个值被Number()作用之后是否是NaN,  这个地方是需要值得注意的
Number()               把对象的值转换为数字
parseFloat()           解析一个字符串并返回一个浮点数
parseInt()             解析一个字符串并返回一个整数
String()               把对象的值转换为字符串 比如String(234) 被转化成了 ‘234’
unescape()             对由escape()编码的字符串进行解码


13.  关于encodeURI() 对URL编码的函数
参考文章 http://www.ruanyifeng.com/blog/2010/02/url_encoding.html
URL 只能使用英文字母、阿拉伯数字和某些标点符号。
如果URL中有汉子，就必须编码后使用，但是 RFC 1738 并没有规定具体的编码方法，而是交给应用程序（浏览器）自己决定。
这导致“URL编码”成为了一个混乱的领域。

情况1： 网址路径中包含汉字
用的是utf8编码
情况2： 查询字符串包含汉字
`http://www.baidu.com/s?wd=春节`，不是网址路径
查询字符串的编码，用的操作系统的默认编码 
情况3: GET和POST方法的编码，用的是网页的编码
操作，在谷歌搜索里 输入 春节两字，，，，然后点击Google搜索，地址栏里就可以看到的url
情况4: Ajax 调用的URL 包含汉字
由Javascript 生成 HTTP请求，Ajax调用。
采用的操作系统的默认编码

最后 有没有办法保证 客户端只用一种编码方法向服务器发送请求？
那就是使用JavaScript先对URL编码，然后再向服务器提交，不要给
浏览器插手的机会，因为Javascript的输出总是一致的，所以就保证了服务器得到的数据是格式统一的。

14. javascript 变量定义规则
第一个字符必须是一个字母、下划线_ 或 美元符号$; 其他字符可以是字母、下划线、美元符号或数字。

15. a(10)的返回结果是？
```
function a(a) {
	a^=(1<<4)-1;
	return a;
}
```
我实在想不通是如何计算的。代码是如何执行的,返回的a并不是传入10而是一个变量
可更改。

0000 0001   0001 0000    //// a = a ^ 15 = 10 ^ 15  值为5 
^ 表示异或  不同为1，相同为0 比如 7^4  就是 111^100 异或后为 11.而二进制11对应10进制就是 数值3
<< 表示 按二进制形式把所有的数字向左移动对应的位数，高位移出（舍弃），低位的空位补零
比如 3 << 2, 则是将数字3左移2位
0000 0011  朝左平移2位，得到的最终结果就是0000 1100，则转换为十进制是12

16. 
```
var foo = {n:1};
(function(foo) {。               // 形参foo同实参foo一样指向同一片内存空间，这个空间里的n的值为1
	// var foo;                     // 优先级低于形参，无效，下面的var提上来
	console.log(foo.n);          // 输出1
	foo.n = 3;                   // 形参与实参foo指向的内存空间里的n的值被改为3
	var foo = {n: 2};            // 形参foo指向了新的内存空间，里面n的值为2, 前面的var被提上去了
	console.log(foo.n);          // 输出新的内存空间的n的值
})(foo);

console.log(foo.n)               // 实参foo的指向还是原来的内存空间，里面的n值为3
// 并不是最先执行的，需要牢记这一点
```

17. 
Angular 大大减少了对DOM的访问。
jQuery极大的丰富了DOM操作

18. 判断对象oStringObject 是否为String

oStringObject instanceof String


19.
console.log('Value is ' + (val ! = '0') ? 'define':'undefine');
加号的优先级，是高于三目运算符，所以无论括号里面是真还是假，其结果都为真，几都会输出‘’

20. Number(null)  值为 0

21. apply 接受数组，，， call接受 多个参数

22.  hover(over, out) 模仿悬停事件，即当鼠标移动到一个匹配的元素上面时，会触犯
指定的第一个函数，当鼠标移出这个元素时，会触发指定的第二个函数

23. Ajax的劣势
(1) 它可能破坏浏览器的后退功能
（2）使用动态页面更新使得用户难于将某个特定的状态保存到收藏夹中

24. 
hasOwnProperty 是用来判断一个对象是否有你给出名称的属性或对象。不过需要注意的是
此方法无法检查该对象的原型链中是否具有该属性，该属性必须是对象本身一个成员
isPrototypeOf 是用来判断要检查其原型链的对象是否存在于指定对象实列中，是返回true，否则返回false

25. alert(undefined == null)   true

26. IE6 IE7 IE8 中无法通过setAttribute方法传入一段代码字符串设置一个元素的
内联事件，而必须传入一个function类型的对象。

27. onBlur： 当失去输入焦点产生该事件
    onFocus: 当输入获得焦点后，产生该文件

28. for(let i = 0; i < 12; i++) {} console.log(i);
注意上面是用 let 而不是 var。所以 i is not defined

29. 下面代码中的first和second究竟是如何输出的。
```
	function foo() {
		console.log('first');
		setTimeout(function() {
			console.log('second');
		}, 5);
	}

	for(var i = 0; i < 4399999999; i++) {
		foo();
	}
```
解释： Javascript 是单线程的，setTimeout设置的是异步任务，会放在macrotask里面，
等待执行栈的代码执行完毕之后才会执行macrotask里面的异步任务，所以这里会等待for循环
执行完毕才会执行定时器设置的任务。

setTimeout 是在规定时间内将事件加入执行队列，而加入的前提是当前事件队列没有任何东西

30. 请问 alert(a);  这个值为多少。
```
if(! "a" in window) {  // 
	var a = 1;
}
alert(a);
```
```
var a;   // 把if里面的var给提出来，
if(! "a" in window) {  // window 里面是否有这个属性，此时此刻，window里面已经是有这个a属性了
	a = 1;
}
alert(a);
```
最后的结果弹出的就是 undefined

31. 说一说常见的请求头和响应头都有什么呢？
参考链接 答案部分 https://www.nowcoder.com/test/question/done?tid=19619074&qid=55682#summary
我不知道我是否应该，将上述的重新写一遍。重新抄一遍，我的目的是什么呢，记忆可是我又能记得多少呢。
1）请求（客户端 -> 服务端[request]）
GET(请求方式) /newcoder/hello.html（请求的目标资源） HTTP/1.1 请求采用的版本号和协议
Accept：*/* （）

32. javascript 的标准事件模型
dom2 规定的事件流 包括下面的三个阶段
事件捕获 -> 事件处理 -> 事件冒泡

33. onfclick="javascript:void(0)"  就是行内javascript

34. var a = []; a.foo = 'c'; 没有任何的意义

35.  403  状态码  服务器拒绝请求。

36. 

window.history.back()    我在浏览器里面执行时，完全没有任何的反应。

length    返回浏览器历史列表中的URL数量
back()    加载history列表中的前一个URL
forward() 加载history列表中的下一个URL
go()      加载history列表中的某个具体页面

37. 下面代码的执行结果是多少？
```
function Foo() {
	var i = 0;
	return function() {
		console.log(i++)
	}
}
var f1 = Foo();
	f2 = Foo();

f1();
f1();
f2();
```
在函数内部用var 定义一个变量，请问这个变量是全局变量吗？
答案： 不能， 简直是愚蠢至极，愚蠢至极
分析：
(1) Function是引用类型: 保存在堆中，变量f1,f2是保存在栈中；
(2) 闭包： 一个函数（产生新的作用域）定义的局部变量、子函数的作用域在函数内，
但是一旦离开了这个函数，局部变量就无法访问，所有通过返回子函数到一个变量f1的方法，让f1指向堆中函数作用域，这样可以使用局部变量i.
(3)过程：
第一次f1(): f1=Foo(),先执行Foo(); i=0,return值返回给f1
(f1指向子函数 f1()=function(){...}),因为子函数没有定义i，所以向上找到父函数定义的i；并执行子函数，输出
i=0,再自加i=1（覆盖了父函数Foo的i值）;
第二次f1(): 执行的是子函数Function(){...}输出的是父函数的 i=1，再自加i=2；
第二次f2():同一次f1(),不同的是f2指向堆中一个新的对象function(){...},所以此i非彼i，输出i=0；如果
再次f2(),那么和第二次f1(),一样输出i=1；

38. js中数字在计算机内存储为多少Byte

39. var b = false || 44;

为什么这么简单题目，而且曾经遇到过，还是把它给做错了呢，面壁思过去。

40. 关于this的值
(1)当this出现在function内部时，谁调用这个函数，this就指向谁。
(2)当this出现在function外部时，则this就指向window.
(3)当用apply和call上下文调用的时候指向传入的第一个参数
(4)构造函数调用指向实列对象
(5)如果是使用new方式创建对象，this指向新建的那个对象。

41.
```
function test() {
	var n = 4399;
	function add() {
		n++;
		console.log(n);
	}
	return {n:n, add:add};
}

var result = test();   // 将test执行的返回结果赋值给result，是一个对象，开辟一个堆内存，test执行，形成一个私有作用域A
var result2 = test();

result.add();
result.add();   // 打印出的是私有作用域A里的n值，这个n值会被累加
console.log(result.n);  //找的只是result对应的那个堆内存中n
result2.add();
```

42. js中的内置对象：

Arguments           函数参数集合
Array               数组
Boolean             布尔对象
Date                日期时间
Error               异常对象
Function            函数构造器
Math                数学对象
Number              数值对象
Object              基础对象
RegExp              正则表达式对象
String              字符串对象

43. [].concat(数组arr)
上述换一种写法就是[].concat.call(arr, []);
我发现一件很奇怪的事情，不是说call 对应的是参数集合，而apply对应的是数组么。
这个应该是用了 call 的缘故吧。
var arr = [1,2,3];
var f = [].concat.call(arr,4,5,6)  // [1,2,3,4,5,6]
var f = [].concat.call(arr, [4,5,6]) // [1,2,3,4,5,6]

44. instanceof

在浏览器中，我们的脚本可能需要在多个窗口之间进行交互多个窗口意味着
多个全局环境，不同的全局环境拥有不同的全局对象，从而拥有不同的内置
类型构造函数。这可能会引发一些问题，
如果表达式[] instanceof window.frames[0].Array 会返回false，
因为Array.prototype !== window.frames[0].Array.prototype,
因此你必须使用Array.isArray(myObj)或者
Object.prototype.toString.call(myObj) === "[object Array]"
我并不理解最后一个为什么要这么做。

45. 关于AMD 和 CMD
参考 http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html

AMD 异步模块定义，它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。
AMD也采用require()语句加载模块，但是不同于CommonJS。
主要有两个Javascript库实现了AMD规范：require.js 和curl.js
AMD 是 RequireJS在推广过程中对模块定义的规范化产出
CMD 是SeaJS在推广过程中对模块定义的规范化产出
区别：
1. 对于依赖的模块， AMD是提前执行，CMD是延迟执行
2. CMD推崇依赖就近，AMD推崇依赖前置
```
// CMD
define(function(require, exports, module) {
	var a = require('./a');
	a.doSomething()
	// 省略
	var b = require('./b'); // 
	b.doSomething('./b');
	})
```
10月25日 2:00 至 4:00 复习上述第一遍。

46. 关于new Function() 的用法
```
var sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));  // expected output: 8
```
47. 如下代码的运行结果
```
var obj = {a:1, b:function() {alert(this.a)}};
var fun = obj.b;
fun();  //谁调用这个函数，那么这个this就会指向谁，但是现在没有人调用，那么就是指向window，在
window里面并没有定义这个a，运行结果为 undefined 
```
运行的结果为 undefined
但是以我的想法，应该是报错， a is not defined
但是我的想法是错误的

48. DNS 的一些说法

（1）DNS 就是将域名翻译成IP地址， 但是并不是相互映射的关系，有ip并不一定对应一个域名
（2）主要用UDP协议，当时当请求字节过长超过512字节时用TCP协议，将其分割成多个片段传输。
（3）DNS协议默认端口号是53
（4）操作系统的DNS缓存：windows DNS 缓存的默认值是MaxCacheTTL，它的默认值是
86400s，也就是一天。macOS 严格遵守DNS协议中的TTL。
浏览器的DNS缓存： chrome对每个域名会默认缓存60s；IE将DNS缓存30min；Firefox默认缓存时间
只有1分钟；safari约为10s。


49. ajax的事件是：
ajaxComplete(callback);
ajaxError(callback);
ajaxSend(callback);
ajaxStart(callback);
ajaxStop(callback);
ajaxSuccess(callback);

$.post(url)是ajax请求

50. 输出的日志结果是什么？
```
var obj = {};
obj.log = console.log;
obj.log.call(console, this);  // console.log.call(console, this);
// 即输出切换的上下文console中的this。即windows对象
// 可以自己在控制台，尝试一下。
```
题目问的是输出的日志结果是什么？而并没有问this指代的是什么。

51.
var x = new Boolean(false);
// 请问x的值为多少？
Boolean{false}

52. void();  表示什么意思  
没有意思直接报错

53.  array 并不是保留字

54.  JavaScript RegExp对象
有三个方法：
test(): 检测一个字符串是否匹配某个正则表达式，如果匹配成功，返回true，否则返回false；
exec(): 检索字符串中与正则表达式匹配的值，返回一个数组，存放匹配的结果；如果未找到，返回null；
compile(): 可以在脚本执行过程中编译正则表达式，也可以改变已有表达式。
注： match是支持正则表达式的String对象的方法
```
var myRe = /d(b+)d/g;

vsr myArray = myRe.test()  或者 /d(b+)d/g.exec();

str.match(regexp);

```

55.  var a = b = 3; 相当于 var a = 3; b = 3; b 是全局的

10月25日 5:42 分 刷完 牛客的js面试题。

-----------------------

牛客js 编程题

1.

Array.prototype.indexOf // 判断当前浏览器是否是支持indexOf

2. 求数组和

```
function sum(arr) {
	return eval(arr.join('+'));
}
```

3.
区分split和splice的用法
移除 arr 数组里面所有的item。
下述并没有改变原数组
```
function remove(arr, item) {
	return arr.filter(function(ele) {
		return ele != item;
	})
}
```

实现一个打点计时器，要求
```
function count(start, end) {
	console.log(start++);
	var timer = setInterval(function() {
		if(start<=end) {
			console.log(++start);
		} else {
			clearInterval(timer);
		}
	}, 100);
	return {
		cancel: function() {
			clearInterval(timer);
		}
	};
}
```
我的心里放心不下，leetcode ，于是在 下午2:16分
我又去刷leetcode去了。

