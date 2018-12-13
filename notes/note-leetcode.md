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

别人的答案：
```
var numMagicSquaresInside = function(grid) {
    var rows = grid.length;
    var cols = grid[0].length;
    var count = 0;
    if(rows < 3 || cols < 3) return 0;
    for(let i = 0; i < rows -2; i++) {
        for(let j = 0; j < cols -2; j++) {
            count += isMagic(i, j, grid);
        }
    }
    return count;
}
function isMagic(x, y, arr) {
    var res = [];
    for(let i = x; i < x + 3; i++) {
        for(let j = y; j < y + 3; j++) {
            if(arr[i][j] > 9 || arr[i][j] < 1) return 0;
            res.push(arr[i][j]);
        }
    }
    if(new Set(res).size !== res.length) return 0;
    // 行
    let r1 = res[0] + res[1] + res[2];
    let r2 = res[3] + res[4] + res[5];
    let r3 = res[6] + res[7] + res[8];
    // 列
    let c1 = res[0] + res[3] + res[6];
    let c2 = res[1] + res[4] + res[7];
    let c3 = res[2] + res[5] + res[8];
    // 斜方向
    let d1 = res[0] + res[4] + res[8];
    let d2 = res[2] + res[4] + res[6];
    if(r1 == r2 && r1 == r3 && r1 == c1 && r1 == c2 && r1 == c3 && r1 == d1 && r1 == d2) {
        return 1;
    } else {
        return 0;
    }
}
```
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
### 914 X of a Kind in a Deck of Cards
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
可惜我没有把答案给记录下来。

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

11月14日 下午5点  开始 leetcode 的 String 部分

######  leetcode 的 String 部分

### 929. Unique Email Addresses
我的答案：
```
var numUniqueEmails = function(emails) {

  let newEmails1 = emails.map((ele) => {
        return ele.split(/@/g)[1];
    })
  let newEmails2 = emails.map((ele) => {
      return ele.split(/@/g)[0].split(/\+/g)[0].replace(/./g, '');
    })
    
  let newEmails3 = newEmails2.map((ele, index) => {
        return ele + newEmails1[index];
    })
    return new Set(newEmails3).size; 
};

```
别人的答案： 这个答案写的真好,好在简洁明了
```
var numUniqueEmails = function(emails) {
  var s = new Set();
  for(var e of emails) {
    var t = e.split('@');
    s.add((t[0].split('+'))[0].replace(/\./g, '') + '@' + t[1]);
  }
  return s.size;
}
```

### 709 ToLowerCase
我的答案如下：
```
var toLowerCase = function(str) {
  return str.toLowerCase();
}
```
别人的思路，自己很容易理解的地方
```
var toLowerCase = function(str) {
    return str.split('').map((ele, idx) => {
    let v = str.charCodeAt(idx);
    if(v >= 65 && v <=90) {
      return String.fromCharCode(v+32);
    } else {
      return String.fromCharCode(v);
    }
  }).join('');
};
```

### 804 Unique Morse Code Words

我的答案：
```
var uniqueMorseRepresentations = function(words) {
    var trans = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    return new Set(words.map((ele, idx) => {
       return ele.split('').map((item, i) => {
            return trans[ele.charCodeAt(i) - 'a'.charCodeAt(0)];
        }).join('');
    })).size;
};
```
别人的答案也都是特别的让人觉得有学习的地方。

### 657 Robot Return to Origin

我的答案：
```
let count = {};
    for(var p in moves) {
      let k = moves[p];
      count[k] = (count[k] || 0) + 1;  
    }
    return count["L"] === count["R"] && count["D"] === count["U"];
```
但是我的答案执行速度太慢了

别人的答案：
```
var judgeCircle = function(moves) {
    let x = 0, y = 0;
    for (let move of moves) {
        switch(move) {
            case 'U': y++ ;break;
            case 'D': y-- ;break;
            case 'L': x-- ;break;
            case 'R': x++ ;break;
        }
    }
    return x === 0 && y === 0
};
```
不禁感叹写的真好，因此去默写一遍吧

### 557. Reverse Words in a String III

