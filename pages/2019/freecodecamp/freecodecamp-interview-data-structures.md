[地址](https://learn.freecodecamp.org/) -> 最后一个**Coding Interview Prep** -> **Data Structures**


1. Typed Arrays

思路：按照列子

实现：
```
var byteSize = 64;
var buffer = new ArrayBuffer(byteSize);
var i32View = new Int32Array(buffer);
```

2. Learn how a Stack Works

针对这一条 `The initial declaration of the homeworkStack should not be changed.`
问题：如果这个该数组没有改变，里面的值又怎么可能会有变化?
是由于我写的格式不规范的缘故。

实现：
```
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// Only change code below this line

homeworkStack.pop();
homeworkStack.push('CS50');
```

3. Create a Stack Class

思路： 简单

实现：
```
function Stack() { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.push = function(arg) {
        collection.push(arg);
    }
    this.pop = function() {
        return collection.pop();
    }
    this.peek = function() {
        return collection[0];
    }
    this.isEmpty = function() {
        if(collection.length === 0) return true;
        return false;
    }
    this.clear = function() {
        collection = [];
    }
    // Only change code above this line
}
```

4. Create a Queue Class

思路：简单

实现：
```
function Queue () { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function(arg) {
        collection.push(arg);
    };
    this.dequeue = function() {
        return collection.shift();
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        if(collection.length === 0) return true;
        return false;
    }
    // Only change code above this line
}
```

5. Create a Priority Queue Class

思路： 简单

实现：
```
function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = function(arg) {
        this.collection.push(arg);
        this.collection.sort((a,b) => a[1]-b[1]);
    };
    this.dequeue = function() {
        this.collection.sort((a,b) => a[1]-b[1]);
        return this.collection.shift()[0];
    };
    this.size = function() {
        return this.collection.length;
    };
    this.isEmpty = function() {
        if(this.collection.length === 0) return true;
        return false;
    };
    // Only change code above this line
}
```

6. Create a Circular Queue

其实我并没有明白题目是什么意思。
思路：

实现：

