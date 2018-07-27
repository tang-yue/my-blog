最近落下的知识有点多呀。
来自阮一峰 博客 es6.

## 11.Set和Map数据结构
我觉得我做什么事情都应该有始有终，所以，我应该先去把node 还剩的几课给学完，然后再来写这个。

## delete 的用法
删除对象 可以完全的做到。
删除数组中的某个元素 并不会改变数组的长度 仅仅是这个值变成undefined了。

## Array.isArray() 的用法
```
// 以下都是返回true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype); 
```



