简单的一些ts笔记

[TypeScript 入门教程](https://ts.xcatliu.com/basics/type-assertion.html)

其余的通过看别人的代码学习

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
