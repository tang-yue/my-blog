复习
以最快的速度，筛选出我要记录的笔记。
1、关于数组的
      remove      add
末尾    pop       push
开头   shift     unshift
2、it is important to understand that objects (including arrays and functions) assigned to a veriable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

```
    const s = [5, 6,7];
    s[2] = 45;   //  如果是 s = [10,19,20,2] 这样的话就会报错
    console.log(s);   // return [5,6,45]
```
3. `Object.freeze(obj); `  obj is frozen, you can no longer add, update, delete properties from it;

4. 写一个函数 求 sum(1,4,2), 要求立即执行，使用...args 参数 以及reduce方法
5. 用`...` 方式复制数组，`[].concat(what)` what 可以放什么？
6. 用解构赋值法，实现赋值 `const len = str.length;`
7. 写一个立即执行函数，用解构法交换a,b 两个值
8. Use class Syntax to Define a Constructor Function
```
    const Vegetable = makeClass();
    const carrot = new Vegetable('carrot');
    console.log(carrot.name);   // => should be 'carrot'
```

```
 请写下你的代码

```
9. Use getters and setters to Control Access to an Object
```
    你的代码: 关键词  set get class
    //  如下执行：
    const lol = new Book("anonymous");
    console.log(lol.writer);
    lol.writer = "wut";
    console.log(lol.writer);   // wut
```

10. 输出
```
   一个文件输出两个
   export { capitalizeString, foo }
   import * as myMathModule from "math_function";
   使用如下：
   myMathModule.add(2,3);
   myMathModule.substract(5,3);
   import add from "math_functions";
   使用：
   add(5,4);
```
正则
11. test
`正则.test(要和正则匹配的内容)` 返回布尔值

12. 正则符号的意思
i   忽略大小写     /repeat/i         repeat Repeat 
|   表示或者关系   /yes|no|cat/      只要匹配到其中一个
.   表示通配符     /hu./             hug  huw hua 等待
[]  表示多种可能性  /a[uib]c/        auc aic abc
+   匹配一个或多个  
*   匹配零次或多次  /go*/             指代是0个o，多个o 比如`gooo`或者`g`
\w+ 所有字母和数字以及下划线
^   在内部表示除了的意思
\W  和 `\w` 相反
\d  数字
\D  和`\d`相反
\s  `[\r\t\f\n\v]`
\S  `[^\r\t\f\n\v]`
13. match
`(要和正则匹配的东西).match(正则)`

返回值为数组，举列`"Hello, World!".match(/Hello/)`不是全局匹配返回的是这样`["Hello", index:0, input:"Hello, world!",groups:undefined]`
是全局匹配`"Hello, World!".match(/Hello/g)` 返回这样["Hello"]

14.  创建一个正则表达式，匹配所有的字符，除去元音和数字
我的答案：`/^[aeiou][0-9]/g`  这个答案是错误。
正确的是：`/[^aeiou0-9]/` 或者[^0-9aeiou]

15. Find Characters with Lazy Matching
以代码说明
```
    "titanic".match(/t[a-z]*i/);    // return ["titani"]
    "titanic".match(/t[a-z]*?i/);   // return ["ti"]
```

16. 下面两个返回值的比较
"The five boxing wizards jump quickly.".match(/\w+/g);
返回值为：
"The five boxing wizards jump quickly.".match(/\w/g);
返回值为:
17. Regular Expressions: Check for all or None
`?` This checks for zero or one of the preceding element
18. Regular Expressions: Positive and Negative Lookahead
难以理解的， 还是以代码为列吧
```
  let quit = "qu";
  let noquit = "qt";
  let quRegex = /q(?=u)/;
  let qRegex = /q(?!u)/;
  quit.match(quRegex); // return ["q"]
  quit.match(qRegex); // null
  noquit.match(quRegex); // null
  noquit.match(qRegex);  // return ["q"]
```
19. Reuse Patterns Using Capture Groups
Q: Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.
```
  let repeatNum = "42 42 42";
  let reRegex = /^(\d+)\s\1\s\1$/;
  let result = reRegex.test(repeatNum);
```

20. Use Capture Groups to Search and Replace
`"Code Camp".replace(/(\w)\s(\w)/, '$2 $1') // return "Camp Code` 

21. 删除开头空格和末尾空格
请写下你的正则表达式

#### 数据结构部分
练习题：如果数组中的某个数组包含3，那么将这个数组给删掉
1. Object.keys()
```
    let obj = {"a": 2, "b": 3, "c":4};
    Object.keys(obj);  // return ["a", "b", "c"]
```

#### 继续javascript部分
1. `==`， `>`， `<`， `!=`， 都会尝试将值转换成类型进行比较。而严格操作符则不会。

2. `return count + (count > 0 ? " Bet": " Hold");`

3. 随机数在(min, max) 包含min和max。请写你的代码

 Math.random() * (max - min) + min    (0,1]
4. use the parseInt Function
 `parseInt("007")` 输出值为 7
 `parseInt("a07")`  输出值为 NAN