我的答案：
```
var reverseWords = function(s) {
  return s.split(" ").map((e, i) => {
      return e.split('').reverse().join('');
  }).join(" ");  
};
```
好吧，貌似很多人，都想到了。这应该是比较简单的了，所以下面的
都不需要看了。

### 344. Reverse String
我的答案：
```
var reverseString = function(s) {
    return s.split('').reverse().join('');
};
```
这应该是比较简单的答案了。所以别人的答案我就不会再去看了。

### 893 Groups of Special-Equivalent Strings
这道题，我先暂时的放一下

### 521. Longest Uncommon Subsequence I
我的答案：
```
var findLUSlength = function(a, b) {
    let aLen = a.length;
    let bLen = b.length;
    if(aLen === bLen && a === b) return -1;
    return aLen >= bLen ? aLen : bLen;
};
```
这道题，比较简单。

### 937. Reorder Log Files

我的答案
```
var reorderLogFiles = function(logs) {
let letterSum = 0;
    for(let i = 0; i < logs.length; i++) {
      if(isNaN(logs[i].split(' ')[1])) {
        letterSum ++; 
        logs.unshift(...logs.splice(i, 1)); 
      }
    }
    let letterArr = logs.slice(0, letterSum);
    let arr = [];
    for(let i = 0; i < letterArr.length; i++) {
      arr.push(letterArr[i].split(' ').slice(1).join(' '))
    }
    arr.sort(function(a,b){return a.localeCompare(b)});
    let soterArr = [];
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < letterArr.length; j++) {
        if(arr[i] === letterArr[j].split(' ').slice(1).join(' ')) {
          soterArr.push(letterArr[j]);
        } 
      }
    }
    let result = logs.slice(letterSum)
    result.unshift(...soterArr);
    return result;
}
```

别人的答案：
```
var reorderLogFiles = function(logs) {
let letters = [];
    let numbers = [];
    let final = [];

    logs.forEach(log => {
        const arr = log.split(' ');
        if (arr[1].match(/[0-9]/g)){
            numbers.push(arr.join(' '))
        } else {
 //move ID to end of array prior to sorting
            arr.push(arr.shift());
            letters.push(arr)
        }
    })
    // 记录另外一种数组排序法
    letters.sort();
    letters.forEach(arr => {
 //move ID back to beginning
        arr.splice(0,0,arr.pop())
        final.push(arr.join(' '))
    })
    return final.concat(numbers);
}
```
另外一个别人的答案：
思路比较清晰
```
var reorderLogFiles = function(logs) {
    let letter = [], digit = [];
    for(let v of logs) {
        if(v.split(" ")[1].charAt(0) >= '0' && v.split(" ")[1].charAt(0) <= '9'){
            digit.push(v);
        } else {
            letter.push(v);
        }
    }
    // 上述 for 循环的这个思路就比较清晰
    letter.sort(function (a, b) {
      // 我觉得这个地方的比较不是很合理
        return a.split(" ")[1].localeCompare(b.split(" ")[1]) || a.split(" ")[2].localeCompare(b.split(" ")[2])
    })
    return letter.concat(digit);
};
```
### 824. Goat Latin

我的答案

```
var toGoatLatin = function(S) {
   // 规则如下
   // 如果是以元音字母开头，那么将ma添加到单词的尾部。
   // 如果是辅音开头，则移动第一个字母到单词的最后，然后再添加ma
   // 根据字符串，添加，单词在字符串的下标个a到字符串的末尾
   return S.split(' ').map((ele, index) => {
            let eleArr = ele.split('');
            var vowel = ['a', 'e', 'i', 'o', 'u'];
            if(vowel.indexOf(ele.charAt(0).toLowerCase()) !== -1) {
            } else {
                eleArr.push(eleArr.shift());
            }
            eleArr.push('ma')
            for(let i = 0; i <= index; i++) {
                eleArr.push('a');
            }
            return eleArr.join('');
        }).join(' ');
};
```
别人的答案：
```
function toGoatLatin(S) {
  const arr = S.split(' ');
  for(let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if(['a', 'e', 'i', 'o', 'u'].includes(word[0].toLowerCase())) {
      word += "ma";
    } else {
      word = `${word.slice(1)}${word.slice(0, 1)}ma`;
    }
    word += 'a'.repeat(i+1);  // 第一次见到还有repeat用法
    arr[i] = word;  // 这样的思路是值得借鉴的
  }
  return arr.join(' ');
}
```
别的答案都不怎么样。

