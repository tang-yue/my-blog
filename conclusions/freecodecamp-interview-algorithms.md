[地址](https://learn.freecodecamp.org/) -> 最后一个**Coding Interview Prep** -> **Algorithms**

#### 1. Find the Symmetric Difference

思路：两个，两个比较，将当前值与最新的不同交集再进行不同的交集。

实现：
```
function sym(...args) {
  var result = args[0];
  for(let i = 1; i < args.length; i++) {
    result = diffTwo(result, args[i])
  }
  return result;
}

function diffTwo(arr1, arr2) {
  var diff1 = arr1.filter((ele) => arr2.indexOf(ele) === -1);
  var diff2 = arr2.filter((ele) => arr1.indexOf(ele) === -1);
  var res = diff1.concat(diff2);
  return res.filter((ele,i) => res.indexOf(ele) === i); // 可能会有重复的，要进行去重
}

sym([1, 2, 3], [5, 2, 1, 4]);
```

#### 2. Inventory Update

思路：如何将数组转成对象。

实现：
```
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    // return arr1;
    var listName = [];
    var arr = [];
    
    // arr1存在同时在arr2中的进行累计
    for(let i = 0; i < arr1.length; i++) {
      listName.push(arr1[i][1]);
      for(let j = 0; j < arr2.length; j++) {
        if(arr1[i][1] === arr2[j][1]) {
          arr1[i][0] = arr2[j][0] + arr1[i][0];
        }
         arr.push(arr1[i]);
      }
      // 考虑到arr2数组为空的情况
      if(arr2.length === 0) {
        arr.push(arr1[i]);
      }
    }

    // 将在arr2中，不在arr1中的添加进去。
    for(let i = 0; i < arr2.length; i++) {
      if(listName.indexOf(arr2[i][1]) === -1) {
        arr.push(arr2[i]);
      }
    }
    
    // arr 中按照字母排序

    var needSortName = [];

    for(let i = 0; i < arr.length; i++) {
      needSortName.push(arr[i][1]);
    }
    
    needSortName.sort();
    
    let temp = [];
    for(let i = 0; i < needSortName.length; i++) {
      for(let j = 0; j < arr.length; j++) {
        if(needSortName[i] === arr[j][1]) {
             // 这里应该是交换而不是直接赋值
             temp = arr[i];
             arr[i] = arr[j];
             arr[j] = temp;
        }
      }
    }
    return Array.from(new Set(arr));
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
```

#### 3. No Repeats Please

遇到的问题：三个非零数，排列方式有几种，是怎样的。其实考察的是全排列。

心情：这个全排序，看得我脑袋瓜疼，疼，疼。为什么我们遇到难的问题时，总是会耗费很多很多的时间。

[全排列参考](https://helloworlderly.github.io/HelloWorld_Blog/2016/07/19/%E5%85%A8%E6%8E%92%E5%88%97%E7%AE%97%E6%B3%95JavaScript%E5%AE%9E%E7%8E%B0/)

实现：
```
// 全排序
function permutations(string) {
   var result=[];
   var count = 0;
    if(string.length==1) {
        return [string]    
    } else {
        var preResult=permutations(string.slice(1));
        for (var j = 0; j < preResult.length; j++) {
          for (var k = 0; k < preResult[j].length+1; k++) {
            var temp = preResult[j].slice(0,k)+string[0]+preResult[j].slice(k);
            result.push(temp);         
          }
        }
        return result;
    }  
}

// 将重复的给删除
function permAlone(string) {
  var res = permutations(string);
  var deleteArr = [];
  for(let i = 0; i < res.length; i++) {
      for(let j = 0; j < res[i].length -1; j++) {
          if(res[i][j] === res[i][j+1]) {
              deleteArr.push(res[i]);
          }
      }
  }
  var res = res.filter((ele) => deleteArr.indexOf(ele) === -1);
  return res.length;
}


permAlone('aab');
```

不理解的地方：全排列的过程中，明明有是比如3位，会带有两位字符串，但是最后两位的字符串都消失了

#### 4. Pairwise

遇到的问题：
(1) 可能是两个数之后，也有可能是3个数之和。
(2) a + b = 3， 如果出现a，和b，如果出现另一组a，b，和当前是一模一样的，那岂不是重复添加
回答问题1：事实证明我想太多了
回答问题2：题目根本就没有说，如果重复了，要取其indices的和小的那个

实现：
```
function pairwise(arr, arg) {
  var newArr = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === arg) {
        newArr.push(i);
        newArr.push(j);
        arr.splice(i,1,undefined);
        arr.splice(j,1,undefined);
      }
    }
  }

  return newArr.reduce((a,b) => a + b, 0)
}
```

#### 5. Implement Bubble Sort

思路：当前的值，挨个和后面的值进行比较，如何后面某个值比其小，那么交换，继续向下比较，直到结束，再换下一个当前值。

实现：
```
function bubbleSort(array) {
  // change code below this line
  var t;
  for(let i = 0; i < array.length; i++) {
    for(let j = i+1; j < array.length; j++) {
      if(array[j] < array[i]) {
        t = array[i];
        array[i] = array[j];
        array[j] = t;
      }
    }
  }
  // change code above this line
  return array;
}
```

#### 6. Implement Selection Sort

思路：找到当前值，之后的所有值当中的最小值，与其交换。直到循环结束

实现：
```
function selectionSort(array) {
  // change code below this line
  var t, j;
  for(let i = 0; i < array.length; i++) {
    j = array.slice(i).indexOf(Math.min(...array.slice(i))) + i;
    t = array[i];
    array[i] = array[j];
    array[j] = t;
  }
  
  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 
```

#### 7. Implement Insertion Sort

思路：要先一个排序好的数组，然后便利乱序的数组，将乱序数组中值，用排序好的值，替换掉

实现：
```
function insertionSort(array) {
  // change code below this line
  var new_arr = [].concat(array);
  var t;
  for(let i = 0; i < new_arr.length; i++) {
    for(let j = i+1; j < new_arr.length; j++) {
      if(new_arr[j] < new_arr[i]) {
        t = new_arr[i];
        new_arr[i] = new_arr[j];
        new_arr[j] = t;
      }
    }
  }
  // 上述先用冒泡排序，排序好了。
  
  for(let i = 0; i < new_arr.length; i++) {
      array[i] = new_arr[i];
  }

  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
```

#### 8. Implement Quick Sort

思路：

快排的步骤：
1、在数据集之中，选择一个元素作为“基准”（pivot）。
2、所有小于“基准”的元素，都移动到“基准”的左边；所有大于"基准"的元素，都移到“基准”的右边。这个操作称为分区操作，
分区操作结束后，基准元素所处的位置就是最终排序后它的位置。
3、对“基准”左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

[参考](http://bubkoo.com/2014/01/12/sort-algorithm/quick-sort/)

实现：
```
function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length/2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}
```

#### 9. Implement Merge Sort

思路：
归并排序：将两个已经排序的序列合并成一个序列的操作。

如下实现，一知半解

[参考]()
实现：
```
function mergeSort(arr) {
  // change code below this line
  if(arr.length < 2) {
    return arr;
  }
  var middle = parseInt(arr.length/2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right)); 
  // change code above this line
  return array;
}

function merge(left, right) {
  var result = [];
  var i = 0, j = 0;
  while(i < left.length && j < right.length) {
    if(left[i] > right[j]) {
      result.push(right[j++]);
    } else {
      result.push(left[i++]);
    }
  }
  while(i < left.length) {
    result.push(left[i++]);
  }
  while(j < right.length) {
    result.push(right[j++])
  }
  return result;
}


var arr1 = [4,2,5,1,3,7,6,8];
var result = mergeSort(arr1);
console.log(result);
```


```
来解释下merge里的代码。
left = [4]，right = [2]

执行第一个while，即比较left[0] 和right[0]，由于left[0] > right[0]
即执行result.push(right[j++])，操作，此时i为0，j为1，result为[2]，
代码继续往下执行，执行第二个while， 此时result 为[2,4]。由于j为1，不小于数组长度1，因此第三个while不会再执行了。return 结果
```


