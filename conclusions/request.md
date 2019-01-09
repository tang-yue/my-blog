-- 写于1月7日  
## request 封装

### 基于fetch的请求封装
```
import Cookie from "js-cookie";

function checkStatus(response) {
    if(response.status >= 200 && response.status < 300) {
        return response;
    } else if(response.status === 401) {
        return Promise.reject();
    }
    const error = new Error(response.statusText);
    error.response = response;
    return error;
}
export default function request(url, options) {
    let userhead = {
        "Content-Type": "application/json",
        "X-User-Id": Cookie("userId"),
        "X-Platform": "WEB",
        "authorization": Cookie("token") || 'FUCK'
    }
    let headers = !options ? userhead : { ...userhead, ...options.headers };
    return fetch(url, {
        ...options,
        mode: "cors",
        cache: 'default'
        headers
        })
        .then(checkStatus)
        .then(response => {
            const h = response.headers;
            if(!! h && !!h.get("Content-Type").startsWith('application/json')) {
                return response.text().then(data => ({
                    data: data.length > 0 ? JSON.parse(data) : {},
                    headers: h,
                }))
            } else {
                return { headers: h };
            }
        })
        .catch(err => {
            let e = err;
            e.requrl = url;
            e.reqoptions = JSON.stringify(options);
            return e;
        }) 
}
```

```
// 如何使用
// api 接口
import resquest from "../utils/request";
import qs from "qs";

// get 举列
export async function fetch(params) {
    return request(`/example/v1/example?${qs.stringify(params)}`);
}
// post 举列
export async function update({ userId = 0, data = {} }) {
    return request(`/example/v2/${userId}/example`, {
        method: 'POST',
        body: JSON.stringify(data)
    })
}

// 项目调用
import { fetch } from "../../xxx/xx.js";
cosnt res = yield call(fetch, obj)  // dva 中使用
// res 即为接口返回值
```


### 基于axios得请求封装
[参考链接](https://juejin.im/post/5ae432aaf265da0b9c1063c8)
```
import axios from "axios";
import Cookie from "js-cookie";

const api = axios.create({
    baseURL: '',
    timeout: 50000
})

api.interceptor.request.use((req) => {
    req.headers.authorization = Cookie('token');
    return req;
}, (err) => Promise.reject(err));

api.interceptor.response.use((res) => {
    if(res.status === 401) {
        return res;
    } else {
        return res;
    }
}, (err) => Promise.reject(err));

export function request(url, options) {
    return new Promise((resolve, reject) => {
    api({
        url,
        ...options
        })
        .then((res) => {
            if(res) {
                if(res && res.data) {
                    resolve(res.data);
                } else {
                    resolve(res);
                }
            }
        })
        .catch((err) => {
            reject(err);
        });
    })
}
```

```
接口文件
import { request } from "../utils/request.js";
import qs from "qs";
// get 举列
export async function user(params) {
    return request(`/example/v1/user/fetch?${qs.stringify(params)}`);
}

// post 举列
export async function post(params) {
    return request(`/example/v1/exam/ex`, {
        method: "post",
        data: params
    })
}
```

```
// 在vue项目中使用
import { post } from '@/services/user.js';

post(obj).then((res) => {
       if(res.errCode === 0) {
        ......
       } else {
        .....
       }
    })
```