###  520 Detect Capital
自己的答案：
```
var detectCapitalUse = function(word) {
  if(word.charAt(0) >= "A" && word.charAt(0) <="Z") {
    if(word.slice(1) === word.slice(1).toLowerCase() ||
       word === word.toUpperCase()
      ) return true;
      else return false;
  } else {
      if(word === word.toLowerCase()) return true;
      else return false;
  }   
};
```

别人的答案
```
var detectCapitalUse = function(word) {
   if(word.toUpperCase()==word || word.toLowerCase()==word || word[0].toUpperCase()== word[0] && word.slice(1).toLowerCase()==word.slice(1)) return true
    return false
};
```
别人的答案是真精简。

### 696 Count Binary Substrings
我觉得下面需要写以下自己的思路
我的答案：
```

```

先放着放下吧

### 788. Rotated Digits
思路：
```
// 2， 5 6 9
   // 0 1 8  个位数的时候，不能够有这些
   // 要注意末尾为0的，
   // 要注意1，8 这样的，比如11 88，这样就会得到重复，并不是符合我们的要求
   // 这道题的思路是什么
    // 十位数的时候， 10 11 12 13 14 15 16 17 18 19
    // 12 15 16 18 19
    // 21 22 25 26 28 29 
    //  3 全部不可以
    这道题真心好难呀，我做不出来
```
先去复习一下吧
12月4日   14:00 我再一次的看这道题，我仍旧还是不知道怎么做。
并且对于以前被打断的记忆，我有些抵触感需要去回忆。
并且已经达不到当初思考时的那种状态。

### 917 Reverse Only Letters
思路  首先要把字母的给摘出来，倒序
然后将不是字母给按照原来的位置给插入进去。
note: S 里面可能没有字母
我的答案：
```
var reverseOnlyLetters = function(S) {
    if(S.match(/[a-zA-Z]/g) === null) return S;
    let arrLetters = S.match(/[a-zA-Z]/g).reverse();
    for(var i in S) {
        if(!/[a-zA-Z]/.test(S[i])) { arrLetters.splice(i,0,S[i]); }
    }
    return arrLetters.join('');    
};
```
别人的答案：
都需要很多行

### 606 Construct String from Binary Tree
这道题我不知道这个括号应该怎么处理。

应该是我完全没有读懂题意

别人的答案
```
const tree2str = root => {
  // 递归的最后条件，满足了要退出去，否则就成了死循环。
  if(!root) {
    return '';
  }
  const val = root.val;
  const left = tree2str(root.left);
  const right = tree2str(root.right);

  if(!left && !right) {
    return `${val}`;
  }

  if(!right) {
    return `${val}(${left})`;
  }
  
  return `${val}(${left})(${right})`;
}
```
为什么别人都能理解题目的意思，而我却不能理解。

### 13 Roman to Integer

刷leetcode 看一道不会一道，我很崩溃呀。
当你要决定放弃的时候，再想一想。

思路
我是需要把 IX IV XL XC CD CM 给取出来。
但是我忽略了一点，就是在这个字符串中可能有两个 IX IX.
```
"I":1,
"V":5,
"X":10,
"L":50,
"C":100,
"D":500,
"M":1000,
```
这道题我又做不出来了，郁闷。郁闷，郁闷。

### 383. Ransome Note
思路：
1. ransomNote 里的每一个值在magazine里对应的都有且大于等于1个。
每一个值都找到之后，然后再将这个值给删掉，直到所有的都能够找到，那么就满足条件。
在理解题目的意思上我浪费了很多时间。
我的答案：
```
var canConstruct = function(ransomNote, magazine) {
   for(var s of ransomNote) {
       let atIndex = magazine.indexOf(s);
       if(atIndex === -1) {
           return false;
       }
       let magazineArr = magazine.split("");
       magazineArr.splice(atIndex, 1);
       magazine = magazineArr.join("");
   }
    return true;
};
```

Runtime： 3368 ms faster than 0.53%
问题在于太慢了

