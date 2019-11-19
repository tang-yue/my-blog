1.  Modern JavaScript
2. Creating variables using const
3. Creating variables using let
4. Template strings
```
// 只要输入值， age 就等于这个值
let age = prompt("Guss Ryan's age...");
```
5. Default parameters
```
function welcome(user = 'Mystery person', message = 'Goodday') {
    alert(`Hello ${user}, ${message}`);
}

welcome();
```

6. Arrow functions

7. Arrow functions and this keyword

```
let nepal = {
      mountains: ['Everestst', 'Fish Tail', 'Annapurna'];
      printWithDash: function() {
        setTimeout(function() {
            // 改成箭头函数
          console.log(this.mountains.join(' - '));
        }, 3000);
      }
    }

    alert(nepal.printWithDash)
```
原因: object this cure used inside the arrow function will point to the enclosing our outer function context.
Because this add a function (arrow function) don't have their own context. 因此this指的就是外围函数里的this

8. Destructuring object

```
let thingsToDo = {
    morning: 'exercise',
    afternoon: 'work',
    evening: 'code'
}

let { morning, afternoon } = thingsToDo;
morning = 'Run';
console.log(morning, ' - ', afternoon);
```

```
let uniStudent = ({ name, university }) => {
    console.log(`${name} from ${university}`)
}

uniStudent({
    name: 'Ryan',
    university: 'University of Sydney'
})
```

9. Destructuring array

```
let [firstMountain] = ['Everest', 'Fish Tail', 'Annapurna']; // 第一个

let [,firstMountain] = ['Everest', 'Fish Tail', 'Annapurna']; // 第二个

let [,,three] = ['Everest', 'Fish Tail', 'Annapurna']; // 第三个
```

10. Restructuring
```
var name = 'Everest';
var height = 8848;
var output = function () {
    console.log(${this.name}, ${this.height})
}

var adventureClimbing = { name, height, output };
console.log(adventureClimbing.output())
```

11. Spread and rest operators

example1:
```
var mountains = ['Everest', 'Fish Tail', 'Annapurna'];

var mountainsFormJapan = ['Fuji'];

var allMountains = [...mountains, ...mountainsFormJapan]
```
example2:
```
var obj1 = {
    'a': 1,
    'b': 2,
    'c': 3
}
var obj2 = {
    'd': 4
}

var obj = {...obj1, ...obj2}
```

12. Class constructor super

old way
```
function Holiday(destination, days) {
    this.destination = destination;
    this.days = days;
}

Holiday.prototype.info = function() {
    console.log(this.destination + ' | ' + this.days + ' days');
}

var nepal = new Holiday('Nepal', 30);
console.log(nepal.info());
```

clss 方式
```
// super class
class Holiday {
    // 纯粹是因为Holiday.prototype对象里有constructor,
    // constructor里有arguments,因此要把属性放在constructor里
    constructor(destination, days) {
        this.destination = destination;
        this.days = days;
    }

    info() {
        console.log(`${this.destination} will take ${this.days} days.`)
    }
}

const trip = new Holiday("Kathmandu, Nepal", 30);
console.log(trip.info());

// sub class

class Expedition extends Holiday {
    constructor(destination, days, gear) {
        super(destination, days);
        this.gear = gear;
    }

    info() {
        super.info();
        console.log(`bring your ${this.gear.join(" and your")}`);
    }
}

const tripWithGear = new Expedition("Everest", 30, ["Sunglasses", "Flags", "Camera"]);

tripWithGear.info();
```

React JS

13. Installing react
14. React files and folders introduction
15. Storing data in component state via ajax call

https://api.randomuser.me/?nat=US&result=5

16. Rendering state data using map
17. Conditional rendering

18. imports exports props

```
export default Loading;  // 代表仅仅输出一个
// 如下的就是输出多个
export const Loading = () => <h2>Loading</h2>
export const Loading = () => <h2>Loading</h2>
// 引用是
import { Loading } from './Loading.js';
```

19. Handling click events

```
axios('https://api.randomuser.me/?nat=US&results=5')
    .then(response => this.setState({
      users: [...this.state.users, ...response.data.results],
      loading: false
    }))
```

20. Destructuring inline styling and keys

Section 3: React Hooks

21. React Hooks

result.json() 是什么用法

推荐去学习 React Node FullStack Social Network (Scratch to Deployment)
