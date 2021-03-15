npm 私包

### 移动端相关

1. 移动端真机调试参考： 

[参考1](https://www.cnblogs.com/tengrl/p/11014369.html)

[参考2](https://www.cnblogs.com/zt123123/p/14240642.html)

### 小知识点

1. 想要匹配两个字符串的中间字符串的内容：

```js
var reg = /\[audio=([0-9a-z]+?).mp3\]/g
let matchContent = option.content.match(reg);
console.log(matchContent)   // 类似于 ["[audio=1.mp3]", "[audio=2.mp3]"]
```

2. 