别人的答案：
```
var canConstruct = function(ransomNote, magazine) {
  for(var s of ransomNote) {
    if(s.indexOf(magazine) === -1) {
      return false;
    } else {
      magazine = magazine.replace(s, "")
    }
  }
  return true;
}
```

### 387. First Unique Character in a String
我的答案：
```
var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++) {
        if(s.replace(s[i], "").indexOf(s[i]) === -1) {
            return i;
        }
    }
    return -1;
};
```

runtime： 483ms  运行时间太长了
我不能因为一两道题目太难了，而放弃继续下去，这样只会耽误时间。

别人的答案：
```
var firstUniqChar = function(s) {
  for(let i = 0; i < s.length; i++) {
    if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      // 我的印象里是有这样的代码，但是可能是缺乏实践，没有想起来用。
      return i;
    }
  }
  return -1;
}
```

我觉得我主要是受上一题的影响。
### 551 Student Attendance Record I

我的答案：
```
var checkRecord = function(s) {
    // 超过一个a  或者是有超过两个连续L 的
    let aLen = s.match(/A/g) ? s.match(/A/g).length : 0;
    if(aLen > 1) return false;
    return s.match(/LLL/g) ? false : true;
};
```

别人的答案：
var checkRecord = function(s) {
  return s.split("A").length <= 2 && s.indexOf("LLL") === -1;
}

### 541. Reverse String II
思路: 将string, 每隔  k个数进行分割
有时候我就在想，有没有什么办法可以不用遍历数组呢。

我的答案：
```
var reverseStr = function(s, k) {
    let arr = s.split("");
    for(let i = k; i < arr.length; i=i+k) {
        arr.splice(i,0,",");
        i++;
    }
    let newArr = arr.join("").split(",");
    for(let i = 0; i < newArr.length; i=i+2) {
        newArr[i] = newArr[i].split("").reverse().join("");
    }
      return newArr.join("");
};
```

Runtime: 136 ms, faster than 0.00%  太慢了

把这道题下的答案都看下吧

别人的答案：
```
var reverseStr = function(s, k) {
  let res = "";
  for(let i = 0; i < s.length; i += 2*k) {
    res += s.slice(i,i+k).split("").reverse() + s.slice(i+k, i+k+k);
    // 循环拼接
  }
  return res;
}
```
别人的另一个答案：
```
var reverseStr = function(s, k) {
    //1. string split
    //2. chunk reverse
    //3. join
    var reg = new RegExp(`(\\S{${2*k}})`);
    return s.split(reg).map((thunk)=>{
      thunk = Array.from(thunk);
      return thunk.splice(0,k).reverse().concat(thunk).join('');
    }).join('')
};
```
1、 如何用正则表达式，将字符串里的字母，每几个几个分配成一组。注意正则里面的括号。
2、 str 如何快速转化成数组
3、别人是这样颠倒前k个字母的顺序，并保持后k个字母不变得
`thunk.splice(0,k).reverse().concat(thunk).join("")`

### 925 Long Pressed Name
思路:
name 里面的每一个字母对应的在typed 里面应该是至少对应1个。才会满足条件。

```
var isLongPressedName = function(name, typed) {

}
```
在尝试了三种方法以后，都出现了错误，我觉得我应该放弃这道题了。
在这样的情况下，我觉得我可以看下答案。明天看吧。

### 819. Most Common Word

思路：首先将字符串里的单词给匹配出来。然后对这些单词的重复数进行排序。之后排除掉空格和banned变量的值。

我的答案：
```
var mostCommonWord = function(paragraph, banned) {
  let obj = {};
      paragraph.toLowerCase().match(/\w+/g).map((ele) => {
        obj[ele] = (obj[ele] || 0) + 1;
      })
      let arr = [];
      for(var o in obj) {
        arr.push({"name":o, "key": obj[o]});
      }
      arr.sort((a,b) => b.key - a.key);
      for(let i = 0; i < arr.length; i++) {
        if(!banned.includes(arr[i].name)) {
          return arr[i].name;
        }
      }  
};
```
别人的答案：
```
const mostCommonWord = (paragraph, banned) => {
    const bset = new Set(banned);
    const parr = paragraph.toLowerCase().split(/\W+/);
    const counts = {};
    for (const w of parr) {
        counts[w] = (counts[w] || 0) + !bset.has(w);
    }
    return Object.entries(counts).reduce((res, arr) => arr[1] > res[1] ? arr : res, ['', -Infinity])[0];
};
```
只不过是别人将我后面的那些代码都用成了一行来完成。

