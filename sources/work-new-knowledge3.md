1、 6月14日 遇到一个棘手的问题。

在父组件中引用子组件，父组件的render 还没执行完，子组件的component 已经执行了。

结果要在子组件里去获取，父组件里的某个dom元素，结果，取不到值，导致报错。

需要去看一篇，父组件生命周期和子组件生命周期的顺序问题，相关文章。


2、 6月17日   任何时候列表数据要考虑为空的情况