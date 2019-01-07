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