刷leetcode第二遍

665. Non-decreasing Array

905. Sort Array By Parity

answer: 
```
var sortArrayByParity = function(A) {
    let evenArray = A.filter((item) => item%2===0);  // 偶数数组
    let oddArray = A.filter((item) => item%2 ===1); // 奇数数组
    return evenArray.concat(oddArray);
};
```
别人的做法1: 使用unshift 
别人的做法2：原来unshift 和push 是可以一下子多个值的。 `let arr = [1,2,3]; b.push(...arr)`

832. Flipping an Image

reverse的应用

answer: 
```
    var flipAndInvertImage = function(A) {
    let B = A.map((item) => {
    item.reverse();
    for(let i = 0; i < item.length; i++) {
        if(item[i] === 0) {
            item.splice(i,1,1)
        }else {
            item.splice(i,1,0)
        }                                                                             
    }
    return item;
   })
   return B;
}
```
别人的做法：
（1） 自己以前的做法
要想改变这个值，只需要将这个值，重新赋予一个值就可以了
map 里面嵌套一个for 循环比两个for循环耗时长
（2） 
```
var flipAndInvertImage = function(A) {
    return A.map((row) => row.reverse().map(pixel) => pixel ^ 1)
}
map 里面再次map 多好，而我是map 里面for 循环
^ 相同则返回0， 不同则返回1
```
（3）我好像从来没有这个意识去直接return， 而是赋予了一个变量之后再return

561. Array Partition I

anser: 
```
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a-b);
    let sum = 0;
    for(let i = 0; i < nums.length-1; i+=2) {
        let j = i + 1;
        sum += Math.min(nums[i], nums[j])
    }
    return sum;
};
```
别人的做法
（1） 既然都排完序了，其实这个nums[i] 就已经是最小值了。
没有必要再去取最小值了
改善如下
```
  var arrayPairSum = function(nums) {
    nums.sort((a,b) => a-b);
    let sum = 0;
    for(let i = 0; i < nums.length; i+=2) {
        sum += nums[i];
    }
    return sum;
};  
```
（2） 看到一个别人的reduce 做法 如下
用reduce 实现一个别人的做法

867. Transpose Matrix

我觉得这道题 其实真的是考察如何交换两个值。 
仅仅是针对正方形矩阵


answer: 
```
    var transpose = function(A) {
        var C = [];
        for(let i = 0; i < A[0].length; i++) {
            let B = [];
            for(let j = 0; j < A.length; j++) {
                B.push(A[j][i])
            }
            C.push(B); 
        }
        return C;
    }
```

别人的做法
```
  var transpose = function(A) {
    let output = [];
    for(let i = 0; i < A[0].length ; i++) {
        output[i] = [] // 说明output数组里面的值仍旧是为数组
        for(let j = 0; j < A.length; j++ ) {          
            output[i][j] = A[j][i]
        }
    }
    return output;
};  
```

766. Toeplitz the Matrix

这道题我居然不会写哦，下面有两种方法
方法 一

```
var isToeplitzMatrix = function(matrix) {
    for (var i = matrix.length - 1; i>0; i--) {
        if(matrix[i].slice(1, matrix[i].length).join('') !== matrix[i-1].slice(0, matrix[i].length - 1).join('')) {
            return false;
        }
    }
    return true;
};

```
再默写一遍吧，我还是不知道究竟是哪里出错了。


566. Reshape the Matrix

answer: 
```
   var matrixReshape = function(nums, r, c) {
    if(nums.length * nums[0].length === r * c) {
      let newNums = nums.reduce((total, item, index) => total.concat(item), []);
         var output = []
         for(let i = 0; i < r; i++) {
             output.push(newNums.slice(i*c, (i+1)*c));
         }
         return output;
    } else {
        return nums;
    }
}; 
```
别人的答案：
没有人比我的答案简单

896. Monotonic Array

answer:
```
    var isMonotonic = function(A) {
  let B = A.slice(0);
  A.sort((a,b) => a-b);
  if(B.toString() === A.toString()) {
      return true;
  }
  A.sort((a,b) => b-a);
  if(B.toString() === A.toString()) {
      return true;
  }
  return false; 
};
```
别人的答案:
 别人的答案都没有我的简单

