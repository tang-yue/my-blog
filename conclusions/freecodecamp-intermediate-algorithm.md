### freecodecamp 里的中级算法

#### 1. Sum All Numbers in a Range

思路：
首先排序，如何计算是1加到n之和。1到数组最大值之和减去1到数组最小值之和。即结果

实现：
```
function sumAll(arr) {
  return Math.abs(arr[1]*(arr[1] + 1)/2 - arr[0]*(arr[0] + 1)/2) + Math.min(...arr);
}

sumAll([1, 4]);
```
note: Math.min()的用法

#### 2. Diff Two Arrays

思路： 返回的数组里值，是哪些在arr1中，不在arr2中，或者在arr2中，不在arr1中的

实现：
```
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  let diff1 = arr1.filter((v) => arr2.indexOf(v) === -1);
  let diff2 = arr2.filter((v) => arr1.indexOf(v) === -1); 
  newArr = diff1.concat(diff2);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

#### 3. Seek and Destroy

思路： 返回的是arr 中的元素，不在后面的元素组成的数组中的值组成的数组

实现：
```
function destroyer(arr, ...args) {
    return arr.filter((v) => args.indexOf(v) === -1);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

#### 4. Wherefore art thou

思路： 只要对象数组里的对象存在有后面的这个对象，那么就保留该对象。

note： Object.hasOwnProperty()

实现：
```
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);
  arr = collection.filter(function(element) {
    for(let i = 0; i < keys.length; i++) {
      if(!element.hasOwnProperty(keys[i]) || source[keys[i]] !== element[keys[i]]) return false;
    }
    return true;
  })
  return arr;
  // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```

#### 5. Spinal Tap Case

思路：遍历字符串，如果前面是小写的，后面是非字母，则将非字母变成字符-，如果前面是小写的，后面是大写，则在该大写的前面插入字符-。这是一种很笨的方法。

实现：
```
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var arr = str.split('');
  for(let i = 0; i < arr.length - 1; i++) {
    if((/[a-z]/g.test(arr[i])) && /[a-zA-Z]/g.test(arr[i+1]) === false) {
      arr[i+1] = '-';
    }
    if(/[a-z]/g.test(arr[i]) && /[A-Z]/g.test(arr[i+1]) === true) {
      arr.splice(i+1, 0, '-');
      i++;
    }
  }
  return arr.join('').toLowerCase();
}

spinalCase('This Is Spinal Tap');
```
别人的实现：

```
function spinalCase(str) {
  //将str分为两类，一类是以空格、下划线、短横线连接的字符串；一类是驼峰形式的字符串
  //驼峰形式的字符串
  if(str.split(/\W|_/).length === 1) {
    for (i = 0; i < str.length; i++) {
      //找到所有单词的首写大写字母，并用短横线和对应小写替换
      if (str[i].toUpperCase() === str[i]) {
        str = str.replace(str[i], "-"+str[i].toLowerCase());
      }
    }
  }
  //以空格、下划线、短横线连接的字符串，先转换为小写再替换
  else {
    //注意匹配模式加上全局标志，否则只会找到第一个匹配
    str = str.toLowerCase().replace(/\W|_/g, "-");    
  }
  return str;
}
```

#### 6. Pig Latin

思路：第一种第一个字符是元音的，第二种字符串中存在元音，第三种字符串中不存在元音。需要注意的是
第三种。

实现：

```
function translatePigLatin(str) {
  var vowel_arr = ['a','e','i','o','u'];
  if(vowel_arr.indexOf(str[0]) !== -1) return str + 'way';

  let arr = str.split('');
  let len = arr.length; // 之所以写在这里是为避免一直循环，循环
  for(let i = 0; i < len; i++) {
      arr.push(...arr.splice(i, 1, ''));
    if(vowel_arr.indexOf(arr[i+1]) !== -1) {
      arr.push('ay');
      return arr.join('');
    }  
  }
  return str + 'ay';
}

translatePigLatin("consonant");
```

#### 7. Search and Replace

实现：
```
function myReplace(str, before, after) {
  let new_after = after;
  if(before[0].toUpperCase() === before[0]) {
    new_after = after[0].toUpperCase() + after.slice(1);  
  }
  return str.replace(before, new_after); // 替换仅仅是第一个，如果后面有重复是替换不了的
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

#### 8. DNA Pairing

思路： 只要将对应的字符，替换成对应的数组，然后重新替换掉就可以了

实现：
```
function pairElement(str) {
  let res = [];
  let arr = str.split('');
  res = arr.map((ele) => {
    switch(ele) {
      case 'A':
      return ['A', 'T'];
      break;
      case 'T':
      return ['T', 'A'];
      break;
      case 'C':
      return ['C', 'G'];
      break;
      case 'G':
      return ['G', 'C'];
      break;
    }
  })
  return res;
}

pairElement("GCG");
```

#### 9. Missing letters

note： 'a'.charCodeAt()； String.fromCharCode(num)；

实现：
```
function fearNotLetter(str) {
  let initial_v = str[0].charCodeAt();
  for(var s of str) {
    if(s !== String.fromCharCode(initial_v)) {
      return String.fromCharCode(initial_v);
    }
    initial_v++;
  }
  return undefined;
}

fearNotLetter("abce");
```

#### 10. Sorted Union

note： 如何遍历args类

实现：
```
function uniteUnique(...arr) {
  var res = [];
  for(let i = 0; i < arr.length; i++) {
    res.push(...arr[i]);
  }
  res = res.filter((ele, i) => res.indexOf(ele) === i);
  return res;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

#### 11. Convert HTML Entities

转换的字符是 `& < > " '`
对应的实体为 `&amp;  &lt; &gt; &quot; &apos;`

实现：
```
function convertHTML(str) {
  // &colon;&rpar;
  let arr = str.split('');
  arr = arr.map((ele) => {
    switch(ele) {
      case '&':
      return '&amp;';
      break;
      case '<':
      return '&lt;';
      break;
      case '>':
      return '&gt;';
      break;
      case '"':
      return '&quot;';
      break;
      case "'":
      return '&apos;';
      break;
      default:
      return ele;
    }
  })
  return arr.join('');
}
```

#### 12. Sum All Odd Fibonacci Numbers

实现：
```
function sumFibs(num) {
  let cur_fibs = [];
  cur_fibs[0] = 1;
  cur_fibs[1] = 1;
  let sum = 0;
  let i = 1;
  if(num === 1) return num;
  while(cur_fibs[i] <= num && i <= num) {
    cur_fibs[i+1] = cur_fibs[i] + cur_fibs[i-1];
    if(cur_fibs[i]%2 !== 0) {
      sum = sum + cur_fibs[i];
    }
    i++;
  }
  return sum + 1;   // 记得要加上cur_fibs[0]
}

sumFibs(4);
```

#### 13. Sum All Primes （所有质数之和）

note： 如何判断该数是否是质数。该数除以2到该数之间的数都不等于0的数，就是质数。

实现：
```
function sumPrimes(num) {
  let sum = 2; // 因为是从3开始，前面有个2要加上去
  for(let i = 3; i <= num; i++) {
    let flag = 1;
    for(let j = 2; j < i; j++) {
      if(i%j === 0) {
        flag = 0; 
      }
    }
    if(flag === 1) {
      sum = sum + i;
    } 
  }
  return sum;
}
```

#### 14. Smallest Common Multiple

题目：找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。

最小公倍数： 两个或多个整数公有的倍数叫做它们的公倍数，其中除0以外最小的一个公倍数就叫做这几个整数的最小公倍数。

最大公约数：两个或多个整数共有约数中最大的一个。（用辗转相减法）求得

最小公倍数 = 两个数的积/最大公约数

思路：求该数组中，最大值和最小值中间的，先默认一个最小公倍数，再求各个中间值和最小公倍数的最小公倍数。

实现：
```
function smallestCommon(arr) {
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  var listOfNum = [];
  while (min<=max) {
    listOfNum.push(min);
    min++;
  }
  var result = listOfNum[0];

  for (var i = 1; i < listOfNum.length; i++) {
    result = findLCM(result, listOfNum[i]); // 算出，数组中间值和当前最小公倍数的最小公倍数
  }

  return result;
}
 // 辗转相减法（迭代写法）

 function gcd(a, b) {
  // 如果a，b 不相等，则用大的数减去小的数，直到相等为止
    while(a !== b) {
      if(a > b)
        a = a - b;
      else
        b = b - a;
    }
    return a;
 }

 function findLCM(a, b) {
  return a * b / gcd(a, b);
 }
```

#### 15. Drop it

实现：
```
function dropElements(arr, func) {
  // Drop them elements.
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      return arr.slice(i);
    }
  }
  return [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```

#### 16. Steamroller

思路：遍历数组，该值如果是还是数组，那么就再一次遍历，要累加用concat.

实现：

```
function steamrollArray(arr) {
  var result = [];
  arr.forEach(function(ele) {
    if(Array.isArray(ele)) {
      result = result.concat(steamrollArray(ele));
    } else {
      result.push(ele)
    }
  })
  return result;
}

steamrollArray
```

#### 17. Binary Agents

思路： 先将二进制转成整数，再将该整数转成对应字符，拼接起来。

实现：
```
function binaryAgent(str) {
  return str.split(' ').map((ele) => {
    let int_v = parseInt(ele, 2);
    return String.fromCharCode(int_v);
  }).join('')
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");    // return "Aren't bonfires fun!?"
```

#### 18. Everything Be True

实现：
```
function truthCheck(collection, pre) {
  // Is everyone being true?
  for(let i = 0; i < collection.length; i++) {
    if(!collection[i][pre]) return false;
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
```

下面的实现方法是错误的：

```
  function truthCheck(collection, pre) {
  // Is everyone being true?
  collection.map((ele) => {
    if(!Boolean(ele[pre])) {
      return false;    // 这里的return false后，并没有终止循环
    } 
  })
  return true;
}
```

#### 19. Arguments Optional

遇到的问题：如何判断是第一次返回的函数的参数。我想的是递归。

别人的实现
```
function addTogether(a,b) {
  if(Number.isFinite(a)) {
    if(!b) {
      return function(c) {
        if(Number.isFinite(c)) {
          return a + c;
        }
      }
    } else {
      if(Number.isFinite(b)) {
        return a + b;
      }
    }
  }
}

// 如果没有返回值，就默认是undefined了
```

#### 20. Make a Person

遇到的问题：是如何脱离firstAndLast 这个参数的

[参考](https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-make-a-person/16020/5)

实现：
```
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let fullName = [];
  this.setFullName = (full) => { fullName = full.split(' ')};
  this.setFirstName = (first) => { fullName[0] = first };
  this.setLastName = (last) => { fullName[1] = last };

  this.setFullName(firstAndLast);

  this.getFullName = () => fullName.join(' ');
  this.getFirstName = () => fullName[0];
  this.getLastName = () => fullName[1];
};

var bob = new Person('Bob Ross');
bob.getFullName();
```

#### 21. Map the Debris

轨道周期的计算公式 T=根号下4π²r³/GM    其中r为卫星半径（即卫星与地心的距离=卫星距离地面的高度+地球半径）

note： js开根号如何写 [Math.sqrt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)，[Math.PI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)

Math.round(Math.pow(4*Math.pow(3.14, 2)*Math.pow((avgAlt+earthRadius, 3))/GM), 0.5);

实现：
```
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var pi = 3.1416;
  return arr.map((obj) => {
    let r = Math.pow(obj['avgAlt']+earthRadius, 3);
    let v = 4*Math.pow(pi, 2);
    let m = r * v / GM;
    obj['orbitalPeriod'] = Math.round(Math.pow(m, 0.5));
    delete obj['avgAlt'];
    return obj;
  })
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```






