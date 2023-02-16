[购买阿里云服务器，新用户有优惠](https://www.aliyun.com/minisite/goods?userCode=8gjzcw5w&share_source=copy_link)

### 部署前端项目

###### 1、登录服务器

命令： `ssh root@公网ip`，输入密码登录

如果遇到报错信息，记得在阿里云里设置下初始密码。

##### 2、安装 nginx

(1) `yum install nginx`

(2) `scp -r my-blog root@47.105.55.125:/root/`  上传整个目录到云服务器

(3) `nginx -t`  查看nginx 配置文件

(4) `vi /etc/nginx/nginx.conf`

查看 root 对应的nginx的html 文件，应该放在哪

(5) `cd /usr/share/nginx/html/ `  
    
    `rm -rf *` 删除原有的所有文件

(6) `cp /root/my-blog/test3.html   ./`  复制test3.html 文件到 nginx 的当前文件下

(7) pwd 查看当前所在位置

(8) `netstat -tupln`  可以nginx 部署在哪个端口上

(9) `curl  https://api.ip.la` 查看ip命令

##### 3、上传打包后的文件到云服务器，但是发现，只能看到 index 页面，其他页面只要刷新就404

`vim /etc/nginx/nginx.conf`
`nginx -s reload`

编辑 nginx 文件里的location， 字段如下这样

```js
location /vue-element-admin-template/ {
            try_files $uri $uri/ /vue-element-admin-template/index.html;
        }
```

### 部署后端项目

#### 安装node

升级常用库文件，安装node.js 需要通过 g++ 进行编译

```
yum -y install gcc gcc-c++ autoconf
```

[如何升级 gcc](https://juejin.im/post/5d0ef5376fb9a07ef63fe74e)

[安装nodejs](https://blog.csdn.net/chending_cd/article/details/100555886)

[安装 mysql](https://zhuanlan.zhihu.com/p/62403721)