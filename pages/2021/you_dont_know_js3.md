你不知道的 javascript 下卷读书笔记

## 第一部分 起步上路

### 第一章 深入编程

### 第三章 深入 “你不知道的 js 系列”

## 第二部分 Es6 及更新版本

### 第 1 章 ES?现在与未来

### 第 2 章 语法

如果有多个变量需要声明的话，建议只用一个 let.

#### <a id="2.1 spread/rest">2.1 spread/rest</a>

`spread/rest` 收集和扩展，注意什么时候表示为收集，什么时候表示为扩展

```js
function foo(x, y, z) {
    console.log(x, y, z);
}
foo(...[1,2,3]);  // 1 2 3
```

```js
function foo(...args) { 
    console.log( args );
}
    foo( 1, 2, 3, 4, 5);          // [1,2,3,4,5]
```

#### <a id="2.2 默认参数值">2.2 默认参数值</a>

```js
function foo(x = 11, y = 31) { 
    console.log( x + y );
}

foo();  // 42
foo(5, undefined) // 36 <-- 丢了 undefined
foo(5, null) // 5 <-- null 被强制转换为0
```

#### <a id="2.2 默认值表达式">2.2 默认值表达式</a>

```js
var w = 1, z = 2;
function foo( x = w + 1, y = x + 1, z = z + 1 ) { console.log( x, y, z );
     }
     foo();                   // ReferenceError
```

w + 1 默认值表达式中的 w 在形式参数列表作用域中寻找 w，但是没有找到，所以就使用外 层作用域的w.
为什么z是一个此刻还没初始化的参数变量？？然后就报错了

#### <a id="2.3 解构">2.2 解构</a>

```js
var [a, b, c] = [1,2,3];
var {x, y, z} = {x: 4, y: 5, z: 6};

console.log(a, b, c); // 1 2 3
console.log(x, y, z); // 4 5 6

// 交换两个变量
var x = 10, y = 20;
[ y, x ] = [ x, y ];
console.log( x, y ); // 20 10
```

#### <a id="2.4 解构">2.4 解构</a>

解构默认值 ➕ 参数默认值

```js
function f6({ x = 10 } = {}, { y } = { y: 10 }) { console.log( x, y );
 }
f6();
f6( undefined, undefined );
f6( {}, undefined );
f6( {}, {} );
f6( undefined, {} );
// 10 10
// 10 10
// 10 10
// 10 undefined
// 10 undefined
f6( { x: 2 }, { y: 3 } );
```

#### <a id="2.5 对象字面量扩展">2.5 对象字面量扩展</a>

```js
// 简洁属性
var x = 2, 
y = 3, 
o= {
x,
y };
// 简洁方法
var o = { 
    x() {},
    y() {} 
}

// 计算属性名
var prefix = "user_";
var o = {
baz: function(..){ .. }
};
o[ prefix + "foo" ] = function(..){ .. };
```

#### <a id="2.6 模版字面量">2.6 模版字面量</a>

感觉没啥值得记录的了

#### <a id="2.7 箭头函数">2.7 箭头函数</a>
