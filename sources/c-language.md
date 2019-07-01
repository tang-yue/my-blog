这里是学习c语言，所记录的笔记。主要是机试。

power(x, 2);  表示x的平方
c语言 怎么实现环行链表

输入一个年份序列， 判断是否为递减序列，若是输出1，否则输出0。

%lf 表示什么意思
double 表示什么意思

短整型 short
整型 int
长整型 long

浮点型。分为 单精度型 float  和双精度型 double


注意读入的时候定义的类型，和输出的时候定义的类型必须要保持一致。

球的计算，，又是做不出来。又是做不出来，又是做不出来。
我的答案:
```
#include <stdio.h>
#define PI 3.1415926535
int main() {
    int m;
    for(int i =0; i < m; i++) {
        int S[6];
        double r, v;
        for(int i = 1; i <=6; i++) {
            // 我觉得得要写一个数组吧
            scanf("%d", &S[i]);
        }
        r = sqrt(double(pow(double(s[0] - s[3]), 2.0) + pow(double(s[1] - s[4]), 2.0) + pow(double(s[2] - s[5]), 2.0)));
        v = 3/4 * PI * pow(r, 3);
        printf("%.2f %.2f", r, v);
    }
}
```
上述：我的答案都是有错误的。我现在需要看的是正确的答案应该是要怎么写。怎么写才好。
我修改后的正确答案:
```
#include <stdio.h>
#define PI 3.1415926535
int main() {
    int m;
    scanf("%d", &m);
    for(int i =0; i < m; i++) {
        double s[6];
        double r, v;
        for(int i = 0; i <=5; i++) {
            // 我觉得得要写一个数组吧
            scanf("%lf", &s[i]);
        }
        r = sqrt((s[0] - s[3])*(s[0] - s[3]) + (s[1] - s[4])*(s[1] - s[4]) + (s[2] - s[5])*(s[2] - s[5]));
        v = (4.0 * PI * r * r * r)/3;
        printf("%.2f %.2f\n", r, v);
    }
}
```
别人的正确答案:

```
#include <stdio.h>
#include <math.h>
int main()
{
    int m;
    while(scanf("%d",&m)!=EOF)
    {
        int x1,y1,z1,x2,y2,z2;
        float r,v;
        double pi=3.1415926535;
        for(int i=0;i<m;i++)
        {
           scanf("%d%d%d%d%d%d",&x1,&y1,&z1,&x2,&y2,&z2);
            r=sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)+(z2-z1)*(z2-z1));
            v=(4.0*r*r*r*pi)/3;
            printf("%.2f %.2f\n",r,v);
        }
    }
    return 0;
}
```

我需要值得注意的是不等于 写成 != 而不能写成 !==

学生信息这个，我不会做。
不会做的关键在于，我不知道应该怎么去存储这么多信息，然后还要进行遍历。

我的答案
```
#include <stdio.h>
#include <math.h>
int main() {
    int m;
    scanf("%d", &m);
    for(int i = 0; i < m; i++) {
        int n, d;
        scanf("%d", &n);
        scanf("%d", &d);
        int S;
        for(int i = 0; i < n; i++) {
            int id, name, gender, age;
            for(int i = 0; i < 4; i++) {
                scanf("%d%c%c%d", &id, &name, &gender, &age);
            }
            if(id == d) {
                printf("%d %c %c %d\n", id, name, gender, age);
            }
        }
    }
} 
```
别人的答案:
```

#include <stdio.h>
typedef struct{
    int id;
    char name[20];
    char sex[10];
    int age;
}stu;
int main()
{
    int m,n,x;
    stu buf[100];
    while(scanf("%d",&m)!= EOF)
    {
        for(int i=0;i<m;i++)
        {
            scanf("%d",&n);
            for(int i=0;i<n;i++)
                scanf("%d%s%s%d",&buf[i].id,&buf[i].name,&buf[i].sex,&buf[i].age);
            scanf("%d",&x);
            for(int i=0;i<n;i++)
            {
                if(x==buf[i].id)
                {printf("%d %s %s %d\n",buf[i].id,buf[i].name,buf[i].sex,buf[i].age);
                 break;
                }
            }
        }
    }
    return 0;
}
```
学生信息，明天需要再次默写一遍


计算天数
闰年的特点， 2月有29天
如何获取到余数。 % 符号

能被400 正除，或能被4 整除但不能被100整除。这行判断应该要怎么判断。简单的判断都不会呀。
最终还是以不会写，放弃了。因此我去看别人写的答案。
为什么别人的答案，一看就会写，而自己一开始去写的时候，却怎么都写不出来。
难点: 
1、 不会判断闰年
2、 如何区分大小月
我的答案：
```
// 我觉得每道题，都会让我倒吸一口气
// 我觉得每道题，我都会倒吸一口气，觉得很难很难
// 我觉得得要有个结构体
// 不会写，不会写，着急，着急
#include <stdio.h>
#include <math.h>
typedef struct {
    int year;
    int month;
    int day;
}time;
int main() {
    int m;
    while(scanf("%d", &m) != EOF) {
        time buf[100];
        for(int i = 0; i < m; i++) {
            scanf("%d%d%d", &time[i].year, &time[i].month, &time[i].day);
        }
        for(int i = 0; i < m; i++) {
            if(time[i].year % 400 == 0 || time[i].year % 4 == 0 && time[i].year % 100 != 0) {
                // 
            } else {
                // 请问还有大月，小月，，这个应该要怎么去判断。
            }
        }
    }
}
```
#include <stdio.h>
#include <math.h>
int main() {
    
}


别人的答案：
```
#include <stdio.h>
int main()
{
    int a[13]={0,31,28,31,30,31,30,31,31,30,31,30,31};
    int n,y,m,d;
    while(scanf("%d",&n)!=EOF) {
     for(int i=0;i<n;i++) {     
        scanf("%d%d%d",&y,&m,&d);
            int ans=0;
        for(int j=1;j<m;j++)
            ans+=a[j];
            ans=ans+d;
        if(y%4==0&&y%100!=0||y%400==0)
            ans++;
        printf("%d\n",ans);
       }
    }
    return 0;
}
// 这个答案是写的真好
```
注意点： c语言中，请问应该如何表示数组呢。
类型说明符 数组名[常量表达式] = {值，值，....值};
其中在{}中各数据值即为各元素的初值，各值之间用逗号间隔。
int a [10] = {0, 1, 2, 3, 4, 5, 6, 7, 8};