1、 如何将当前的不是master的分支，推送到远程的master分支

```
$ git push origin test:master    // 提交本地test分支作为远程仓库origin的master分支

$ git push origin test:test      // 提交本地test分支作为远程仓库origin的test分支

$ git pull <远程主机名> <远程分支名>:<本地分支名>
```

2、 查看远程分支和本地分支

```
$ git branch          // 查看本地分支

$ git branch -r        // 查看远程分支
```
3、 删除远程分支

```
git push origin :<branchname />
```

4、 删除本地分支

`git branch -D <BranchName>`

5、  当前分支合并另一个分支

我现在在当前分支上，git merge 另一个分支

6、 添加远程仓库

`git remote add myResume https://github.com/tang-yue/my-resume.git`

7、 拒绝合并不相关的历史

`git pull origin branchname --allow-unrelated-histories`

8、查看ssh keys 密钥

`cat ~/.ssh/id_rsa.pub`

9、关于git merge 方法

慎重使用：

现在在一个分支： merge 另一个分支，但是另一个分支没有当前分支上的一部分代码。此时merge, 原有分支上的这部分代码直接就被删除了。

10、关于git checkout 方法

慎重使用：

我在master 分支上，修改了很多代码，此时发现居然是在master 修改的，于是没有，commit，直接git checkout -b dev-xxxx。
于是切回master, git checkout. 再回到自己的开发分支上。发现并不是在master 修改的。只有增加的文件保留了，修改的文件，都没有了。


11、删除项目中的所有.DS_Store

find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch


淘宝镜像： npm --registry https://registry.npm.taobao.org install

12、关于ssh key 部分  重新生成ssh key

查看本地是否有已经生成好的ssh key

$ cat ~/.ssh/id_rsa.pub

若有,先删除:

$ cd ~

$ rm -rf .ssh

重新生成ssh key

ssh-keygen -t rsa -C "youemail@example.com"

查看新生成的ssh key

$ cat ~/.ssh/id_rsa.pub

13、安装私包 命令


npm --registry https://npm.xxxx.com/ install xxx

14、npm run dev 报错 `Node Sass does not yet support your current environment`

执行命令： npm rebuild node-sass

15、https://houbb.github.io/2021/03/06/github-access  443 timeout 问题

19、git config --global --unset https.proxy

git config --global --unset http.proxy

20、git config --global http.proxy http://127.0.0.1:1087

git config --global https.proxy http://127.0.0.1:1087

21、.gitignore 配置 不生效原因和解决

git清除本地缓存，然后再提交 `git rm -r --cached . ` `git add .`  

npm --registry https://registry.npmjs.org/ install

npm --registry https://registry.npm.taobao.org/ install

22、git 规范

1、commit
type：
- feat: 新功能（feature）
- fix: 修补bug
- docs: 文档 (documentation)
- style: 格式 (不影响代码运行的变动)
- refactor: 重构 (即不是新增功能，也不是修改bug的代码变动)
- test: 增加测试
- chore: 构建过程活辅助工具的变动
例：
git commit -a -m "feat: 新增登录功能"

23、--save -E left-pad

`npm install --save -E left-pad` 后缀参数强制npm在package.json中写死固定的版本号，而不使用`~`，`^`这类范围富豪榜

24、git config 相关

查看当前用户（global）配置 `git config --global --list`
手动设置提交用户的email和用户名
```
git config --global user.name "myname"
git config --global user.email  "test@gmail.com"
```

25、adb

adb install -r -t -d D:\demotmp\apkold\haokanvideo\7-15-0-10.apk
adb shell am start com.tal.init.ota/.MainActivity

26、.npmrc 文件

registry=https://registry.npmjs.org/
@xes:registry=https://xxx/

27、查看npm 安装源

npm config get registry

npm config list
