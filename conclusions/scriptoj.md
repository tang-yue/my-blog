时刻牢记每天要花30分钟的时间，思考我的目标，以及我应该如何一步步执行。
在执行中，不断的调整。
我觉得这个上面的题目真的好难。
1. 0 Hello World

```
<div id='content'>Hello World</div>
```

2. 1用 React.js 在页面上渲染标题
HTML
```
<div id='root'>
  <h1>renderContent('Hello World')</h1>
</div>
```
JavaScript
```
function renderContent(content) {
  ReactDOM.render(<h1>{content}</h1>, document.getElementById('root'))
}
```

3. 用React.js 构建未读消息组件
```
class Notification extends Component {
  render () {
    // TODO
    let N = getNotificationsCount();
    return <div>{
    N > 0 ? <span>有({N})条未读消息</span>
    : <span>没有未读消息</span>}</div>
  }
}
```

4. JSX 元素变量
```
const title = <h1 className="title">ScriptOJ</h1>
const page =<div className="content">{title}</div>
```

5. 用React.js 组建的房子
```
class House extends Component {
  render() {
    return <div className="house">
    <Room />
    <Bathroom />
    </div>
  }
}

class Room extends Component {
  render() {
    return <div className="room">
    <Man />
    <Dog />
    <Dog />
    </div>
  }
}

class Bathroom extends Component {
  render() {
    return <div className="bathroom"></div>
  }
}

class Man extends Component {
  render() {
    return <div className="man"></div>
  }
}

class Dog extends Component {
  render() {
    return <div className="dog"></div>
  }
}
```

6. #5 不能摸的狗 （-）
```
class Dog extends Component {
  bark () {
    console.log('bark')
    this.run();
  }
  
  run () {
    console.log('run')
  }
  
  render () {
    return (<div onClick={this.bark.bind(this)}>DOG</div>)
  }
}
```

7. #6 不能摸的狗 （二）
```
class Dog extends Component {
  constructor () {
    super()
    /* TODO */
    this.state = {
      isRunning: false,
      isBarking: false
    }
  }
  
  bark () {
    /* TODO */
    this.setState({
      isBarking: true
    }) 
  }
  
  run () {
    this.setState({
      isRunning: true
    })
    this.bark();
    setTimeout(function() {
      this.setState({
        isRunning: false,
        isBarking: false
      })
    }.bind(this), 30)
    /* TODO */
  }
 
  render () {
    return (<div onClick={this.run.bind(this)}>DOG</div>)
  }
}
```

8. #7 打开和关闭电脑
```
class Computer extends Component {
  constructor() {
    super()
    this.state = {
      status: 'off'
    }
  }
  switch() {
    this.setState((state) => ({
      status: state.status === 'off' ? 'on' : 'off'
    }))
  }
  render () {
    const { status } = this.state;
    return (
      <div>
        <button onClick={this.switch.bind(this)}>开关</button>
        <Screen showContent={status === 'off' ? '显示器关了' : '显示器亮了'} />
      </div>
    )
  }
}

class Screen extends Component {
  constructor() {
    super()
  }
  static defaultProps = {showContent:"无内容"}
  // 你需要给显示器配置'defaultProps'属性来设置默认的'showContent'
  render () {
    const { showContent } = this.props;
    return (
      <div className='screen'>{showContent}</div>
    )
  }
}
```

9. #8 打印章节标题
```
class Lesson extends Component {
  /* TODO */
  constructor() {
    super()
  }
  
  render() {
    const { lesson }  = this.props;
    return <div onClick={() => { console.log(`${this.props.index} - ${this.props.lesson.title}`)}}>
    // 上述因为两个参数传值，不好传，你看别人直接写成这样了，good
      <h1>{lesson.title}</h1>
      <p>{lesson.description}</p>
    </div>
  }
}

class LessonsList extends Component {
  /* TODO */
  constructor() {
    super()
  }
  
  render() {
    const { lessons } = this.props;
    return <div>
    {lessons.map((item, index) => (<Lesson key={index} index={index} lesson={item} />))}
    </div>
  }
}
```

10. #9 百分比换算器
思路：以前就遇到过该列子的，觉得不错，当时觉得应该要多多练习，之后就忘记了。
```
class Input extends Component {
  
  handleInput(e) {
    this.props.setNum(e.target.value)
  }
  render () {
    return (
      <div>
        <input type='number' onChange={this.handleInput.bind(this)}/>
      </div>
    )
  }
}

class PercentageShower extends Component {
  render () {
    const { value } = this.props
    return (
      <div>{(value * 100).toFixed(2)}%</div>
    )
  }
}

class PercentageApp extends Component {
  constructor() {
    super()
    this.state = {
      value: 0
    }
  }
  handleInput(v) {
    this.setState({
      value: v 
    })
  }
  render () {
    const { value } = this.state;
    return (
      <div>
        <Input setNum={this.handleInput.bind(this)} />
        <PercentageShower value={value} />
      </div>
    )
  }
}
```

