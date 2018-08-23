### freeCodeCamp 学习笔记。
因为我觉得我的js 基础薄弱。
上面写着300 hours. 每天记时
11点10分开始, 12吃饭，之后午休，1点40开始工作
js 的7种数据类型
undefined, null, boolean, string, symbol, number, object

```
var mystr = "firstLine/n/t//secondLine/nthirdLine"
```
展示效果
```
firstLine
    /secondLine
thirdLine
```
2. manipulate Arrays With pop()  remove last of array
```
    var threeArr = [1,4,6];
    threeArr.pop(); // 6
    threeArr;     // [1,4]
```
3. manipulate Arrays with shift() remove first of array
4. manipulate Arrays with unshift() add elements in front of the array


下午3点36分

开始刷es6.看了三分钟文章.
16:16分开始学习

es6
1.Mutate an Array Declared with const
//this rule surprised me
However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

```
const s = [5, 6, 7];
s[2] = 45;
console.log(s);   // return [5, 6, 45];
```
2.prevent Object Mutation

Once the object is frozen, you can no longer add, update,or delete properties from it;

```
    let obj = {
        a: "a",
        b: "b"
    };
    Object.freeze(obj);
    obj.review = "bad";  //will be ignored. Mutation not allowed
    obj.newProp = "Test";  //will be ignored. Mutation not allowed
    console.log(obj);   // {a: "a", b: "b"} 
```

第一次直接 函数里面写try catch 这个有什么作用呢。
```
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

3. 判断一个数是否是整数
```
var number = 10.2;

if(parseInt(number) === number) {
    // 是整数
} else {
    // 不是整数
}
```
4. 关于...args， Use the Rest Operate with Function Parameters
下述代码需要稍后默写一下
```
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
```
5.复制数组的两种方法
```
    const arr1 = [1, 2, 3, 4, 6];
    let arr2;
    arr2 = [...arr1]; 或者 arr2 = [].concat(...arr1)
