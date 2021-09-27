#### 你不知道的 javascript 上卷读书笔记

### 第一个部分 作用域和闭包

### 第二章 词法作用域

#### 欺骗词法

`eval`和`with`的使用，可能会产生欺骗词法，都不推荐使用。

### 第三章 函数作用域和块作用域

函数作用域：在任意代码片段外部添加包装函数，可以将内部的变量的函数定义“隐藏”起来，外部作用域无法访问包装函数内部的任何内容。分类有：匿名和具名以及立即执行函数

块作用域：是一个用来对之前的最小授权原则进行扩展的工具，将代码从在函数中隐藏信息扩展为在块中隐藏信息。例如有：for 循环；with；try/catch；let；const

### 第四章 提升

笔记：只有声明本省会被提升，而赋值或其他运行逻辑会留在原地。函数声明会被提升，但函数表达式不会被提升。

注意：函数声明和变量声明都会被提升，是函数会首先被提升，然后才是变量

```js
foo(); // 1
var foo;
function foo() {
  console.log(1);
}
foo = function () {
  console.log(2);
};
```

被理解为

```js
function foo() {
  console.log(1);
}
foo(); // 1
foo = function () {
  console.log(2);
};
```

总结：我们习惯将 var a = 2;看作一个声明，而实际上 JavaScript 引擎并不这么认为。它将 var a 和 a = 2 当作两个单独的声明，第一个是编译阶段的任务，而第二个则是执行阶段的任务。

### 第五章 作用域闭包

笔记：这个函数在定义时的词法作用域以外的地方被调用。闭包使得函数可以继续访问定义时的词法作用域。

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
```

输出结果为 6 的解释：延迟函数的回调会在循环结束时才执行。我们试图假设循环中每个迭代在运行时都会自己"捕获"一个 i 的副本。但是根据作用域的工作原理，实际情况是尽管循环中的五个函数是在各个迭代中分别定义的，但是它们都被封闭在一个共享的全局作用域中，因此实际上只有一个 i；

改进后：IIFE 会通过声明并立即执行一个函数来创建作用域

```js
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
```

解释：在迭代内使用 IIFE 会为每个迭代都生成一个新的作用域，使得延迟函数的回调可以将新的作用域封闭在每个迭代内部，这样每个迭代中访问的都是正确的值。

使用块作用域：

```js
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
```

模块和模块模式特征：（1）为创建内部作用域而调用了一个包装函数；（2）包装函数的返回值必须至少包括一个对内部函数的引用，这样就会创建涵盖整个包装函数内部作用域的闭包

### 第二部分 this 和对象原型

### 第一章 关于 this

```js
function foo(num) {
  console.log("foo: " + num);
  // 记录foo被调用的次数
  this.count++;
}
foo.count = 0;
var i;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i); // 自认为this函数对象其实并没有
    // foo.call(foo, i); // 修改为下面一行，确保this指向函数对象foo本身
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// foo 被调用了多少次
console.log(foo.count); // 0
```

笔记：this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。

### 第二章 this 全面解析

### <a id="2.1绑定规则">2.1 绑定规则</a>

- [2.1.1](#2.1.1)<a name="2.1.2">默认绑定</a>

```js
function foo() {
  console.log(this.a);
}
var a = 2;
foo(); // 函数调用时，应用了this的默认绑定，因此this指向了全局对象
```

- [2.1.2](#2.1.2)<a name="2.1.2">隐式绑定</a>

```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo,
};
obj.foo();
// 当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。因为调 用 foo() 时 this 被绑定到 obj
```

```js
function foo() {
  console.log(this.a);
}
var obj2 = {
  a: 42,
  foo: foo,
};
var obj1 = {
  a: 2,
  obj2: obj2,
};
obj1.obj2.foo(); // 42
/*  对象属性引用链中只有最顶层或者说最后一层会影响调用位置 */
```

隐式丢失：隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定。例子如下：

```js
function foo() {
  console.log(this.a);
}
var obj = { a: 2, foo: foo };
var bar = obj.foo; // 函数别名!
var a = "oops, global"; // a 是全局对象的属性
bar(); // "oops, global"
```

参数传递其实就是一种隐式赋值，因此我们传入函数时也会被隐式赋值，例如：

```js
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  // fn 其实引用的是 foo fn(); // <-- 调用位置!
}
var obj = { a: 2, foo: foo };
var a = "oops, global"; // a 是全局对象的属性 doFoo( obj.foo ); // "oops, global"
```

不是自己声明的函数也会

```js
function foo() {
  console.log(this.a);
}
var obj = { a: 2, foo: foo };
var a = "oops, global"; // a 是全局对象的属性 setTimeout( obj.foo, 100 ); // "oops, global"
```

- [2.1.3](#2.1.3)<a name="2.1.3">显式绑定</a>

可以使用 call(..)和 apply(..)方法。

```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
};
foo.call(obj); // 2 调用foo时强制把它的this绑定到obj上。
```

显式绑定无法解决我们之前提出的丢失绑定问题。

1、硬绑定：显式的强制绑定

```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
};
var bar = function () {
  foo.call(obj);
};
bar(); // 2;
setTimeout(bar, 100); // 2
// 硬绑定的bar不可能再修改它的this
bar.call(window); // 2
```

es5 提供了内置的方法 Function.prototype.bind

```js
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = {
  a: 2,
};