别人的另一个答案：
```
var mostCommonWord = function(paragraph, banned) {
    var ban = new Set(banned);
    var words = paragraph.replace(/[!\?\'\,\;\.]/g, '').toLowerCase().split(' ');
    var counts = words.reduce((obj, word) => {
        if (!ban.has(word)) { obj[word] = obj[word] + 1 || 1; }
        return obj;
    }, {});
    return Object.keys(counts).reduce((maxKey, key) => {
        return counts[key] > counts[maxKey] ? key : maxKey;
    }, Object.keys(counts)[0]);
};
```
上述中别人的reduce 方法 Object.keys(counts)  真是用的恰到好处。
正则表达式处得写法也是值得我学习得地方
但是这个答案不可以通过。

### 345. Reverse Vowels of a String
思路： 第一个元音和倒数第一个元音，第二个元音和倒数第二个元音进行颠倒。
先删除掉所有的元音然后将这些元音进行颠倒，之后再插入。

我的答案:
```
var reverseVowels = function(s) {
      // 我不知道要不要考虑大写。
      var vowels = ["a", "e", "i", "o", "u","A","E", "I", "O", "U"];
      var s_vowels = s.split("").filter((ele) => vowels.includes(ele)).reverse();
      var count = 0, s_arr = s.split("");
      for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
          s_arr.splice(i,1,s_vowels[count]);
          count++;
        }
      }
      return s_arr.join("");
};
```
runtime: 136ms  faster than 16.84%

别人的答案:
```
var reverseVowels = function(s) {
    if(s === null || s.length === 0) {
        return s;
    }
    var chars = s.split('');
    var low = 0;
    var high = s.length - 1;
    var vowels = "aeiouAEIOU";
    var tmp;
    while(low < high) {
        while(low < high && vowels.indexOf(chars[low]) === -1) {
            low++;
        }
        while(low < high && vowels.indexOf(chars[high]) === -1) {
            high--;
        }
        tmp = chars[high];
        chars[high] = chars[low];
        chars[low] = tmp;
        low++;
        high--;
    }
    return chars.join('');
};
```
只能说不错不错
思路很清晰，

### 459. Repeated Substring Pattern
我得答案：
```
for(let i = 0; i < s.length; i++) {
        if(s[i] === s.slice(-1)) {
            let m = s.slice(0, i+1);
            let reg = new RegExp(m, "g")
            console.log(s.match(reg), s.match(reg).length, s.length/(i+1), i);
            if(s.match(reg).length > 1 && s.match(reg).length === s.length/(i+1)) {
              return true;
            } 
        }
      }
    return false;
```
runtime 1352 ms faster than 1.04%
我在纠结是看别人的答案还是自己再想想
别人的答案：
```
var repeatedSubstringPattern = function(s) {
    if (s.length === 0 || s.length === 1) return false;
    for (let i = 1; i <= s.length / 2; i++) {
        if (s.length % i === 0 && s.slice(0, i).repeat(s.length / i) === s) {
            return true;
        }
    }
    return false;
};
```
不用纠结一半的位置。
提升速度的关键原因难道是减半，但是你要注意的是，我后面没有循环就return出去，不是起到相同的效果吗？

### 38. Count and Say
我的答案：
```
var countAndSay = function(n) {
    var initial = "1";
        for(let i = 2; i <= n; i++) {
          initial = getValue(initial);
        }
    return initial;
}
var getValue = function(str) {
    let res = "";
    let count = 0;
    for(let i = 0; i < str.length; i++) {
      count++;
      if(str[i] != str[i+1]) {
       res = res + count + str[i];
       count = 0;
      }
    }
    return res; 
}
```
runtime 52 ms   faster than 99.66%

