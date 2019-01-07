1. new Error()的作用 和 return Promise.reject()的作用

默写 fetch  request 封装

```
// 默写axios 封装
import axios from 'axios';
import Cookie from 'js-cookie';

const api = axios.create({
    baseURL: '',
    timeout: 5000
});

api.interceptors.request.use((req) => {
    req.headers.authorization = true ? Cookie('staffToken') : null;

    return req;
}, (err) => Promise.reject(err));


api.interceptors.response.use((res) => {
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
            ...options,
            }).then((res) => {
                if(res) {
                    if(res && res.data) {
                        resolve(res.data);
                    }
                } else {
                    resolve(res);
                }
            }).catch((err) => {
                reject(err);
                });
    });
}
```