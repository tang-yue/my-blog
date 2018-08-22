这里记录一些我写了很多遍，但仍旧记不住的js常用的代码。

1. 正则只匹配数字和字母
2. 去掉字符串的开头空格和末尾空格

3. 你看啊， 
*push* 推，推动， 施加压力
*pop*  有流行，突然出现的意思
`pop the question for sb`  求婚
*pop* 删除数组的最后一个元素，并返回删除的元素
*shift*  移动，轮班，变化
*shift* 删除数组的第一个元素，并返回删除的元素
*unshift* 在数组的开头增加一个或多个元素，返回数组的新长度

4. *slice* array.slice(first, second) ( first is included, but second is not include)

5. array.splice(position, count of ele,  add elements)

6. string 如何快速转为数组  str.split(",")

关于split转换string为数组，令我惊讶的地方。
```
  "hello".split(",")   // return ["hello"]
  "hello".split()     // return ["hello"]
  "hello".split("")   // return ["h","e","l","l","o"]
```

```
  ["o","l","l","e","l"].join("")   // return "ollel"
```

关于js中的 join 的用法。 以下面的代码为列
```
  ver ele = ["Fire", "Wind", "Rain"];
  ele.join();    // return "Fire,Wind,Rain"
  ele.join(","); // return "Fire,Wind,Rain"
  ele.join("");  // return "FireWindRain"
  ele.join("-"); // return "Fire-Wind-Rain"
```

数字如何转字符串。
```
    let n = 34;
    n.toString();
    string(34); // "34"
```

slice 不会改变原数组。
splice 会改变原数组。

sort 会不会改变原数组？
sort 会改变原数组的。

11. Where do I Belong

写一个简单的排序函数
```
    arr.sort(function(a,b) {
        return a - b;
    })
```