888. Fair Candy Swap

这道题先放在这里吧，
我暂时还没有想到结果。
太过浪费时间


485. Max Consecutive Ones
这道题，我没有写出来

如果是1 那么就记录其值，并且累计。
如果突然是为0了，那么就将值清空为0。

将累计的最大值给存起来。

`max = Math.max(count, max)` 
// 当前值和最大值进行比较，并取出最大值

283. Move Zeroes

这个里面是不是有什么陷阱呢.
splice 和 push 不能一块使用.
使用splice的时候， 一般都连带i--,此时再加push
的话，就会进入死循环。

answer
```
var moveZeroes = function(nums) {
    var count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            count++;
            i--
        }
    }
    for(let i = 0; i < count; i++) {
        nums.push(0)
    }
};
```

别人的答案
果然看别人的答案会很多的收获，
果然还是应该要常复习才是

方法一
```
var moveZeroes = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      nums.splice(i, 1);
      nums.unshift(0)
    }
  }
  nums.reverse();
}
```
方法二
```
  var moveZeroes = function(nums) {
    let len = nums.length;
    for(let i = 0; i < len; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            len--;
        }
    }
};
```
方法三
```
  var moveZeroes = function(nums) {
    for(let i = nums.length -1; i >0; i--) {
      if(nums[i] === 0) {
        nums.splice(i,1);
        nums.push(0)
      }
    }
  }
```

448. Find All Numbers Disappeared in an array

answer:
```
var findDisappearedNumbers = function(nums) {
    nums.sort((a,b) => a-b);
    let len = nums.length;
    let output = [];
    
    let count = nums[len-1] >= len ? nums[len-1] : len;
    for(let i = 1; i <= count; i++) {
        if(nums.indexOf(i) === -1) {
            output.push(i);
        }
    }
    return output;
};
```

169. Majority Element
answer:
```
var majorityElement = function(nums) {
    var max = 0;
let result = nums.reduce((res,item) => {
     if(res[item]) {
         res[item] ++;
     }else {
         res[item] = 1;
     }
     max = Math.max(max, res[item]);
     return res;
   }, {})
   var i; 
   for(var k in result) {
       if(result[k] === max) {
           i = k;
       }
   }
  return Number(i);
};
```

别人的答案：
```
// 这代码写的是真好看
var majorityElement = function(nums) {
    const counts = {};
    return nums.find((val) => {
        counts[val] = (counts[val] || 0) + 1;
        return counts[val] > nums.length / 2;
    });
};
```

我不知道是什么意思
```
var majorityElement = function(nums) {
  return nums.sort()[Math.ceil(nums.length/2) -1]
}
```

这个代码是真的简单
```
var majorityElement = function(nums) {
  nums.sort();
  return nums[parseInt(nums.length / 2)]
}
```

217. Contains Duplicate

是否包含重复的值

answer: 
```
var containsDuplicate = function(nums) {
    var counts = {};
    for(let i = 0; i < nums.length; i++) {
        if(counts[nums[i]]) {
            return true;
        } else {
            counts[nums[i]] = 1;
        }
    }
    return false;
};
```

其他人的做法
方法一
```
var containsDuplicate = function(nums) {
  return nums.length !== (new Set(nums)).size;
}
```
方法二
```
var containsDuplicate = function(nums) {
    var counts = {};
    for(let i = 0; i < nums.length; i++) {
        if(counts[nums[i]]) {
            return true;
        } else {
            counts[nums[i]] = 1;
        }
    }
    return false;
};
```

167.  Two Sum II - Input array is sorted

answer:
```
var twoSum = function(numbers, target) {
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) {
                return [i+1, j+1]
            }
        }
    }
};
```

其他人的答案都没有我的简单


697. Degree of an Array

answer:
```
var findShortestSubArray = function(nums) {
    // 重复次数最多的那个元素的第一个下标和最后一个下标的差值。
    var counts = {};
    var max = 0;
    for(let i = 0; i < nums.length; i++) {
        counts[nums[i]] = (counts[nums[i]] || 0) + 1;
        max = Math.max(max, counts[nums[i]]);
    }
    var res = nums.length;
    for(var k in counts) {
        if(counts[k] === max) {
            res = Math.min(res, nums.lastIndexOf(Number(k)) - nums.indexOf(Number(k)) + 1);
        }
    }
    return res;
};
```

