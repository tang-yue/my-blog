需要重新默写一遍的leetcode题目

485. Max Consecutive Ones
写了三遍
是连续 1， 的个数，而不是其他
867. Transpose Matrix
写了一遍，解决 ok

766. Toeplitz the Matrix
写了三遍， 解决 ok

i,j  对应的斜位置 当然就是 i+1, j+1
记不得另外一种方法了

看了一遍答案，重新默写了下

830. Positions of Large Groups
9月21日 我写这个函数有点疑惑，而且答案是错误的e。
我暂时并没有想到比这个更简洁的方法。
遇到的问题是在哪里呢？
对于使用i-1 还是使用i，我是不太确定的。
所以就是会出现错误。
这道题的答案，我凭记忆，记成了另一个答案。

717. 1-bit and 2-bit Characters
这道题，我不知道答案应该怎么写了，
模糊的记忆，模糊的回想，一切都是那么模糊，
或许是因为不理解吧，不理解才会这么卡壳吧。
不记得了，难过。
关键在于无论怎样，这个count最后一定是等于bits.length的
手写一个去重函数
answer:
```
function unique(arr) {
    var newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
```

```
var isOneBitCharacter = function(bits) {
    var bitsLength = bits.length;
    var i = 0;
    var lastOne, lastTwo;
    if(bitsLength === 1) {
        return true;
    }
    while(i < bitsLength) {
        if(bits[i] === 0) {
            lastOne = i;
            i++;
        }
        if(bits[i] === 1) {
            lastTwo = i;
            i = i + 2;
        }
    }
    if(lastOne === bitsLength -1) {
        return true;
    } else {
        return false;
    }
}
```
再重新默写一遍吧，抱歉啦

746. Min Cost Climbing Stairs

重新写一遍
我是否是应该再坚持一下呢。
答案
```
var minCostClimbingStairs = function(cost) {
    for(let i = 2; i < cost.length; i++) {
        cost[i] = cost[i] + Math.min(cost[i-1], cost[i-2]);
    }
    // 下面这句是因为最后两个数，我们并没有比较过，所以最后要再比较一次
    return Math.min(cost[cost.length -1], cost[cost.length -2])
}
```
所以除了用 i+1, i+2 这样的思路，我们还是可以换一种的，即
i 从 2开始，之后 i 仍旧是小于 cost.length的， i的最大值并没有发生变化

53. Maximum Subarray
我的答案:
```
var maxSubArray = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i]+nums[i-1]) 
    }
    return Math.max(...nums);
};
```
// 我并不知道我的上述答案，究竟是哪里出错了

重新写一遍

118. Pascal's Triangle
帕斯卡三角形

这道题也是需要重新写一遍的

9月30日
该题通过了


9月29日  重新写上述的题目，遗留的问题

830. Positions of Large Groups
这道题需要再重新写一遍。

9月30日 再次写一遍这个题目

以上那么就全部都复习完了。


9月30日 16:41 分
再复习一下 freeCodeCamp 上面的数据结构和算法部分

Intermediate Algorithm Scripting
从头开始
我发现一开始有答案的话，并不利于复习

10月31日
转眼间已经是过了两个多月了。

830. 被卡住了，关键的部分在于，我并不知道，如何什么时候存储
第一次出现的位置，和最后一次出现的位置。
于是我就要去看答案了。
问题1: 记错答案了
746. 这道题，完全没有写出来

53. 题要重新写一遍

```
var generate = function(numRows) {
    var output = [];
    for(let i = 0; i < numRows; i++) {
        let curArr = [i];
        curArr[0] = 1; curArr[i] = 1;
        for(let j=1; j<i; j++) {
            curArr[j] = output[i-1][j-1] + output[i-1][j]
        }
    }
    return output;
}
```
11月1日   上述题目复习完毕