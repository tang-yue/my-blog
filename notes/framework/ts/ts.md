简单的一些ts笔记

[TypeScript 入门教程](https://ts.xcatliu.com/basics/type-assertion.html)

其余的通过看别人的代码学习

[挑战：](https://github.com/type-challenges/type-challenges) 先把easy题给看一遍吧


Pick

```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

Readonly

```ts
type MyReadonly<O> = {
  readonly [K in keyof O]: O[K]
}
```

Tuple to Object

```ts
type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P  // key 部分是一个变量，所以要加[]
}
```

First of Array

```ts
type First<T extends any[]> = T extends { length: 0 } ? never : T[0];
```

[参考extends](https://juejin.cn/post/6998736350841143326)

Length of Tuple

```ts
type Length<T extends readonly any[]> = T extends {length: number} ? T['length'] : never
```

exclude

```ts
type Exclude<T, U> = T extends U ? never : T // T 里面排除 U
```

Awaited

```ts
type Awaited<T> = T extends Promise

// infer的作用：推倒泛型参数
// infer 只能在extends的右边使用，infer P 的 P也只能在条件类型为true的一边使用
```

[参考](https://juejin.cn/post/6998347146709696519)

有个地方没有理解，没有理解

```ts
// 这个函数，看来对函数不是很理解
type F<T> = (...args:any) => T
```

```ts
let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number 
```


```ts
// 通用函数
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0]
}

// inference
```
继续啦，努力学习和工作。专注学习，继续看函数。

```ts
// 这行代码看不懂
// function map<Input, Output>(arr: Input[], func: (arg: Input) => Output):Output[] {
//   return arr.map(func)
// }

const parsed = map(['1','2','3'], (n) => parseInt(n))
// 能够看明白，但是要是自己写的话，还是破费功夫的
```

```ts
// 自己看着写一遍吧，想下思路，学习太慢了
// 肯定是要写一个map函数的
// 我好像没有看到特别的用法
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func)
}

// 感觉脑袋转的特别慢
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  
}
// OK 基本上没有特别新的用法

// 这个太难记了
```



