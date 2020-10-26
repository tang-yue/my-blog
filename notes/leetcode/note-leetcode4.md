11月1日 刷leetcode
需要重新默写，需要二次刷，笔记

做出来的题目，需要看看别人的答案的如下：
### 605. Can Place Flowers
### 414 Third Maximum Number
### 189. Rotate Array


没有做出来的题目如下：
### 840. Magic Squares In Grid
我不会做
这道题很是麻烦，但是我记得我默写过，不妨再默写一遍吧
### 219 Contains Duplicate II
我不会做
11月14日 默写也是没有什么问题的
### 914 X of a Kind in a Deck of Cards
这道题仍旧是不会做
### 532. K-diff Pairs in an Array
这道题想了很久才看出来的，自己再多看看吧，实现下
// 今天着重思考下，别人的第二种做法吧，一直放在脑袋里循环循环，循环循环
### 665 Non-decreasing Array
自己没有做出来

11月14日
下次再默写的时候， 可就不能够再让你看答案了。
665 
为什么往往默写别人的答案，当出现问题的时候，
我们往往不倾向于自己寻找答案，而倾向于看别人的答案。
### 914
分析下述两段代码有和区别：
第一段：
```
   var flag;
    for(var i = 2; i <=min; i++) {
      flag = true;
      for(var k in map) {
        if(map[k]%i != 0) {
            flag = false;
            break;  // 退出当前循环，进行到下一次循环，请问是 map 层还是 min 层呢
            // 执行一下看看吧，并且需要强行记忆
            **花了好久，才得出的结论**
            break 会退出当前的这个map层循环，即不会再执行map层了，直接执行下一个i了。
        }
      }
      if(flag === true) {
      	return true;
      }
    }
    return true;
```

第二段：
```
    for(var i = 2; i <=min; i++) {
      for(var k in map) {
        if(map[k]%i != 0) {
            return false;  // 这一组里面的i 没有符合条件的，或许，下一个i会有呢。
        }
      }
    }
    return true;
```

11月14日
复习完上述的内容，arry的easy 部分暂时就告一段落了， 下面开始复习string 部分.
再次重新默写一遍吧，感觉看别人答案，之后默写的，训练强度有点不够。
请问现在有很多的不接受，有什么关系，难道你要为了降低现在的不接受率，而去抄写答案吗？这样的话，你可真是本末倒置。
11月14日 下午5点钟 训练完所有的题目
11月21日 str leetcode笔记

先放着的题目如下
893
696
788 做不出来

12月9日 
925

12月12日
20
12月13日
680
686
看别人的答案做出来的题目如下：


自己做出来，但是需要默写别人的答案 如下：
345 Reverse Vowels of a String
就是从字符串两头找元音，找到了然后进行颠倒。
12月12日， 总体上默写出来了，但是有些欠缺。
819 Most Common Word
两个reduce方法
这个答案是错误的，但是方法是值得借鉴的。
459 Repeated Substring Pattern
12月12日 默写一遍过了
38  Count and Say 这个别人的答案很不错。
递归，并且将一个函数嵌套在另一个函数里面。
67  Add Binary 默写别人的答案
别人的写法比你的else if 写法要精简多了。

606 说实话我对于这道题我不能够理解


