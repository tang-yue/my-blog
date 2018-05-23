map and reduce
### reduce的含义
[reduce和Transduce的含义](http://www.ruanyifeng.com/blog/2017/03/reduce_transduce.html)

[mdn reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

1. reduce 是一种方法，能够类似累加器，同时能够把数组里面的元素拆分成单独的值 的函数
举列说明
```
	const array1 = [1, 2, 3, 4];
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	console.log(array1.reduce(reducer)); // 10
	console.log(array1.reduce(reducer, 5));  // 15
```
2.用法

arr.reduce(callback [, initialValue]);

(1)callback 接受四个参数

+  accumulator  叠加回调函数，返回回来的值。
+ 它是最后一次调用回调函数之后，返回的累计值。
+ currentValue 当前值
+ currentIndex 当前值的下标
array 调用reduce方法的数组
(2) initialValue

该值用来作为第一次调用callback的第一个参数。如果没有提供初始值，数组里面的第一个元素被应用。

空数组调用reduce方法，且没有一个初始化的值，将会报错。

(3) 它返回的是一个值

注意：
如果 初始化值没有被提供 ，reduce()将要执行回调函数，从数组中的下标为1开始，跳过下标为0，如果初始化值被提供
那么，就从下标为0开始。

关于是否提供初始化值，有三种可能的输出。
举列说明
```
var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce() without initialValue

[ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42
[ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
[                      ].reduce( maxCallback ); // TypeError

// map/reduce; better solution, also works for empty or larger arrays
[ { x: 22 }, { x: 42 } ].map( el => el.x )
                        .reduce( maxCallback2, -Infinity );

// note: -Infinity // 在浏览器下仍旧是-Infinity

```
(4) 问题1
```
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( accumulator, currentValue ) => accumulator.concat(currentValue),
  []
);

```


(5) 问题2
```
var names = ['Alice', 'Bob', 'Tiff', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

```


(6) 问题3
```
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

var allbooks = friends.reduce(function(accumulator, currentValue) {
	return [...accumulator, ...currentValue.books];
	}, ['Alphabet']);

```
(7)  问题4
```
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
console.log(result); 
```
## map 

语法
```
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])

```
参数

1. callback  回调函数
2. currentValue   当前的值
3. index          当前值得下标
4. array          用map方法的该数组
5. thisArg        值被使用作this，当执行callback 的时候

问题5 

```
var xs = ['10', '10', '10'];
xs = xs.map(parseInt);
console.log(xs);  // 值为多少？
```

问题6 
```
 const people = [
 { name: ‘John Doe’, age: 16 },
 { name: ‘Thomas Calls’, age: 19 },
 { name: ‘Liam Smith’, age: 20 },
 { name: ‘Jessy Pinkman’, age: 18 },
];

const coffeeLovers = [‘John Doe’, ‘Liam Smith’, ‘Jessy Pinkman’];
```
写一个函数，如果这个人喝咖啡，那么在people数组里面，给该人标注，此人是否喝咖啡。

问题7

如何用reduce创建自己的map和filter函数？

最后 项目中的筛选两种方法
first:
```
var lessons = res.data.data["1"];
let result = lessons.reduce((m, item) => {
  m[item.unitId]
? m[item.unitId].push(item)
: (m[item.unitId] = [item]);
return m;
}, {});
```
second:
```
var lessons = res.data.data["1"];
var list = {};
lessons.forEach(function(obj) {
  var array = list[obj['unitId']] || [];
  array.push(obj);
  list[obj['unitId']] = array;
  })
```


**上述问题的答案如下:**

### 问题1
答案: [0,1,2,3,4,5]

分析

| callback    | accumulator     | urrentValue | urrentIndex      | array                      |       return value |
| ----------- |:---------------:| -----------:| ----------------:| --------------------------:| ------------------:|  
| first call  |         []      | [0,1]       |        0         | [[0, 1], [2, 3], [4, 5]]   |       [0,1]        |
| second call |    [0,1]        |      [2,3]  |            1     | [[0, 1], [2, 3], [4, 5]]   |    [0,1,2,3]       |
| third call   |   [0,1,2,3]      |     [4,5] |            2     | [[0, 1], [2, 3], [4, 5]]   |    [0,1,2,3,4,5]   |

### 问题2
答案: {'Alice':2, 'Bob':1, 'Tifff':1}

分析

| callback      | accumulator     | currentValue     | currentIndex     | array     | return value      |
| ------------- |:---------------:| ----------------:| ----------------:| ---------:| -----------------:|  
| first call    | {}              | 'Alice'          | 0                | names     | {'Alice':1}       |
|second call|{'Alice':1}|'Bob'|1|names|{'Alice':1, 'Bob':1}|
|third call|{'Alice':1, 'Bob':1,}|'Tiff'|2|names|{'Alice':1, 'Bob':1, 'Tifff':1}|
|fourth call|{'Alice':1, 'Bob':1, 'Tifff':1}|'Alice'|3|names|{'Alice':2, 'Bob':1, 'Tifff':1}|

### 问题3
答案:
```
 allbooks = [
  'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
   'Romeo and Juliet', 'The Lord of the Rings',
   'The Shining'
 ]
```
 这个自己分析下吧

### 问题4
答案: [1,2,3,4,5]

### 问题5
答案: 值为 10, NaN, 2

[参考](https://stackoverflow.com/questions/14528397/strange-behavior-for-map-parseint)

分析

parseInt

`var intValue = parseInt(string[, radix])`;

map 回调函数 接受三个参数

* the value of the element
* the index of the element
* 被遍历的数组

第二个参数是 index  of the element

因此内部将会这样执行
`parseInt('10', 0)`  // 10
`parseInt('10', 1)`  // NaN
`parseInt('10', 2)`  // 2
`parseInt('10', 3)`  // 3

问题：有没有1进制?
[参考](https://www.zhihu.com/question/28617310)

### 问题6
答案:
```
const incrementAge = (collection) => {
  return collection.map((person) => {
    person.coffeeLover = coffeeLovers.includes(person.name);
    return person;
  });
};
```

### 问题7
答案：

map:

```
const map = (collection, fn) => {
  return collection.reduce((acc, item) => {
    return acc.concat(fn(item));
  }, []);
}

```
filter:

```
const filter = (collection, fn) => {
  return collection.reduce((acc, item) => {
    if (fn(item)) {
      return acc.concat(item);
    }
 
    return acc;
  }, []);
}
```









