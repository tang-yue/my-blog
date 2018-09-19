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
        var c = [];
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
        output[i] = []
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
    for(let i = nums.length -1; i >0; i++) {
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