别人的答案：
```
var countAndSay = function(n) {
  if(n === 1) { return "1";}
  var say = function(str) {
    var idx = 0;
    var newStr = "";
    while(idx < str.length) {
      var occurrences = 1;
      while(str[idx + 1] && str[idx + 1] === str[idx]) {
        idx++;
        occurrences++;
      }
      newStr += occurrences + str[idx];
      idx++;
    }
    return newStr; 
  }
  return say(countAndSay(n-1));
}
```
真的是perfect answer

### 67. Add Binary
我的答案：
```
var addBinary = function(a, b) {
    let num = parseInt(a, 2) + parseInt(b, 2);
    return num.toString(2);
};
```
上述答案是错误的。
如果num > 256  此时 toString(2) 就会出现问题了
我的第二个答案:
```
var addBinary = function(a, b) {
        let long_str = a.length > b.length ? a : b;
        let short_arr = a.length  > b.length ? b.split("") : a.split("");
        let len = short_arr.length;
        while( len < long_str.length )  {
         len = short_arr.unshift("0")
        }
        let res = [];
        let n = 0;
        for(let i = len-1; i >=0; i--) {
          let s = parseInt(short_arr[i]); 
          let l = parseInt(long_str[i]);
          if(s + l + n === 2) {
            if(i === 0) {
              res.unshift("1","0");
            } else {
              res.unshift("0")
            }
            n = 1;
            continue;
          } else if(s + l + n === 3) {
            if(i === 0) {
              res.unshift("1","1");
            } else {
              res.unshift("1")
            }
            n = 1;
          } else {
            res.unshift((s + l + n).toString());
            n = 0;
          }
        }
        // return parseInt(res.join("")).toString();
        return res.join("");  // 正确答案，因为第一位不可能是0
      };
```
toString() 会出现问题。
runtime 64 ms  faster than 51.04%
我的第三个答案：
```
 var addBinary = function(a, b) {
        let aLen = a.length;
        let bLen = b.length;
        let len = aLen > bLen ? aLen : bLen;
        let res = [];
        let p = 0;
        for(let i = 1; i <= len; i++) {
          let m = parseInt(a[aLen - i] ? a[aLen - i] : 0);
          let n = parseInt(b[bLen - i] ? b[bLen - i] : 0);
          if(m + p + n === 2) {
            if(i === len) {
              res.unshift("1","0");
            } else {
              res.unshift("0")
            }
            p = 1;
          } else if(m + p + n === 3) {
            if(i === len) {
              res.unshift("1","1");
            } else {
              res.unshift("1")
            }
            p = 1;
          } else {
            res.unshift((m + p + n).toString());
            p = 0;
          }
        }
        return res.join("");
      }
```
但运行时间没有一点提升。

别人的答案:
```
var addBinary = function(a, b) {
    var [carry, i, j, res] = [0, a.length - 1, b.length - 1, ""];
    while(i >= 0 || j >= 0 || carry > 0) {
        const bita = i >= 0 ? Number(a[i]) : 0;
        const bitb = j >= 0 ? Number(b[j]) : 0;
        const sum = bita + bitb + carry;
        res = `${sum%2}${res}`;
        carry = Math.floor(sum / 2);
        i--; j--;
    }
    return res;
};
```
思路是一样的，但这个答案是更为精简。
第一行赋值的方法是值得借鉴的

### 434. Number of Segments in a String

我的答案:
```
var countSegments = function(s) {
    if(s.trim().length === 0) return 0;
    return s.trim().split(/\s+/g).length;
};
```
runtime 52ms  faster than 37.21%
我也可以写成一行。
别人的答案：
```
var countSegments = function(s) {
    return s.split(" ").filter(function(n){return n}).length;
};
```

### 443 String Compression
我的答案：
```
var compress = function(chars) {
         let i = 0;
           while(isNaN(chars[chars.length -1]) && i < chars.length) {
             let counts = 1;
             while(chars[i+1] && chars[i] === chars[i+1]) {
                counts++;
                chars.splice(i, 1);
             }
             if(counts !== 1) {
               let  insert = String(counts).split(""); 
               chars.splice(i+1,0,...insert);
               i += insert.length;
             }
             i++;
           }
           return chars.length;
        }
```

runtime 68ms faster than 59.78%

### 20 Valid Parentheses
暂时我还没有想到思路。

### 680 Valid Palindrome II
我的答案：













