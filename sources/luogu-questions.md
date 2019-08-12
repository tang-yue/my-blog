// 这里为洛谷社区，编程题练习

https://www.dooccn.com/c/    c语言代码测试

我觉得我有必要再走一遍，c语言的基本语法。


1、坐大巴

```
#include <stdio.h>
#include <math.h>

int main() {
  int n;
  int sum = 0;
  int S[10];
  scanf("%d", &n);
  for(int i = 0; i < n; i++) {
    scanf("%d", &S[i]);
  }
  for(int j = 0; j < S.length; j++) {
    sum += S[i];
  }
  if(sum/38 === 0) {
    printf("%d", sum/38);
  } else {
    printf("%d", sum/38 + 1);
  }
}
```
2、镜中看表
```
// 0 1 8 旋转后仍是自己，2和5可以互相旋转成对方， 6和9是同理的。
镜中看表不会做

第一步 首先要求 只能是0 1 8 6 9 2 5

第一步解析字符串.
#include <stdio.h>
#include <math.h>

int main() {
  char a[][8]
  for(int i = 0; i < 2; i++) {
    scanf("%s", a[0])
  }
   
   t1 = atoi(a[0][0]) * 10 * 60 * 60 + 
       atoi(a[0][1]) * 60 * 60 + 
       atoi(a[0][3]) * 10 * 60 + 
       atoi(a[0][4]) * 60 + 
       atoi(a[0][6]) * 10 + 
       atoi(a[0][7])
       
  t2 = atoi(a[1][0]) * 10 * 60 * 60 + 
       atoi(a[1][1]) * 60 * 60 + 
       atoi(a[1][3]) * 10 * 60 + 
       atoi(a[1][4]) * 60 + 
       atoi(a[1][6]) * 10 + 
       atoi(a[1][7])
       
  t = t2 - t1;
  for(int i = 0; i <= t; i++) {
     
  }
}
```