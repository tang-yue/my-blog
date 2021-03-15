## 抽奖项目笔记

类似于 https://github.com/landluck/lucky_wheel
首先搭好了初始的框架

#### 移动端，关于，最父级部分，高度和宽度如何设置100%。

设置宽度html, body, #app, 和最父级为100%。
同时,`<meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">`,如果还是出现左右晃动的情况，那么应该是，
某个标签元素的宽度太宽了，需要单独设置宽度，将其不超过html的宽度。
在某种特殊情况下，还可以用overflow:hidden 进行将其超出部分给隐藏掉。

#### background-size 有三种选择 contain（是根据高度） cover (是根据宽度) 100%

#### transform 变换

#### transition 过渡，指的是运动会缓冲.

#### 循环里的动态图片 以:src 的方式引用有哪些方法。
目前用的是
```
<img :src="icon"  alt="icon" />
data {
	icon: require('../assets/img/xxx.png')
}
```

#### 关于first-child 

有点生疏了。.xxxx:nth-child(number)

#### setInterval

```
	setInterval(function() {
                this.wheel_rotate += 2;
            }.bind(this), 3);
    console.log('并不是一直再执行定时器，这条语句也会执行');
```

中断interval定时器，用这条语句 clearInterval(定时器名称);

发现指针是跟着大圆盘，旋转而旋转。
如何让指针的位置不动。已解决

#### 弹框

