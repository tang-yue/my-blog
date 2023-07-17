react 分享
ahooks 文档进度条
react 除了redux，的另一套全局数据存取框架是什么？你会用吗？

我对易剪辑项目的优化。
react hooks 
learn react 部分
describing the UI done
adding interactivity done

Queueing a series of state updates 看了个大概
Updating Objects in state 更新对象
Managing State
Extracting state logic into a reducer done
hooks 思维导图

Escape Hatches 部分
### Referencing Values with Refs

1、什么时候用state，什么时候用ref

当信息被用于渲染，那么则保持它在state里。当信息被事件需要并且改变它不要求重新渲染，那么使用ref更有效率。
使用ref列如：

（1）storing timeout IDs
 (2) 存储和操DOM元素
 (3) 存储其他对形成JSX不是必要的对象

2、refs和state的区别

要点：你不应该读或写`ref.current`值在渲染期间，但是你可以读取state值任何时候，然而，每一次渲染有state自己的快照，在渲染期间不可改变。

3、挑战作业的最后一个不错。

### Manipulating the DOM with Refs

1、访问另一个组件的DOM节点
举例说明：
```js
function MyInput(props) {
  return <input {...props} ref={ref} />
}
<MyInput ref={inputRef} />
```

### Synchronizing with Effects

1、Effects 是什么以及它们和事件有什么不同之处

在React中，每次更新都分为两个阶段
（1）在渲染过程中，React调用组件来确定屏幕上应该显示什么。
 (2) 在提交期间，React将更改应用到DOM

Eeffect运行时：Effects在屏幕更新后的提交结束时运行。这是将React组件与一些外部系统(如网络或第三方库)同步的好时机。

2、为了避免setState的操作而引起的re-render都触发Effect，而这样有时会导致变慢比如放请求，也会导致Effects内部不必要的触发，我们需指定Effect的依赖项

```js
useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
```

3、在mount内部写console.log为什么会打印两次。
