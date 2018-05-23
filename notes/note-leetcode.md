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






