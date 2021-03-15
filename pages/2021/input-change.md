记录一次 input change 修复bug问题

写于 2021年3月15日 5点

问题描述：

用原生的input，onchange 方式，在ios 手机端 偶现调起相机，拍完照片，然后点击使用照片，却监听不到change 事件。

解决方式：

当时觉得特别的奇怪，后来觉得是不是没有获取input标签的缘故，也就是监听并不是input的onchange事件。

后来才发现只有是主动调起相机，才会监听到onchange 事件。

因为我在input标签上覆盖一个大的拍照按钮，但是在浏览器上点击拍照按钮是调不起文件的，所以如果点击的是拍照按钮那么执行相机的click() 事件，的确是可以了。

在pc 和 安卓端，这样写都能监听到onchange 事件。但是在ios手机 上属于被动调起，是监听不到change事件的。

所以也就出现了有时是主动调起，有时是被动调起。

本质问题： 大的拍照按钮覆盖在input标签上，我如何点击大的拍照按钮主动调起相机呢？？

我明明设置了input标签的 opacity:0 为什么必须放在图片下面呢？很显然是可以放在图片上面的。

总结：

不要被动调起，input标签完全可以放在图片上面。