### 基础算法题
1. 关于split的用法
```
    "hello".split(",");   // return ["hello"]
    "hello".split();     // return ["hello"]
    "hello".split("");   // return ["h", "e", "l", "l", "o"]
    "this fire wind rain".split(" "); // ["this", "fire", "wind", "rain"]
    "this fire wind rain".split(""); // ["t","h","i","s"," ".....]
    "this fire wind rain".split(",") // ["this fire wind rain"]
```
2. 关于join的用法
```
    ["o", "l", "l", "e", "l"].join("");  // return "ollel"
    var ele = ["Fire", "Wind", "Rain"];
    ele.join();    // return "Fire,Wind,Rain"
    ele.join(",");  // return "Fire,Wind,Rain"
    ele.join("");   // return "FireWindRain"
    ele.join("-");  // return "Fire-Wind-Rain"
```
3. 将字符串倒序
先拆成数组之后转换，之后再拼接。
4. 如何截取字符串 
str.substring(indexStart[, indexEnd]);
str.substr(start[, length]);
5. 新方法
```
    function bouncer(arr) {
      for(let i = 0; i < arr.length; i++) {
        if(!Boolean(arr[i])) {
            arr.splice(i,1);
            i--;
        }
      }
      return arr;
    }
    bouncer([7, "ate", "", false, 9]);
```
6. where do I Belong
```
    // 这个代码逻辑真好
    function belong(arr, num) {
        arr.push(num);
        arr.sort(function(a,b) {
            return a - b;
        })
        return arr.indexOf(num);
    }
```

#### 继承这一块
1.
```
   // 构造函数
    function House(numBedrooms) {
        this.numBedrooms = numBedrooms;
    }
    House.prototype = {
        constructor: House,
        // whenever a prototype is manually set to a new object,remember to define the constructor property.
        numBathroom: 5,
        eat: function() {
            console.log("eat");
        },
        describe: function() {
            console.log("des");
        }
    }; 
    // 使用prototype 可以有效防止变量被很多个实列重复复制
    let myHouse = new House(5); // 第一种继承方式
    let myHouse = Object.create(House.prototype); // 第二种方式（前提是function House(){}内部为空，所有的东西都是在原型上的）
    myHouse instanceof House;   // return true,   myHouse 是House的实列
    myHouse.hasOwnProperty(numBedrooms);  // return true
    myHouse.hasOwnProperty(numBathroom); //  return false
    myHouse.constructor === House;     // return true, 要被显现定义，才会返回true,没有显现定义并不是默认就是，会返回false

    myHouse inherits its prototype from the Bird constructor function
    House.prototype.isPrototypeOf(myHouse) // return true
    Object.prototype.isPrototypeOf(House.prototype) // return true
    在js里面所有的对象都有一个原型，一个对象原型本身是一个object.
    typeof House.prototype;  // => object
    因为一个原型是一个对象，原型可以有自己的原型，House.prototype的prototype是Object.prototype
```

2. Set the Child's Prototype to an Instance of the Parent
```
   function Animal() {}
   Animal.prototype = {
     constructor: Animal,
     eat: function() {
        console.log("nom nom nom");
     }
   }
   function Dog() {}
   Dog.prototype = Object.create(Animal.prototype);'
   // 下面这两行代码表示，继承之后添加方法的
   Dog.prototype.bark = function() {
     console.log('woof!')
   }
   let beagle = new Dog();  // 很显然这里就是原型的原型了
   beagle.eat();
   console.log(beagle.constructor) // f Animal() {}  因为此时Dog.prototype 并没有constructor，所以会继续往上面找，即找到上一层
   console.log(Dog.prototype.constructor) // f Animal() {}
   console.log(beagle.constructor === Animal) // return true
   console.log(Dog.prototype.constructor === Animal) // return true
   Dog.prototype.constructor = Dog;
   console.log(Dog.prototype.constructor === Dog) // return true
   console.log(beagle.constructor === Dog) // return true
```

#### 函数编程
1. Implement map on a Prototype
```
    var s = [23, 65, 98, 5];
    Array.prototype.myMap = function(callback) {
        let newArray = [];
        this.forEach(function(ele) {
            newArray.push(callback(ele));
        })
        return newArray;
    }

    let new_s = s.myMap(function(item) {
        return item * 2;
    })
```
2. 印象深刻的
```
    function impartial(x, y, z) {
        return x + y + z;
    }
    var partialFn = impartial.bind(this, 1, 2);
    partialFn(10);
```
3. Pig Latin 重新默写
4. Convert HTML Entities
我解决了这道题，思路来自其他的思路。
character     entity
`&`            `&amp;`
`<`            `&lt;`
`>`            `&gt;`
`'`            `&apos;`
`"`            `&quot;`

```
function convertHTML(str) {
  return str.split("").map((item, index) => {
    switch(item) {
      case "&":
        return "&amp;"
        break;
      case "<":
        return "&lt;"
        break;
      case ">":
        return "&gt;"
        break;
      case "'":
        return "&apos;"
        break;
      case '"':
        return "&quot;"
        break;
       default:
       return item;
    } 
  }).join("");
}
convertHTML("Dolce & Gabbana");
```

5. Spinal Tap Case
6. Diff Two Arrays
7. Seek and Destroy
8. Wherefore art thou
最头疼的事情，莫过于，昨天会写的代码，今天，无论怎样都不会写了。
这是越学越倒退呀。
要重新写。
其实返回的是数组里面的某一项。那么意思就是删除数组里面的某些项。
所以就可以用filter。
```
  function whatIsInAName(collection, source) {
    var arr = collection.filter(function(item) {
      for(var i in source) {
        if(source[i] != item[i]) {
          return false;
        }
      }
      return true;
    })
    return arr;
  }
```
数组里面某一项一定是包含，传进来的这个object的，才会把这一项给返回出去。
9. 我觉得DNA扑克牌的这个，可以很好的理解map.
