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

// 跳转
router 层
import { routerRedux } from 'dva/router';
dispatch(routerRedux.push(`/example/xxxx?id=2`), {})
```





