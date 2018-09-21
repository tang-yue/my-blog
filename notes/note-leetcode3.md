需要重新默写一遍的leetcode题目

830. Positions of Large Groups
9月21日 我写这个函数有点疑惑，而且答案是错误的e。
我暂时并没有想到比这个更简洁的方法

717. 1-bit and 2-bit Characters

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

746. Min Cost Climbing Stairs

重新写一遍



