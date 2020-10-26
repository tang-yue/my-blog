js 常用函数整理如下

### 1. 数组如何去重
[参考](https://github.com/mqyqingfeng/Blog/issues/27)
默写一个去重方法
方法一
```
function unique(arr) {
    var res = [];
    for(let i = 0; i < arr.length; i++) {
        if(res.indexOf(arr[i]) === -1) { // 如果res里面没有这个值，那么就把这个值给push进去
            res.push(arr[i]);
        }
    }
    return res;
}
```
方法二
```
// 这个方法也是挺不错的，默写一遍用filter去重
function unique(arr) {
    var res = arr.filter(function(item, index, arr) {
        return arr.indexOf(item) === index;  //  这里返回的是布尔值
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
### 2. 字符串如何去重

### 3. 快速生成一个从0-n的数组

`Array.from(new Array(10).keys())`

### 4. 关于sort的总结
```
   (1) arr.sort() 会改变原数组，sort 对于排序两位数，三位数，负数，并不起作用
   (2) arr.sort((a,b) => a-b); 对于排序负数，两位数，三位数都是可以的
   (3) arr.sort((a,b) => a>b); 可以排序字母
```
### 5 复制数组不改变原数组方法

1、connect

为了防止 array1 为undefined，最好写成下面这样。

(1) first method
`var array2 = [].concat(array1 || []);`

(2) second method
`var array2 = (array1 || []).concat(); `

2、spreads ... to copy array
`const itemCopy = [...items]`

2、slice

`var newArray = array.slice();`

为了防止 array1 为空，最好的方式是`var array2 = (array1 || []).slice();`

3、filter

举列说明:

```
var array = [2, 4, 5, 7];
var uniqueProducts = array.filter(function(elem, i, array) {
	return array.indexOf(elem) === i;
	}
);

uniqueProducts = [8,9,10,11];

console.log(array);  // [2, 4, 5, 7]
console.log(uniqueProducts); // [8, 9, 10, 11]
```
4、from

`var arr2 = Array.from(arr); // 并不会去重` 

5、an easy way to copy Array and Objects：

`var arr2 = JSON.parse(JSON.stringify(arr));`

6、 直接用for循环

以上全部，参考文档
[参考文档](https://stackoverflow.com/questions/7486085/copying-array-by-value-in-javascript)

数组里面是对象的去重

let re1 = add_selectedRow.map((item) => JSON.stringify(item));
    let re2 = re1.filter((item, index, new_arr) => new_arr.indexOf(item) === index);
    let res_add_selectedRow = re2.map((item) => JSON.parse(item));