```
6.解构法赋值
`const { length: len } = str` 其中 len = str.length;

7.用解构赋值，交换两个值
不知道为什么下述代码会通过呀，但是我自己运行就出错。
```
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
   [a,b] = [b,a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
```

9. 返回一个对象的简洁用法
```
const createPerson = (name, age, gender) => ({name,age,gender});
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
```
10. 定义对象时，里面函数的省略写法
```
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```
11. Use class Syntax to Define a Constructor Function
```
function makeClass() {
  "use strict";
  /* Alter code below this line */
    class Vegetable {
      constructor(name) {
        this.name = name;
      }
    }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
```

8月13日
我学到下面这个地方了
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-getters-and-setters-to-control-access-to-an-object

12. Use getters and setters to Control Access to an Object
```
  class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut  
```
13. Use export to Reuse a Code Block
```
    const capitalizeString = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const foo = "bar";
    export const bar = "foo";
    export { capitalizeString, foo }
```
14. Use * to import everything from a file
```
    import * as myMathModule from "math_function";
    myMathModule.add(2,3);
    myMathModule.subtract(5,3);
--------------------------------------------------------
    import add from "math_functions";   // math_functions 是用export default 输出的
    add(5,4);
```
15. 
Note: Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const.

Usually you will use this syntax if only one value is being exported from a file.

es6 被刷完

刷一遍正则表达式
1. test
使用方法
```
    let testStr = "freeCodeCamp";
    let testRegex = /Code/;
    testRegex.test(testStr);   // returns true
    // returns true or false if your pattern finds something or not.
```
2. different possibilities
`let testRegex = /yes|no|cat/` 表示或者的关系，只要匹配到其中一个，就返回true;

3. /ignorecase/i  
this regex can match the strings "ignorecase", "igNoreCase", "IgnoreCase".

忽略大小写去匹配
4. Extract Matches
使用方法，可以看出和test的使用方法是不一样的。
```
    "Hello, World!".match(/Hello/);
     在chrome中返回如下:
     ["Hello", index:0, input:"Hello, World",groups:undefined]
     为什么是上述结果而不是["Hello"]， 是因为正则并不是全局匹配，我终于找到原因了。
```
5. 多次匹配，并不是一匹配到，就返回结果，而是返回匹配到所有结果。
```
    let testStr = "Repeat, RePeat, Repeat";
    let repeatRegex = /Repeat/gi;
    testStr.match(repeatRegex);
    // Returns ["Repeat", "RePeat", "Repeat"] 这个仅仅是简写方式
```
6. Wildcard Period
if you wanted to match "hug", "huh", "hut", and "hum", you can use
the regex /hu./ to match all four words;

7. Match Single Character with Multiple Possibilities
if you want to match "bag", "big", and "bug"， you can create the regex /b[aiu]g/ to do this;

8. match lowercase letters a through e you would use [a-e]

9. /[a-z0-9]/ig  匹配字母a-z,数字0-9

###### 练习题
创建一个正则表达式，匹配所有的字符，除去元音和数字。
简单归简单，但是你对你的代码有所怀疑。

10. Match Characters that Occur One or More Times
以代码为列来说明是什么意思吧。
```
    let str = "miisiple";
    str.match(/i+/g);  // return ["ii", "i"]
    str.match(/i/g); // return ["i", "i", "i"]
    指的是i匹配1次或多次
```
11. Math Characters that Occur Zero or More Times
```
    let soccerWord = "goooooooooal!";
    let gPhrase = "gut feeling";
    let oPhrase = "over the moon";
    let goRegex = /go*/;
    soccerWord.match(goRegex);   // Returns ["gooooooo"]
    gPhrase.match(goRegex);      // Returns ["g"]  这个o即匹配的是0次
    oPhrase.match(goRegex);      // Returns null
    // 指的是o匹配0次或多次
```
12. Find Characters with Lazy Matching
正则表达式默认式lazy匹配
以代码说明
```
  "titanic".match(/t[a-z]*i/);  // return  ["titani"]
  // you can use the ? character to change it to lazy matching.
  "titanic".match(/t[a-z]*?i/);  // return ["ti"]
```
13. two ways of caret character
you used the catet character (^)inside a character set to create
a negated character set in the form [^thingsThatWillNotBeMatched].
Outside of a character set, the caret is used to search for patterns at the beginning of strings.
14. 匹配所有字母和数字以及下划线
`/[A-Za-z0-9_]+/` `/\w+/`

15. Match All Letters and Numbers
`\w` is equal to `[A-Za-z0-9_]`
关于下面两种写法，返回值的比较
```
    "The five boxing wizards jump quickly.".match(/\w/g); 
    // return ["The", "five", "boxing", "wizards", "jump", "quickly"]
    "The five boxing wizards jump quickly.".match(/\w+/g);
    // return ["T", "h", "e", "f", "i", "v" ........]
```
16. Match Everything But Letters and Numbers
`\W`  `\d` `\D`

`\s`  This pattern not only matches whitespace, but also
carriage return, tab, form feed, and new line characters.
You can think of it as similar to the character class `[\r\t\f\n\v]`

`\s` means `[\r\t\f\n\v]`
`\S` means `[^ \r\t\f\n\v]`
17.
```
let userCheck = /^[a-zA-z][a-zA-z]+|^[a-zA-Z]+[0-9]$/; // Change this line
// 提醒开头的数字和末尾的数字，并不需要刻意的用符号^ 和$
```

17. Specify Upper and Lower Number of Matches
`/oh{3,5} no/`
`/oh{4} no/`
`/oh{3,} no/`
18. Regular Expressions: Check for all or None
`?` This checks for zero or one of the preceding element
19. Regular Expressions: Positive and Negative Lookahead
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

```
  let password = "abc123";
  let checkPass = /(?=\w{3,6})(?=\D*\d)/;
  checkPass.test(password);   // Returns true
  这里有点奇怪，待后续研究
```
20. Reuse Patterns Using Capture Groups
Q: Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.
```
  let repeatNum = "42 42 42";
  let reRegex = /^(\d+)\s\1\s\1$/;
  let result = reRegex.test(repeatNum);
```

21. Use Capture Groups to Search and Replace
`"Code Camp".replace(/(\w)\s(\w)/, '$2 $1') // return "Camp Code` 

推荐两个练习正则的网站  
https://regexr.com/  
https://regexone.com/lesson/capturing_groups 

22. Remove Whitespace from Start and End
```
  let hello = "  Hello, World!  ";
  let wsRegex = /^\s*|\s*$/g;
  let result = hello.replace(wsRegex,"");
```

5点的时候，刷完所有的正则测试题
8月15日    12:37  分 刷完所有Regular Expressions



下面把基础的数据结构   Basic Data Structures

1. length
2. arr[1] 取数
3. push and unshift
4. pop and shift
5. splice(position, count of ele,  add elements)
6. slice(first, second) ( first is included, but second is not include)
7. copy an Array with the Spread Operator
```
  let thisArray = [true, true, undefined, false, null];
  let thatArray = [...thisArray];
  // thisArray remains unchanged and is identical to thatArray
  // note: 有[]
```
8. combine Arrays with the Spread Operator
9. check for the presence of an Element with indexOf()
10. Iterate Through All an Array's Items Using For Loops
练习题:  如果数组中的某个数组包含3，那么将这个数组给删掉
```
  filteredArray([[3,2,3],[1,6,3],[3,13,26],[19,3,9]], 3)
```

第一种方法
```
  function filteredArray(arr, elem) {
    let newArr = [...arr];
    for(let i=0; i<newArr.length; i++) {
      for(let j= 0; j <newArr[i].length; j++) {
        if(newArr[i][j] === elem) {
            newArr.splice(i,1);
            i--;
            break;    
        }
      }
    }
    return newArr;
  }
```

第二种方法
```
  function filteredArray(arr, elem) {
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
      if(arr[i].indexOf(elem) === -1) {
        newArr.push(arr[i])
      }
    }
    return newArr;
 }
```

11. 创建复杂的多维数组
12. Add Key-Value Pairs to javascript Objects
13. Modify an Object Nested within an Object
14. Check if an Object has a Property
15. Iterate Through the keys of an Object with a for...in Statement
16. Generate an Array of All Object Keys with Object.keys()
```
  let obj = {"a": 2, "b": 3, "c": 4};
  Object.keys(obj); // return ["a", "b", "c"]
```

基本数据结构刷完了。 8月15日  16:37 分

其他的之后再刷吧，休息会。

8月19日  11点10 
继续刷javascript 

Global vs. Local Scope in Functions

Understanding Undefined Value returned from a Function

1. 如果一个函数没有返回值，那么返回的将是 undefined

2. 严格操作符不像平等操作符，尝试将值转换成类型进行比较。仅仅是各做各的。
```
  3 == '3' // returns true because Javascript performs type conversion from string to number
  3 === '3' // returns false because the types are different and type conversion is not performed
```
3. 像相等操作符，大于操作符和大于等于操作符，小于操作符，小于等于操作符将转换数据类型的值进行比较
```
5 > 3     // true
7 > '3'   // true
2 > 3     // false
'1' > 9   // false
```
4. Multiple Identical Options in Switch Statements

5. Returning Boolean Values from Functions

```
第一种写法
function isLess(a, b) {
  if(a < b) {
    return true;
  } else {
    return false;
  }
}
第二种写法， 这种写法可以优化代码
function isLess(a, b) {
  return a < b;
}
```

6. Basic Javascript: Counting Cards

这道题究竟是什么意思呢，
明明是传入一个单值，为什么感觉是一组队列呢。

`return count + (count > 0 ? " Bet": " Hold");`
直接写在一行里面多好。

7. `testObj["an entree"]` 有空格当然不能用`.`去取对象里面的值了，
同时变量也不能用点`.`

8. 转换一个switch statement into an object, Use it to look up val and
assign the associated string to the result variable.
```
    switch(val) {
    case "alpha": 
      result = "Adams";
      break;
    case "bravo": 
      result = "Boston";
      break;
    case "charlie": 
      result = "Chicago";
      break;
    case "delta": 
      result = "Denver";
      break;
    case "echo": 
      result = "Easy";
      break;
    case "foxtrot": 
      result = "Frank";
  }
  ---------- 转化后
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie":"chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
```

这样完全可以节省很多很多的代码。

9. 判断对象属性是否存在
```
var myObj = {
  top: "hat",
  bottom: "pants"
}
//   myObj.hasOwnProperty("top")
```
10. Generate Random Whole Numbers within a Range

`Math.floor(Math.random() * (max - min + 1)) + min` == (min, max) 两边都是包含的

11. Use the parseInt Function

`parseInt("007")`  // 7

* The above function converts the string "OO7" to an integer 7. \
if the first character in the string can't be converted into a number, then it returns NaN

`parseInt("a007")` // NAN

8月20日    14:13 分  刷 Basic Algorithm Scripting


reverse 的用法

关于split转换string为数组，令我惊讶的地方。
```
  "hello".split(",")   // return ["hello"]
  "hello".split()     // return ["hello"]
  "hello".split("")   // return ["h","e","l","l","o"]
```

```
  ["o","l","l","e","l"].join("")   // return "ollel"
```

关于js中的 join 的用法。 以下面的代码为列
```
  ver ele = ["Fire", "Wind", "Rain"];
  ele.join();    // return "Fire,Wind,Rain"
  ele.join(","); // return "Fire,Wind,Rain"
  ele.join("");  // return "FireWindRain"
  ele.join("-"); // return "Fire-Wind-Rain"
```

便于记忆如下：
```
  function reverseString(str) {
    let newA = str.split("");   // 没有空格""
    let re = newA.reverse();
    return re.join("")  
  }
  reverseString("hello") // return olleh
```

1. 温度转换
2. 转换字符串
3. 介乘
4. 发现str里，最长的单词
令人惊讶的地方
```
  "this fire wind rain".split(",");   // return ["this fire wind rain"]
  "this fire wind rain".split(""); // ["t","h","i","s","f".....]
  "this fire wind rain".split(" "); // ["this", "fire", "wind", "rain"]
```
5. 返回数组里面的最大数，集合
6. 验证末尾

如何截取字符串。
str.substring(indexStart[, indexEnd]);
str.substring(1,3);  // 包含位置1不包含位置3上的元素
str.substring(2);    // 包含位置2上的元素，一直到末尾。

str.substr(start[, length]);  // 包含start 位置上的元素

7. repeat a string repeat a string

8. Title Case a Sentence

9. Slice and Splice

我就是这么牛逼

10. Falsy Bouncer
最近学的新方法

```
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
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

11. Where do I Belong
第一种方法
```
  function belong(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    })
    for(let i = 0; i < arr.length; i++) {
      if(num <= arr[i]) {
        return i;
      }
    }
    return arr.length;   // 数组为0 走的就是这个逻辑
  }
  belong([40,60], 50)
