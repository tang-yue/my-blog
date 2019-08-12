// 7月12日
整理以前的笔记，觉得有必要记忆，并且默写的。再次整理，记录如下。

去掉默认样式

```
input {
  outline: none;
}

a {
  text-decoration: none;
}

ul, li {
  list-style: none;
}

p {
 border-style: none;
}
```

border-radius:  分别表示 左上角 右上角 右下角 左下脚

z-index:  后面跟的数字，请问，数字大的在上面还是数字小的在上面?

越大的越在上面

关于background 有必要要整理成文字。


//////

document.documentElement 和 document.body 有什么区别

[参考](https://www.jianshu.com/p/fb867e8109f7)
在文档使用了DTD时，document.body.scrollTop的值为0，此时需要使用
document.documentElement.scrollTop来获取滚动条滚过的长度；在未使用DTD定义的文档时，使用
document.body.scrollTop获取值。

获取元素，并给该元素添加class类名                 默写

document.getElementByTagName('div').classList.add('effect');

移除某个元素的类名                               默写

document.getElementById('myDiv').classList.remove('myStyle')

transform 和 transition


