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