```
第二种方法
```
  function belong(arr, num) {
    arr.push(num);
    arr.sort(function(a, b) {
      return a - b;
    })
    return arr.indexOf(num);
  }
```

// 下面开始刷 Object Oriented Programming
8月23日 11:07 分

1. Define a Constructor Function 
// 定义一个构造函数
```
  function Dog() {
    this.name = "huahua";
    this.color = "yellow";
    this.numLegs = 4;
  }
```

2. Use a Constructor to Create Objects

```
  function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
  }

  let blueBird = new Bird();
  // This tells Javascript to create a new instance of Bird called blueBird.
```
那么 blueBird 就会有定义在Bird构造器里的所有属性。

3. 扩展构造器去接受参数
```
  function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let terrier = new Dog("tang", "black");
```

4. Verify an Object's Constructor with instanceof

```
  function House(numBedrooms) {
      this.numBedrooms = numBedrooms;
  }

  let myHouse = new House(5);
  
  myHouse instanceof House; // return true;
```

5. Understand Own Properties

```
  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  let canary = new Bird("Tweety");
  let ownProps = [];
  for(let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property)
    }
  }
```
6. Use Prototype Properties to Reduce Duplicate Code

```
  function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 2;
  // 使用prototype 可以有效的防止变量被很多个实列被重复复制。
