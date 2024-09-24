我所做的一切都是为了提高工作效率和，和能够快速掌握一项技能。
<!-- 我觉得这是一项值得我去努力做的事情。 -->

1. 关于flex 布局 
其中左边是图片，右边是文本。当容器宽度不够的时候，右边的文本会挤压左边的图片。使得图片变形。
这样的时候，我们应该如何去做。给右边的文本容器设置属性: flex: 1;

2. 关于flex 布局下
不同页面的自适应
`jusitify-content: space-between` 使用这个属性的时候。
如果你给的宽度是`width: 80%`; 那么在手机端宽屏的会导致中间的间隔是特别的大。非常的不好看。
我今天想到一个办法即如下
```
    width: 70%;
	min-width: 540px;
	margin: 0 auto;
```
给它一个最小的宽度，然后正式的宽度为总宽度的70%，这样就可以完美的解决问题。

2023年 7月21日更新

3. 关于一个看不懂的ts

```ts
interface ProTableProps extends Partial<Omit<TableProps<any>, 'data'>>

// Partial 是TypeScript内置的一个泛型类型，它将一个类型中所有属性都变成可选的
// Omit 是TypeScript内置的另一个泛型类型，它用于从一个类型中排除指定的属性
// TableProps<any> 是一个泛型类型，它接受一个类型参数，这里是any，表示可以接受任意类型的
// 数据。这个类型应该是Table组件接受的props的类型定义
// ‘data’ 是一个字符串字面量类型，表示要从TableProps<any>中排除的属性名称
```

