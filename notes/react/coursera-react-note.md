11月1日 至 11月15日

// https://twitter.com/Top10Courses/status/1060173855505805313

https://reactjs.org/


Front-End Wdb Development with React 
学习了如何在application 中使用 reactstrap

peer-graded Assignment

处理事件的时候，如果不传参，可以直接用this.handleClick, 如果传参则可以使用onClick={() => this.handleClick(dish)}

讲解生命周期

顺序
constructor => render => componentDidMount

componentWillMount() 在react 17.0 已经完全移除了

第二周
### Presentational and Container Components

### 讲解生命周期2

render 什么时候执行？
答案： every time you update the props of the stage for the component

getSnapshotBeforeUpdate()
答案： 这个一般都是用在滚动的时候，为了记住位置

componentWillReceiveProps() and componentWillUpdate().
答案： 从React版本16.3开始，已经重复了这两种方法，因此不鼓励您在React Application中再使用它们。

如果你真的想知道，一个大组件里有多个小组件，每个小组件里生命周期的执行顺序，一个一个打log吧，因为没有实际经验，比较难记。

### Functional Components

Class Components
特点：
1、extend React.Component to get class components
2、Need to implement the render() method that returns the view
3、Can have local state
4、lifecycel hooks

this Functional Components simply receives props as it's parameter.
```
function RenderComment(comment) {
    return (<div>comment</div>)
}

const Detail = (props) => {
    return <div>
    在这个里面就可以使用<RenderComment comment={xxx}> 或者使用RenderComments(xxx)，不过前一个的用法要好些。
    而不是使用this.RenderComent()，RenderComment()
    </div>
}
```

React Router: Objectives and Outcomes
React Virtual DOM

React.Fragment 标签等同于div, 但是不会新增一个额外的node去DOM。 即`<React.Fragment></React.Fragment>`
短板的格式`<></>`.

React Router

安装react-router-dom 
<Route exact path="/menu" component={Menu} />
下面这样的写法可以pass in a props to the menu component.

<Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />

Single Page Applications

第三周
React Forms, Flow Architecture and Introduction to Redux

```
this.state = {
    touched: {
        firstName: '',
        lastName: '',
        telnum: false,
        email: false
    }
}
handleBlur = (field) => (evt) => {
    this.setState({
        touched: { ...this.state.touched, [field]: true}
    })
}

// 学习的地方，箭头函数里又加了一个箭头函数。以及学习给对象里某个属性赋值的方法
```
controlled components

controlled components can be used to set up controlled forms within the component.and their form information being reflected to the state of the component.

Uncontrolled Components

1、 Instead of writing an event handler for every state update, use a ref
to get form values from the DOM.

2. More easier to integrate React with non-React code.

explanation: 解释
Now every, DOM form element has a ref associated with it from 
which you can easily use thatch to extract their HTML form data into your application.


想学习ref的用法，可以参考下面的代码
```
this.handleLogin = this.handleLogin.bind(this);

----------------
handleLogin(event) {
        this.toggleModal();
        event.preventDefault();
        alert("Username: " + this.username.value + "Password: " + this.password.value
        + " Remeber: " + this.remember.checked);
    }
----------------
<Form onSubmit={this.handleLogin}>
    <FormGroup>
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" name="username"
        innerRef={(input) => this.username = input} />
    </FormGroup>
    <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password"
        innerRef={(input) => this.password = input}/>
    </FormGroup>
    <FormGroup check>
        <Label check>
            <Input type="checkbox" name="remember"
            innerRef={(input) => this.remember = input} />
            Remember me
        </Label>
    </FormGroup>
    <Button type="submit" color="primary">Login</Button>
</Form>
```

The Model-View-Controller Framework

Introduction to Redux
这个里面的概念真多，听得我都要睡着了。
Redux Concepts
1、State: stored in plain JS object;
2、Action: plain JS object with a type field that specifies how to change
something in the state
3、Reducer: pure functions that take the current state and action and return a new state
--- Update data immutably (do not modify inputs)

Redux Store
1、Holds the current state value
2、Create using createStore()
3、Supplies three methods
-- dispatch()：states state update with the provided action object
-- getState(): returns the current stored state value
-- subscribe(): accepts callback function that will be run every time an action is dispatched

React with Redux

Use the react-redux package for bindings between React and Redux
-- connect(): generates a wrapper “container" component that subscribes to the store
-- Surround your App root with <Provider>
1、Takes the store as an attribute
2、Makes store accessible to all connected components


The connect() function takes two optional arguments:
1、mapStateToProps(): called every time store state changes.
Returns an object full of data with each field being a prop for the wrapped component
2、mapDispatchToProps(): receives the dispatch() method and should return an object full of functions that use dispatch()

笔记：

(1) react-redux to connect my React application to the Redux Store.
(2) and within the main component if we are making use of the react-router.

使用reux 的步骤

to bring Redux into our React application.
and then connect our React application with Redux, 
and then make use of the Redux Store for sorting the state of our application.
and then obtaining the state into our React application using react-redux.

[参考](https://www.coursera.org/learn/front-end-react/supplement/OyUO4/exercise-instructions-introduction-to-redux)

 react-redux-form 

安装了包 react-redux-form

去掉了this.state, because the state become managed by react-redux-form on our behalf.
去掉了handleInputChange, we don't need the handleInputChange anymore because that is also going to be managed automatically by react-redux-form on our behalf.

仅仅是提供了react-redux-form 的用法

React Redux Form Validation 





问题一 
week1 周作用中 comments 的数据是哪里来的。
问题二
date 如下写，请问这个date的格式是什么
```
{
    new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: '2-digit'}).format(new Date(Date.parse(comment.date)))
}
```

问题三
安装了哪些包


