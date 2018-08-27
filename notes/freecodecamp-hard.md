8月27日
要重新默写一遍的题目
Pig Latin 
要对做过的题目，重新筛选一遍，不怎么会的，再重新默写一遍。

解析：
```
  let str = "lowerAndUpperCase";
  str.replace(/([a-z])(A-Z)/g, '$1 $2');
  上述代码表示的是什么意思。
```
代表：
```
  str.replace(/(a-z)(A-Z)/g, function(match, s1, s2) {
    return s1 + ' ' + s2;
    })
```

这个明天也是要默写出来的
```
  function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

// test here
spinalCase('This Is Spinal Tap');
```

关于正则replace 带有变量的用法

```
  function myReplace(str, before, after) {
       // 其中before 和 after 都是 变量
      str.replace(/`${before}`/g, after);时 // 是错误的写法
      str.replace(before, after);    // 这个才是正确的写法
  }
```

正则`/ /`  这个里面是如何写变量的呢。
用`var re = new RegExp("^\\d+$", "gim")`
给前面的字符串加变量
```
var v = "b1";
var re = new RegExp("^\\d+" + v + "$", "gim");
```