其他人的答案
```
var findShortestSubArray = function(nums) {
    const counts={};
    const firstIndexes={}; 
    const lastIndexes={};
    let max=0;
    for(let i= 0; i < nums.length; i++) {
        const k = nums[i];
        counts[k] = (counts[k] || 0) + 1;
        max = Math.max(max, counts[k]);
        if(firstIndexes[k] === undefined) {
            firstIndexes[k] = i;
        }
        lastIndexes[k] = i;
    }
        let res = nums.length;
        for(const k in counts) {
            if(counts[k] === max) {
                res = Math.min(res, lastIndexes[k] - firstIndexes[k] + 1)
            }
        }
     return res;
};

```

717. 1-bit and 2-bit Characters

answer:
```
var isOneBitCharacter = function(bits) {
    // 这道题的思路是什么呢？？ 
    let lastOne;
    for(let i = 0; i < bits.length; i++) {
        if(bits[i] === 0) {
            lastOne = i;
        }
        if(bits[i] === 1) {
            i++;
        }
    }
    if(lastOne === bits.length - 1) {
        return true;
    } else {
        return false;
    }
};
```

别人的做法
```
var isOneBitCharacter = function(bits) {
  if(bits.length == 1) return true;
  return bits.join("").replace(/(10|11)/g, "x").slice(-1) != "x";
}
```

830. Positions of Large Groups
不会做的需要重新默写一遍的
answer:
```
var largeGroupPositions = function(S) {
    // 默写一遍以前写过的答案
    var index = [0, 0];
    var res = [];
    for(let i = 0; i < S.length; i++) {
        if(S[i+1] !== S[i]) {
            index[1] = i;
            if(index[1] - index[0] >= 2) {
                res.push(index);
            }
            // 无论是有没有相差3，此时此刻都是应该要重新开始的
            index = [i+1, i+1];
        }
    }
    return res;
};
```

268. Missing Number

answer: 
```
var missingNumber = function(nums) {
    var len = nums.length;
    for(let i = 0; i < len + 1; i++) {
        if(!nums.includes(i)) {
            return i;
        }
    }
};
```

其他的答案没有值得我学习的

628. Maximum Product of Three Numbers

三个数和越大，那么积就会越大，
这是我最初的本能反应。
现在遇到负数，怎么办，我不知道该负数的绝对值，是否比正数的最大值要大。
其实仔细想想只有两种情况。

answer:
```
var maximumProduct = function(nums) {
   let len = nums.length;
   nums.sort((a,b) => a - b);
   let res1 = nums[len-1] * nums[len-2] * nums[len -3];
   let res2 = nums[0] * nums[1] * nums[len-1];
   if(res1 > res2) {
       return res1;
   } else {
       return res2;
   }
};
```

其他的答案，有的方法和我方法是同一种思路，有的太过复杂

121. Best Time to Buy and Sell Stock

以最低价买进，最高价卖出
选取从前向后中，最大差值。

answer:
```
var maxProfit = function(prices) {
    // 以最低价买进，最高价卖出。
    var max = 0; 
    for(let i = 0; i < prices.length; i++) {
        for(let j = i+1; j < prices.length; j++) {
            max = Math.max(max, prices[j] - prices[i])
        }
    }
    return max;
}
```

746. Min Cost Climbing Stairs
重新再写一遍吧，想半天都想不起来。
如果有走一步的总费用比走两步的总费用当前是要少，
但是以后万一因为这一步走错，之后所有的费用都比较高。

对于这道题，我不知道应该怎么做，没有思路。
```
var minCostClimbingStairs = function(cost) {
   var f1 = 0, f2 = 0;
   for(var i = cost.length-1; i >=0; i--) {
       var f0 = cost[i] + Math.min(f1, f2);
       f2 = f1;
       f1 = f0;
   }
    return Math.min(f1, f2);
};
```

