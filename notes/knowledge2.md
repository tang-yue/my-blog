### 关于react子组件向父组件，传值
关于我模糊的记忆，只知道是用函数进行传值。
1、首先，父组件和子组件共用一个函数。
2、在子组件里的某个事件，会调用这个函数。同时，将参数给传递到父组件。
3、父组件就可以直接用这个函数，以及有了参数，进行相对应的操作。
4、最重要的，执行了子组件里的该函数，就是相当于执行了父组件里的该函数。

### react 的另一种没有写过的写法。

```
  export default class SideMenu extends PureComponent {
    constructor(props) {
      super(props);
      this.flatMenuKeys = getFlatMenuKeys(props.menuData);
      // 那么 this.flatMenuKeys 就可以直接在下面使用
    }
  }
```

UNSAFE_componentWillReceiveProps(nextProps) {
  // to do something
}  这个地方，表示什么意思呢

就是当props 发生改变的时候，去做些什么。