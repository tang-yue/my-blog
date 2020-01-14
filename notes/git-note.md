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

`git branch -d <BranchName>`

5、  当前分支合并另一个分支

我现在在当前分支上，git merge 另一个分支

6、 添加远程仓库

`git remote add myResume https://github.com/tang-yue/my-resume.git`

8、 拒绝合并不相关的历史

`git pull origin branchname --allow-unrelated-histories`

9、查看ssh keys 密钥

`cat ~/.ssh/id_rsa.pub`

10、关于git merge 方法

慎重使用：

现在在一个分支： merge 另一个分支，但是另一个分支没有当前分支上的一部分代码。此时merge, 原有分支上的这部分代码直接就被删除了。

11、关于git checkout 方法

慎重使用：

我在master 分支上，修改了很多代码，此时发现居然是在master 修改的，于是没有，commit，直接git checkout -b dev-xxxx。
于是切回master, git checkout. 再回到自己的开发分支上。发现并不是在master 修改的。只有增加的文件保留了，修改的文件，都没有了。
