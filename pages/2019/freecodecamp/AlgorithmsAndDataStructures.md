[地址](https://learn.freecodecamp.org/) -> 第二个**Javascript Algorithms And Data Structures Certification** -> **JavaScript Algorithms and Data Structures Projects**

#### 1. Palindrome Checker

思路：首先要去掉标点符号，空格，和大小写。然后统一转换成小写字母，然后再进行比较。

note：\W： 表示什么意思 [^A-Za-z0-9_]/  注意有下划线！！
\w： 匹配数字和字母包括下划线[0-9a-zA-Z_]

实现：
```
function palindrome(str) {
  // Good luck!
  var arr = str.split(/\W|_/g).join('').toUpperCase().split('');
  var len = arr.length;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[len -i -1]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");
```

#### 2. Roman Numeral Converter

思路： 将数字和对应的罗马值，列一张表如实现中的numListromanNum数组
实现：
```
function convertToRoman(num) {
  var numListromanNum = [
      {num: 1, romanNum: 'I'},
      {num: 2, romanNum: 'II'},
      {num: 3, romanNum: 'III'},
      {num: 4, romanNum: 'IV'},
      {num: 5, romanNum: 'V'},
      {num: 6, romanNum: 'VI'},
      {num: 7, romanNum: 'VII'},
      {num: 8, romanNum: 'VIII'},
      {num: 9, romanNum: 'IX'},
      {num: 10, romanNum: 'X'},
      {num: 20, romanNum: 'XX'},
      {num: 30, romanNum: 'XXX'},
      {num: 40, romanNum: 'XL'},
      {num: 50, romanNum: 'L'},
      {num: 60, romanNum: 'LX'},
      {num: 70, romanNum: 'LXX'},
      {num: 80, romanNum: 'LXXX'},
      {num: 90, romanNum: 'XC'},
      {num: 100, romanNum: 'C'},
      {num: 200, romanNum: 'CC'},
      {num: 300, romanNum: 'CCC'},
      {num: 400, romanNum: 'CD'},
      {num: 500, romanNum: 'D'},
      {num: 600, romanNum: 'DC'},
      {num: 700, romanNum: 'DCC'},
      {num: 800, romanNum: 'DCCC'},
      {num: 900, romanNum: 'CM'},
      {num: 1000, romanNum: 'M'},
      {num: 2000, romanNum: 'MM'},
      {num: 3000, romanNum: 'MMM'}
    ]
    var str = '';
    var t = 10;
    while(num >= 1) {
      let v = num%10;
      for(let i = 0; i < numListromanNum.length; i++) {
        if(v*t/10 === numListromanNum[i].num) {
          str = numListromanNum[i].romanNum + str;
          break;
        }
      }
      num = Math.floor(num/10);
      t = t * 10;
    }
    return str;
}
convertToRoman(36);
```
如上的笨方法也能实现。

别人的普遍做法。如下的这样的思考方式，很好。
```
function convertToRoman(num) {
  var map = [
    { d: 1, r: 'I' },
    { d: 4, r: 'IV' },
    { d: 5, r: 'V' },
    { d: 9, r: 'IX' },
    { d: 10, r: 'X' },
    { d: 40, r: 'XL' },
    { d: 50, r: 'L' },
    { d: 90, r: 'XC' },
    { d: 100, r: 'C' },
    { d: 400, r: 'CD' },
    { d: 500, r: 'D' },
    { d: 900, r: 'CM' },
    { d: 1000, r: 'M' }
  ];

  var roman = '';
  while(num > 0) {
    var max = map[0];
    map.forEach(function(el) {
      if(el.d <= num) {
        max = el;
      }
    });
    console.log(max, 'max');
    roman += max.r;
    num -= max.d;
  }
  return roman;
}

convertToRoman(36);
```

#### 3. Caesars Cipher

思路： 如果是字母，且字母的ASCII码值加13大于了90，则，应该用该ASCII码值减去13。
否则就加13. 如果不是大写字母，那么保持不变。

实现：
```
function rot13(str) { // LBH QVQ VG!
  var res = '';
  for(var s of str) {
    if(/[A-Z]/g.test(s)) {
      if(s.charCodeAt() + 13 > 90) {
        res = res + String.fromCharCode(s.charCodeAt() -13);
      } else {
        res = res + String.fromCharCode(s.charCodeAt() + 13);
      }
    } else {
      res = res + s;
    }
  }
  return res;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
```

#### 4. Telephone Number Validator

美国电话号码验证

思路：美国电话号码有哪些特点
1、 包含 10 位或者是11位 数字 必须
2、 如果是11位的，判断首位是否是数字1
3、开闭括号连接，中划线连接。 可不可以都是开闭括号连接，
4、对area code 都是3位，3位，4 位，分配的吗

// 不会写 
// 不会写
// 主要原因是我觉得这个里面的逻辑有些太过复杂。
简直太厉害了，写出来了

我的实现：
```
function telephoneCheck(str) {
      if(!/^[0-9a-zA-Z()-\s]{1,}$/.test(str)) return false;
      let len = str.match(/[0-9]/g).length;
      let result = false;
      if(len === 10) {
        result = checkStr(str.trim());
        return result;
      } else if(len === 11) {
        if(str[0] !== '1') return false;
        result = checkStr(str.slice(1).trim());
        return result;
      } else {
        return false;
      }
   }

   function checkStr(str) {
    if(/^\([0-9]{3}\)\s*[0-9]{3}\-[0-9]{4}$/.test(str)) return true; // 
    if(/^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/.test(str)) return true;
    if(/^[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/.test(str)) return true;
    if(/^[0-9]{10}$/.test(str)) return true;
    return false;
   }

   telephoneCheck("555-555-5555");
```

#### 5. Cash Register

点：
1、返回的是差值
2、['TWENTY', 60] 表示的意思是 有三张20块的，60是总钱
3、如果差值0.5美元，但是我有1美元和一个0.01美元，很显然，找不开，返回{status: 'INSUFFICIENT_FUNDS', change: []}
4、即使总钱数为0 也会展示成`['TWENTY', 0]`，`['ONE HUNDRED', 0`]`

又是一个比较麻烦的主

遇到的障碍是，我不知道这张钱，我应该如何去支出。

我的实现：
只能做到下面这样了
```
function checkCashRegister(price, cash, cid) {
      const numMoney = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
      var sum = cid.reduce((res, cur, index) => res+cur, 0);
      var diff = cash - price;
      var int;
      if(sum < diff || diff < 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
      } else if(sum === diff) {
        return {status: "CLOSED", change: cid}
      } else {
        for(let i = 0; i < numMoney.length; i++) {
          int = Math.floor(diff);
          if(int > 0) {
          //
          int - cid[4][1]  
          } else {
            // 
          }
        }
      }
    }
