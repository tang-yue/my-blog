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
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // 取连续的四个数要求，和最大
    var sum = -Infinity;
    var len = nums.length;
        for(let i = 0; i <= len-k; i++) {
            var total = nums.slice(i,i+k).reduce((a,b) => a+b, 0);  
            sum = Math.max(sum, total);   
        }
    return sum/k;    
};
```
可是我并不知道我究竟是哪里出错了。 
别人的答案：
```
var findMaxAverage = function(nums, k) {
  let max = -Infinity;
  for(let i = 0; sum = 0; i < nums.length; i++) {
    sum += nums[i] - (nums[i-k] || 0);
    if(i >= k-1)max = Math.max(max, sum);
  }
  return max;
}
```

11月1日 做的，但是仍旧是参照了他人
11月1日 开始
### 888. Fair Candy Swap
自己做好的

### 849. Maximize Distance to Closest Person
自己做好的

### 840. Magic Squares In Grid
参考代码 https://blog.csdn.net/qq_30216191/article/details/82228083
太麻烦了，真的是太麻烦了，太麻烦了，真的是太麻烦了。
太麻烦了，真的是太麻烦了，太麻烦了，真的是太麻烦了。

### 219 Contains Duplicate II

记录一个值第一次出现的位置和第二次出现的位置。
这道题我不会做。
别人的答案如下：
```
var containsNearbyDuplicate = function(nums, k) {
    let ind = {}, n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] in ind && i - ind[nums[i]] <= k) {
            return true;
        }
        ind[nums[i]] = i;
    }
    return false;
};
```
### X of a Kind in a Deck of Cards
 最关键的地方在于我没有明白题目的意思，
 我并不知道究竟是怎么分组的。
 看gcd 是什么意思。最快速的方法是把别人的答案，自己再运行一遍。

别人的答案
// 抄写一遍答案
```
var hasGroupsSizeX = function(deck) {
  var map = {};
  for(var i = 0; i < deck.length; i++) {
    if(typeof map[deck[i]] == 'undefined') {
      map[deck[i]] = 1;
    } else {
      map[deck[i]] +=1;
    }
  }
  var min = map[deck[0]];
  for(var k in map) {
    if(map[k] <= min) {
      min = map[k];
    }
  }
  var flag;
  for(var i = 2; i <=min; i++) {
      flag = true;
      for(var k in map) {
        if(map[k]%i != 0) {
          flag = false;
          break;
        }
      }
      if(flag === true) {
        return true;
      }
  }
  return false;
}
```

上述题目明天再重新默写一下

### 605. Can Place Flowers

这道题我做出来了 耶耶

我的答案如下:
```
var canPlaceFlowers = function(flowerbed, n) {
    var count = 0;
    if(flowerbed.length <=2 && flowerbed[0] === 0 && n === 1) return true; 
    if(flowerbed.length > 2) {
         if(flowerbed[0] === 0 && flowerbed[1] === 0) count++;
         if(flowerbed[flowerbed.length-1] === 0 && flowerbed[flowerbed.length-2] === 0) count++;
    }
   
    for(let i = 2; i+2 < flowerbed.length; i++) {
       if(flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1] === 0) {
           i++;
           count++;
       } 
    }
    return count >= n;
};
```

别人的答案如下：
```
var canPlaceFlowers = function(flowerbed, n) {
  var count = 0;
  var preve = 0;
  var next = null;
  for(var i = 0; i < flowerbed.length; i++) {
    flowerbed[i+1] ? next = flowerbed[i+1] : next = 0;
    if(flowerbed[i] == 0 && prev == 0 && next == 0) {
      flowerbed[i] = 1;
      count += 1;
    }
    prev = flowerbed[i];
  }
  return count >=n;
}
```
// 如果这个值是第一个那么要补0，如果这个值是最后一个值也同样要补0

### 581. Shortest Unsorted Continuous Subarray

这道问题我做出来了。
我的答案：
```
var findUnsortedSubarray = function(nums) {
    // 问我要排序几个数，才能让整个nums看起来是一个升序
    // 首先进行排序
    let nums1 = [].concat(nums);
    let first, last;
    nums1.sort((a, b) => a-b);
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] != nums1[i]) {
            if(typeof first !== 'undefined') {
                last = i;
            } else {
                first = i;
            }
        }
    }
    return typeof first !== 'undefined' ? last-first+1 : 0;
};
```
别人的答案都不怎么样

### 532. K-diff Pairs in an Array

// 我只是想不明白，为什么我没有办法把重复的给去掉呢

// 我去掉重复的方法是错误的，这让我觉得很纳闷。

// 单个的重复，删不掉，才是关键。

// 我发现如果数组里面的内容是数组的话，去重没有效果。
11月11日，想出来了，有时候真的仅仅是一瞬间就想出来了

我的答案如下：
```
var findPairs = function(nums, k) {
    let output = 0;
    let res = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(Math.abs(nums[i] -nums[j]) === k) {
                if(res.indexOf(`(${nums[i]},${nums[j]})`) === -1) {
                    output++;
                    res.push(`(${nums[i]},${nums[j]})`, `(${nums[j]},${nums[i]})`);
                }
            }
        }
    }
    return output;
};
```

别人的答案
 3, 1, 1, 5, 4, 3    k = 2;
```
var findPairs = function(nums, k) {
  if(k < 0) return 0;
  let set = new Set(), res = new Set();
  for(let i = 0; i < nums.length; i++) {
    if (set.has(nums[i] + k)) res.add(nums[i] +k);
    if (set.has(nums[i] - k)) res.add(nums[i]);
    // 你会发现上面两行，最后add进去的都是统一的较大值。
    // 而不是有的add两个值当中的较小值，而有的add两个值当中的最大值
    set.add(nums[i]);
  }
  return res.size;
}
```
并不需要关心 set 或者 res 是否是数组，只要得出其长度就可以了
value    set       res

3        3
1        3,1       3
1        3,1       3
5        3,1,5     3,5

可以说是很巧，不太容易理解作者的思路，也很难想到。
其余的答案都不怎么样。

### 414 Third Maximum Number
做出来了
自己的答案：
```
var thirdMax = function(nums) {
    nums.sort((a,b) => a-b);
    let newCopy = Array.from(new Set(nums));
    let len = newCopy.length;
    return typeof newCopy[len-3] != 'undefined' ? newCopy[len -3] : newCopy[len -1]
};
```
别人的答案：
```
var thirdMax = function(nums) {
  let top3 = new Set();
  for(let i = 0; i < nums.length; i++) {
    top3.add(nums[i]);
    if(top3.size > 3) {
      top3.delete(Math.min(...top3));
    }
    // 只要大于3， 那么就删除其中的最小值。 
  }
  return top3.size < 3 ? Math.max(...top3) : Math.min(...top3);
}
```
知识点:  new Set()   之后其运用的方法  add   delete 


### 189. Rotate Array
做出来了
自己的答案:
```
var rotate = function(nums, k) {
    // 仅仅就是把最后k位的数，给提到最开头的位置。
    // arr.slice(0) 等于arr
    let flag =  k%nums.length;
    if (flag === 0) return nums;
       nums.unshift(...nums.slice(-flag));
       var i = 0;
       while(i < flag) {
        nums.pop();
        i++;
        }
       return nums;
};
```
别人的答案

```
var rotate = function(nums, k) {
  let x = 0;
  while(x < k) {
    nums.unshift(nums.pop());
    // 从末尾处删除的值，直接再添加到最前面
    x++;
  }
}
// 上述中k 等于 k % nums.length is better 
```
另外一种想法是把 nums.length - k 这些数从开头删除，然后添加到nums的最后

### 665 Non-decreasing Array
// 凡事比别人多走一步，多努力一步，就能比别人多很多
但是我还是不会。我觉得最主要的问题在于，在正好大于的那个地方，会有很多重复的值。
这就导致很难弄。
别人的答案：
```
const checkPossibility = (nums) => {
  const left = nums.slice(0);
  const right = nums.slice(0);
  const i = nums.findIndex((a, i) => a > nums[i+1]);
  if(-i) left.splice(i, 1);    // 删除了这个突出的值
  if(-i) right.splice(i+1, 1); // 删除这个突出值的后面的值
  return !left.some((a, i) => a > left[i + 1]) // 这个地方我想不通为什么不用i，而要用i+1，因为i这个值就是指 a这个值
          || !right.some((a, i) => a > right[i + 1]) // 同样的这个地方也是
}
```
我自己想是怎么都想不到的。真的是很难理解。
知识点：   arr.findIndex
抄一遍，背一遍，再默写两遍，这样应该就会很快记住了吧

另外一个别人的答案：
```
const checkPossibility = nums => {
  if(nums.length < 3) return true;
  let oneMod = false;
  for(let i = 0; i < nums.length; i++) {
    if(i < nums.length -1 && nums[i] > nums[i + 1]) {
      if(oneMod) return false;
      oneMod = true;
      if(i < nums.length -2 && nums[i] > nums[i+2] 
        && i > 0 && nums[i-1] > nums[i+1]) { 
          return false; 
      }
    }
  }
  return true;
};
```
// 这个别人的答案，和我的思路类似，关键在于别人对自己的思路
更加的确定，更加的清晰

我最后还是想选择后一种进行记忆