var bar = foo.bind(obj); // bind(..)会返回一个硬编码的新函数
var b = bar(3); // 2 3
console.log(b); // 5
```

2、API 调用的“上下文”

```js
function foo(el) {
  console.log(el, this.id);
}
var obj = {
  id: "awesome",
};
// 调用 foo(..) 时把 this 绑定到 obj [1, 2, 3].forEach( foo, obj );
// 1 awesome 2 awesome 3 awesome
```

- [2.1.4](#2.1.4)<a name="2.1.4">new 绑定</a>

```js
function foo(a) {
  this.a = a;
}
var bar = new foo(2);
console.log(bar.a); // 2
```

### <a id="2.2优先级">2.2 优先级</a>

1、new 绑定直接修改了 this 的指向，指向新创建的对象。显式绑定 > 隐式绑定

2、判断 this

- new 绑定
- 显式绑定
- 隐式绑定
- 默认绑定：非严格模式，绑定到全局对象上

### <a id="2.3绑定例外">2.3 绑定例外</a>

- [2.3.1](#2.3.1)<a name="2.3.1">被忽略的 this</a>

如果你把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind，这些值
在调用时会被忽略，实际应用的是默认绑定规则。
但是会造成一些影响。建议使用 `var ø = Object.create( null );` `ø`符号代替`null`

- [2.3.2](#2.3.2)<a name="2.3.2">间接引用</a>

```js
function foo() {
  console.log(this.a);
}
var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };
o.foo(); // 3
(p.foo = o.foo)(); // 2 注意调用位置是foo，应用的是默认绑定，即严格模式下的全局对象
```

- [2.3.3](#2.3.2)<a name="2.3.3">软绑定</a>

### <a id="2.4this词法">2.4 this 词法</a>

```js
function foo() {
  // 返回一个箭头函数
  return (a) => {
    //this 继承自 foo()
    console.log(this.a);
  };
}
var obj1 = { a: 2 };
var obj2 = { a: 3 };
var bar = foo.call(obj1);
bar.call(obj2); // 2, 不是 3 ! 注意：箭头函数的绑定无法被修改
```

### 第三章 对象

### <a id="3.1语法">3.1 语法</a>

```js
var strPrimitive = "I am a string";
typeof strPrimitive; // "string"
strPrimitive instanceof String; // false // 奇怪
var strObject = new String("I am a string");
typeof strObject; // "object"
strObject instanceof String; // true // 注意
// 检查 sub-type 对象
Object.prototype.toString.call(strObject); // [object String]
```

### <a id="3.2内容">3.2 内容</a>

```js
var myObject = {};
Object.defineProperty(myObject, "a", {
  value: 2,
  writable: true, // 以Object.defineProperty定义的格式默认否 需手动配置以下属性同理 // 是否可修改
  configurable: true, // 默认否 // 是否可配置
  // 如果属性是可配置的，就可以用 defineProperty(..) 方法来修改属性描述符，同时禁止删除（删除没有反应）
  enumerable: true, // 默认否 // 是否出现在枚举中 如for循环里
});
myObject.a; // 2
```

### <a id="3.3不变性">3.3 不变性</a>

1、`Object.preventExtensions(..)`可以禁止一个对象添加新属性并且保留已有属性

```js
var myObject = { a: 2 };
Object.preventExtensions(myObject);
myObject.b = 3;
myObject.b; // undefined
```

2、`Object.seal(..)`会创建一个“密封”的对象，这个方法实际上会在一个现有对象上调用`Object.preventExtensions(..)`并把所有现有属性标记为`configurable:false`
所以在密封之后不仅不能添加新属性，也不能重新配置或者删除任何现有属性（虽然可以修改属性的值）

3、`Object.freeze(..)`会创建一个冻结对象，这个方法实际上会在一个现有对象上调用`Object.seal(..)`并把所有“数据访问”属性标记为`writable:false`，这样就无法修改它们的值。

- [3.3.1](#3.3.1)<a name="3.3.1">存在性</a>

```js
var myObject = {
  a: 2,
};
"a" in myObject; // true
"b" in myObject; // false

myObject.hasOwnProperty("a");
// in 操作符会检查属性是否在对象及其[[Prototype]]原型链中。
// 相比之下，hasOwnProperty(..)只会检查属性是否在myObject对象中，不会检查[[Prototype]]链
```

- [3.3.2](#3.3.2)<a name="3.3.2">枚举性</a>

`enumerable:false`表示不可枚举

```js
var myObject = {};
Object.defineProperty(
  myObject,
  "a",
  // 让a 像普通属性一样可以枚举
  { enumerable: true, value: 2}
);

