vue 中 v-show 请问可以是个变量吗？

#### 搭建vue 项目笔记
1、 如何判断是pc端还是移动端
```
// 判断是否是pc
isPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", 'SymbianOS', "Windows Phone","iPad", "iPod"];
  var flag = true;
  for(var v = 0; v < Agents.length; v++) {
    if(userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
// 只要写出相反的情况就可以了
```

如何去掉 ul  li 样式，我觉得这是我要记住的
body的margin 样式去不掉是怎么回事

一边有弧度  border-radius: 左上角，右上角，右下角，左下角

鼠标有小手出现 cursor: pointer;

让层级低一点 z-index

请问p标签里面有<br>，我应该如何将其写在数据里面呢。

动态style
`v-bind:style="{ color: item.color, background: item.backgrondColor}"`

发现写background-color 会报错,  写成backgroundColor


background: url() no-repeat center/80%;

position 是紧紧接着background-size 所以连接起来就是 center/80%;

如何鼠标移进图片的时候，图片实现放大效果

`redirect.startsWith('/invitation')`
返回布尔值，字符串redirect 是否以'/invitation'开头

```
const obj = { name:'tangyue', age:26 };
const { name = '' } = obj;
obj;   // {name:"tangyue", age:26}
name; // "tangyue"  取出了name值
const { like = '' } = obj;
obj;  // {name:'tangyue', age:26}
like; // ''  初始化了like值
```

```
import * as service from '../services/user';
// 使用时就是比如 service.getUserInfo
```

如何去掉边框样式  border-style: none

去掉outline样式  outline: none

vue 中 数据里面的p标签内容，如何换行 

`<p v-html="item.content"></p>`

关于window.location 的几种方式

1、导航到一个新页面
window.location.assign("http://www.mozilla.org");
window.location = "https://www.mozilla.org"

2、强制从服务器重新加载当前页面
window.location.reload(true);

3、用replace() 方法重新加载页面
var initialPage = window.location.pathname;
window.location.replace('http://example.com/#' + initialPage );

4、获取查询参数
window.location.search.substr(1).split('&');
返回值列如：["value=haha", "key=lalal"]
然后进行筛选就可以了

5、window.location.pathname
举列 https://example.com/pathname?key=value
那么此时pathname 为 pathname

6. window.location.hostname;
同上面的举列
那么此时hostname 为  example.com

JSON.stringify() 和 JSON.parse() 的区别

JSON.stringify() 方法转化js对象或值为json字符串


```
JSON.parse('{}') // {}
JSON.parse('true') // true
JSON.parse('"foo"') // "foo"
JSON.parse('[1, 5, "false"]') // [1, 5, "false"]
JSON.parse('null') // null
```

关于headers
```
let headers = response.headers;
headers.get(name)// 注意是用get取出值

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.get('Content-Type'); // Returns 'image/jpeg'
```

请问什么是域名呢

zh.wikipedia.org 中  zh 是三级域名， wikipedia是二级域名，.org为最顶级的域名


HTTP状态码 401，400 代表什么意思。

400表示 错误的请求方式

401表示 请求资源命令必须验证

如何去掉边框样式  border-style: none

去掉outline样式  outline: none

vue 中 数据里面的p标签内容，如何换行 

`<p v-html="item.content"></p>`


动态的  src
<img :src="item.backgroundImage" alt="image"/>

span 的background 可以有两个url如下

```
span {
  url(), url()
}
```

// 遇到的vue情况继续在这里写

vue 如何写内联样式

vue 如何写内联的伪元素样式呢


`<div :class="{'top': true, [styleColor]: !!styleColor}"></div>`
简直是神用法。
注意这里的styleColor 也是变量, 如果这个变量存在，那么就存在这个变量class样式，否则就不存在。

`&` 代表的是平级

```
window.onscroll = function(){
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
               //滚动条到底部的条件
               if(scrollTop+windowHeight==scrollHeight){
                //写后台加载数据的函数
          console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
              }   
        }
```

鼠标移动上去由加底变框，由中间向两边
[参考链接](https://570109268.iteye.com/blog/2411832)

获取元素并给该元素添加class类名。
`document.getElementByTagName('div').classList.add('effect')`

z-index 究竟是越大越在上面，还是越大越在下面。

越大越在上面

`transform: translateX(-50%)` 这个代码表示什么意思。
[参考](https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_translatex)
移动横轴上的位置
`transition: width 1s ease-out;` 这个代码表示什么意思。
[参考](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

vue  懒加载

如何去掉a active选中时的背景样式
```
// 移动端
-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
-webkit-user-select: none;
-moz-user-focus: none;
-moz-user-select: none;
```

vue 如何运行时改掉端口号
```
"scripts": {
    "serve": "vue-cli-service serve  --port 10080",
}
```

如何将背景颜色给去掉。
`background-color:transparent; `
许久不用真的是都忘记了。