```
好吧，我刚刚看到有个人做了三天都没做出来。

别人的答案：
```
function checkCashRegister(price, cash, cid) {
  const denom = [
    ["PENNY", 1],
    ["NICKEL", 5],
    ["DIME", 10],
    ["QUARTER", 25],
    ["ONE", 100],
    ["FIVE", 500],
    ["TEN", 1000],
    ["TWENTY", 2000],
    ["ONE HUNDRED", 10000]
  ];
  let remainder = (cash - price) * 100;
  let sum = 0;
  function withdraw(acc, val, i) {
    let withdrawValue = 0;
    let compartmentCash = val[1] * 100;
    const denomValue = denom[i][1];
    sum += compartmentCash;
    while (compartmentCash && remainder >= denomValue) {
      remainder -= denomValue;
      compartmentCash -= denomValue;
      withdrawValue += denomValue;
    }
    if (withdrawValue > 0) {
      acc.push([denom[i][0], withdrawValue / 100]);
    }
    return acc;
  }
  const charge = cid.reduceRight(withdraw, []);
  if (remainder > 0) {
    return {status: "INSUFFICIENT_FUNDS", change:[]};
  }
  if (sum === (cash - price) * 100) {
    return {status: "CLOSED", change: cid};
  }
  return {status: "OPEN", change: charge};
};

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
```