Object.defineProperty(
  myObject,
  "b"
  // 让b不可枚举
  { enumerable: false, value: 3 }
);

myObject.propertyIsEnumerable("a"); // true
myObject.propertyIsEnumerable("b"); // false

Object.keys( myObject ); // ["a"]
Object.getOwnPropertyNames( myObject ); // ["a", "b"]

```

`propertyIsEnumerable(..)`会检查给定的属性名是否直接存在于对象中（而不是在原型链上）并且满足 `enumerable: true`
`Object.keys(..)`会返回一个数组，包含所有可枚举属性，`Object.getOwnPropertyNames(..)`会返回一个数组，包含所有属性，无论它们是否可枚举

- [3.3.3](#3.3.3)<a name="3.3.3">遍历</a>

ES5 中增加了一些数组的辅助迭代器，包括`forEach(..)`、`every(..)`和`some(..)`。每种辅助迭代器都可以接受一个回调函数并把它应用到数组的每个元素上，**唯一的区别就是它们对于回调函数返回值的处理方式不同**。

`forEach(..)`会**遍历数组中的所有值并忽略回调函数的返回值**

`every(..)`会一直运行直到回调函数返回 false (或者 "假"值)，`some(..)`会一直运行直到回调函数返回 true（或者"真值）

`for in` 既可以对象和数组和字符串 `for of`可以遍历数组，但是只能遍历类数组对象（比如 arguments 对象、DOM NodeList 对象）以及字符串

### 第 4 章 混合对象 “类”

没有什么可记录的

### 第 5 章 原型

### <a id="5.1 [[Prototype]]">5.1 Prototype</a>

```js
var anotherObject = {
  a: 2,
};
var myObject = Object.create(anotherObject);

console.log(myObject.a);
```

`Object.create(..)`会创建一个对象并把这个对象的`[[Prototype]]`关联到指定的对象

### <a id="5.2 类">5.2 类</a>

- [5.2.1](#5.2.1)<a name="5.2.1">构造函数</a>

```js
function Foo() {}
Foo.prototype;

var a = new Foo();
Object.getPrototypeOf(a) === Foo.prototype; // true
/* 所有的函数默认都会拥有一个名为prototype的公有并且不可枚举的属性，它会指向另一个对象：
这个对象是在调用new Foo() 时创建的，最后会被关联到这个Foo.prototype指向的那个对象
*/

Foo.prototype.constructor === Foo; // true
var a = new Foo();
a.constructor === Foo; // true

/*
Foo.prototype 默认有一个公有并且不可枚举的属性.constructor，这个属性引用的是对象关联的函数
通过“构造函数”调用new Foo() 创建的对象也有一个.constructor属性，指向"创建这个对象的函数"
*/
```

换句话说，在 JavaScript 中对于“构造函数”最准确的解释是，所有带 new 的函数调用。 函数不是构造函数，但是当且仅当使用 new 时，函数调用会变成“构造函数调用”。

`.constructor `引用同样被委托给了 `Foo.prototype`，而 `Foo.prototype.constructor`默认指向 Foo

避免误解的例子：

```js
function Foo() {
  /* .. */
}
Foo.prototype = {
  /* .. */
}; // 创建一个新原型对象
var a1 = new Foo();
a1.constructor === Foo; // false!
a1.constructor === Object; // true!
/*
a1 并没有 .constructor 属性，所以它会委托 [[Prototype]] 链上的 Foo. prototype。但是这个对象也没有 .constructor 属性(不过默认的 Foo.prototype 对象有这 个属性!)，所以它会继续委托，这次会委托给委托链顶端的 Object.prototype。这个对象 有 .constructor 属性，指向内置的 Object(..) 函数
*/
```

### <a id="5.3 (原型)继承">5.3 (原型)继承</a>

```js
function Foo(name) {
  this.name = name;
}
Foo.prototype.myName = function () {
  return this.name;
};

function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}
// 我们创建了一个新的Bar.prototype对象并关联到Foo.prototype
Bar.prototype = Object.create(Foo.prototype);
// 注意现在就没有Bar.prototype.constructor 了
Bar.prototype.myLabel = function () {
  return this.label;
};

var a = new Bar("a", "obj a");
var b = new Bar("b", "obj b");
a.myName(); // "a"
a.myLabel(); // "obj a"
```

存在问题的关联

```js
// 执行类似Bar.prototype.myLabel = ...的赋值语句时会直接修改Foo.prototype对象本身。所以不可以
Bar.prototype = Foo.prototype;
// 下面语句，基本上满足需求，但会产生副作用
Bar.prototype = new Foo();
```

- [5.3.1](#5.3.1)<a name="5.3.1">检查"类"关系</a>

`a instanceof Foo // true` `instanceof` 在 a 的整条[[prototype]]链中是否有指向 Foo.prototype 的对象

```js
// b 是否出现在 c 的 [[Prototype]] 链中?
b.isPrototypeOf(c); // 但是这里没有验证
```

### <a id="5.4 对象关联">5.4 对象关联</a>
