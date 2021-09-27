react 学习笔记。
断断续续到现在都没有看完。
react 官网到现在都没有看完。
目前看到 MAIN CONCEPTS 的 9.Forms
8 月 15 日 17:19 分
有 9, 10, 11, 12,还有下面的 ADVANCED GUIDES 部分

9.Forms

计算属性名

```
    var param = "size";
    var config = {
        [param]: 12,
        ["mobile" + param.charAt(0).toUpperCase()+param.slice(1)]: 4
    }
    console.log(config);  // { size: 12, mobileSize: 4 }
```

```
    const name = e.target.name;

    this.setState({
        [name]: value
    });
```

Uncontrolled Components 和这一章是相关的。

10. Lifting State Up

下面这个列子，可以好好看看
[两个输入框输入温度](https://codepen.io/gaearon/pen/WZpxpz?editors=0010)

11. Composition vs inheritance

主要讲了使用 function 的形式去写组件。

讲述了 props.children 的概念

React in thinking

我没有认真去看

下面就看到了 ADVANCED GUIDES

2021 年 3 月 16 日
