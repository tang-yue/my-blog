为做PTA 基础编程题目集 部分

6-2 多项式求值

我不知道这个f函数的格式应该如何写。

double f( int n, double a[], double x )

6-6 求单链表结点的阶乘和

看不懂， 我觉得这个里面有太多我不认识的了，当我看这道题目的时候，
我的脑袋在处于缺氧的状态，开始犯困，犯困。
所以我决定将其暂时放在一边。

6-7 统计某类完全平方数、

如何判断有两个数字是相同的

c语言中，如何数字变字符串？？？

c 语言。如何遍历字符串

```
int IsTheNumber(const int N)
{
    int flag = 0 ;
    int k, m, temp;
     m = N; 
    k = (int) sqrt(N);
    if(k*k == N)
    {
        int a[10]={0}; //这里应该定义num的长度为10，因为传入的整数的每位数可能是0~~9，而不是传入数的位数。
        while( m>0)
        {
            temp = m%10; 
            for(int i=0; i<10; i++) //遍历N的每一位上的数字，在相应的数组中自加 如果有一个数组元素等于2 说明至少有2个位上的数相同
            {
                if(temp == i) 
                    a[i]++;
                if(a[i] == 2)
                {
                    flag = 1;
                    break;
                }
            }
            
            if( flag )  break;
            m /= 10;
        }
    }
    
    return flag; //程序最好单出口
}
```
这段函数写的真好
下面默写一遍吧

6-8 简单阶乘计算
通过
6-9 统计个位数字

c 语言的一个数的绝对值

注意，要考虑0的情况

6-10 阶乘计算升级版

我做的时候，一直都是部分接受，

别人的答案：
```
void Print_Factorial ( const int N )
{
    int temp;
    int m = 0;  //要进的数 
    int k = 1;  //当前结果总位数 
    
    int fact[3000] = {0};
    fact[0] = 1;
    
    if( N>=0)
    {
        if( N==0 || N==1)   
        {
            temp = 1;
            printf("%d", temp);
        }
        else 
        {
            for(int i=2; i<=N; i++)
            {
                for( int j=0; j<k; j++)
                {
                    // 2 * 1 + 0   第一组
                    // 3 * 1 + 0;
                    // 3 * 3 + 0;
                    // 4 * 1 + 0;
                    // 2 * 6 + 1;
                    temp = i * fact[j] + m;
                    fact[j] = temp %10 ; 
                    m = temp / 10 ;
                    
                    if( m && j==k-1)// 当有进位且已经处理到最前位时才开拓目标数组的下一位 
                        k++; 
                }
            }
                
            for(int i=k-1; i>=0; i--)   
                printf("%d", fact[i]);
        }
    }
    else printf("Invalid input");
}
```
明天需要继续看上面的题目。
