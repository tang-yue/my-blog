学习公司的vue 项目。
所有的一切都是从模仿，记忆开始。
我觉得现在改端口号这些，都是在浪费时间。


1. 问题1
布局里面有好多处都是处于页面的正中位置。
如何写css 样式。

padding 方式。 不是太好。

html1
```
<div class="content width">
    <span></span>
    <p></p>
</div>
```
html2
```
<div class="content">
    <div>
        <span></span>
        <p></p>
    </div>
</div>
```

css.
```
.content {
    width: 910px;
    margin: 0 auto;
}
```

以html1的方式，用如下的css，并不会达到居中的效果。
而以html2的方式，就可以达到居中的效果。

2. h3 可设置属性
height
margin
line-height
height 和 line-height 有一定的关系

3. 清除浮动 常用方法

父级样式
.clearfix:after {
    content: '';
    display: block;
    clear: both;
}
子级都是浮动的。

4. span 里面再加 background, 里面图片
显示不出来是怎么回事呢。仅仅简单是因为这张图片
找不到了。


5. 控制背景图片变小
用`background-size: auto 20px`

加入我们页面现在写到方法部分。

整体是通过index进行相连接。

var scrollTop = window.pageYOffset
|| document.documentElement.scrollTop
|| document.body.scrollTop
|| 0;

这里的视频是通过那个标签定义的呢

6. 视频封面的图片究竟是如何加上去的呢。
以一个div的background属性，加上去的

7. 遇到一个问题
今天想用background属性添加一个背景图片，背景图片
无论怎样都无法盖住，想要盖的视频全部，上下总会
留有一些没有盖住的地方。
最后用background-size:cover 属性完美解决问题。

8. 感觉显示样式图片，用background属性，很难调样式。
我觉得应该是有一些关键的常用的地方。
background-size: cover;
background-size: 100% 100%;
background-size: contain









