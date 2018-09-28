## array

### Array Partition I

1. array.sort() 对于负数的排序会出错，应改成`array.sort(function(a,b) { return a-b });`
2.`Math.min(...array.slice(n, n+2))`   将内部的数组转化成值形式

### Reshape the Matrix

用到了这个平铺数组

```
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( accumulator, currentValue ) => accumulator.concat(currentValue),
  []
);
``` 

### Toeplitz Matrix

让我再写一遍，我可能还是会写错的



### Move Zeroes

splice
用法
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
start 修改的开始位置
item1, item2, ...  要添加进数组的元素，从start位置开始
注意会改变原始数组。

slice
用法
并不一定是数组，字符串也是可以的
arr.slice([begin[, end]])
注意并不会改变原始数组。

从后向前循环，不能从前向后循环，从前向后循环会报错的。

### Position of Large Groups

重新再写一遍吧

### Majority Element

一个数组里面有重复数字元素仍旧是会排序的。

返回也是排序后的数组，sort() 会更改掉原数组。

### Degree of an Array

一个数组里面有重复的元素，重复次数最多的最短长度

### Maximum Product of Three Numbers

arr.sort();  sort 会改变原数组
sort() 并不会排序两位数，三位数。
arr.sort(function(a, b) {return a - b;});
arr.sort((a, b) => a - b);

### Longest Continuous Increasing Subsequence
连续增长数的长度

最近脑袋被卡死了，leetcode 看着就觉得很是乏味。
不是乏味，而是做不出来。

既然最近写leetcode写不出来，就说明我需要学些东西了。
我发现我最近一直没有发现的一个错误。
我写了一个for循环，里面嵌套了一个if嵌套语句。
但是这样写，我却从未意识到有什么错误，我为自己感到悲哀。
```
for(let i = 0; i < nums.length; i++) {
    if(nums[++i]>nums[i]) {
        .... 
    // 这里里面的nums[++i]和nums[i]其实这两个值永远
    // 不可能小于或者是大于，只有可能是等于
    }
}
```
### Degree of an Array
只是觉得我得方法是如此得low。
// 这道题是我照别人抄的

### transpose-matrix
这道题我觉得我又需要去抄别人了。
这道题，这么简单，但是我去抄了别人的。
可耻，重新默写吧

### Max Area of Island
这道题我觉得我也同样是写不出来的。
https://leetcode.com/problems/max-area-of-island/discuss/127909/100-JavaScript-solution

### Best Time to Buy and Sell Stock

哈哈， 这道题我做出来了

### 118.Pascal triangle 
这道题我又做不出来了
```
var generate = function(numRows) {
  var outputs = [];
  for(var i = 0; i < numRows; i++) {
    var curArr = [i];
    curArr[0] = 1, curArr[i] = 1;
    for(var j = 1; j < i; j++) {
      curArr[j] = outputs[i - 1][j - 1] + outputs[i - 1][j];
    }
    outputs.push(curArr);
  }
  return outputs;
}
```
上面是我看答案之后的结果
### 53.Maximum Subarray
这道题 我觉得我自己是做的没有的错的，
但是实际提交的时候， 却是有报错的。
报错提示: Memory Limit Exceeded。
```
var maxSubArray = function(nums) {
  let cur = nums[0];
  let res = nums[0];
  for(let i = 1; i < nums.length; i ++){
    if(cur < 0){
      cur = nums[i];
    }
    else {
      cur = cur + nums[i];
    }
    res = Math.max(res, cur);
  }
  return res;
};
// 这个答案我完全理解不了
```

```
var maxSubArray = function(nums) {
  for(let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i -1])
  }
  return Math.max(...nums);
}
// 这个答案我也是完全的理解不了
```

### 66. Plus One
这道题我又做不出来了。
// 究竟末尾是有多少个9呢，这个我应该如何去判断。
// 这个我应该如何写代码。
// 我不知道啊！！！

9月17日  看着上述所记录的笔记，我只感觉到我的能力不足

### 643. Maximum Average Subarray I

我又遇到这个问题了。
js 中整数最最小值。
这个最小值我应该怎么写呢， 使用Number.MIN_VALUE = 5e-324;

这个地方的最小值，我计算出来了，也还是不行的。

-Number.MAX_VALUE

-Infinity
我都尝试过了，但是仍旧是报错的，可是我并不知道是为什么。
我的逻辑按理说应该都是没有问题的，我并不知道究竟是哪里错了


报错为时间执行限制。
这样思考简直是浪费时间。

我的错误的答案如下：
```



```

别人的答案：
```
var findMaxAverage = function(nums, k) {
  let max = -Infinity;
  for(let i = 0; sum = 0; i < nums.length; i++) {
    sum += nums[i] - (nums[i-k] || 0);
    max = Math.max(max, sum);
  }
  return max;
}
```











