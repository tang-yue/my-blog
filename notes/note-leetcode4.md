9月27日开始
复习整理笔记

1. 关于sort的整理

2. ^ 相同则返回0， 不同则返回1

3. 我好像从来没有这个意识去直接return， 而是赋予了一个变量之后再return

4. 直接更改某个数组的长度是会改变原数组的，前一个数组concat后一个数组，
前一个数组是不会改变的。

5. (new Set(nums)).size 这个用法不太常用，需要记下

6. note-leetcode3.md 的所有题目需要重新实现一遍

7. `==`， `>`， `<`， `!=`， 都会尝试将值转换成类型进行比较。而严格操作符则不会。`7 > '3'   // true`

8. `"Code Camp".replace(/(\w)\s(\w)/, '$2 $1') // return "Camp Code` 

9. 推荐两个练习正则的网站
https://regexr.com/  
https://regexone.com/lesson/capturing_groups

10. 
```
let hello = " hello world  ";
let regex = /^\s*|\s*$/g;
let res = hello.replace(regex, "");
```

11.
```
str.substring(indexStart[, indexEnd]);
str.substr(start[, length]);  // 包含start 位置上的元素
```

12.
```
// 给array 加一个myMap 方法，该方法和array 本身的map方法有着同样的作用。

let arr = [3,4,5];
Array.prototype.myMap = function(callback) {
    let newArr = [];
    this.forEach((item) => {
        newArr.push(callback(item))
        })
    return newArr;
}

let arr_new = arr.myMap(function(item) {
        return item * 2;
        })
```

13.
function impartial(x, y, z) {
    return x + y + z;
}

partialFn = impartial.bind(this, 1,2)
