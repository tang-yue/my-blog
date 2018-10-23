关于 跨域的知识点

写一篇博客关于jsonp 廖雪峰的教程。

js 笔试面试题笔记

1.
output(typeof (function() {output(“Hello World!”)})());

立即执行函数仍旧是一个函数。

2.
var f = function g() {
    return 23;
};
typeof g(); 

答案: Error

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

6. cookie会被Http请求携带，但localstorage不会

7. then 有两个参数 都是回调函数 第一个回调函数，在Promise状态为resolve执行，第二个在状态为reject执行。
catch方法，相当于then(null, reject)的一个变体。

8. Math.max(arr) 括号里面是数组所以是错误的。

9. var a = "40", var b = 7;  则执行a%b 等于多少。
等于5;

10. 