我甚至连这个答案都看不懂。
我觉得我在看不懂的问题上，往往浪费很多时间。

下面这个答案比较容易理解
answer
```
var minCostClimbingStairs = function(cost) {
    for(let i = 2; i < cost.length; i++) {
        cost[i] += Math.min(cost[i-1], cost[i-2]);
    }
    return Math.min(cost[cost.length - 1], cost[cost.length -2]);
}
```

674. Longest Continuous Increasing Subsequence

answer
```
var findLengthOfLCIS = function(nums) {
    var max = 1;
    var count = 1;
    if(nums.length === 0) return 0;
    for(let i = 0; i < nums.length-1; i++) {
      if(nums[i]<nums[i+1]) {
          count++;
          max = Math.max(max, count);
      }else {
          count = 1;
      }
    }
    return max;
};
```
note：需要考虑nums.length 等于0 的情况

118. Pascal's Triangle
这个又是一道难题，这道题我又不会写了



别人的答案：
```
var generate = function(numRows) {
    // 这道题，我又做不出来，这道题我又做不出来
    // 简单的递归的函数都不会写
    var outputs = [];
    for(let i = 0; i < numRows; i++) {
        let curArr = [i];
        //  给curArr一个初始值，仅仅说明它是一个数组
        curArr[0] = 1, curArr[i] = 1;
        // 表示该行第一个数为1，最后一个数也是为1的
        // 下面这个for循环表示的就是该行中间的几个数
        for(let j = 1; j < i; j++) {
            curArr[j] = outputs[i-1][j-1] + outputs[i -1][j]
        }
        // curArr 表示的就是该行，是一个数组
        outputs.push(curArr)
    }
    return outputs; 
};
```

```
var generate = function(numRows) {
    var outputs = [];
    for(let i = 0; i < numRows; i++) {
        let curArr = [i]; 
        curArr[0] = 1, curArr[i] = 1;
       //  outputs[i][0] = 1, outputs[i][i] = 1;   // 这里显示报错，大概是因为
        // 两边的值都已经确定了，那么只剩下中间的值了, 所以是内部既然是一个数组，那么就应该定义一个数组。
        for(let j=1; j < i; j++) {
            curArr[j] = outputs[i-1][j-1] + outputs[i-1][j];
        }
        outputs.push(curArr);
    }
    return outputs;
};
```

大部分我是能够写出来，但是我写出来都是大概，一点点的轮廓

27. Remove Element
answer:
```
 var removeElement = function(nums, val) {
    // 我不知道是否不要修改原数组。
    for(let i = 0; i < nums.length; i++) {
       if(nums[i] === val) {
          nums.splice(i,1);
           i--;
       }
    }
    return nums.length;
  };
```

53. Maximum Subarray

answer如下 
```
var maxSubArray = function(nums) {
  for(let i =1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
  }
  return Math.max(...nums);
}
```

另外一种方法

```
var maxSubArray = function(nums) {
  let cur = nums[0];
  let res = nums[0];
  for(let i = 1; i < nums.length; i++) {
    if(cur < 0) {
      cur = nums[i];  // 为什么cur小于0，就把nums[i]的值赋值给cur 呢
    }
    else {
      cur += nums[i];
    }
    res = Math.max(res, cur);
  }
  return res;
}
```

747. Largest Number At Least Twice of Others

answer:
```
var dominantIndex = function(nums) {
   let max = Math.max(...nums);
   let maxIndex = nums.indexOf(max);
   nums.sort((a,b) => a - b);
   if(max < nums[nums.length -2] * 2) {
       return -1;
   }
    return maxIndex;
};
```

35. Search Insert Position

answer:

```
var searchInsert = function(nums, target) {
   let exist = nums.indexOf(target); 
   if( exist !== -1) return exist;
   nums.push(target);
   nums.sort((a,b) => a-b);
   return nums.indexOf(target);
};
```

别人的答案都没有我的简单

119. Pascal's Triangle II

