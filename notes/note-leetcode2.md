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


