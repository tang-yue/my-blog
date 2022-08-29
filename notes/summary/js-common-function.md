js 常用函数整理如下
## 应用在业务上的函数
### 1. 时间戳转成年月日时分秒
```ts
// 时间戳转年月日
export const formatDate = function (mydate: number): string {
  mydate = mydate * 1000
  const date = new Date(mydate)
  const YY = date.getFullYear() + '-'
  const MM =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-'
  const DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  return YY + MM + DD
}
// 时间戳转年月日时分秒
export const formatAccurateDate = function (mydate: number): string {
  mydate = mydate * 1000
  const date = new Date(mydate)
  const hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  const mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  const ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
  return formatDate(mydate / 1000) + ' ' + hh + mm + ss
}
```
### 2.字符超出提示

```ts
import { InternalRuleItem } from 'async-validator/dist-types/interface'

export const validateLimitStr = function (num: number) {
  const validateChar = function (
    rule: InternalRuleItem,
    value: string,
    callback: (args?: Error) => void
  ) {
    if (value === '') {
      callback()
    } else if (value.length > num) {
      callback(new Error(`最多支持输入${num}个字符。`))
    } else {
      callback()
    }
  }
  return validateChar
}
```
### 3.getUrlParam函数

```js
function getUrlParam(key) {
  const search = location.href.split('?')[1] || ''
  const paramsAry = search.split('&')
  for (let i = 0, item;
    (item = paramsAry[i++]);) {
    if (key === item.split('=')[0]) {
      return item.split('=')[1]
    }
  }
  return null
}
```
### 4

## 单纯的函数
### 1. 数组如何去重
方法一
```js
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
```js
// 这个方法也是挺不错的，默写一遍用filter去重
function unique(arr) {
    var res = arr.filter(function(item, index, arr) {
        return arr.indexOf(item) === index;  //  这里返回的是布尔值
    })
    return res;
}
```
方法三 es6数组去重的方法
```js
function unique(arr) {
    return Array.from(new Set(array));
    // return [...new Set(array)]
}
```
[参考](https://github.com/mqyqingfeng/Blog/issues/27)

### 2. 字符串如何去重

### 3. 快速生成一个从0-n的数组

`Array.from(new Array(10).keys())`

### 4. 关于sort的总结

```js
   (1) arr.sort() 会改变原数组，sort 对于排序两位数，三位数，负数，并不起作用
   (2) arr.sort((a,b) => a-b); 对于排序负数，两位数，三位数都是可以的
   (3) arr.sort((a,b) => a>b); 可以排序字母
```
### 5. 复制数组不改变原数组方法

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

```js
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


[参考文档](https://stackoverflow.com/questions/7486085/copying-array-by-value-in-javascript)

### 6. 数组里面是对象的去重

```js
let re1 = add_selectedRow.map((item) => JSON.stringify(item));
let re2 = re1.filter((item, index, new_arr) => new_arr.indexOf(item) === index);
let res_add_selectedRow = re2.map((item) => JSON.parse(item));
```
