我将要做的一些任务。
1. leetcode 做完的，问题和答案整理出来
2. 了解一个项目的搭建
3. 阅读react 官网还没有看完
4. umi 有空了解
5. 等我有空再折腾VScode吧
6. 分析 ant design pro 源码.
7. 搭建个人博客，不用worldPress.
8. 我觉得学习vue  一开始还是应该看视频学习
9. 关于dva  我可以写哪些东西。

10. 学习一下 promise 

（1）. 关于 save 和 saveData  数据存储的差别
（2）.

10. 把上传图片，用react 写一个demo出来

11. 看看过去的react-demo 学习跳转路径这块的写法。

12. 整理vue项目脚手架

9. 学习VScode 应该对很多东西，保持强烈的好奇。

10月10日 以后
学习vue框架，和刷js笔试面试题

研究request 封装

对于react里面
this.renderForm()
this.resquestData.bind(this)
直接就是this.click
请问这三种情况，我应该是什么时候使用哪一种。
我对此并不是很清楚。

难题要一个一个的突破。

如何改变vue框架的组件的原生css。
同样的dva框架的组件的原生css。


熟练vue 过程中，需要进一步解决的问题。
header 部分，通过传参的方式，更改样式。其中涉及到伪元素样式，
这个时候我放弃了传参的这种选择。

第二种方式遇到了，一个组件的不同样式，被运用到各个view，发现这个view相互影响

最后的最后只能采取最笨的办法。

最笨的办法也同样是走不通。

走不通了，怎么办，难道我只能看别人的答案？看别人的答案。
全部的大致过一下 css3， 主要是太多了
看js高程需要巩固的内容如下
1、navigator 全部  userAgent注意下
2、可以通过window.addEventListener监听事件
resize, DOMContentLoaded, 除了这些，还有哪些复杂的。
window.addEventListener(事件，执行的而函数，false)


css background 的一连串的属性的分析。

关于document.documentElement.xxxx 和 document.body.xxxx
有很多这样的属性，需要分析下

如何写好盒模型，有哪些别人的经验，心得。


关于rem布局，有点不太理解。
关于移动端，究竟设置根节点html的font-size的大小为多少正合适。

关于要给pxtorem, 写个pxtorem-exclude npm包。  这个很重要。

要给 vue 里面的列表展示，写成组件的时候


关于vue搭建移动端，的几种方式。需要自己写出脚手架。
第一种方法
步骤一
在./public/index.html 入口文件的head 部分加上如下代码：
```
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

步骤二
在./src/main.js 文件中 执行需要的一些初始化内容

utils/index.js
```
// rem 布局   html font-size初始化
(function initSize(doc, win) {
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var _w = doc.documentElement.clientWidth || doc.body.clientWidth
            _w = _w > 640 ? 640 : _w
            var _size = _w / 750 * 100
            _size = _size < 60 ? _size : 60
            doc.documentElement.style.fontSize = _size + 'px'
        };
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window)
```
在main.js 中引入 上述文件` import '@/utils/index'`

步骤三
这样写的话，在样式里那么就是该写 rem的时候，写rem， 该写px的时候，写px就好了。


// vue 常用的现成的组件
1、vant
2、iview
3、element-ui


8月25日

9月18日 新增
1、要学习obj所有不常用的属性
2、要看scriptoj上的react小书


2020 年 1月9日

const, let 的使用场景





