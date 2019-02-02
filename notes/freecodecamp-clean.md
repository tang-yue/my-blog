10月25日  6:00   对以前所有的freecodecamp的文件进行的总结笔记
10月30日 已经是全部的复习完了。
题目 Wherefore art thou

1. str.replace(regxp);  并不会改变字符串str，它的返回值应该赋值为一个新的变量。

2. 关于正则replace带有变量的写法。
```
function myReplace(str, before, after) {
	// before, after 均为变量
	str.replace(before, after);
}
```
3. 正则 / /里面怎么写 变量

new RegExp(pattern[, flags])

var regex1 = new RegExp('ab+c', i);

var regex2 = new RegExp('/ab+c/',i); 

regex1 和 regex2 并不相等，我通过console控制台的验证了。

4.
``` 
function myReplace(str, before, after) {
	str.replace(before, after);
} 
```
```
var v = "b1";
var re = new RegExp("^\\d+" + v + "$", "gim");
```

5.
const s = [4,5,7];
s[2] = 45;
console.log(s); // 4 5 45

6.
let obj = {
	a: "a",
	b: "b"
} 
Object.freeze(obj);
此时此刻，无论怎么去修改obj， obj都是更改不了的。

7.
重新默写一遍。
const sum = (function() {
	return function sum(...args) {
		return args.reduce((a,b) => a + b, 0);
	}
})()
console.log(sum(1,2,3));

8. string.charAt(0).toUpperCase() + string.slice(1) 将开头一个字母转换成大写。

9.
`\w` is equal to `[A-Za-z0-9_]`



10.
正则表达式默认式lazy匹配
以代码说明
```
  "titanic".match(/t[a-z]*i/);  // return  ["titani"]
  // you can use the ? character to change it to lazy matching.
  "titanic".match(/t[a-z]*?i/);  // return ["ti"]
```

11.
"The five boxing wizards jump quickly.".match(/\w+/g);
// return ["The", "five", "boxing", "wizards", "jump", "quickly"]
"The five boxing wizards jump quickly.".match(/\w/g);
// return ["T", "h", "e", "f", "i", "v", "e", "b", "o", "x"]

12. 移除开头和结尾
正则表达式  `/^\s*|\s*$/g `

13. 
像相等操作符，大于操作符和大于等于操作符，小于操作符，小于等于操作符将转换数据类型的值进行比较,
而严格操作符则不会。

14.
split的用法
```
"hello".split(",");   // return ["hello"]
"hello".split();      // return ["hello"]
"hello".split("");    // return ["h","e","l","l","o"]
```
join的用法

```
var ele = ["Fire", "Wind", "Rain"];

ele.join("");  // return "FireWindRain"
ele.join(","); // return "Fire,Wind,Rain"
ele.join();    // return "Fire,Wind,Rain"
ele.join("-"); // return "Fire-Wind-Rain"
```

15.
str.substring(indexStart, indexEnd);
str.substring(1,3); // 包含位置1，不包含位置3
str.substring(2);  //  包含位置2上的元素，一直到末尾

str.substr(start, len); // 包含start 位置上的元素

16.
在数组原型上，加一个myMap方法
// 为什么我不能够默写出来，而要一直一直的看答案，我不能够原谅你

let s = [2,3,4];
Array.prototype.myMap = function(callback) {
	let newArray = [];
	this.forEach(function(ele) {
		newArray.push(ele);
	})
	return newArray;
}

let new_s = s.map((item) => item * 2)

17. 记忆比较深刻的

function impatial(x, y, z) {
	return x + y + z;
}

let fn = impatial.bind(this, 1, 2);
fn(10);   // return 12

18. 
	var str = "ADTGDC";
	function pairElement(str) {
		return str.split("").map((item) => {
			if(item = "A") {
				return ["A", "T"];
			} else if(item === "T") {
				return ["T", "A"];
		    } else if(item === "C") {
		    	return ["C", "G"];
			} else if(item === "G") {
				return ["G", "C"]
			}
		})
	}

19. 找到连续的a-z 里面，是缺少了哪一个字母，并将其给返回出来。

```
var str = 'abcdfghijk';

function returnMissing(str) {
    var compare = str.charCodeAt(0), missing;
	str.split("").map((ele, index) => {
		if(str.charCodeAt(index) === compare) {
			++compare;
		} else {
			missing = String.fromCharCode(compare);
		}
	})
	return missing;
}
console.log(returnMissing('abcdfghijk'));
```

20. 生命周期函数
shouldComponentUpdate      只有当这个为 true 的时候，之后下面两个函数才会激活。
componentWillReceiveProps  
componentDidUpdate 

21.
"hello world".match(/hello/);
// return ["hello", index:0, input:"hello world", groups:undefined, input:"hello world"]  
"hello world".match(/hello/g);
// return ["hello"]

22. 创建一个正则表达式， 匹配所有的字符，除去元音和数字
答案:   /^[aeiou0-9]/


23. 继承这一块
继承这一块，不知道怎么的看到就觉得反感，从而不想去看。
要比别人更加的耐心，更加的耐心，更加的耐心。
（1）
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

（2）. Set the Child's Prototype to an Instance of the Parent
```
   function Animal() {}
   Animal.prototype = {
     constructor: Animal,
     eat: function() {
        console.log("nom nom nom");
     }
   }
   function Dog() {}
   Dog.prototype = Object.create(Animal.prototype);
   // 是不是用这种方式继承，是因为好添加方法。
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
   Dog.prototype.constructor = Dog; // 是因为这一行定义了，所以下一行才会返回ture，否则是不会返回true的
   console.log(Dog.prototype.constructor === Dog) // return true
   console.log(beagle.constructor === Dog) // return true
```