answer:
```
var getRow = function(rowIndex) {
    let outputs = [];
    for(let i = 0; i <=rowIndex; i++) {
        let curArr = [i];
        curArr[0] = 1; curArr[i] = 1;
        for(let j = 1; j < i; j++) {
            curArr[j] = outputs[i-1][j-1] + outputs[i-1][j];
        }
        outputs.push(curArr);
    }
    return outputs[rowIndex];
};
```
你的目的就是去学习别人的优秀代码。
如果你不看别人的优秀代码，又应该如何去学习呢。
我发现我又开始飘了，又开始对待别人的代码，不认真看了

别人的答案：

你这样一直看，难道就能看出答案来了吗？

别人的答案：
我并不理解思路
```
var getRow = function(rowIndex) {
    var row = [1];
    
    for(var i = 1 ; i <= rowIndex ; i++) {
        for(var j = i; j > 0; j--) {
            if(j === i)
                row[j] = 1;
            else
                row[j] = row[j - 1] + row[j];
        }
    }
    return row;
};
```

724. Find Pivot Index

answer:
```
var pivotIndex = function(nums) {
    // 快速求和
    let sum = nums.reduce((sum, item, index) => {
        sum += item;  //  这两步可以精简为1步 => sum += item;
        return sum;
    }, 0)
    
    let halfSum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(halfSum * 2 + nums[i] === sum) {
            return i;
        }
        halfSum += nums[i];
    }
    return -1;
};
```

关于for循环，return 出和i相关的值，尽量用i,而不是i+1 或i-1
别人的答案：
其实我也想到了 slice 和 reduce， 但是没有将其组合起来使用
```
var pivotIndex = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        
        let leftSum = nums.slice(0, i).reduce((a, b) => a + b, 0)
        let rightSum = nums.slice(i+1).reduce((a, b) => a + b, 0)
        
        if (leftSum === rightSum) { return i }    
    }

    return -1
};
```

1. Two Sum

answer:
```
var twoSum = function(nums, target) {
    let output = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                output.push(i,j)
            }
        }
    }
    return output;
};
```
我是用了最简单的嵌套循环
别人的答案：
这个答案比较好理解
```
const twoSum = (nums, target) => {
  const map = {};
  for(let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if(another in map) {
      return [map[another], i];
    }
    
    map[nums[i]] = i;
  }
  return null;
}
```
另外一个答案：
```
var twoSum = function(nums, target) {
  let result = [];
  nums.forEach((v, i, arr) => {
    let k = nums.indexOf(target-v, i+1);
    if(k !== -1) {
      result.push(i);
      result.push(k);
    }
  });
  return result;
}
```

26. Remove Duplicates from Sorted Array

在原数组上改变去重

不知道 es6方法去重会不会改变原数组？？
事实证明并不会改变原数组。

answer:
```
var removeDuplicates = function(nums) {
     // 修改原数组而不重新复制一份。
     let newArr = [];
     for(let i = 0; i < nums.length; i++) {
         if(newArr.indexOf(nums[i]) === -1) {
             newArr.push(nums[i])
         } else {
             nums.splice(i, 1);
             i--;
         }
     }
    return nums.length;
};
```

另外的答案
最近感觉又不想刷leetcode
```
function removeDuplicates(arr) {
  var i = 0;
  for(var j=1; j < arr.length; j++) {
    if( arr[i] != arr[j]) {
      arr[i+1] = arr[j];
      i = i + 1;
    }
  }
  return i + 1;
}
```

另一个答案：

```
var removeDuplicates = function(nums) {
        for(var i=0;i<nums.length;)
        {
            if(nums[i+1]=== nums[i]) nums.splice(i, 1);
            else i++;
        }
        return i;
};
```

88. Merge Sorted Array
直接去更改某个数组的长度，请问会不会改变原数组。

前一个数组concat 后一个数组，请问前一个数组会发生变化吗？

答案是不会的。

answer:
```
var merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;
    nums1.push(...nums2)
    nums1.sort((a,b) => a-b);
};
```

别人的答案：
```
var merge = function(nums1, m, nums2, n) {
  if(!n) return;
  for(let i = 0; i < n; i++) {
    nums1[m+i] = nums2[i];
  }

  nums1.sort((a,b) => a-b);
}
```

我好像不太常用while 循环,一般都是用for