```

7. iterate Over All Properties

```
  function Dog(name) {
    this.name = name;
  }

  Dog.prototype.numLegs = 4;

  let beagle = new Dog("Snoopy");

  let ownProps = [];
  let prototypeProps = [];
  for(let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }
```

8. Understand the Constructor Property

```
 function Dog(name) {
   this.name = name;
 } 

 let candidate = new Dog();
 
 function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog) {  // 实列的构造器是什么
    return true;
  }else {
    return false;
  }
 }
```

9. Change the Prototype to a New Object

```
  function Dog(name) {
    this.name = name;
  }

  Dog.prototype = {
    numLegs: 4,
    eat: function() {
      console.log("eat");
    },
    describe: function() {
      console.log("describe")
    }
  };
  你看上述，
  Dog.prototype.eat = function() {
    console.log('eat');
  }
  把单独的一个一个prototype，综合到一个Object里面 
```

10. whenever a prototype is manually set to a new object,
remember to define the constructor property.

```
  Dog.prototype = {
    constructor: Dog,
    numLegs: 2,
    eat: function() {

    },
    describe: function() {

    }
  }
```

11. Understand Where an Object's Prototype Comes From

`duck inherits its prototype from the Bird constructor function`

Code:   `Bird.prototype.isPrototypeOf(duck)`  鸭子是从鸟哪里继承的基因的吗？

12. Understand the Prototype Chain

```
  function Dog(name) {
    this.name = name;
  }
  let beagle = new Dog("Snoopy");

  Dog.prototype.isPrototypeOf(beagle);

  Object.prototype.isPrototypeOf(Dog.prototype);
  // beagle的原型是 Dog， Dog的原型是Object
```

13. Inherit Behaviors from a Supertype
```
  继承的两种方式
  let animal = new Animal();

  let animal = Object.create(Animal.prototype);
```

14. Set the Child's Prototype to an Instance of the Parent

// 这道题我怎么有点看不懂呢。
设置 child 的prototype 成为 parent 实列
```
function Animal() {}

Animal.prototype = {
  constructor:  Animal,
  eat: function() {
    console.logo('nom nom nom');
  }
}

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

beagle.eat();
```

15. Reset an Inherited Constructor Property
```
  function Bird() {

  }
  Bird.prototype = Object.create(Animal.prototype);
  let duck = new Bird();
  duck.constructor // function Animal() {...}

  Bird.prototype.constructor = Bird;  // 这句话比较关键
  duck.constructor  // function Bird() {...}
```

被刚看的原型搞得，头晕目眩。

16. Add Methods After Inheritance

```
  function Animal() {}

  Animal.prototype.eat = function() {
    console.log('nom nom nom');
  }
  function Dog() {}

  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  Dog.prototype.bark = function() {
    console.log('woof!')
  }
  let beagle = new Dog();
  beagle.eat();
  beagle.bark();

```

