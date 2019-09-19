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
我的答案：
```

```

