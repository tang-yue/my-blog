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
list-style: none;
body的margin 样式去不掉是怎么回事

一边有弧度  border-radius: 左上角，右上角，右下角，左下角

鼠标有小手出现 cursor: pointer;

让层级低一点 z-index

请问p标签里面有<br>，我应该如何将其写在数据里面呢。
```
var obj = document.getElementById('p');
obj.innerHTML; // 这个就是要给别人的数据
```

动态style
`v-bind:style="{ color: item.color, background: item.backgrondColor}"`

发现写background-color 会报错,  写成backgroundColor


background: url() no-repeat center/80%;

position 是紧紧接着background-size 所以连接起来就是 center/80%;

如何鼠标移进图片的时候，图片实现放大效果
`.prev:hover { transform: scale(1.5)}`


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
那么此时pathname 为 /pathname

6. window.location.hostname;
同上面的举列
那么此时hostname 为  example.com

JSON.stringify() 和 JSON.parse() 的区别

JSON.stringify() 方法转化js对象或值为json字符串

JSON.parse() 则是相反，去掉引号。
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
  background: url(), url()
}
```

// 遇到的vue情况继续在这里写

vue 如何写内联样式

vue 如何写内联的伪元素样式呢


`<div :class="{'top': true, [styleColor]: !!styleColor}"></div>`
`<div :class="{'moveRight': scope.row.deleteStatus === '2'}"></div>`
简直是神用法。
注意这里的styleColor 也是变量, 如果这个变量存在，那么就存在这个变量class样式，否则就不存在。

`&` 代表的是平级

```
window.onscroll = function(){
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是网页正文全文高
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

移除某个元素的类名
`document.getElementById("myDIV").classList.remove("mystyle");`
z-index 越大越在上面。

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

为什么给button 写上样式`float:'right'` 之后它的其他样式都失效了。
并且onClick也不起作用了。
还原真实场景
```
<Button style={{ float: "right" }}></Button>
<StandTable {...props} />  // 一个table组件
```
此时此刻，看到按钮正处于，页面的最右端。但是事实上已经被下面这个
table 组件给包裹了。如果给button加上样式，margin-bottom: 20px;
点击效果和鼠标效果，仍旧是没有反应的。
但是如果给 table 组件加上 margin-top: 20px.样式效果就起作用了。

window.addEventListener(事件（string）, 方法, false)

[参考链接](https://blog.csdn.net/wyk304443164/article/details/71538853)
关于网页转成二维码
yarn add qrcode.react
```
import QRcode from qrcode.react;

<QRcode size={150} value={url} />
```


input 明文，如何改为密文
`<input type="password" placeholder="请输入密码" />`


如何做点击复制一段内容
[参考链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand)

用js获取某个js类
```
function getClass(classname) {
  if(document.getElementsByClassName) {
    return document.getElementsByClassName(classname);
  } else {
    var results = new Array();
    var eles = document.getElementsByTagName("*");
    for(var i = 0; i < eles.length; i++) {
      if(eles[i].className.indexOf(classname) !== -1) {
        results[results.length] = eles[i];
      }
    }
    return results;
  }
}
```

删除某个标签的某个属性。
```
var el = document.querySelector('.nav');
el[0].removeAttribute('style');
```

1月28日     vue 问题
今天发现一个很奇怪的问题，我在created，直接用代码如下：
```
export default {
  data() {


    },
  created() {
    userQuery({
      type: 'get',
      params: params
    }).then((res) => {
        ......
    })
  },

}
```
页面什么的都已经是渲染出来了，控制台也是没有任何的报错。
但是这个请求却并没有发。后经改动，改成如下这样成功发起请求。
```
export default {
  data() {

    },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      userQuery({
        type: 'get',
        params: params
      }).then((res) => {
        ......
      })
    }
  }
}
```
至于原因我还没有了解清楚。


1月29日  遇到的vue问题
```
<template>
  <div @click="get"></div>
</template>
export default {
  data() {

  },
  methods: {
    get() {
      userQuery({
        type: 'get',
        params: params
        }).then((res) => {
          console.log('这里会后执行'); // 后执行
        })
        console.log('这里会先执行'); // 先执行
    }
  }
}

// 如上是因为异步的
```

1月31日  vue 问题， 不同于react的地方
关于vue
```
// xxx.vue 文件
<template>
  <div>
    <span>{{ moment(123456789210010)}}</span>
  </div>
</template>


import moment from 'moment';
```
// 如上这样的代码就会直接报错
`[Vue warn]: Property or method 'moment' is not defined on the instance but referenced during render.`
针对如上的解决办法如下
```
// xxx.vue 文件
<template>
  <div>
    <span>{{ handleMoment(123456789210010) }}</span>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: '',
  data() {

  },
  methods: {
    handleMoment(timestamp) {
      return moment(timestamp).format('L').split('/').join('-');
    }
  }
}
</script>
// 将其写成方法，放在methods里面，然后render的时候，只需要调用该方法得到结果，然后渲染出来就好了
```


关于在less里面
```
:global {
  .ant-modal {
    .ant-modal-content {
        min-width: 500px;
    }
    .modalForm {
      min-width: 500px;
      .ant-form-item {
        margin-bottom: 5px;
      }
    }
  }
}

// 上述这一段css代码，在本地是完全没有执行，在测试环境上却执行了。
```

重新渲染组件
https://segmentfault.com/q/1010000006090379
代码如下：
```
<component v-if="isRender"></component>
this.isRender = false;
this.$nextTick(function() {
  this.isRender = true;
  })
```
校验邮箱，校验手机号


css 里面的 @keyframes 是什么意思，有哪些用法。
[参考 w3schools](https://www.w3schools.com/css/css3_animations.asp) 
```
.show-animation {
  animation: showAnimation 0.3s ease-in-out;
}

@keyframes showAnimation {
  from {
    transform: scale(0.4);
  }
  to {
    transform: scale(1);
  }
}
```

`@click.stop.prevent = "close"` 是什么意思？

[参考](https://vuejs.org/v2/guide/events.html)
点击的时候，阻止事件冒泡和默认事件。

vue 中关于绑定class的几种方式。
（1）Object Syntax
```
v-bind:class='{ active: isActive, 'text-danger': hasError }'

data: {
  isActive: true,
  hasError: false
}
```

```
<div v-bind:class="classObject"></div>

data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

（2）Array Syntax
```
v-bind:class="[{ active: isActive }, errorClass]"></div>

样式 为 active 和 errorClass 变量的值

data: {
  isActive: true,
  errorClass: 'text-danger'
}
```


vue 中关于绑定style的几种方式

```
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px'}"></div>

data: {
  activeColor: 'red',
  fontSize: 30
}
```

```
<div v-vind:style="styleObject"></div>

data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

```
<div v-bind:style="{baseStyle, overridingStyles}"></div>
```

vue 里面复制文字到粘贴板
[v-copy npm包](https://www.npmjs.com/package/v-copy)
只要看一下就会用了。

vue 中 transition 和 component 的用法是什么?

```
<transition name="fade" mode="in-out">
</transition>
```
仅仅是起到一个动画的形式吧

动态的component，根据不同的条件渲染不同的组件。
[参考](https://vuejs.org/v2/guide/components.html#Dynamic-Components)
```
<component :is="pageType"></component>
```

关于 created 和 computed 和 render部分（dom渲染部分）之间的关系。
```
<template>
  <transition name="fade" mode="in-out">
    <component :is="pageType"></component>
  </transition>
</template>

<script>
  import Page from "@/components/PageLoading";
  import Homework from "@/components/Homework";
  export default {
    name: 'xxx',
    components: {
      PageLoading
    },
    data() {
      return {
        homeworkType: ""
      }
    },
    created() {
      console.log(Page, 'created');   // 这里也是可以打印出Page的
    },
    computed: {
      pageType() {
        switch(this.homeworkType) {
          case "":
            console.log(Page, 'computed');   // 这里是可以打印出Page的
            return Page;
          default:
            return Homework
        }
      }
    }
  }
</script>
```
上述代码，我想说明的问题是 data return 出来的时候，是并没有Page 这个东西的，因此Page是不可以运用在
`<template></template>`里面的。但是created方法和 computed对象里的方法里都是可以获取到的。于是
我又想起了之前import momment from ‘moment’，我想直接在`<template></template>`里面直接使用，比如
`<p>{{ moment(变量时间戳).format('L').split('')}}</p>`类似就是这样的形式，发现直接就报错了。找不到
moment。对于这种情况，请问我应该如何做呢。moment 在 data， computed，created，里面都是可以获取到，
那么我肯定是需要在这里处理一下，处理之后，肯定是要保证在`<template></template>`里面可用。比如是如下的代码：
```
<template>
  <div>
    <p>{{ handleMoment(str) }}</p>
  </div>
</template>
import moment from 'moment';
<script>
computed: {
  handleMoment(str) {
    return moment(变量时间戳).format('L').split('')  // 类似这样
  }
}
</script>
```

那么我还有其他的方式，直接在`<template></template>`里面使用 moment or Page 吗？
答案是有的，如下代码：
```

<template>
  <transition name="fade" mode="in-out">
    <component :is="page"></component>
  </transition>
</template>

<script>
  import Page from "@/components/PageLoading";
  import Homework from "@/components/Homework";
  export default {
    name: 'xxx',
    components: {
      Page
    },
    data() {
      return {
        homeworkType: "",
        page: Page         // 其实这里不就是相当于将 Page 赋值给了this.page,而this在
        // template 里面是可以省略掉的。如上所是，只要写page就好了。
      }
    },
    created() {
      console.log(Page, 'created');   // 这里也是可以打印出Page的
    },
    computed: {
      pageType() {
        switch(this.homeworkType) {
          case "":
            console.log(Page, 'computed');   // 这里是可以打印出Page的
            return Page;
          default:
            return Homework
        }
      },
      test() {
        console.log(this, '可以看看这里的this里面究竟是有哪内容。');
        // 从这里就可以看出 this.test即为 这里是test的内容
        // 其实写在这里，比写在data里面，更是多了些，逻辑代码，比如一些处理和判断
        return '这里是test的内容'
      }
    }
  }
</script>
```
那么请问，computed 里面的方法的处理， 是不是也是将其注入到this里面，这个还还有待验证。
我的猜想是正确的。

关于props 可以给一个默认的值
```
export default {
  name: 'example',
  props: {
    config: {
      type: Object,
      default: () => {
        return { w: 3, h: 4, r: 0.4 };
      }
    }
  }
}
```
如何在父组件中调用子组件的方法。
```
// 父组件
<template>
  <Child
    ref="child"
  />
  <div @click="play">调用子组件中的方法</div>
</template>

methods: {
  play() {
    this.$refs.child.click();
  }
}
```
```
// 子组件Child内部内容
<template>
  <div>子组件</div>
</template>

methods: {
  click() {
    alert('点击')
  }
}

// 1、子组件里面并不需要写ref。2、子组件并不一定要用上这个方法
```

vue 中emit的用法， 对应在子组件中使用父组件的方法。
```
// 子组件
<template>
  <div @click="close">
    子组件
    <slot></slot>
  </div>
</template>

methods: {
  close() {
    this.$emit('callback');
  }
}
```

```
// 父组件
<template>
  <Child @callback="closeCard">
    <div>这里的内容将会被直接被传到子组件中</div>
  </Child>
</template>

methods: {
  closeCard() {
    // do something 即执行一些逻辑
  }
}
```

那子组件要用到父级的两个方法，应该要怎么做呢？
暂时还不知道

关于vue中的计算属性和侦听器
```
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + '' + this.lastName
    },

    // setter
    set: function (newValue) {
      var names = newValue.split(' ');
      this.firstName = names[0];
      this.lastName = names[names.length - 1]
    }
  }
}

// 现在再运行 vm.fullName = 'John Doe' 时， setter 会被调用，vm.firstName和
vm.lastName  也会相应地被更新。
```

在dom里，有时候需要写很多的逻辑判断，{{ !value ? '' : '' }} 其实像这些三目判断，都是可以放在
computed 里，写成方法，然后返回 三目运算的计算结果。

关于写在数据里面的几种方式的比较的，（写在data里，写在computed里）

```
<template>
  <div :test="changeHead3(s)"></div>
</template>
export default {
  name: 'test',
  computed: {
    changeHead1() {
      return { backgroundColor: '#f2f2f3', width: '100%' }
    },
    changeHead2() {
      return () => ({ backgroundColor: '#f2f2f3', width: '100%' })
    },
    changeHead3(s) {
      return { backgroundColor: '#f2f2f3', width: '100%' }
    } 
  },
  data() {
    return {
      changeHead: { backgroundColor: '#f2f2f3', width: '100%' } 
    }
  },
  created() {
    console.log(this, 'print this');
    // changeHead1 和 changeHead 和 changeHead2()  都是对象，可以混用，changeHead2 是一个函数
    // 注意 changeHead3 不是一个函数，而是对象，因此，不可能传参，上述changeHead3的完全是错误的写法
  }
}
```

```
 ajax 原生请求写法
function getVersion() {
    var httpRequest;
    httpRequest = new XMLHttpRequest();

    if(!httpRequest) {
      alert('Giving up : Cannot create an XMLHttp instance');
      return false;
    }

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'http://test.pipacoding.com:8000/public/version.txt');
    httpRequest.send();

   function alertContents() {
     if(httpRequest.readyState === XMLHttpRequest.DONE) {
       if(httpRequest.status === 200) {
         const version = httpRequest.responseText;
         const oldVersion = Cookie.get('version') || 'version0';
         console.log('oldVersion', oldVersion);
         console.log('version', version);
         if(oldVersion !== version) {
             window.location.reload(true);
             Cookie.set('version', version);
         }
       } else {
         alert('There was a problem with the request.');
       }
     }
   }
}
```

3月6日
我今天遇到了一个很奇怪的问题，
```
if(oldVersion !== version) {
  window.location.reload(true);
  Cookie.set('version', version);
}

// 这个里面的Cookie.set('version', version); 这个执行了，
// 但是window.location.reload(true) 却没有执行。我觉得这件事很奇怪。因为是需要当前页面。不是在当前页面的，就不会执行了。
```
如何在函数内部，调用该函数。

如何判断一个数，是不是小数。
用正则表达式进行判断。
var reg = /^[0-9]{1}\.\d+$/

如何判断字符串里含有8位数字呢，正则
