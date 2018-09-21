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
3. 快速生成一个从0-n的数组
`Array.from(new Array(10).keys())`
4. 关于sort的总结
```
   (1) arr.sort() 会改变原数组，sort 对于排序两位数，三位数，负数，并不起作用
   (2) arr.sort((a,b) => a-b); 对于排序负数，两位数，三位数都是可以的
   (3) arr.sort((a,b) => a>b); 可以排序字母
```
