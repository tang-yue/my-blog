#### check online problems

记录一次线上问题排查

起因：项目在测试环境，灰度环境都能正常访问操作，但是在线上环境操作某个步骤会导致页面直接进入死循环，页面整个卡住

本地没问题，如何复现线上问题。起本地服务

`npm run build` 打包线上环境代码

进入目标文件夹，然后安装，然后快速使用
`npm install -g http-server`
`http-server` 如果是指定端口使用 `http-server -a 127.0.0.1 -p 8090`

这个时候复制 http://127.0.0.1:8080 浏览器，但是需保证 publicPath 是设置的相对路径 `./`，这样就可以访问页面了(注意此时走的是线上接口) 接下来在这个页面上复现步骤打log 即可。

[参考](https://juejin.cn/post/7107567660396871716)

[搭建本地静态页面的其他方式](https://www.cnblogs.com/moqiutao/p/14486683.html)

- 方式一: live-server
   - 直接使用live-server
   - 使用node
- 方式二: http-server
- 方式三: express 搭建
   - 使用express简单搭建
   - 使用browser-sync实现热更新化
- 方式四: 使用node内置模块http启动服务
- 方式五: Nginx配置