写个弹框，可以将想要传的content,弹窗内容给传进去。
[参考弹层](https://juejin.im/post/5adadba66fb9a07ac859fb38)

以background的方式，写图片，图片不会变形。而以长，宽的形式，会很容易的就导致图片变形。

node 部分 ，使用node去写一个接口。
[参考文章](https://www.zhihu.com/people/miya1019/posts?page=1);
[参考文章](https://blog.csdn.net/djjj123456789?t=1)

token的那个部分我没有写，因为我这个并不需要。

将对象里的某个值给筛出来，然后组成一个数组。

#### 遇到一个产生左右晃动的bug

就是在旋转的时候，一个正方形，如果正好是正着放的话，那么并不会超出手机的整个屏幕，但是当它旋转的时候，
尖角就会超出屏幕的边缘。最后在最父级加上样式`overflow-x: hidden;
  overflow-y: scroll;`完美解决问题。

transition 这个 css属性这么厉害。`'transform 6s ease-in-out 0s'`

#### 让文件不校验

如何让 .eslintrc.js 这个文件起作用，但是对某个文件不起作用。
添加.eslintignore 文件， 增加代码，例如: `/src/utils/rem.js`


### 移动端 撑满全屏的问题

移动端往往会用到，撑满全屏的情况。
今天遇到的一个场景是，一个背景图片，用background属性，我给了对应的div一个固定的高度，
然后用background-size: contain; 给一个固定高度的原因是，不让其产生滚动条，因为往下滚
完全是空白的。

这样产生的问题就是，在有的手机上，背景图全部露出来，但是，在有的手机上，背景图根本就没有办法
撑满整个手机屏幕，下面会有空白。


处理的方式是：
```
body {
  height: 100%;
  overflow: hidden;
  min-height: 26rem; // 为了兼容在小屏幕的手机上，
  // 因为背景图太长，而又没有滚动条，导致看不见背景下面的一部分
}
背景层父级层 {
  height: 100%;
}

背景层 {
  height: 100%;
  background-image: url('@{img-url}/lottery-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
```

用node 写接口，需要以下的要求。

写一个纯get的， 然后数据，是哪些呢，自己造。    done
再写一个,get的，需要调用别人的，get请求，经过处理再返回一个get请求。 done
尝试写项目中的两个接口。 4月12日 4点24分开始 再写一个post请求 done

我要求你能够手写switch。
```
switch(id) {
  let name = '默认值'
  case 10:
    name = '数字10name';
    break;
  case 11:
    name = '数字11name';
    break;
  default:
    name = '默认值'
}
```

:style="{'WebkitTransform': wheel_rotate, 'transform': wheel_rotate}" 

判断手机版本类型，参考这篇文章。https://www.jianshu.com/p/00047e800ca1

但是其中有错误，自己需要修改，我不想把别人的写的所有，全部都自己再写一遍。

`align-content: center;` 这个属性是表示什么意思。

vue.config.js 里的`process.env.NODE_ENV`这个表示什么意思。我该如何获取到呢。

vue 里面的process 里的各个参数代表什么意思。

最大的反思:  接口返回数据的顺序问题。以及时间问题。


问题1， 解决，没有滚动条时，背景充满全屏
有滚动条时，背景颜色却没有撑满的问题。
```
// 这是一个总的div
.layout {
  <!-- display: flex; -->
  <!-- background-color: #eee; -->
  min-height: 100vh;  // 只要这一条就足够了，想想也还真神奇。
}
```

问题2，vue项目如何引入svg

1、首先在iconfont 网，找到自己的图标，添加入库，在自己的项目中使用，
选择symbol，下载图标，选择svg下载。
2、将iconfont.js 文件添加至项目，然后在对应的需要使用的view层引用，再使用。

```
import '../assets/iconfont.js';

<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-log-out"></use>
</svg>
```

问题3，如何限定当前view页面的css只属于当前view，而不被其他所影响
`<style scoped></style>`

问题4，该用户没有登录跳转到登录页面


问题5，同一个Header 组件，但是在不同的view 层，稍微有些样式上的不一样。
首先这个不同的view层，肯定是要引用Header组件。
```
// view 层
<Header :styleColor="topNavColor" />

data() {
    return {
        topNavColor: 'black'
    }
}
```

```
// Header 层 外层的div
<div :class="{'topNav': true, [styleColor]: !!styleColor}">
</div>

props: ["styleColor"]
```

如果向Header组件传参数了，那么该外层的div就有两个class，即topNav，和black。
因此我们就可以明白有时候是topNav，有时候是topNav和black。
变动的样式，只要在class为black 下写css样式就可以了。

问题6，如何当滚动到这个标题的时候，给这个标题加上样式
如果是一种那么就会变得很简单，但是如果是很多个呢。
```
mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
methods: {
  isVisible($node) {
    var scrollTop = document.documentElement.scrollTop;
    var windowHeight = document.documentElement.clientHeight;
    var targetTop = $node.offsetTop;
    if(targetTop < scrollTop + windowHeight - 300 && targetTop > scrollTop) {
      return true;
    }
    return false;
  },
  handleScroll() {
    var titles = document.querySelectorAll('.title');
    for(var title of titles) {
      if(this.isVisible(title)) {
        title.classList.add('effect');
      }
    }
  }
}
```

```
// 如果该标题露出底部，那么让其标题的底边，从中间往两边移动。
 .title{  
        margin: 20px;  
        position: relative; 
        z-index: 99;
        &:after{  
          position: absolute;
          content: '';
          z-index: -1;
          width: 0%;
          height:20px;
          background:#F6CA00;
          left: 50%;
          bottom: 0;
          border-radius: 10px;
          transform: translateX(-50%); // 向左移动自身长度的一半  
        }
        &.effect:after{
          width: 100%;
          transition: all 1s ease-out;
        }  
      } 
```

问题7: 在vue里面如何加弹层和遮罩。
我面对这样的问题，不会做，内心却没有半点的羞愧之色。
[参考文章](https://juejin.im/post/5adadba66fb9a07ac859fb38)


问题8: 究竟这个弹层上的内容随着底下内容的滚动而滚动，这个究竟是如何
做到的呢。
我终于明白了，这个不是蒙层，而仅仅是多加的一层透明度。
对于这道题，我不明白自己究竟是哪个方面知识的不足。

关于postcss-px2rem-exclude 和 postcss-px2rem两者是有区别的。感觉是有很多的坑。

问题9: 请问vue 本地运行的css样式效果，和线上运行的css样式效果是有所区别的，
请问这到底是为什么呢。
通过百度查询，执行不同css样式文件的顺序不一样。

让背景充满全屏，vue的做法
html,body,#app {
  height: 100%;
}
但是当出现滚动条的时候
背景并没有充满整个屏幕。

vue 项目使用 svg https://segmentfault.com/a/1190000012213278

