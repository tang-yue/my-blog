### 1、Warm up  

#####（1）In its most basic terms, a promise is an object that defines a method called then.
在它的最基本的含义里， promise 是一个定义了then方法的对象。

#####（2）The promise object represents a value that may be available some time in the future.

#####（3）promise 对象代表一个值，在未来的某个时刻是可获得的。

#####（4）Promises make writing performant, asynchronous code much easier and more fun promise 使得写高性能，异步代码，更容易和更有趣。

代码举列:
```
setTimeout(function() {
  console.log('TIMED OUT!')
}, 300)
```

### 2、Fulfill a promise

#####（1）promise 有重要的内部属性，它的状态。fulfilled,  rejected, 或者是pending（这是一种promise等待变成fulfilled或者rejected的状态）。

#####（2）有时候，你将会听到的resolved，从现在开始，你可以对待它作为fulfilled 或者 rejected的意义。

#####（3）大多promises 被 new Promise(executor), executor 是一个回调函数，格式 function (fulfill, reject).在executor 里面，无论是fulfill,或者 reject 被调用，都意味着操作的结束。多于，promises, fulfilling，意味着操作的成功完成，并输出一个值。为了传递这个值，调用fulfill函数的时候，把这个值，作为第一个参数。

##### (4) 在上节课，我们提到，promises有then属性方法。它是操纵promises和他们值的主要方式。它有两个可选的回调参数
onFulfilled 和 onRejected. 当promise 是 fulfilled 时候，对应 onFulfilled。 当promise 是rejected 对应 onRejected.  当fulfill方法被调用在executor里，带着一个值，promise 内部将会传递它，并且then触发第一次回调，带着相同的值。

#####（5）在实践中，你可以调用then属性函数多次，为了做复杂的事情，带着promise的这个值。 更平常的， 你可以做他们在所有相同的onFulfilled调用中，这将允许你更容易控制这个逻辑流。

#####（6）如果你调用 fulfill函数在executor 没有一个参数，这个onFulfilled 回调，将仍会被触发， 但是这些回调的参数将是undefined。 

代码举列：
```
var promise = new Promise(function (fulfill, reject) {
  return setTimeout(function() { fulfill('FULFILLED!') }, 300)
})

promise.then(function(onFulfilled) {
  console.log(onFulfilled)   // 'FULFILLED!'
})
```

### 3、 Reject a promise

#####（1）promise 被rejected, 理论上暗示了，这个值不会在被promise 成功的获取。
promise 提供了一个方法去通过这个阻止成功执行的特殊的错误。
#####（2）一旦promise 被rejected, 它从不可能被fulfilled(也不会再一次rejected)。

代码举列:
```
var promise = new Promise(function(fulfill, reject) {
  setTimeout(function() { reject(new Error('REJECTED!')); }, 300)
});


function onReject (error) {
  console.log(error.message);
}

promise.then(null, onReject);
```

### 4、 To reject or not reject

promise 里，只要执行了fulfill，就不会再执行reject了。

代码举列：
```
var promise = new Promise(function(fulfill, reject) {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
})

function onRejected(error) {
  console.log(error.message);
}

promise.then(console.log, onRejected);  // I FIRED

```

### 5、Always asynchronous

es2015 规范声明，promise 不得在他们被创建的时间循环的同一个点，执行他们的resolution/rejection函数。
这也就消除了，因执行顺序不同，而导致不同结果的可能性。

代码说明：
```
var promise = new Promise(function(fulfill, reject) {
  fulfill('PROMISE VALUE');
})

promise.then(console.log);     // 后打印出

console.log('MAIN PROGRAM');   // 先打印出

```

### 6、Promise me... quicker

ES2015 规范定义了一些，可以使promise的创建和工作，更快，更容易。

第一个就是.catch， 我们已经知道怎样去处理promise的rejection，---通过
.then 方法的第二个参数。然而有时候，你仅仅想处理rejection,并不需要成功。
在这些实例中，因为onFulfilled 回调是可选的，因此，你可以用null代替。然而
一个更容的方式，达到这个是使用.catch。

第二个就是 Promise.resolve和 Promise.reject.

代码举列：
```
promise.then(null, function(err) {
  console.error('THERE IS AN ERROR!!!');
  console.error(err.message);
})

// simply write

promise.catch(function(err) {
  console.error('THERE IS AN ERROR!!!');
  console.error(err.messge);
})
```

```
var promise = new Promise(function(fulfill, reject) {
  fulfill('SECRET VALUE');
})

// 和上面一样
var promise = Promise.resolve('SECRET VALUE');

```

