js 常用函数整理如下
1. 数组如何去重
[参考](https://github.com/mqyqingfeng/Blog/issues/27)
默写一个去重方法
方法一
```
function unique(arr) {
    var res = [];
    for(let i = 0; i < arr.length; i++) {
        if(res.indexOf(arr[i]) === -1) {
            res.push(arr[i]);
        }
    }
    return res;
}
```
方法二
```
function unique(arr) {
    var res = arr.filter(function(item, index, arr) {
        return arr.indexOf(item) === index;
    })
    return res;
}
```
方法三 es6数组去重的方法
```
function unique(arr) {
    return Array.from(new Set(array));
    // return [...new Set(array)]
}
```
2. 字符串如何去重