11. #10 React.js 加载、刷新数据
```
class Post extends Component {
  constructor() {
    super()
    this.state = { content: '' }
  }

  componentWillMount() {
    this._loadData()
  }

  async _loadData() {
    this.setState({
      content: '数据加载中...'
    })
    const content = await getPostData()
    this.setState({ content })
  }

  render() {
    return (
      <div>
        <div className="post-content">{this.state.content}</div>
        <button onClick={() => {this._loadData()}}>刷新</button>
      </div>
    )
  }
}
```
虽然我在componentDidMount里不能用this.setState({}）进行赋值，但是
我们却可以调用另一个函数，在该函数里进行赋值。

12. #11 获取文本的高度

my answer 错误
```
class Post extends Component {
  console(e) {
    console.log(e.target.style.height)
    // 获取的行内样式，我都没有设置，怎么获取到呢
  }
  render () {
    const { content } = this.props;
    return (<p onClick={this.console.bind(this)}>{content}</p>)
  }
}
```
别人的答案
```
const Post = props => {
  return (
    <p ref={p => {this.p = p} } onClick={() => console.log(this.p.clientHeight)}>
    )
}
```

13.  #12 覆盖默认样式
别人的答案：
```
const getDefaultStyledPost = (defaultStyle) => {
  return (
    class Post extends React.Component {
      render() {
        const style = {...defaultStyle, ...this.props.style}
        return (
          <p style={style}>dwdwd</p>  
        )
      }
    }
  )
}
```

14. #13 黑色边框的容器组件

别人的答案：
```
// CSS:
.border {
  border: 1px solid #000
}
// JS:
class BlackBorderContainer extends Component {
  render() {
    return (<div>{this.props.children.map((el) => {
      <div className="border">{el}</div>
    })}</div>)
  }
}
```
// 忘记可以用this.props.children了

15. #14 React.js 加载、刷新数据-高阶组件

觉得这道题有点难度。任何我们毫不费力就获取到的知识，在我们的脑海里都不会长久的停留。
```
const loadAndRefresh = (url) => {
  return function(WrappedComponent) {
    return class extends Component {
      componentWillMount() {
        this._loadData()
      }
      
      async _loadData() {
        this.setState({ content: '数据加载中...' })
        const content = await getData(url)
        this.setState({
          content,
        })
      }
      render() {
        const props = {
          content: this.state.content,
          refresh: this._loadData.bind(this),
          ...this.props
        }
        return (
            <WrappedComponent {...props} />
          )
      }
    }
  }
}
```

16. #15 高阶组件 + context

this.context 表示的是什么意思。
有种感觉只有不知道一样。
```
const makeProvider = (data) => (Post) => {
  return class WrapComponent extends Component {
    static childContextTypes = {
      data: PropTypes.any
    }

    getChildContext() {
      return {
        data: data
      }
    }

    constructor(props) {
      super(props)
    }
    
    render() {
      return (
          <Post />
        )
    }
  }
}
```

17. #16 实现Users Reducer

完全看不懂题目
```
const usersReducer = (state=[], action) => {
  switch(action.type) {
    case "ADD_USER":
      return [...state, action.user];
    case "DELETE_USER":
      let deState = [...state];
      deState.splice(action.index, 1);
      return deState;
    case "UPDATE_USER":
      let upState = [...state];
      upState[action.index] = {...upState[action.index], ...action.user};
      return upState;
    default:
      return state;
  }
}
```

18. #17 React-redux 实现用户列表的显示、增加、删除
思路：两个input 标签输入，和一个单选。这些数据都没有统一存储在一块，也没有一个一个的存储。
那么我该如何获取到数据呢。
```
const usersReducer =(state=[],action) => {
  switch(action.type){
    case 'ADD_USER':
      return [...state, action.user]
    case 'DELETE_USER':
      return [...state.slice(0,action.index), ...state.slice(action.index+1)]
    case 'UPDATE_USER':
      let upState = [...state];
      upState[action.index] = {...upState[action.index], ...action.user};
      return upState;
    default:
      return state
  }
}

class User extends Component {
  render () {
    const { user, deleteUser, index } = this.props;
    return (
      <div>
        <div>Name: {user.username}</div>
        <div>Age: {user.age}</div>
        <div>Gender: {user.gender}</div>
        <button onClick={() => {deleteUser(index)}}>删除</button>
      </div>
      )
  }
}

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      age: '',
      gender: ''
    }
  }

  render() {
    const { username, age, gender } = this.state;
    const { addUser, deleteUser, users } = this.props
    return (
      <div>
        <div className="add-user">
          <div>Username:<input type='text' value={username} onChange={e => {this.setState({username: e.target.value})}} /></div>
          <div>Age: <input type="number" value={age} onChange={e => {this.setState({age: parseInt(e.target.value)})}} /></div>
          <div>Gender:
            <label>Male: <input type="radio" name='gender' value='male' onChange={e => {this.setState({gender: e.target.value})}} /></label>
            <label>Female: <input type="radio" name="gender" value="female" onChange={e => {this.setState({gender: e.target.value})}} /></label>
          </div>
          <button onClick={() => addUser(this.state)}>增加</button>
        </div>
        <div className="users-list">
          {users.map((user, index) =>
            <User user={user} deleteUser={deleteUser} index={index} key={index} />
          )}
        </div>
      </div>
      )
  }
}

// 需要注入的props
const mapStateToProps = (state) => {
  return {
    users: state
  }
}

// 需要注入的函数
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch({
        type: 'ADD_USER',
        user
      })
    },
    deleteUser: (index) => {
      dispatch({
        type: 'DELETE_USER',
        index: index
      })
    }
  }
}

UsersList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(UsersList)
```

19. #18 数字添加逗号

我的答案：
```
function commafy (num) {
    let str_num = num + '';
    let arr = num < 0 ? str_num.slice(1).split('.') : str_num.split('.');
    let a = arr[0].split('');
    for(let i = a.length - 3; i > 0; i=i-3) {
      a.splice(i, 0, ',')  
    }
    let res = arr[1] ? a.join('') + '.' + arr[1] : a.join('')
    return num < 0 ? '-' + res : res;
}
```

20. #19 获取文件的扩展名
我的答案
```
const extname = (filename) => {
  let index = filename.lastIndexOf('.');
  return filename.slice(0, index)&&index !== -1 ? filename.slice(index) : '';
}
```

21. #20 正则表达式删除两端多余空白字符
思路：要将字符串前后多余的空白字符替换成''
我的答案：
```
const TRIM_REGX = /^\s*|\s*$/g

```

22. #21 16进制颜色值转RGB值
思路： 16进制转十进制如何计算。A，B，C，D，E，F，不区分大小写这六个字母分别表示10，11，12，13，14，15
首先判断是否是16进制的颜色，特点以#号开头，其余是字母和数字，6位或者3位。
正则匹配如何只匹配3位数字或字母，或只匹配6位数字或字母

遇到的错误的地方：

```
/^\#([a-fA-F0-9]{3})$|([a-fA-F0-9]{6})$/g.test(hex)   // 正则表达式错误，如果多于六位了，仍旧是会匹配正确。
所有最后我决定分开写。
```
我的答案：
```
 const hexToRGB = (hex) => {
  if(!/^\#([a-fA-F0-9]{3})$/g.test(hex) && !/^\#([a-fA-F0-9]{6})$/g.test(hex)) return null
  
  let len = hex.slice(1).length;
  let str = len === 6 ? hex.slice(1) : hex.slice(1)[0].repeat(2) + hex.slice(1)[1].repeat(2) + hex.slice(1)[2].repeat(2);
  let arr_str = str.split('');
  let new_arr_str = arr_str.map((item, index) => {
    if(item === 'a' || item === 'A') {
      return 10
    } else if(item === 'b' || item === 'B') {
      return 11
    } else if(item === 'c' || item === 'C') {
      return 12
    } else if(item === 'd' || item === 'D') {
      return 13
    } else if(item === 'e' || item === 'E') {
      return 14
    } else if(item === 'f' || item === 'F') {
      return 15
    } else {
      return Number(item);
    }
  })
  let num1 =  new_arr_str[0] * 16 + new_arr_str[1];
  let num2 = new_arr_str[2] * 16 + new_arr_str[3];
  let num3 = new_arr_str[4] * 16 + new_arr_str[5];
  return `rgb(${num1}, ${num2}, ${num3})`
}
```

23. #22 获取子元素属性
思路：首先获取直接子元素

别人的答案：
```
const getChildAttributes = (dom, attrStr) => {
  lists = [];
  for(let item of dom.children) {
    lists.push(item.getAttribute(attrStr))
  }
  return lists;
}
```

24. #23 肥猫列表
// react 版本的没有找到答案
// jQuery 的， 内心不是很感兴趣，那么我肯定是记不住的。
// 原生的， 有点感兴趣，并且希望记住。
```
function renderFatCats(cats) {
  let list = document.querySelector('#cats-list');
  list.innerHTML = null;
  let str = '';
  cats.sort((a,b) => b.weight - a.weight);
  for(let v of cats) {
    str += `<div class="cat">
    <span class="cat-name">${v.name}</span>
    <span class="cat-weight">${v.weight}</span>
    </div>`
  }
  list.innerHTML = str;
}
```
25. #24 +1s 程序

别人的答案：
```
const plusFor = (name) => {
      let count = 0;
      return () => {
        count++;
        return `为${name}+${count}s`;
      }
    }
```

26. #25 李雷向韩梅梅求婚
我的答案：
```
const proposeToMissHan = (isOK) => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
     if(isOK) {
        resolve('ok')
      } else {
        reject('no')
      } 
    }, 40)
  })
}
```

27. #26 分页判断
我的答案：
```
const getPages = (total, itemsPerPage) => {
  if(itemsPerPage === 0) return 0;
  return Math.ceil(total/itemsPerPage);
}
```

28. #27 compose 函数
别人的答案：
```
const compose = (...args) => {
  return (x) => args.reduceRight((v, f) => f(v), x)
}
```

29. #28 韩梅梅拒绝了李雷

思路： 一个div同时有三个class特性， tall, wealthy, handsome

```
// css
div.tall.wealthy.handsome {
  border: 1px solid red;
}
```

30. #29 转换驼峰命名
思路： （1）将字符串以字母分割，这样能够获取到，第一个字母之前的非字母字符串，和最后一个字母之后的非字母字符串。
（2）匹配到从第一个字母到字符串的最后。（3）以下划线分割，将字母字符串的首字母转换成大写。（4）进行拼接，但是字母字符串的第一个，要特殊的转换成小写。
我的答案：
```
const toCamelCaseVar = (variable) => {
  let a = variable.split(/[a-zA-Z]/g);
  let start = a[0];
  let end = a[a.length -1];
  let str = variable.match(/[a-zA-Z][a-zA-Z_]*$/g)[0];
  let arr = str.split(/\_/g);
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].match(/[a-zA-Z]/g)) {
      arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
      console.log(arr[i]);
    }
  }
  let res = arr.join('');
  return start + res.slice(0,1).toLowerCase() + res.slice(1) + end;
}
```
其余的答案最常用的是replace里有正则的用法.
别人的答案：
```
const toCamelCaseVar = (variable) => {
  return variable.replace(/([^_])_+([^_])/g, function (all, b, c) {
    return b+c.toUpperCase()
  })
}
// 这里的正则匹配到的是 非下划线_非下划线。。 然后修改成非下划线非下划线大写
```

31. #30 curry 函数
函数柯里化： 如果你固定某些参数，你将得到接受余下参数的一个函数。

别人的答案：
```
const curry = (fn, arr = []) => {
  return (...args) => {
    if([...arr, ...args].length === fn.length) {
      return fn(...arr, ...args)
    } else {
      return curry(fn, [...arr, ...args])
    }
  }
}
```

32. #31 DOM 标签统计

如何获取所有的dom， 然后将dom里的所有tagName 都取出来。
别人的答案：
```
const getPageTags = () => {
  const doms = document.getElementsByTagName('*');
  return [...new Set([...doms].map((dom) => dom.tagName.toLowerCase()))];
}
```

33. #32 后端数据处理
我的答案
```
const parseData = (data) => {
  const { rows, metaData } = data;
  return rows.map((item, index) => {
    let obj = {};
    for(let i = 0; i <metaData.length; i++) {
      obj[metaData[i].name] = item[i];
    }
    return obj;
  })
}
```

34. #33 数组拍平
```
const flatten = (arr) => {
  const res = [];
  for(var c of arr) {
    if(Array.isArray(c)) {
      res = res.concat(flatten(c));
    } else {
      res.push(c);
    }
  }
  return res;
}
```

35. #34 操作Cookie
纯记忆力的东西

```
const cookieJar = {
  set (name, value, days) {
    const d = new Date();
    d.setDate(d.getDate() + days)
    document.cookie = `${name}=${value};expires=${d}`
  },
  get (name) {
    const obj = {};
    document.cookie.split(';').forEach(s => {
      s = s.trim();
      const key = s.slice(0, s.indexOf('='));
      const value = s.slice(s.indexOf('=') + 1);
      obj[key] = value;
    })
    return obj[name];
  },
  remove (name) {
    this.set(name, '', -1)
  }
}
```

36. #35 queryString 分析器
我的答案：

```
const parseQueryString = (url) => {
  var obj = {};
  let index = url.indexOf('#');
  url = index === -1 ? url : url.slice(0, index);
  if(url.indexOf('?') !== -1) {
    let i = url.indexOf("?");
    let arr = url.slice(i+1).split('&');
    arr.forEach(function(item)  {
      item = item.replace(/\=/, '&')
      let t = item.split('&');
      obj[t[0]] = t[1] !== undefined ? t[1] : null;
    })
    return obj;     
  } else {
    return obj;
  }
}
```

37. #36 实现一个EventEmitter
这个稍等下，再做吧

38. #37 ScriptOJ的前端工程师
稍等下

39. #38 可以开车了吗？
稍等下

40. #39 不用循环生成数组

我不知道我应该如何写。
那些格式能够通过Array.from() 转化成数组。
语法： Array.from(arrayLike[, mapFn[, thisArg]])

1、字符串 
例如
``` 
Array.from('foo'); // ['f', 'o', 'o']
```
2、a Set 例如
```
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set); // ['foo', 'bar', 'baz']
```
3、a Map 例如
```
const map = new Map([[1,2], [2,4], [4,8]]);
Array.from(map); // [[1,2], [2,4], [4,8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());  // ['a', 'b']
Array.from(mapper.keys()); // ['1', '2']
```
4. an array-like object (arguments)
```
function f() {
  return Array.from(arguments);
}
f(1,2,3); // [1,2,3]
```
5. Using arrow functions and Array.from()
例如
```
Array.from([1,2,3], x => x + x);
Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4]
```
6. Sequence generator(range)
```
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
range(0, 4, 1); // [0, 1, 2, 3, 4]
range(1, 10, 2); // [1,3,5,7,9]
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// 上述一种新的方法，生成字母A-Z
```

我的答案：
[参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
```
const arrWithoutLoop = (n) => {
  return Array.from({length: n}, (v, i) => i);
}
```

41. #40 水平垂直居中
我的答案：
```
#wrapper {
  position: relative;
  top: 0;
  right: 0;
}
#box {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 50%;
  right: 50%;
  margin-right: -50px;
  margin-top: -50px;
}
```

42. #41 执行任意表达式
别人的答案
```
const execute = (str, data) => {
  return eval(`with(data){${str}}`)
}
```
只要记住就好了
次要
```
const execute = (exp, data) => new Function(...Object.keys(data), `return ${exp}`)(...Object.values(data))
```

43. #42 循环调节列表
我觉得这道题很难，完全就是一点头绪都没有。
juery-v3.0.0

让我压根就不想动头脑去思索。

别人的答案：
这个答案写的不错。

```
const initAdjustableList = () => {
  $('.up').click(function() {
    let li = $(this).parent();
    li.prev().html() != undefined ? li.prev().before(li) : li.parent().append(li);
  })
  $('.down').click(function() {
    let li = $(this).parent();
    li.next().html() != undefined ? li.next().after(li) : li.parent().prepend(li);
  })
}
```

44. #43 函数防抖 debounce
别人的答案：
```
const debounce = (fn, duration) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn()
      }, duration)
  }
}
```
45. #44 同字母异序
两个字符串字母种类一样和字母的数量相同，但是顺序可能不同。
我的答案：
```
const isAnagram = (str1, str2) => {
  let len1 = str1.length;
  let len2 = str2.length;
  if(len1 != len2) return false;
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  for(let i = 0; i < arr1.length; i++) {
    if(str2.indexOf(arr1[i]) === -1) {
      return false;
    }
  }
  for(let j = 0; j < arr2.length; j++) {
    if(str1.indexOf(arr2[j]) === -1) {
      return false;
    }
  }
  return true;
}
```
别人的答案：
```
const isAnagram = (str1, str2) => {
  let str1s = str1.split('').sort().join('');
  let str2s = str2.split('').sort().join('');
  return str1s === str2s
}
```

46. #45 执行任意表达式（二）
别人的答案：
```
const execute = function(exp, data) {
  const keys = Object.keys(data);
  const values = Object.values(data);
  const func = new Function(...keys, `return ${exp}`);
  return func(...values);
}
```
47. #46 谁在召唤我？
```
function main() {
  where()
}

function a() {
  function b() {
    where()
  }
}
```
别人的答案：
```
const where = function() {
  return where.caller.name;
}
```

48. #47 谁在召唤我？ (二)
别人的答案： 毫无思路
```
const where = () => {
    let reg = /\s+at\s(\S+)\s\(/g
    let str = new Error().stack.toString()
    let res = reg.exec(str) && reg.exec(str)
    return res && res[1]
}
```

49. #48 间谍活动
又是没有思路。
别人的答案：
```
const spy = function(fn) {
  var calls = [];
  var f = function() {
    var obj = {
      args: [...arguments],
      result: fn.apply(this, arguments)
    }
    calls.push(obj);
    return obj.result;
  }
  f.calls = calls;
  return f;
}
```

50. #49 时间停止
简单
```
const pause = async (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}
```

51. #50 实现js数据类型的判断
我又忘记是用哪个方法了
别人的答案
```
const type = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
```
52. #51 Don't Touch Me
可用es6的Proxy解此题，Proxy可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截。
别人的答案：
```
const tomy = new Proxy({}, {
  set: (target, key, value, receiver) => {
    console.log("Don't Touch Me.");
  },
  deleteProperty: (target, propKey) => {
    console.log("Don't Touch Me.")
  }
})
```

53. #52 中间件模式


54. #53 你会被谷歌拒绝吗？

55. #54 你是五年的程序员吗？

别人的答案：
第一种
```
const initArray = (m, n) => {
  return Array.from({length: m}, () => n)
}
```
第二种
```
const initArray = (m, n) => {
  return Array(m).fill(n);
}
```

56. #55 奇怪的表达式
我完全就是不会
```

```

57. #56 到底一不一样
我真的不知道，该用什么样的方法，来比较这两个参数是否相同。
[参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
我觉得这道题，只需要了解就好。
```
const is = (x, y) => {
  return Object['is'](x, y)
}
```
```
Object.is = function(x, y) {
  if(x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
```

58. #57 shallowEqual
别人的答案：
```
const shallowEqual = (x, y) => {
  if (typeof x !== typeof y) return false
  if (typeof x !== 'object') {
    return Object.is(x, y)
  } else {
    if (x === null || y === null) return x === y
    let keys1 = Object.keys(x), keys2 = Object.keys(y)
    if (keys1.length !== keys2.length) return false
    return keys1.every(d => Object.is(x[d], y[d]))
  }
}
```

59. #58 SQL in JS (LINQ版本)
[参考答案](http://scriptoj.mangojuice.top/topic/101/58-sql-in-js-linq%E7%89%88%E6%9C%AC/12)
```
const query = (()=>{
    const m={'from':{'once':true,'index':0,'mReduce':(dataArr,arr)=>arr.concat(
            dataArr.length<2?[].concat(...dataArr):
            dataArr.reduce(
                (data,arr)=>[].concat(...data.map(v=>arr.map(a=>v.concat([a])))),
            [[]]))},
        'where':{'once':false,'index':1,'mReduce':(fArr,arr)=>arr.filter(v=>fArr.some(f=>f(v)))},
        'groupBy':{'once':true,'index':2,'mReduce':(fArr,arr)=>
            arr.reduce((a,v)=>(fArr.reduce((items,f)=>(
                (items.find(item=>item[0]==f(v)) || (items[items.length]=[f(v),[]]))[1]
            ),a).push(v),a),[])},
        'having':{'once':false,'index':3,'mReduce':(fArr,arr)=>arr.filter(v=>fArr.some(f=>f(v)))},
        'orderBy':{'once':true,'index':4,'mReduce':(fArr,arr)=>fArr.reduceRight((a,f)=>a.sort(f),arr)},
        'select':{'once':true,'index':5,'mReduce':(fArr,arr)=>fArr.reduce((a,f)=>a.map(f),arr)}};
    return () => 
        new(function(){
            var doArr=[];
            for(let method in m)
                this[method]=(...dataArr)=>{
                    if(m[method].once && doArr.some(x=>x[0]==method))
                        throw new Error('Duplicate '+method.toUpperCase());
                    doArr.push([method,dataArr]);
                    return this;
                }
            this.execute=()=>
                doArr.sort((a,b)=>m[a[0]].index-m[b[0]].index)
                    .reduce((d,f)=>f[1].length?m[f[0]].mReduce(f[1],d):d,[])
        })()
})()
```

60. #59 Brainfuck 解释器(一)

没什么意义
[参考答案](http://scriptoj.mangojuice.top/topic/104/brainfuck-%E8%A7%A3%E9%87%8A%E5%99%A8-%E4%B8%80)


61. #60 Brainfuck 解释器(二)

无答案

62. #61 监听数组变化
别人的答案：
真是神奇。
```
function ObserverableArray() {
  return new Proxy([], {
    get(target, propKey) {
      const matArr = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
      matArr.indexOf(propKey) > -1 && console.log(propKey);
      return target[propKey]
    }
  })
}
```

63. #62 全选和不选
别人的答案：
```
function initCheckBox(checkAll = document.querySelector('#check-all'), options = Array.from(document.querySelectorAll('.check-item'))) {
  checkAll.addEventListener('change', () => options.forEach(x => x.checked = checkAll.checked))
  options.forEach(o => o.addEventListener('change', update => checkAll.checked = options.every(x => x.checked)))
}
```

64. #63 Symbol转换
[getOwnPropertySymbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
别人的答案：
```
const convertSymbolToNormalStr = obj => { 
  Object.getOwnPropertySymbols(obj).forEach(symbol => {
    let key = symbol.toString().match(/\((.*)\)/)[1];
    obj[key] = obj[symbol];
    delete obj[symbol]
  })
  return obj;
}
```

65. #64 翻箱倒柜

```
class Box {
  constructor(arr) {
    this[Symbol.iterator] = function *() {
      let len = arr.length, i = 0;
      while( i < len) {
        yield arr[i++]
      }
    }
  }
}    
```

66. #65 迷你MVVM
太难了，我觉得要崩溃了


67. #68 字符串居中补全
```
const centerPad = (str, len, pad) => {
  let strLen = str.length;
  return len <= strLen ? str : str.padStart((len-strLen)/2 + strLen, pad).padEnd(len, pad);
}
```

70. #69 简单的模版引擎
不会呀

71. #70 Math.clz32 的Polyfill
```
const clz32 = (num) => {
  let v = num >>> 0
  return v ? 32 - v.toString(2).length : 32
}
```

72. #71 不重复数字
```
const uniqueNums = (n) => {
  let arr = []; 
  while(arr.length < n) {
    let v = Math.floor(Math.random() * 31 + 2);
    if(arr.indexOf(v) === -1) {
      arr.push(v);
    }
  }
  return arr;
}
```

73. #72 使用generator 模拟async/await

74. #73 数组的空位填空
null, undefined 都不是空位。
note: （1）用for循环去遍历，会发现，[1,,]第二个值可以遍历出来。
（2) 如果是用for循环去遍历，会发现，[1,,]第二个值可以遍历出来。
我的答案：
```
const fillEmpty = (arr) => {
    let a = [];
    arr.map((item, index) => {
      a.push(index); 
    })

    for(let i = 0; i < arr.length; i++) {
      if(a.indexOf(i) === -1) {
        arr[i] = 'Hello';
      }
    }
}
```

75. #74 爬楼梯

76. #75 最高产的猪
别人的答案：

这个答案写的真好。
```
const findMostProductivePigChildrenCount = (dom) => {
  const result = [];
  function find(pigs, result) {
    let most = 0;      // 当代猪最高产的小猪数量
    let piggies = [];  // 当代猪的后一代

    for(let p of pigs) {
      if(p.childElementCount) {
        piggies.push(...p.children);
        if(p.childElementCount > most) {
          most = p.childElementCount
        }
      }
    }
    result.push(most);
    if(piggies.length) {
      find(piggies, result)
    }
  }
  find([dom], result)
  return result;
}
```

77. #76 属性闪烁

思路：如何遍历对象的property 属性，并且更改property属性。
[Object.getOwnPropertyNames()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
[Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
[Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
别人的答案：
```
const flikerProps = (obj) => {
  const a = Object.getOwnPropertyNames(obj);
  const b = Object.keys(obj);
  for(let i = 0; i < a.length; i++) {
    Object.defineProperty(obj, a[i], {enumerable: b.indexOf(a[i]) === -1})
  }
}
```

78. #77 数组中数据归并
我不会呀，在思考了两分钟之后，还是不会。
别人的答案：
思路： 其实下面的答案和开始排序，后来又中间排序，并没有关系。
首先遍历数组，然后取出数组里最小值，将该值从数组里删除。
答案写的真好。
```
const merge = (arr) => {
  const res = [];
  let min;
  while(arr.length) {
    min = Math.min.apply(null, arr);
    arr.splice(arr.indexOf(min), 1);
    res.push(min)
  }
  [].push.apply(arr, res);
}
```

80. #79 灵魂交换
[Object.getPrototypeOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
[Object.setPrototypeOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)
```
const exchange = (a, b) => {
  const aProto = Object.getPrototypeOf(a);
  const bProto = Object.getPrototypeOf(b);
  Object.setPrototypeOf(a, bProto);
  Object.setPrototypeOf(b, aProto);
}
```

81. #80 数组中的数据划分
题目：其实本质就是排序。
别人的答案：
```
const partition = (arr) => {
  var temp;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j+1]) {
        temp = arr[j];
        arr[j] = arr[j +1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
```

82. #81 单例模式


83. #82 数组中的数据划分 (二)
```
const partition3way = (arr) => {
  let temp;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j+1]) {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}
```

84. #83 filter map
需要总结分析

85. #84 自动绑定实列方法
需要总结分析

86. #85 优先队列
你可以往队列中添加和删除元素，但是删除元素的时候会把优先级最高的元素删除。
完全就是不会呀。
```
class PriorityQueue {
  constructor() {
    this.arr = [];
  }
  add (num) {
    this.arr.push(num);
  }
  
  remove () {
    let num = Math.max.apply(null, this.arr);
    this.arr.splice(this.arr.indexOf(num), 1);
    return num;
  }
}
```

87. #86 字体高亮函数
考察解析模版字符串。
```
const highlight = (...args) => {
  let s = '';
  let a = args[0];
  for(let i = 0; i < a.length -1; i++) {
    s += `${a[i]}<span class=red>${args[i+1]}</span>`
  }
  return s + a[a.length-1];
}
```
88. #87 判断美元符号格式

以前做过。

89.

90. #89 数组去重

编写一个函数 unique(arr)，返回一个去除数组内重复的元素的数组。
```
const unique = (arr) => {
  return Array.from(new Set(arr))
}
```

91. #90 判断两个Set是否相同
1. 首先判断长度是否一致，
2. 之后判断s1里的值是否也都是在s2里
```
const isSameSet = (s1, s2) => {
  if(s1.size !== s2.size) {
    return false;
  }
  return [...s1].every(i => s2.has(i))
}
```

92. #91 数组拍平 (二)
```
function *flatten2 (arr) {
  const rarr = [];
  function flatten(ar) {
    ar.map(n => {
      if(Array.isArray(n)) {
        flatten(n);
      } else {
        rarr.push(n);
      }
    })
  }
  flatten(arr);
  for(let i = 0; i < rarr.length; i++) {
    yield rarr[i]
  }
}
```

93. #92 专业盗贼
别人的答案：
```
const rob = (nums) => {
  if(nums.length === 0) return 0;
      nums.unshift(-Infinity);
      const len = nums.length;
    for(let i = 3; i < len; i++) {
      nums[i] += Math.max(nums[i-2], nums[i-3]);
    }
    return Math.max(nums[len -1], nums[len -2]);
}
```

94. #93 Virtual DOM
不会，不会，看不懂，感觉有些题目，不需要看。
别人的答案：

```
class VNode {
  constructor(tagName, props, children) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
  }
}

const h = function (t, p, c) {
  return new VNode(t, p, c)
}
```

95. #94 按下标插入
我的答案：
```
const injectSections = (items, sections) => {
  sections.sort((a, b) => a.index - b.index);
  for(let i = 0; i < sections.length; i++) {
    items.splice(sections[i].index+i, 0, sections[i].content)
  }
  return items;
}
```

96. #95 Virtual DOM(二)
根本原因在于看不懂题目吧
别人的答案:
```
const ul = {
  tagName: 'ul', // 节点标签名
  props: { // DOM的属性，用一个对象存储键值对
    id: 'list',
    style: 'color: red'
  },
  children: [ // 该节点的子节点
    {tagName: 'li', props: {class: 'item'}, children: ["Item 1"]},
    {tagName: 'li', props: {class: 'item'}, children: ["Item 2"]},
    {tagName: 'li', props: {class: 'item'}, children: ["Item 3"]},
  ]
}
```

```
class VNode {
  constructor(tagName, props, children) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
  }

  render() {
    // 创建 LI 标签元素
    const dom = document.createElement(this.tagName);
    if(this.props) {
      const props = Object.keys(this.props);
      props.map(prop => {
        dom.setAttribute(prop, this.props[prop])
      })
    }

    if(this.children) {
      this.children.map(child => {
        dom.appendChild(child instanceof VNode ? child.render() : document.createTextNode(child));
      })
    }
    return dom;
  }
}

const h = (tagName, props, children) => new VNode(tagName, props, children);
```

97. #96 spacify
请你给字符串都添加上原型方法spacify，可以让一个字符串的每个字母都多出一个空格的间隔：
"ScriptOJ".spacify()

```
String.prototype.spacify = function () {
  return this.split('').join(' ')
}
```

98. #97 类名操作
```
const addClass = (dom, name) => {
  dom.classList.add(name);
}
const removeClass = (dom, name) => {
  dom.classList.remove(name);
}
const hasClass = (dom, name) => {
  return dom.classList.contains(name);
}
```

99. #98 判断两个矩形是否重叠

这个好麻烦

100. #99 safeGet
路径
```
const safeGet = (data, path) => {
  if(!path) return undefined;
  let paths = path.split('');
  let res = data;
  while(paths.length) {
    res = res[paths.shift()];
    if(!res) return undefined
  }
  return res;
}
```

101. #100 把数字转换成中文
这道题，做到怀疑我的脑袋里都装了些什么。
思路：以五位进行分析，如果超出五位，则后五位为一体，除下后五位的为一体。
如果没有超出五位，则按照和后五位一样的方式，转换。最后处理特殊情况零。
```
const toChineseNum = (num) => {
    let len = String(num).length;
    let num_str = String(num);
    let num_c = '零一二三四五六七八九十';
    let level = ['', '十', '百', '千', '万'];
    let res = '';
    if(len > 5) {
      let new_num_str1 = num_str.slice(-5);
      let new_num_str2 = num_str.slice(0, len - 5);
      for(let i in new_num_str2) {
          res = res + num_c[Number(new_num_str2[i])] + level[new_num_str2.length -i];
      }
      for(let i in new_num_str1) {
          res = res + num_c[Number(new_num_str1[i])] + level[new_num_str1.length - i - 1];
      }
    } else {
      let new_num_str1 = num_str.slice(-5);
      for(let i in new_num_str1) {
          res = res + num_c[Number(new_num_str1[i])] + level[new_num_str1.length - i - 1];
      }
    }
    // 下面一行参照了别人的代码
    res = res.replace(/零[零十百千]+/g, '零').replace(/零+$/g, '').replace(/零万/g, '万')
    return res;
}
```
102 #101解析字串

问题： 会直接匹配从开头到结尾。似乎不能从中间分段。我应该如何解决这个问题。
用括号
答案：
```
const extractStr = (str) => {
  let res = [], arr = [];
  res = str.match(/:([^\.:]*)\./g) ? str.match(/:([^\.:]*)\./g) : [];
  console.log(res, 'res res');
  for(let i = 0; i < res.length; i++) {
    if(res[i] === ':.') {
      arr.push('');
    } else if(res[i].match(/[^\:.]+/g)) {
      arr.push(...res[i].match(/[^\:.]+/g));
    }
  }
  return arr;
}
```

103 #102 记忆化斐波那契函数
// 最后一道题









