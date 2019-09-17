https://javascript.info  该网站笔记

### promise 笔记

```
    fetch("https://github.com/tang-yue")
            .then(response => response.json())
            .catch(err => alert(err))
```
<!-- 我以前都没有写过上述的js代码。令我惊讶又惊奇 -->

https://javascript.info/promise-chaining#returning-promises

下面是 javascript Algorithms and Data Structures Projects

连个简单正则表达式都不会写。Usually you will use this syntax if only one value is being exported from a file.
那些我写了很多遍，仍旧记不住的js语法。

8月23日  

### 学习generators笔记

以下两种，遍历完之后的区别

```
function* generateSequence1() {
  yield 1;
  yield 2;
  return 3;
}

function* generateSequence2() {
  yield 1;
  yield 2;
  yield 3;
}

let generator1 = generateSequence1();

let generator2 = generateSequence2();

for(let value of generator1) {
  alert(value);  // 1， then 2
}

for(let value of generator2) {
  alert(value);  // 1，then 2， then 3
}
```

关于generator.next(arg)

```
function* gen() {
      let ask1 = yield "2 + 2 = ?";
      alert(ask1);    // 4
      let ask2 = yield "3 * 3 = ?";
      alert(ask2);    // 9
    }

    let generator = gen();

    alert(generator.next().value); // "2 + 2 = ?"
    alert(generator.next(4).value); // "3 * 3 = ?"
    alert(generator.next(9).done); // true
// 每一个next(value)(包括第一次),传递一个值进入generator，它变成了当前yield的结果

```

题目 写一个生成器
```
公式:   next = previous * 16807 % 2147483647;

let generator = pseudoRandom(1);

alert(generator.next().value);  // 16807
alert(generator.next().value);  // 282475249
alert(generator.next().value); // 1622650073
```

we can use a generator function for iteration by providing it as `Symbol.iterator`

```
let range = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
}

alert([...range])
```

8月30日 学习 
有些知识点，对我们来说，似乎就是那么难以理解。即使你已经学过一次了，学过两次了。
在js.info 上学习 

### Class basic syntax 笔记

```
class MyClass {
  prop = value; // property
  
  constructor() { // constructor

  }

  method(...) {} // method (用this.prop调用)

  get something(...) {}  // getter method
  set something(...) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
}
```

### Class inheritance

`class Rabbit extends Animal {}`

解释：To inherit from another class, we should specify "extends" and the parent class before the braces {...}

不常写的写法
```
function f(phrase) {
  return class {
    sayHi() { alert(phrase) }
  }
}
class User extends f('Hello') {}
new User().sayHi();  // Hello
```

第一次看到，让我惊讶的地方
```
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);  // 一定要有这个否则会报错。
    // 解释：
    // When a normal constructor runs, it creates an empty object and assign it to this
    // But when a derived constructor runs, it doesn't do this. it expects the parent constructor to do this job
    // So if we're making a constructor our own, then we must call super, because otherwise the object
    for this won't be created. And we'll get an error.
    this.earLength = earLength;
  }
}

let rabbit = new Rabbit('White Rabbit', 10);
alert(rabbit.name); // White Rabbit
alert(rabbit.earLength); // 10
```

**need to call the parent constructor when inheriting**

### Static properties and methods

居然还有如下这样的神奇用法
```
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
]

articles.sort(Article.compare);

alert(articles[0].title); // CSS
```

inheritance of static methods   // 静态方法也可以被继承

### Private and protected properties and methods

1、protected properties are usually prefixed with an underscore `_`

example: 
```
class CoffeeMachine {
  _waterAmount = 0;
  
  set waterAmount(value) {
    if(value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }
}

let coffeeMachine = new CoffeeMachine(100);

coffeeMachine.waterAmount = -10 // Negative water
```

2、 Read-only "power"

```
class CoffeeMachine {

  constructor(power) {
    this._power = power;
  }
  
  get power() {
    return this._power;
  }

  // 如果get 存在，而没有set，那么就仅仅是只读，不会在控制台报错，但是也不能重新设置值。
  // 但是如果没有get，那么就可以set.
}
```

3、Private "#waterLimit"

// chrome 浏览器好像还不支持，会报错。

example: 
```
class CoffeeMachine {
  #waterLimit = 200;

  #checkWater(value) {
    if (value < 0) throw new Error("Negative water");
    if (value > this.#waterLimit) throw new Error("Too much water");
  }

}

let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
coffeeMachine.#checkWater(); // Error
coffeeMachine.#waterLimit = 1000; // Error
```

featrues：
1、On the language level, # is a special sign that the field is private. We can’t access it from outside or from inheriting classes.

2、Private fields do not conflict with public ones. We can have both private #waterAmount and public waterAmount fields at the same time.

### Extending built-in classes

built-in 对象不会继承父级的静态的属性和方法。

### Class checking: "instanceof"

instanceof 或者是 typeof 都可以用 Object.prototype.toString;

example:
```
let objectToString = Object.prototype.toString;

let arr = [];

alert(objectToString.call(arr));
```
总结
                  works for                                                        returns
typeof            primitives                                                       string
{}.toString       primitives,built-in objects, objects with Symbol.toStringTag     string
instanceof        objects                                                          true/false

task    this task is good
```

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B );   
```
解释：
instanceof 不会关心构造函数，但是关心它的原型，它与原型链相匹配。

a.__proto__  == B.prototype， so instanceof returns true

因此，根据instanceof 的逻辑，这原型定义了类型，而不是构造函数

### Mixins

举一个简单的列子就明白了
```
let sayMixin = {
  say(phrase) {
    alert(phrase);
  }
};

let sayHiMixin = {
  __proto__: sayMixin,
  sayHi() {
    super.say(`Hello ${this.name}`);
  },
  sayBye() {
    super.say(`Bye ${this.name}`);
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHiMixin);

new User("Dude").sayHi();
```

new Proxy





