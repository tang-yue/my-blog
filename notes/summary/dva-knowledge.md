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


#### 关于jsx dva

这种问题我觉得得要分几种情况。
第一种
`function({shareData}) { return()}`  在return的前面又定义了function b()函数，那么我在return里面如何引用这个function函数.
首先要明确的是shareData，这个值在b函数里面是可以获取到的，因此并不需要通过传参的方式给它传进去。
在return里面只需要这样`{shareData? b():null}` 调用就可以实现。
举列说明：
```
function a() {
    function b() {
        console.log('bbbb');
    }
    return b();
}

// 执行
a();
onClick = {() => editItem()} // 其实这样就和上面的很类似
```
第二种
关于纯组件
要绑定this值的几种方式
首先纯组件是长这样的。
```
class App extends Component {
	handle2(string) {

	},
	handle3() {

	},
	handle4 = () => {

	}
	render() {
		const handle5 = function(str) {

		}
		const handle6 = (str) => {

		}
		return (
			// 以下的下面写的函数都是要执行的
			<div>
				{this.handle2(string)} // 写的很好，very good
				{this.handle3()}
				{this.handle4()}
				{handle5('你好')}
			</div>
			// 以下的下面写的函数都是我在点击按钮的时候，执行的
			<button onClick={() => this.handle2('Hello world')}></button>
			<button onClick={this.handle3.bind(this)}></button>
			<button onClick={this.handle3}></button>
			// 突然发现{this.handle3}也是可以的，要不然你可以用箭头函数打印下this，
			// 会发现有handle3函数
			<button onClick={this.handle4}></button>
			<button onClick={() => handle5('hhh')}></button>
			<button onClick={() => handle6('test')}></button>
		)
	}
}
export default App;
```
第三种 关于非纯组件funciton 开头 
相对来说就比较简单了，如下：
```
import React from 'react';

export default function Test() {
    function test() {
        console.log('test function');
        return <span>test function</span>
    }

    const test1 = () => {
        console.log('test1');
        return <span>test1</span>
    }
    const test2 = function(str) {
        console.log(str);
        return <span>{str}</span>
    }
    const test3 = (s) => {
        console.log(s);
        return <span>{s}</span>
    } 
    return (
        <div>
            <div>
                Test folder
                {test()}
                {test1()}
                {test2('test2')}
                {test3('test3')}
            </div>
            <button onClick={test}>test</button>
            <button onClick={test1}>test1</button>
            <button onClick={() => test2('test2')}>test2</button>
            <button onClick={() => test3("test3")}>test3</button>
        </div>
    )
}
```
