## dva 总结

### dva代码片段
#### select取值
```
// 取出命名空间为mail的model里的state对象
const stateAllValue = yield select(state => 　state.mail);
```

#### 获取查询参数
```
var regex = /\=/g;
let content = this.props.history.location.search.slice(1).replace(regex, " ").split(" ")[1];
```

#### 跳转加快的两种方式
```
// Inside Effects
yield put(routerRedux.push('/logout'));
// Inside Effects // 带query 的方式
yield put(routerRedux.push({pathname: '/applySuccess',query:{classId:payload.dataInfo.id}}));
// Outside Effects
dispatch(routerRedux.push({pathname: '/applySuccess',query:{classId:payload.dataInfo.id}}));
// 能够看到和用window.location.href跳转url，的明显的区别，
在地址栏的用window,就是直接整个url地址都跳动了，但是用push这种方式，变化的仅仅是路由变化，
前面的window.location.origin 是没有变化的。
```
上面是在dva.1.0中的跳转方法。
dva2.0 的跳转方式如下:
```
  yield put(routerRedux.push('/user'), {name:'tangyue', age: 22});
  那么这个参数会如何接受到呢，如下代码:
  subscriptions: {
    history.listen((location) => {
      console.log(location.state);  // 这里的location.state就是传递过来的参数
      // 即为 {name: "tangyue", age: "20"}
      })
  },

```

#### dva 中的 loading
loading: loading.models.xxxx (某个model的namespace)
这样的话，就会导致，只要发送请求，就会loading。如果时间长的话，就会出现一阵的白屏。






