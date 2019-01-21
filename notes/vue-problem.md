问题1， 解决，没有滚动条时，背景充满全屏
有滚动条时，背景颜色却没有撑满的问题。

给最外层设置背景颜色的div加样式：
```
// 宽
min-width: max-content;
min-width: -moz-max-content;
// 高
min-height: max-content;
min-width: -moz-max-content;
```

问题2，vue项目如何引入svg

1、首先在iconfont 网，找到自己的图标，添加入库，在自己的项目中使用，
选择symbol，下载图标，选择svg下载。
2、将iconfont.js 文件添加至项目，然后在对应的需要使用的view层，引用。

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
          transform: translateX(-50%);  
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