```
var promise = new Promise(function(fulfill, reject) {
  reject(new Error('SECRET VALUE'));
})

// 和上面一样

var promise = Promise.reject(new Error('SECRET VALUE'));
```

### 7、 Promise after promise

promise 允许你去返回另一个promise在then方法回调里。

代码举列
提供两个全局函数 first 和 second

在你的程序里， first() will return a 将被 fulfilled 时候带一个秘密值。

调用 带着 first 的fulfilled 值的 second. 返回一个promise，带着一个秘密值。

最后在新的promise 里用console.log打印这个值

```

var firstPromise = first();

var secondPromise = firstPromise.then(function (val) {
  return second(val);
})

secondPromise.then(console.log);

```

### 8、 Values and promises

我是否一定要返回promises?

fulfillment 事件处理机制，可以返回promises 或者values.
你的promises 库将会做正确的事情并且包装你返回的值在promise里，如果有必要。

举列代码:
```
function attachTitle(name) {
  return 'DR. ' + name;
}

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);
```

### 9、 Throw an error

promise的最大的特点之一是他们可以处理错误的方式类似于同步代码。

代码举列：
```
function parsePromised(json) {
  return new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
}

function onReject(error) {
  console.log(error.message);
}

parsePromised(process.argv[2]).then(null, onReject)
```

### 10、 An important rule

#####（1）promise 被设计去模仿同步控制流。
#####（2）如果他们中的任何一个抛出意外，这个意外，将会从栈中冒出来，直到
它被一个catch 块捕捉，或者触碰到将要被抛出的全局上下文。
#####（3）由于promise 从它被拒绝，返回，它将会寻找下一个拒绝处理程序处理它。promise 从不resolve 超过一个

 
 ```
 doStuff()
  .then(doMoreStaff)
  .then(null, complainAboutJavascript)
 ```
上述代码如果执行doMoreStaff时，拒绝处理程序抛出一个错误，这将会很糟糕。

因此最好的实践就是总是放一个拒绝处理事件程序在你的promise链的底部。

done 事件处理程序就能很好的解决这个问题。

规则:

如果你不从你的promise中返回一个值给caller,然后就加一个done处理程序来防止未捕获的异常。

作用:
它可以保证开发者不想明确处理的所有错误，都被抛出到promise对象的外面，作为正常的未被处理的意外。

代码举列：
```
function alwaysThrows() {
  throw new Error("OH NOES");
}

function iterate(val) {
  console.log(val);
  return val + 1;
}

function onReject(error) {
  console.log(error.message);
}

Promise.resolve(1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(onReject)
```

### 11、 Multiple promises
当执行异步程序的时候，你同时想要操作复杂的操作。
在一些情况下，你希望延迟进一步的处理，直到一系列的异步操作都已经完成。

代码举列
```
function all(a, b) {
  return new Promise(function (fulfill, reject) {
    var counter = 0;
    var out = [];

    a.then(function(val) {
      out[0] = val;
      counter++;

      if (counter >= 2) {
        fulfill(out);
      }
    });

    b.then(function (val) {
      out[1] = val;
      counter++;
      if (counter >= 2) {
        fulfill(out);
      }
    })

  })
}

all(getPromise1(), getPromise2())
  .then(console.log);
```

### 12、Fetch JSON

代码举列：
```
const qio = require('q-io/http');

qio.read("http://localhost:1337")
  .then(function (json) {
    console.log(JSON.parse(json));
  })
  .then(null, console.error)
  .done()
```

### 13、do some work

代码举列:
```
const qio = require('q-io/http');

qio.read("http://localhost:7000/")
  .then(function (id) {
    return qio.read(`http://localhost:7001/${id}`)
  })
  .then(function (json) {
    console.log(JSON.parse(json));
  })
  .then(null, console.error)
  .done();
```

### 14、Async/await

单词async 在一个函数之前，意味着这个函数总是返回一个promise.
即使这个函数事实上返回的不是一个promise，也自动将其包装成一个promise. 

await 仅仅在async 函数内部起作用。

```
function f() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}
```
修改成如下这样也是可以的
```
(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  ...
  })()
```
关键词await使得js 等待直到promise解决并且返回结果。

### 15、关于回调。
function loadScript('/my/script.js', callback) {
  // the callback 执行 在 这个script 被加载完之后
}


说明:  1-13 为 [promise课程](https://github.com/stevekane/promise-it-wont-hurt)笔记。
14--15 为 [js文档](https://javascript.info/async) 笔记



